import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {
    return (
        <WrapperHeader>
            <h1>Estatísticas Covid19 no Brasil</h1>
        </WrapperHeader>
    )
}

const WrapperHeader = styled.header`
    text-align: center;
    width: 100%;
`

export default Header