import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import axios, { AxiosStatic } from 'axios';
import { CreateAddressDTO } from './dto/create-address.dto';

@Injectable()
export class ViaCepService {
  private axios:AxiosStatic;

  async findCep(cep: string): Promise<CreateAddressDTO> {
    try {
      const { data } = await axios.get<CreateAddressDTO>(
        `https://viacep.com.br/ws/${cep}/json/`,
      );
  
      if (!data.cep) {
        throw new NotFoundException(`Cep não encontrado.`);
      }
  
      return data;
    } catch (error) {
      throw new BadRequestException(error)
    }
  
  }
}
