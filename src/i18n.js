import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this? have a look at the Quick start guide for passing in
// lng and translations on init

i18n
// load translation using http -> see /public/locales (i.e.
// https://github.com/i18next/react-i18next/tree/master/example/react/public/loca
// les) learn more: https://github.com/i18next/i18next-http-backend want your
// translations to be loaded from a professional CDN? =>
// https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(Backend)
// detect user language learn more:
// https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
// pass the i18n instance to react-i18next.
    .use(initReactI18next)
// init i18next for all options read:
// https://www.i18next.com/overview/configuration-options
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
                intro_text: "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",

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
                intro_text: "Sono un programmatore fullstack con esperienza in TypeScript e JavaScript, e esperto in frameworks come React, Node.js, e Three.js. Sono un apprendista e collaboro con clienti per creare efficienti, scalabili, e"
            }
        }
    }
});

export default i18n;