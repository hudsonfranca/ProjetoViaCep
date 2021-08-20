import React, {useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import  {Container, Section,Form,Button} from '../styles/home'
import { useFormik } from 'formik';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import InputMask from "react-input-mask";
import { ListAddressProperties } from '../components/ListAddressProperties';


export interface AddressProps {
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
  const [address,setAddress] = useState<AddressProps>();

  const notifyError = () => toast.info('CEP não encontrado', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });;

  const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
      cep: '',
    },
    onSubmit:async ({cep}) => {
      try {
         const {data} = await axios.get<AddressProps>(`http://localhost:4000/api/address/find-by-cep?cep=${cep}`)
         !data && notifyError()
        setAddress(data)
      } catch (error) {
        notifyError()
        console.log(error)
      }
    },
  });
  return (
      <Container>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
          <Head>
            <title>Buscar CEP</title>
          </Head>
          <Section>
              <h1>Buscar <abbr title="Código de Endereçamento Postal">CEP</abbr></h1>
              <Form onSubmit={handleSubmit} role="search">
              <InputMask 
                mask="99999-999" 
                id="cep"
                name="cep"
                onChange={handleChange}
                value={values.cep}
                aria-required="true"
                aria-label="Buscar CEP"
                type="search"
                />

                <Button aria-label="Buscar" type="submit">Buscar</Button>
              </Form>
              {
                address && ( <ListAddressProperties address={address}/>)
              }
             
          </Section>
      </Container>
  )
}

export default Home
