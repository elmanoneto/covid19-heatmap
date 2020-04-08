import React from 'react'

import WrapperData from './WrapperData'

interface IResume {
    total_confirmation: string
}

const ConfirmedCases = ({ total_confirmation }: IResume) => {
    return (
        <WrapperData background="#FFA502">
            <h3>Taxa de letalidade</h3>
            <p>{total_confirmation}</p>
        </WrapperData>
    )
}

export default ConfirmedCases