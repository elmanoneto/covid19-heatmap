//AIzaSyC2n0o8PRDusVeC7DfnC7SS8TIgdnPEBpI

import React from 'react'
import GoogleMapReact from 'google-map-react'


const App: React.FC = () => {
    const heatMapData = {
        positions: [
            { lat: -23.5329, lng: -46.6395, weight: 5682},
            { lat: -22.9129, lng: -43.2003, weight: 1688 },
            { lat: -3.71664, lng: -38.5423, weight: 1051}
        ],
        options: {
            radius: 100,
            opacity: 0.7
        }
    }

    const center = {
        lat: -10.1689,
        lng: -48.3317
      }

    const zoom = 5

    const apiKey = 'AIzaSyC2n0o8PRDusVeC7DfnC7SS8TIgdnPEBpI'
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact 
                bootstrapURLKeys={{
                    key: apiKey,
                    libraries: 'visualization'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                heatmapLibrary={true}
                heatmap={heatMapData}
            />
        </div>
    )
}

export default App