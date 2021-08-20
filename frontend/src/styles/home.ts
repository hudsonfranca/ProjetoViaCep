import styled from "styled-components";


export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  background-color:${({theme:{colors:{primary}}})=>primary};
  padding-top:100px;
  padding-bottom:100px;
`

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color:${({theme:{colors:{primary}}})=>primary};
  color:#fff;
  padding: 0 10%;
  display:flex;
  flex-direction:column;
  align-items: center;

  h1{
    font-size:2.5rem;
    margin-bottom:30px;
  }

  input{
    width: 100%;
    height: 100%;
    padding: 4px 14px;
    font-size:1.7rem;
    border: 0;
    color:#495057;
   
  }

  @media (max-width: 413px) {
    padding: 0 7%;

    input{
      font-size:1.5rem;
    }
  }
  
`

export const Form = styled.form`
  width: 100%;
  height: 81px;
  background-color:#fff;
  padding: 10px 21px;
  border-radius:0.25rem;
  display: grid;
  grid-template-columns:1fr auto;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  width: 111px;
  height: 61px;
  color: #fff;
  background-color:#20c997;
  border: 0 solid #20c997;
  font-size:1rem;
  font-weight:500;
  border-radius:0.25rem;
  cursor: pointer;
  transition:0.3s ease-in-out;
  display:flex;
  justify-content: center;
  align-items: center;

  &:hover{
  background-color:#02b875;
  }
  @media (max-width: 413px) {
    width: 100px;
  height: 49px
  }

`

