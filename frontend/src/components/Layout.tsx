import React from 'react'
import {Main} from './Main'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  )
}
