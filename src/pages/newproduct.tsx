import React from 'react'
import NPInput from '../components/NPInput'
import styled from 'styled-components'
import Header from '../components/Header'
const FormContainer = styled.div`
background: white;
color: black;
display: flex;

form{
    
    width: 50%;
    padding: 4% 0 0 5%;
    margin-bottom: 3%;

    button{
        height: 40px;
        color: white;
        border: none;
        background: #800080;
        border-radius: 5px;
        cursor: pointer;
        width: 140px;
        padding: 10px;
    }
}
`

const TitleContainer = styled.div`
background: white;
color: black;
padding: 4% 0 0 5%;
margin: unset;

h1{
    margin: unset
}`
export default function newproduct() {

 
    return (
        <>
            <Header></Header>
           <TitleContainer> <h1>Register New Products:</h1></TitleContainer>
        <FormContainer>
            <form action='https://limitless-cove-49173.herokuapp.com/products/new-product' method='POST'>
                <NPInput title='Provider Id:' id='providerId' type='text' name='providerID'/>
                <NPInput title='Product Name:' id='productName' type='text' name='name'/>
                <NPInput title='Description:' id='description' type='text' name='description'/>
                <NPInput title='Rating:' id='rating' type='text' name='price'/>
                <NPInput title='Price:' id='price' type='text' name='price'/>
                <NPInput title='Stock:' id='stock' type='number' name='stock'/>
                <button type='submit'>inserir produto</button>
            </form>
        </FormContainer>
    </>
    )
}
