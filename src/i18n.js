import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
        en: {
            translation: {
                title: "Hi there, I'm ",
                subtitle: "Full-stack developer with a creative mind",
                about: "About",
                work: "Work",
                contact: "Contact",
                intro_subtitle: "INTRODUCTION",
                intro_title: "Overview",
                intro_text: "I am a full-stack developer based in Bellaria, Rimini. I have always been passionate about photography and videomaking, and I have brought my passion to the digital world, where I have combined my taste for art and design with the logic of programming, both graphically and functionally.",
                web: "Web Development",
                android: "Android Development", 
                blockchain: "Blockchain and Metaverse", 
                camera: "Photography and Videomaking",

            }
        },
        it: {
            translation: {
                title: "Ciao, sono ",
                subtitle: "Programmatore fullstack con una mente creativa",
                about: "Su di me",
                work: "Lavoro",
                contact: "Contatti",
                intro_subtitle: "INTRODUZIONE",
                intro_title: "Chi sono",
                intro_text: "Sono un programmatore full-stack e vivo a Bellaria, Rimini. Da sempre appassionato alla fotografia e il videomaking, ho portato la mia passione nel digitale, dove ho unito il gusto per l'arte ed il design alla logica della programmazione, sia dal punto di vista grafico, che funzionale.",
                web: "Sviluppo Web",
                android: "Sviluppo Android", 
                blockchain: "Blockchain e Metaverso", 
                camera: "Fotografia e Videomaking",
            }
        }
    }
});

export default i18n;