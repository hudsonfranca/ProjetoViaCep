import { BadRequestException } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Address } from '../address.entity';
import { CreateAddressDTO } from '../dto/create-address.dto';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async findAddressByCep(cep: string) {
    try {
      const address = await this.findOne({ where: { cep } });

      return address;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async createAddress(address: CreateAddressDTO) {
    try {
      const addressEntity = this.create(address);
      const createdAddress = await this.save(addressEntity);
      return createdAddress;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
