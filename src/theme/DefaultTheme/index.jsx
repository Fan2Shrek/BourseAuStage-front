import {useEffect} from 'react';

import setProperty from '../../utils/setProperty';

export const DefaultTheme = ({}) => {
    useEffect(() => {
        /**
         * COLORS
         */
        setProperty('--color-main', '#4640de');
        setProperty('--color-secondary', '#26a4ff');
        setProperty('--color-third', '#63666e');
        setProperty('--color-light', '#fff')
        setProperty('--color-light-secondary', '#f8f8fd')
        setProperty('--color-dark', '#202430');

        /**
         * BASE
         */
        setProperty('--base-color', 'var(--color-light)');
        setProperty('--base-color-inverted', 'var(--color-dark)');

        /**
         * TEXT
         */
        setProperty('--text-size', '16px');
        setProperty('--text-color', 'var(--base-color-inverted)');
        setProperty('--text-color-inverted', 'var(--base-color)');
    }, [])

    return <></>
}
