import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
    return (
        <WrapperFooter>
            <p>Dados fornecidos por: <a href="https://doc.covid.finspect.me/" target="blank">https://doc.covid.finspect.me/</a></p>
        </WrapperFooter>
    )
}

const WrapperFooter = styled.footer`
    text-align: center;
    padding: 0 20px;
`

export default Footer