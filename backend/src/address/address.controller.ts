import { Controller, Get, Query } from '@nestjs/common';
import { AddressService } from './address.service';
import { FindAddressByCep } from './dto/find-address-by-cep.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get('find-by-cep')
  async findByCep(@Query('cep') values: FindAddressByCep) {
    const address = await this.addressService.findAddressByCep(values);
    return address;
  }
}
