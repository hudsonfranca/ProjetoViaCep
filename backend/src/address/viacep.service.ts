import { Injectable, NotFoundException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { CreateAddressDTO } from './dto/create-address.dto';

@Injectable()
export class ViaCepService {
  private axios: AxiosResponse;

  async getAddressByCep(cep: string): Promise<CreateAddressDTO> {
    const { data } = await axios.get<CreateAddressDTO>(
      `https://viacep.com.br/ws/${cep}/json/`,
    );

    if (!data) {
      throw new NotFoundException(`Cep não encontrado.`);
    }

    return data;
  }
}
