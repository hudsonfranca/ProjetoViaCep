import { Controller, Get, Query } from '@nestjs/common';
import { AddressService } from './address.service';
import { FindAddressByCep } from './dto/find-address-by-cep.dto';
import {
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiBadRequestResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { CreateAddressDTO } from './dto/create-address.dto';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get('find-by-cep')
  @ApiOkResponse({ type: CreateAddressDTO })
  @ApiNotFoundResponse({ description: 'Cep não encontrado.' })
  @ApiBadRequestResponse()
  @ApiQuery({ name: 'cep', type: FindAddressByCep })
  async findByCep(@Query('cep') cep: string) {
    const address = await this.addressService.findByCep(cep);
    return address;
  }
}
