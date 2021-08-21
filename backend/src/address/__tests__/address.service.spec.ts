import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken} from '@nestjs/typeorm';
import { AddressService } from '../address.service';
import { ViaCepService } from '../viacep.service';
import {Address } from '../address.entity';
import { AddressRepository } from '../repository/address-repository';


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


describe('AddressService', () => {
  let service: AddressService;
  let viaCepService:ViaCepService;
  let addressRepository: AddressRepository;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,{
          provide:ViaCepService,
          useValue:{
            findCep:jest.fn().mockResolvedValue(address)
          }
        },{
          provide:getRepositoryToken(AddressRepository),
          useValue:{
            findByCep:jest.fn().mockResolvedValue(CreatedAddress),
            createAddress:jest.fn().mockResolvedValue(CreatedAddress)
          }
        }],
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

  describe('findByCep',()=>{
    it('must call findByCep from addressRepository ',async()=>{
      const cep = "08090-284"
      const addressRepositorySpy = jest.spyOn(addressRepository,'findByCep')
      const resut = await service.findByCep(cep);    
      expect(resut).toEqual(address);
      expect(addressRepositorySpy).toHaveBeenCalledWith(cep);
      expect(addressRepositorySpy).toHaveBeenCalled();
  
    })
  
    it('must call findCep from ViaCepService if no address is found in the database',async()=>{
      const cep = "08090-284"
      const viaCepServiceSpy = jest.spyOn(viaCepService,'findCep')
      jest.spyOn(addressRepository,'findByCep').mockResolvedValue(null)
      const resut = await service.findByCep(cep);    
      expect(resut).toEqual(address);
      expect(viaCepServiceSpy).toHaveBeenCalledWith(cep);
      expect(viaCepServiceSpy).toHaveBeenCalled();
    })
  })

 
});
