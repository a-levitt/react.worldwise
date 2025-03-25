import styles from './Map.module.css'
import {useSearchParams} from "react-router-dom";

function Map() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer}>
            {lat != null && lng !== null && <h1>Position: {lat}, {lng}</h1>}
            <button onClick={() =>
                setSearchParams({ lat: 23, lng: 50 })}>Change pos</button>
        </div>
    )
}

export default Map;
