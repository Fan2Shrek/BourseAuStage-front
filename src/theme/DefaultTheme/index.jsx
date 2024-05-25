import { useEffect } from 'react';

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

        setProperty('--color-third', '#f8f8fd');

        setProperty('--color-light', '#fff')
        // A voir selon le choix du hover
        setProperty('--color-light-alpha', '#ffffffe6')
        setProperty('--color-light-alpha-20', '#ffffff33')

        setProperty('--color-dark', '#202430');
        // A voir selon le choix du hover
        setProperty('--color-dark-alpha', '#202430e6');

        setProperty('--color-grey', '#d6ddeb')
        setProperty('--color-dark-grey', '#5c626e')
        setProperty('--color-grey-form', '#515B6F')

        setProperty('--color-danger', '#ff007a');
        setProperty('--color-warning', '#ff9900');
        setProperty('--color-success', '#56cdad');

        /**
         * BASE
         */
        setProperty('--base-color-neutral', 'var(--color-dark)');
        // A voir selon le choix du hover
        setProperty('--base-color-neutral-alpha', 'var(--color-dark-alpha)');
        setProperty('--base-color-neutral-inverted', 'var(--color-light)');
        setProperty('--base-inline-margin-xl', '124px')
        setProperty('--base-inline-margin-lg', '100px')
        setProperty('--base-inline-margin-md', '70px')
        setProperty('--base-inline-margin-sm', '50px')
        setProperty('--base-inline-margin', '20px')

        /**
         * TEXT
         */
        setProperty('--text-size', '16px');
        setProperty('--text-color', 'var(--base-color-neutral)');
        setProperty('--text-color-inverted', 'var(--base-color-neutral-inverted)');

        /**
         * PROGRESS BAR
         */
        setProperty('--progressBar-color-success', 'var(--color-success)');
        setProperty('--progressBar-color-warning', 'var(--color-warning)');
        setProperty('--progressBar-color-danger', 'var(--color-danger)');

        /**
         * INPUT
         */
        setProperty('--input-required-color', 'var(--color-danger)');
        setProperty('--input-label-color', 'var(--color-dark-grey)');
        setProperty('--input-disabled-color', 'var(--color-grey)');
        setProperty('--input-range-label-color', 'var(--color-main)');
        setProperty('--input-range-track', 'var(--color-dark-grey)');
        setProperty('--input-range-thumb', 'var(--color-main)');

        /**
         * BANNER
         */
        setProperty('--banner-color', 'var(--color-third)');
    }, [])

    return <></>
}
