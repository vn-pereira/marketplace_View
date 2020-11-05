// eslint-disable-next-line no-use-before-define
import React from 'react'
import Image from 'next/image'
import ToggleMenu from './Header/ToggleMenu'
import SearchBar from './Header/SearchBar'
import Login from './Header/Login'
import Link from 'next/link'

import styled from 'styled-components'

const ContainerHeader = styled.header`
  height: 60px;
  background: #000;
  display: flex;
  align-items: center;
  width: 100vw;
  padding-left: 70px;
  justify-content: space-between;

  .link {
    cursor: pointer;
  }
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Header = () => {
  return (
    <ContainerHeader>
      <ToggleMenu />
      <Link href="/novapagina">
        <Image src="/rocketseat.svg" height="40" width="200" className="link" />
      </Link>
      <SearchBar />
      <Login />
    </ContainerHeader>
  )
}

export default Header
