import { IsNotEmpty, Length, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindAddressByCep {
  @IsNotEmpty()
  @IsString()
  @Length(9, 9)
  @ApiProperty({ type: String, required: true, maxLength: 9, minLength: 9 })
  cep: string;
}
