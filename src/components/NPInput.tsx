import React from 'react'
import styled from 'styled-components'
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 0 2% 0;
  input{
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #330033;
  width: 126%;
  outline: none;
};
}
`
export default function NpForm({ ...props }) {
 
  return (
        <InputContainer>
        <label htmlFor={props.id}>{props.title}</label>
        <input type={props.type} id={props.id} name={props.name}required></input>
        </InputContainer>
  )
}
