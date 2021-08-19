import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken} from '@nestjs/typeorm';
import { AddressService } from './address.service';
import { ViaCepService } from './viacep.service';
import {Address } from './address.entity';
import { Repository } from 'typeorm';
import { AddressRepository } from './repository/address-repository';


const address ={
  cep: "08090-284",
  logradouro: "Rua 03 de Outubro",
  complemento: "(Ch Três Meninas)",
  bairro: "Jardim Helena",
  localidade: "São Paulo",
  uf: "SP",
  ibge: "3550308",
  gia: "1004",
  ddd: "11",
  siafi: "7107",
}

const CreatedAddress = Address.of({
  id:"1e5f6826-dd82-4c41-98c4-55908251e5ec",
  createdAt:new Date(),
  updatedAt:new Date(),
  ...address
})


const viaCepServiceMock = ()=>({
  getAddressByCep:jest.fn().mockResolvedValue(address)
})


const addressRepositoryMock = ()=>({
  findAddressByCep:jest.fn().mockResolvedValue(CreatedAddress),
  createAddress:jest.fn().mockResolvedValue(CreatedAddress)
})

describe('AddressService', () => {
  let service: AddressService;
  let viaCepService:ViaCepService;
  let addressRepository: AddressRepository;


  beforeEach(async () => {
    const ViaCepServiceProvider = {
      provide:ViaCepService,
      useFactory:viaCepServiceMock
    }
    const AddressRepositoryProvider ={
      provide: getRepositoryToken(AddressRepository),
      useValue: addressRepositoryMock,
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressService,ViaCepServiceProvider,AddressRepositoryProvider],
    }).compile();

    service = module.get<AddressService>(AddressService);
    viaCepService = module.get<ViaCepService>(ViaCepService);
    addressRepository = module.get(getRepositoryToken(AddressRepository));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(viaCepService).toBeDefined();
    expect(addressRepository).toBeDefined();
  });

  it('should call findAddressByCep from addressRepository ',async()=>{
   
    const resut = await service.findAddressByCep("08090-284");

    expect(resut).toEqual(CreatedAddress);
    

  })
});
