
/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import {ListAddressProperties} from '../';
import { theme } from '../../../styles/theme';

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

const defaultProps = {
  address:mockData
}

const renderComponent = (props = {}) => {
  return {
    ...render(
    <ThemeProvider theme={theme}>
      <ListAddressProperties {...defaultProps} {...props}/>
    </ThemeProvider>
  ),
    props: {
      ...defaultProps,
      ...props,
    },
  };
};

describe('<ListAddressProperties/>',()=>{

  it('shows the correct cep' ,()=>{
    renderComponent()
    expect(screen.getByText(/: 01001\-000/i)).toBeInTheDocument();
  })
  it('shows the correct logradouro' ,()=>{
    renderComponent()
    expect(screen.getByText(/logradouro: praça da sé/i)).toBeInTheDocument();
  })

  it('shows the correct complemento' ,()=>{
    renderComponent()
    expect(screen.getByText(/complemento: lado ímpar/i)).toBeInTheDocument();
  })

  it('shows the correct bairro' ,()=>{
    renderComponent()
    expect(screen.getByText(/bairro: sé/i)).toBeInTheDocument();

  })
  it('shows the correct localidade' ,()=>{
    renderComponent()
    expect(screen.getByText(/localidade: são paulo/i)).toBeInTheDocument();
  })
  it('shows the correct uf' ,()=>{
    renderComponent()
    expect(screen.getByText(/: sp/i)).toBeInTheDocument();

  })
  it('shows the correct ibge' ,()=>{
    renderComponent()
    expect(screen.getByText(/: 3550308/i)).toBeInTheDocument();

  })
  it('shows the correct gia' ,()=>{
    renderComponent()
    expect(screen.getByText(/: 1004/i)).toBeInTheDocument();

  })
  it('shows the correct ddd' ,()=>{
    renderComponent()
    expect(screen.getByText(/: 11/i)).toBeInTheDocument();

  })
  it('shows the correct siafi' ,()=>{
    renderComponent()
    expect(screen.getByText(/: 7107/i)).toBeInTheDocument();
  })
})

