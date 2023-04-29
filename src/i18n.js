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
                // hero
                subtitle: "Front-end developer with a ",
                subtitle_highlighted: "creative mind",
                // navbar
                about: "About",
                work: "Work",
                contact: "Contact",
                // about
                intro_subtitle: "INTRODUCTION",
                intro_title: "Overview",
                intro_text: "I am a full-stack developer based in Bellaria, Rimini. I have always been passionate about photography and videomaking, and I have brought my passion to the digital world, where I have combined my taste for art and design with the logic of programming, both graphically and functionally.",
                // cards
                web: "Web Development",
                android: "Android Development", 
                blockchain: "Blockchain and Metaverse", 
                camera: "Photography and Videomaking",
                // work 
                work_subtitle: "WORK",
                work_title: "Projects",
                work_text: "Here are some of the projects that I've done recently, the list is going to be updated regularly. You can discover other smaller projects on ",
                cleared: "Custom looking blog for a content creator in the dj and electronic music ambient. It features a custom map to see all the upcoming parties.",
                dalenin: "Static website for a local barber shop, with some photos I shoot myself. It features a call button on the main screen, and some other pages where you can see the prices and the bio of the owner.",
                // contact
                contact_subtitle: "GET IN TOUCH",
                contact_title: "Contact",
                contact_name: "Your name", 
                contact_email: "Your email address", 
                contact_message: "Your message",
                contact_send: "Send",
                contact_sending: "Sending...",
                // footer
                footer_text: "Enjoy",
                footer_links: "Useful links",
                copyright: "Copyright Ⓒ 2023"
            }
        },
        it: {
            translation: {
                // hero
                subtitle: "Sviluppatore front-end con una ",
                subtitle_highlighted: "mente creativa",
                // navbar
                about: "Su di me",
                work: "Lavoro",
                contact: "Contatti",
                // about
                intro_subtitle: "INTRODUZIONE",
                intro_title: "Chi sono",
                intro_text: "Sono un programmatore full-stack e vivo a Bellaria, Rimini. Da sempre appassionato alla fotografia e il videomaking, ho portato la mia passione nel digitale, dove ho unito il gusto per l'arte ed il design alla logica della programmazione, sia dal punto di vista grafico, che funzionale.",
                // cards
                web: "Sviluppo Web",
                android: "Sviluppo Android", 
                blockchain: "Blockchain e Metaverso", 
                camera: "Fotografia e Videomaking",
                // work
                work_subtitle: "Lavoro",
                work_title: "Progetti",
                work_text: "Di seguito riporto alcuni progetti eseguiti fino ad ora, la lista è in continuo aggiornamento. Per ulteriori progetti, è possibile visitare il profilo ",
                cleared: "Blog custom per un content creator nel mondo dei DJ e della musica electronica. Contiene una mappa interattiva con le feste del weekend, regione per regione.",
                dalenin: "Sito vetrina per una barberia locale, con foto scattate da me. Troviamo una call to action nella schermata principale, dedicata alla chiamata, e alcune informazioni tra cui il listino e la biografia del proprietario.",
                // contact
                contact_subtitle: "CONTATTI",
                contact_title: "Scrivimi",
                contact_name: "Il tuo nome",
                contact_email: "La tua email",
                contact_message: "Il tuo messaggio",
                contact_send: "Invia",
                contact_sending: "Invio...",
                // footer
                footer_text: "\‟Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh nec erat tincidunt, vitae viverra nunc.\"",
                footer_links: "Link utili",
                copyright: "Copyright Ⓒ 2023"
            }
        }
    }
});

export default i18n;