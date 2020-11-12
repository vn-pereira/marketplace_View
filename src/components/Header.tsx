// eslint-disable-next-line no-use-before-define
import React from 'react'
import ToggleMenu from './Header/ToggleMenu'
import SearchBar from './Header/SearchBar'
import Login from './Header/Login'
import Link from 'next/link'

import styled from 'styled-components'

const ContainerHeader = styled.header`
  height: 50px;
  background: #000;
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 10px;
  justify-content: space-between;

  .link {
    cursor: pointer;
  }

  h1 {
    font-size: 24pt !important;
    margin: 0 !important;
    font-weight: bolder;
  }
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Header = () => {
  return (
    <ContainerHeader>
      <ToggleMenu />
      <Link href="/">
        <h1 style={{ cursor: 'pointer' }}>
          <span style={{ color: '#fff' }}>Cool</span>
          <span style={{ color: '#69779B' }}>Stuff</span>
        </h1>
      </Link>
      <SearchBar />
      <Login />
    </ContainerHeader>
  )
}

export default Header
