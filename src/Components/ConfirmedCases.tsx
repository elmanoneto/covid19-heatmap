import React from 'react'

import WrapperData from './WrapperData'

interface IResume {
    total_confirmation: string
}

const ConfirmedCases = ({ total_confirmation }: IResume) => {
    return (
        <WrapperData background="#FFA502">
            <i className="far fa-check-circle"></i>
            <h3>Casos confirmados</h3>
            <p>{total_confirmation}</p>
        </WrapperData>
    )
}

export default ConfirmedCases