
/**
 * @jest-environment jsdom
 */

 import { render, screen,act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 import { ThemeProvider } from 'styled-components';
 import Home from '../pages';
 import { theme } from '../styles/theme';
 import axios from "axios";


 
 const renderComponent = (props = {}) => {
   return {
     ...render(
     <ThemeProvider theme={theme}>
       <Home/>
     </ThemeProvider>
   )
   };
 };

 const mockData =  {
  cep: "01001-000",
  logradouro: "Praça da Sé",
  complemento: "lado ímpar",
  bairro: "Sé",
  localidade: "São Paulo",
  uf: "SP",
  ibge: "3550308",
  gia: "1004",
  ddd: "11",
  siafi: "7107"
}

 
describe('<Home/>',()=>{
  it('',()=>{
    axios.get.mockResolvedValue({
      key: "value"
    });
    renderComponent()
    // expect(screen.getByRole('heading', {
    //   name: /buscar código de endereçamento postal/i
    // })).toBeInTheDocument()
  
    // expect(screen.getByRole('searchbox', {
    //   name: /buscar cep/i
    // })).toBeInTheDocument()
  
    // expect(screen.getByRole('list', {
    //   name: /lista de propriedades do endereço/i
    // })).toBeInTheDocument()


    const button = screen.getByRole('button', {name: /buscar/i})
    const input = screen.getByRole('searchbox', {name: /buscar cep/i})

    act(() => {
      userEvent.type(input, '01001000')
    });

    // act(() => {
    //   userEvent.click(screen.getByRole(screen.getByRole('button', {
    //     name: /buscar/i
    //   })));
    // });


  

    //  expect(screen.getByRole('list', {
    //   name: /lista de propriedades do endereço/i
    // })).toBeInTheDocument()
  })
})