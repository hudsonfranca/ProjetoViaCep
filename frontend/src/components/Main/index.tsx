import React from 'react'
import {Container} from './styles'

export const Main:React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}


