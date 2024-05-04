import {useEffect} from 'react';

import setProperty from '../../utils/setProperty';

export const Darktheme = ({}) => {
    useEffect(() => {
        /**
         * BASE
         */
        setProperty('--base-color', 'var(--color-dark)');
        setProperty('--base-color-inverted', 'var(--color-light)');
    }, [])

    return <></>
}
