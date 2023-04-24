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
    twitter,
    web,
    android, 
    blockchain,
    camera,
    github
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
        id: "web",
        title: "Web Development",
        icon: web
    }, {
        id: "android",
        title: "Android Development",
        icon: android
    }, {
        id: "blockchain",
        title: "Blockchain and Metaverse",
        icon: blockchain
    }, {
        id: "camera",
        title: "Photography and Design enthusiast",
        icon: camera
    }
];

const projects = [
    {
        name: "Cleared to Play",
        description: "cleared",
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
        description: "dalenin",
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
        id: "github",
        icon: github,
        link: "https://github.com/Stedamb"
    }, {
        id: "twitter",
        icon: twitter,
        link: "https://twitter.com/ste_dambrosio_"
    }, {
        id: "linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/ste-damb/"
    }
];

export {
    services,
    projects,
    footerLinks,
    socialMedia
};
