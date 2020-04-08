import React from 'react'
import styled from 'styled-components'

import WrapperData from './WrapperData'

interface IResume {
    total_leathality: string
}

const LeathalityCases = ({ total_leathality }: IResume) => {
    return (
        <WrapperData background="#FF0100">
            <h3>Casos confirmados</h3>
            <p>{total_leathality}</p>
        </WrapperData>
    )
}

export default LeathalityCases