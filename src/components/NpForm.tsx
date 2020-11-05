/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
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
    <>
      <div className="container checkout-form">
        <input type={props.type} placeholder={props.name} />
      </div>
    </>
  )
}
