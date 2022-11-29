import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button';
import {Link} from 'react-router-dom';
const Title = styled.h1`
    font-size: 46px;
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.text};
    align-self: flex-start;
    
    span{
        text-transform: uppercase;
        font-family: "Alata", cursive;
    }.text-1{
      color: red;
    }
    .text-2{
      color: yellow;
    }
    .text-3{
      color: green;
    }
    
`
const SubTitle = styled.h5`
    font-size: ${props=>props.theme.fontlg};
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.text},0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;


`
const ButtonContainer=styled.div`
    width: 80%;
    padding-left: 5px;
    align-self: flex-start;
`


    

const TypeWriterText = () => {
  return (
    <>
    <Title>
        Become Free from Burden of
        <Typewriter
        options={{
            autoStart: true,
            loop: true
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">Creating Test.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-2">Creating Question.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-3">Creating MCQ\'s.</span>')
    .deleteAll()
    .start()
      
  }}
/>
  
    </Title>
    <SubTitle>Creating regular Test takes time? Try this. </SubTitle>
    <ButtonContainer>
      <Link to={`/note`}>
    <Button text="Explore"/>
    </Link>
    </ButtonContainer>
    </>
  )
}

export default TypeWriterText