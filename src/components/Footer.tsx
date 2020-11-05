import React from 'react'
import styled from 'styled-components'

const ContainerFooter = styled.footer `
    .footer {
      background: #00000;  
    }

    .txt {
        color: #FFF;
    }

`
const Footer = () => {
    return (
        <ContainerFooter>
            <footer className="footer">
            <p className="txt">&copy; Todos os direitos reservados </p>
            </footer>
        </ContainerFooter>
    )

}

export default Footer
