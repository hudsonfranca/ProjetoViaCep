import React from 'react'
import {Li,Ul} from './style'
import {AddressProps} from "../../pages"

interface Props{
  address:AddressProps
}

export const ListAddressProperties:React.FC<Props> = ({address}) => {
  const {
    bairro,
    cep,
    complemento,
    ddd,
    gia,
    ibge,
    localidade,
    logradouro,
    siafi,
    uf
  } = address;
  return (
    <Ul aria-label="Lista de propriedades do endereço" style={{padding:"20px"}}>
          <Li aria-label="cep"><abbr title="Código de Endereçamento Postal">CEP</abbr>: {cep}</Li>
          <Li  aria-label="logradouro">Logradouro: {logradouro}</Li>
          <Li  aria-label="complemento">Complemento: {complemento}</Li>
          <Li  aria-label="bairro">Bairro: {bairro}</Li>
          <Li  aria-label="localidade">Localidade: {localidade}</Li>
          <Li  aria-label="uf"><abbr title="Unidade Federativa">UF</abbr>: {uf}</Li>
          <Li  aria-label="ibge"> <abbr title="Instituto Brasileiro de Geografia e Estatística">IBGE</abbr>: {ibge}</Li>
          <Li  aria-label="gia"> <abbr title="Guia de Informação e Apuração do ICMS">GIA</abbr>: {gia}</Li>
          <Li  aria-label="ddd"> <abbr title="Discagem direta a distância">DDD</abbr>: {ddd}</Li>
          <Li  aria-label="siafi"> <abbr title="Sistema Integrado de Administração Financeira">SIAFI</abbr>: {siafi}</Li>
  </Ul>
  )
}
