import {
    mobile,
    backend,
    creator,
    cleared,
    dalenin,
    gif,
    facebook,
    instagram,
    linkedin,
    twitter
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About"
    }, {
        id: "work",
        title: "Work"
    }, {
        id: "contact",
        title: "Contact"
    }
];

const services = [
    {
        title: "Web Development",
        icon: gif
    }, {
        title: "Android Development",
        icon: mobile
    }, {
        title: "Blockchain and Metaverse",
        icon: backend
    }, {
        title: "Photography and Design enthusiast",
        icon: creator
    }
];

const projects = [
    {
        name: "Cleared to Play",
        description: "Custom looking blog for a content creator in the dj and electronic music ambient" +
                ". Also contains a custom map to see all the upcoming parties.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient"
            }, {
                name: "css",
                color: "green-text-gradient"
            }, {
                name: "php",
                color: "pink-text-gradient"
            }
        ],
        image: cleared,
        source_code_link: "http://clearedtoplay.it"
    }, {
        name: "Da Lenin Barber Shop",
        description: "Static website for a local barber shop, with some photos I shoot myself. It feat" +
                "ures a call button on the main screen, and some other pages where you can see th" +
                "e prices and the bio of the owner.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient"
            }, {
                name: "css",
                color: "green-text-gradient"
            }, {
                name: "javascript",
                color: "orange-text-gradient"
            }
        ],
        image: dalenin,
        source_code_link: "http://daleninbarbershop.it"
    }
];

const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Content",
                link: "https://www.hoobank.com/content/"
            }, {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/"
            }, {
                name: "Create",
                link: "https://www.hoobank.com/create/"
            }, {
                name: "Explore",
                link: "https://www.hoobank.com/explore/"
            }, {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/"
            }
        ]
    }
];

const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/"
    }, {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/"
    }, {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/"
    }, {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/"
    }
];

export {
    services,
    projects,
    footerLinks,
    socialMedia
};
