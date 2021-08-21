import { Test, TestingModule } from '@nestjs/testing';
import { AddressController } from '../address.controller';
import { Address } from '../address.entity';
import { AddressService } from '../address.service';

const CreatedAddress = Address.of({
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
})


describe('AddressController', () => {
  let controller: AddressController;
  let addressService: AddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressController],
      providers:[{
        provide:AddressService,
        useValue:{
          findByCep:jest.fn().mockResolvedValue(CreatedAddress)
        }
      }]
    }).compile();

    controller = module.get<AddressController>(AddressController);
    addressService = module.get<AddressService>(AddressService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(addressService).toBeDefined();
  });

  describe('findByCep',()=>{
    it('should return a Address',async()=>{
      const cep = "08090-284"
    const addressServiceSpy = jest.spyOn(addressService,'findByCep')

        await expect(controller.findByCep(cep)).resolves.toEqual(CreatedAddress)
        expect(addressServiceSpy).toHaveBeenCalled()
        
    })
  })
});
