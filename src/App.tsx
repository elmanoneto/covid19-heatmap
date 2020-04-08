import React, { useState, useEffect, Fragment } from 'react'
import GoogleMapReact from 'google-map-react'
import BeatLoader from "react-spinners/ClipLoader";
import styled from 'styled-components'

import http from './config/http'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ConfirmedCases from './Components/ConfirmedCases'
import LeathalityCases from './Components/LeathalityCases'
import DeathCases from './Components/DeathCases'

interface ICenter {
    lat: number
    lng: number
}

interface IData {
    positions: IPositions[]
    options: IOptions
}

interface IAPIData {
    lat: string
    lng: string
    name: string
    qtd_confirmation: number
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

interface IResume {
    dt_updated: string
    total_confirmation: string
    total_leathality: string
    total_death: string
}

const App: React.FC = () => {
    const [center, setCenter] = useState<ICenter>({
        lat: -10.1689,
        lng: -48.3317
    })
    const [zoom, setZoom] = useState<number>(5)
    const [heatpmapData, setHeatmapData] = useState<IData>()
    const [loading, setLoading] = useState<boolean>(true)
    const [resume, setResume] = useState<IResume>({
        dt_updated: '',
        total_confirmation: '0',
        total_leathality: '0',
        total_death: '0'
    })

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await http.get<IAPIData[]>('/map')
                const handledData = await handleData(result.data)
                setHeatmapData({ positions: handledData, options: { opacity: 0.7, radius: 100 } })

                const resumed = await http.get('/all')
                setResume(resumed.data[0] as IResume)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])

    const handleData = async (data: IAPIData[]) => {
        return data.map(city => {
            return { lat: +city.lat, lng: +city.lng, weight: +city.qtd_confirmation }
        })
    }

    const renderMap = () => {
        return loading ? (
            <BeatLoader
                size={150}
                color={"#FF0000"}
                loading={loading}
            />
        ) : (
            <GoogleMapReact 
                bootstrapURLKeys={{
                    key: String(process.env.REACT_APP_GOOGLE_API_KEY),
                    libraries: 'visualization'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                heatmapLibrary={true}
                heatmap={heatpmapData}
            />
        )
    }

    return (
        <Fragment>
            <Header />
            <WrapperMap>
                {renderMap()}
            </WrapperMap>
            <WrapperData>
                <ConfirmedCases total_confirmation={resume.total_confirmation}/>
                <LeathalityCases total_leathality={resume.total_leathality}/>
                <DeathCases total_death={resume.total_death}/>
            </WrapperData>
            <Footer />
        </Fragment>
    )
}

const WrapperMap = styled.section`
    display: flex;
    height: 400px;
    justify-content: center;
`

const WrapperData = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 10px;
`

export default App