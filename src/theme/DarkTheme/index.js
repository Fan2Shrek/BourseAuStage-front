import { useEffect } from 'react';

import setProperty from '../../utils/setProperty';

export const Darktheme = () => {
    useEffect(() => {
        /**
         * COLORS
         */
        setProperty('--base-color-neutral', 'var(--color-light)');
        // A voir selon le choix du hover
        setProperty('--base-color-neutral-alpha', 'var(--color-light-alpha)');
        setProperty('--base-color-neutral-inverted', 'var(--color-dark)');

        /**
         * INPUT
         */
        setProperty('--input-label-color', 'var(--base-color-neutral)');

        /**
         * BANNER
         */
        setProperty('--banner-color', 'var(--base-color-neutral-inverted)');

        /**
         * HOME
         */
        setProperty('--home-last-request-section-color', 'transparent');

        /**
        * COMPANY
        */
        setProperty('--company-related-offers-section-color', 'transparent');

        /**
         * TABLE
         */
        setProperty('--table-secondary-color', 'transparent');

        /**
         * SIDEBAR
         */
        setProperty('--sidebar-color', 'transparent');
    }, [])

    return <></>
}
