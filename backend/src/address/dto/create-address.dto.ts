import { IsNotEmpty, Length, IsString } from 'class-validator';

export class CreateAddress {
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  cep: string;

  @IsNotEmpty()
  @IsString()
  logradouro: string;

  @IsString()
  complemento: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  localidade: string;

  @Length(2, 2)
  @IsNotEmpty()
  @IsString()
  uf: string;

  @IsString()
  ibge: string;

  @IsString()
  gia: string;

  @IsNotEmpty()
  @IsString()
  ddd: string;

  @IsString()
  siafi: string;
}
