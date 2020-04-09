import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'

interface ICenter {
    lat: number
    lng: number
}

interface IData {
    positions: IPositions[]
    options: IOptions
}

interface IPositions {
    lat: number
    lng: number
    weight: number
}

interface IOptions {
    radius: number
    opacity: number
}

interface IProps {
    data: IData
}


const HeatMap = ({ data }: IProps) => {
    const [center] = useState<ICenter>({
        lat: -10.1689,
        lng: -48.3317
    })
    const [zoom] = useState<number>(5)
    
    return (
        <GoogleMapReact 
            bootstrapURLKeys={{
                key: String(process.env.REACT_APP_GOOGLE_API_KEY),
                libraries: 'visualization'
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            heatmapLibrary={true}
            heatmap={data}
        />
    )
}

export default HeatMap