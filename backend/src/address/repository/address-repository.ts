import { BadRequestException } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Address } from '../address.entity';
import { CreateAddress } from '../dto/create-address.dto';
import { FindAddressByCep } from '../dto/find-address-by-cep.dto';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async findAddressByCep({ cep }: FindAddressByCep) {
    try {
      const address = await this.findOne({ where: { cep } });
      return address;
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async createAddress(address: CreateAddress) {
    try {
      const addressEntity = this.create(address);
      const createdAddress = await this.save(addressEntity);
      return createdAddress;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
