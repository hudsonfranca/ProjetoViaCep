import { IsNotEmpty, Length, IsString } from 'class-validator';

export class FindAddressByCep {
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  cep: string;
}
