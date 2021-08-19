import { IsNotEmpty, Length, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAddressDTO {
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  @ApiProperty({ type: String, required: true, maxLength: 9, minLength: 9 })
  cep: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, required: true })
  logradouro: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  complemento: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, required: true })
  bairro: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, required: true })
  localidade: string;

  @Length(2, 2)
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, required: true })
  uf: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  ibge: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  gia: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, required: true })
  ddd: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  siafi: string;
}
