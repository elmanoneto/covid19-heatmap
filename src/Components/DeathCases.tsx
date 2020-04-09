import React from 'react'

import WrapperData from './WrapperData'

interface IResume {
    total_death: string
}

const DeathCaes = ({ total_death }: IResume) => {
    return (
        <WrapperData background="#000">
            <i className="far fa-dizzy white-text"></i>
            <h3 className="white-text">Total de mortos</h3>
            <p className="white-text">{total_death}</p>
        </WrapperData>
    )
}

export default DeathCaes