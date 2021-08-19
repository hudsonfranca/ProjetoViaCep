import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressRepository } from './repository/address-repository';
import { ViaCepService } from './viacep.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository,
    private viaCepService: ViaCepService,
  ) {}

  async findAddressByCep(cep: string) {
    
    const addDashToCep = cep.slice(0, 5) + '-' + cep.slice(5);
    const address = await this.addressRepository.findAddressByCep(addDashToCep);

    if (!address) {
      try {
        const viaCepAddress = await this.viaCepService.getAddressByCep(cep);

        await this.addressRepository.createAddress(viaCepAddress);

        return viaCepAddress;
      } catch (error) {
        throw new BadRequestException(error);
      }
    } else {
      delete address.updatedAt;
      delete address.createdAt;
      delete address.id;
      return address;
    }
  }
}
