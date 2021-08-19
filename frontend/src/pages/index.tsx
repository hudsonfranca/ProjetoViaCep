import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  {Container, SectionOne,Form, Input, Button,List,ListItem} from '../styles/home'
import { useFormik } from 'formik';
import axios from 'axios'

interface Address {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf:string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

const Home: NextPage = () => {
  const [address,setAddress] = useState<Address | null>();
  const [notFound,setNotFound] = useState();

  const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
      cep: '',
    },
    onSubmit:async ({cep}) => {
      try {
         const {data} = await axios.get<Address>(`http://localhost:4000/api/address/find-by-cep?cep=${cep}`)
        setAddress(data)
      } catch (error) {
        setAddress(null)
        console.log(error)
      }
    },
  });
  return (
      <Container>
          <Head>
            <title>Buscar CEP</title>
          </Head>
          <SectionOne>
              <h1>Buscar CEP</h1>
              <Form onSubmit={handleSubmit}>
                <Input 
                  id="cep"
                  name="cep"
                  type="number"
                  onChange={handleChange}
                  value={values.cep}
                />
                <Button type="submit">Buscar</Button>
              </Form>
              <List>
                {
                  address && (
                    <>
                      <ListItem>CEP: {address.cep}</ListItem>
                      <ListItem>Logradouro: {address.logradouro}</ListItem>
                      <ListItem>Complemento: {address.complemento}</ListItem>
                      <ListItem>Bairro: {address.bairro}</ListItem>
                      <ListItem>Localidade: {address.localidade}</ListItem>
                      <ListItem>UF: {address.uf}</ListItem>
                      <ListItem>Ibge: {address.ibge}</ListItem>
                      <ListItem>Gia: {address.gia}</ListItem>
                      <ListItem>DDD: {address.ddd}</ListItem>
                      <ListItem>Siafi: {address.siafi}</ListItem>
                    </>
                  )
                }
              </List>
          </SectionOne>
      </Container>
  )
}

export default Home
