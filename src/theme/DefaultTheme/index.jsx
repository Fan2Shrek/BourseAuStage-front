import {useEffect} from 'react';

import setProperty from '../../utils/setProperty';

export const DefaultTheme = () => {
    useEffect(() => {
        /**
         * COLORS
         */
        setProperty('--color-main', '#4640de');
        // A voir selon le choix du hover
        setProperty('--color-main-alpha', '#4640dee6');

        setProperty('--color-secondary', '#26a4ff');
        // A voir selon le choix du hover
        setProperty('--color-secondary-alpha', '#26a4ffe6');

        setProperty('--color-third', '#63666e');

        setProperty('--color-light', '#fff')
        // A voir selon le choix du hover
        setProperty('--color-light-alpha', '#ffffffe6')
        setProperty('--color-light-secondary', '#f8f8fd')

        setProperty('--color-dark', '#202430');
        // A voir selon le choix du hover
        setProperty('--color-dark-alpha', '#202430e6');

        /**
         * BASE
        */
        setProperty('--base-color-neutral', 'var(--color-dark)');
        // A voir selon le choix du hover
        setProperty('--base-color-neutral-alpha', 'var(--color-dark-alpha)');
        setProperty('--base-color-neutral-inverted', 'var(--color-light)');

        /**
         * TEXT
         */
        setProperty('--text-size', '16px');
        setProperty('--text-color', 'var(--base-color-neutral)');
        setProperty('--text-color-inverted', 'var(--base-color-neutral-inverted)');
    }, [])

    return <></>
}
