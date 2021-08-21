
/**
 * @jest-environment jsdom
 */

 import { render, screen } from '@testing-library/react';
 import { ThemeProvider } from 'styled-components';
 import Home from '../pages';
 import { theme } from '../styles/theme';
 import 'jest-styled-components'

 const renderComponent = (props = {}) => {
   return {
     ...render(
     <ThemeProvider theme={theme}>
       <Home/>
     </ThemeProvider>
   )
   };
 };
 
describe('<Home/>',()=>{

  it('<Home/> Snapshot test', () => {
    const {container} = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('must render <Home/>',()=>{
  
    renderComponent()
    expect(screen.getByRole('heading', {
      name: /buscar código de endereçamento postal/i
    })).toBeInTheDocument()
  
    expect(screen.getByRole('searchbox', {
      name: /buscar cep/i
    })).toBeInTheDocument()
  
    expect(screen.getByRole('button', {
      name: /buscar/i
    })).toBeInTheDocument()
    
  })
})