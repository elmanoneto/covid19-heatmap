import React from 'react'

import WrapperData from './WrapperData'

interface IResume {
    total_leathality: string
}

const LeathalityCases = ({ total_leathality }: IResume) => {
    return (
        <WrapperData background="#FF0100">
            <i className="fa fa-percent" aria-hidden="true"></i>
            <h3>Taxa de letalidade</h3>
            <p>{total_leathality}</p>
        </WrapperData>
    )
}

export default LeathalityCases