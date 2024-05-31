import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiClient from "../../api/ApiClient";

import styles from './Offer.module.scss';

const Offer = () => {

    const { id } = useParams();
    const [offer, setOffer] = useState(null);

    useEffect(() => {
        apiClient.offer.get(id)
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setOffer(response);
            })
    }, [id]);

    if (!offer) {
        return <></>
    }

    return <div className={styles.offer}>
        <h1>{offer.name}</h1>
    </div>
}

export default Offer;
