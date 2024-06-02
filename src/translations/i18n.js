import i18next from "i18next"
import {initReactI18next} from "react-i18next"

import fr from './locales/fr.js'
import en from './locales/en.js'

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        resources: {
            fr: {
                translation: fr
            },
            en: {
                translation: en
            },
        },
        interpolation: {
            escapeValue: false
        }
    })
