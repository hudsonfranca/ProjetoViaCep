import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressRepository } from './repository/address-repository';
import axios from 'axios';
import { FindAddressByCep } from './dto/find-address-by-cep.dto';
import { CreateAddress } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository,
  ) {}

  async findAddressByCep(values: FindAddressByCep) {
    const address = await this.addressRepository.findAddressByCep(values);

    if (!address) {
      try {
        const { data } = await axios.get<CreateAddress>(
          `https://viacep.com.br/ws/${values.cep}/json/`,
        );

        if (!data)
          throw new BadRequestException(`O cep ${values.cep} não existe.`);

        await this.addressRepository.createAddress(data);

        return data;
      } catch (error) {
        throw new BadRequestException(error);
      }
    } else {
      return address;
    }
  }
}
