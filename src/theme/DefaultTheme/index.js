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
        setProperty('--color-third-contrast', '#e9ebfd');

        setProperty('--color-light', '#fff')
        // A voir selon le choix du hover
        setProperty('--color-light-alpha', '#ffffffe6')
        setProperty('--color-light-alpha-20', '#ffffff33')

        setProperty('--color-dark', '#202430');
        // A voir selon le choix du hover
        setProperty('--color-dark-alpha', '#202430e6');

        setProperty('--color-grey', '#d6ddeb')
        setProperty('--color-middle-grey', '#7C8493')
        setProperty('--color-dark-grey', '#5c626e')

        setProperty('--color-info', 'var(--color-secondary)');
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
        setProperty('--base-inline-margin-xl', 'auto')
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
        setProperty('--input-password-eye-color', 'var(--color-main)');
        setProperty('--input-range-label-color', 'var(--color-main)');
        setProperty('--input-range-track', 'var(--color-dark-grey)');
        setProperty('--input-range-thumb', 'var(--color-main)');

        /**
         * SELECT
         */
        setProperty('--select-secondary-color', 'var(--base-color-neutral)');
        setProperty('--select-secondary-chevron-color', 'var(--color-main)');
        setProperty('--select-third-color', 'var(--color-middle-grey)');
        setProperty('--select-third-chevron-color', 'var(--color-middle-grey)');

        /**
         * BANNER
         */
        setProperty('--banner-color', 'var(--color-third)');

        /**
         * MODAL
         */
        setProperty('--modal-color', 'var(--color-light)');
        setProperty('--modal-text-color', 'var(--color-dark)');
        setProperty('--modal-background-color', 'var(--color-dark-alpha)');
        setProperty('--modal-cross-color', 'var(--color-dark-grey)');

        /**
         * CARD
         */
        setProperty('--card-color', 'var(--color-light)');
        setProperty('--card-text-color', 'var(--color-dark)');
        setProperty('--card-border-color', 'var(--color-grey)');

        /**
         * HOME
         */
        setProperty('--home-last-request-section-color', 'var(--color-third)');

        /**
         * COMPANY
         */
        setProperty('--company-related-offers-section-color', 'var(--color-third)');

        /**
         * TABLE
         */
        setProperty('--table-border-color', 'var(--color-third)');
        setProperty('--table-secondary-color', 'var(--color-third)');
        setProperty('--table-headers-color', 'var(--color-middle-grey)');

        /**
         * SIDEBAR
         */
        setProperty('--sidebar-color', 'var(--color-third)');

        /**
         * THEME SWITCHER
         */
        setProperty('--themeSwitcher-color', 'var(--color-third)');
        setProperty('--themeSwitcher-icon-color', 'var(--color-main)');
    }, [])

    return <></>
}
