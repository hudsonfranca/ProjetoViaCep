import { IsNotEmpty, Length, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindAddressByCep {
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  @ApiProperty({ type: String, required: true, maxLength: 8, minLength: 8 })
  cep: string;
}
