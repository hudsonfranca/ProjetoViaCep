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

  async findByCep(cep: string) {
  
    const address = await this.addressRepository.findByCep(cep);

    if (!address) {
      try {
        const viaCepAddress = await this.viaCepService.findCep(cep);

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
