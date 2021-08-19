import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AddressRepository } from './repository/address-repository';
import { ViaCepService } from './viacep.service';

@Module({
  imports: [TypeOrmModule.forFeature([AddressRepository])],
  providers: [AddressService, ViaCepService],
  controllers: [AddressController],
})
export class AddressModule {}
