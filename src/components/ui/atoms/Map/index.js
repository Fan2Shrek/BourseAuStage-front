import { APIProvider, Map as InnerMap, Marker } from '@vis.gl/react-google-maps';
import { setKey, fromAddress } from "react-geocode";
import { useEffect, useState } from 'react';

import './map.scss'

const Map = ({address, markerText = null}) => {
    const [position, setPosition] = useState(null)

    useEffect(() => {       
        const fetchData = async () => {
            setKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
            try {
                return await fromAddress(address);
            } catch {
                return new Promise((resolve) => resolve({results: [{geometry: {location: null}}]}));
            }
        }

        try {
            fetchData().then(pos => setPosition(pos.results[0].geometry.location || null));
        } catch (e) {
            setPosition(null)
        }
    
    }, [address]);

    return position && <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <InnerMap
            defaultCenter={position}
            defaultZoom={15}
            mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
            disableDefaultUI={true}
        >
            {markerText && <Marker
                label={{text: markerText, color: 'red', fontSize: '17px', fontWeight: 'bold', className: 'markerLabel'}}
                position={position}
            />}
        </InnerMap>
    </APIProvider>
}

export default Map;
