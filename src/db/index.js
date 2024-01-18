import Promostock from "../assets/images/promostock.png";
import Artel from "../assets/images/artel.png";
import Platinum from "../assets/images/Platinum.png";
import President from "../assets/images/prezident2.jpg";
import NewsBackground from "../assets/images/NewsBackground.png";
import Air from '../assets/images/air.png'
import Cola from '../assets/images/cola.png'
import Oriflame from '../assets/images/Oriflame.png'
import CHN from '../assets/images/CNH.png'
import Orient from "../assets/images/banner_amcham_Orient.jpg";
import Lazizbek from "../assets/images/Lazizbek.png";
import Books from "../assets/images/books.png";
import EventBanner from "../assets/images/evenPage.png";
import Logo from "../assets/icons/logo.svg";
import Bratlar from "../assets/images/bratlar.png";
import Gold from "../assets/images/Gold.png";
import Silver from "../assets/images/Silver.png";
import Bronze from "../assets/images/Bronze.png";
import Member2Member from "../assets/images/member2member_banner.png";
import {Agroculture, Auditing, Banking, Checked, Commerce, Consulting, Consumer} from "../assets/icons";

const now = new Date();

export const BANNER_CONFIG = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
export const PRESIDENT_NOTE = {
    title: "PRESIDENT'S NOTE",
    data: {
        img: President,
        preview_text:
            "Dear AmCham Members, I am honored to be elected and serve as the President of the American Chamber of Commerce in Uzbekistan. It has been a privilege and a wonderful opportunity to meet members and leaders in our community during the recent AGM and hear how our committed board of directors, Executive Director, and staff can best serve you as the Voice of the Business Community in Uzbekistan. I also want to thank you for the warm welcome over the… ",
        name: "Shadab Ahmed Khan",
        positioin: "President",
        branch: "AmCham Uzbekistan",
        url: "/president-note",
    },
};

export const NEWS_AND_EVENTS = {
    title: "News and Events",
    datas: [
        {
            img: President,
            title: " Digital Transformation Committee Meeting ",
            subtext:
                " AmCham Uzbekistan Digital Transformation Committee organized a joint event with the Kyrgyz Association of Software Developers. Half a day event aimed at IT sector companies - members of AmCham Uzbekistan…",
            url: "/news",
        },
        {
            img: President,
            title: " Digital Transformation Committee Meeting ",
            subtext:
                " AmCham Uzbekistan Digital Transformation Committee organized a joint event with the Kyrgyz Association of Software Developers. Half a day event aimed at IT sector companies - members of AmCham Uzbekistan…",
            url: "/news",
        },
        {
            img: President,
            title: " Digital Transformation Committee Meeting ",
            subtext:
                " AmCham Uzbekistan Digital Transformation Committee organized a joint event with the Kyrgyz Association of Software Developers. Half a day event aimed at IT sector companies - members of AmCham Uzbekistan…",
            url: "/news",
        },
    ],
};
export const RESPONSIVE_CONFIG = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
export const COMPANIES_DATAS = [
    {
        path: "https://hyatt.uz",
        img: Orient,
    },
    {
        path: "https://hyatt.uz",
        img: Orient,
    },
    {
        path: "https://hyatt.uz",
        img: Orient,
    },
    {
        path: "https://hyatt.uz",
        img: Orient,
    },
];
export const PUPLICATION_DATS = {
    title: "PUBLICATIONS",
    data: [
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 0,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 1,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 2,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 3,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 4,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 5,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 6,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 7,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },

        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 8,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 9,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
        {
            title: "Dynamic Uzbekistan 2021",
            description: "",
            img: Books,
            id: 10,
            url: "https://amcham.uz/wp-content/uploads/DYNAMIC_2021_ENG_05_CURVES.pdf",
        },
    ],
};
export const AMCHAM_COMMITTEES = {
    title: "AMCHAM COMMITTEES",
    description:
        "AmCham Uzbekistan’s goals and activities are determined by the membership. The most direct way for a member company to influence the formation of our goals and professional activities is through participation in our extensive committee system. Committees work to generate ideas and promote solutions in areas which are of mutual interest to the entire membership. AmCham Uzbekistan also encourages cooperation between companies within the same industry, enabling them to achieve common goals.",
    subtitle: "AmCham Uzbekistan currently has following committees:",
    data: [
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
        {
            img: Logo,
            title: "Corporate Governance Committee",
            description:
                "Increasing awareness of Governance, Risk, and Compliance instruments and methods, benchmarks and trends in the sphere of anti-corruption and bribery, risk management, and corporate governance.",
            id: 0,
            url: "slug65415",
        },
    ],
};
export const EXHIBITIONS_DATA = {
    title: "EXHIBITIONS IN UZBEKISTAN",
    img: Books,
    url: "https://amcham.uz/wp-content/uploads/Exhibitions-1H-2020.pdf",
};
export const SINGE_COMMITTEES = {
    title: "Corporate Governance Committee",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit nisi lacus, at porta velit facilisis a. Donec a varius ex, nec suscipit nunc. Fusce eu urna nec ipsum sodales posuere. Integer nec tellus id dolor lacinia scelerisque a ac velit. Ut a turpis et justo fringilla aliquet et ac nisi. Quisque feugiat eleifend magna sit amet porta. Proin vehicula laoreet lorem at tempus. Curabitur urna mi, porta quis tincidunt quis, gravida in neque. Sed augue tortor, dictum commodo condimentum non, bibendum in felis. Quisque commodo fringilla nisl in malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit nisi lacus, at porta velit facilisis a. Donec a varius ex, nec suscipit nunc. Fusce eu urna nec ipsum sodales posuere. Integer nec tellus id dolor lacinia scelerisque a ac velit. Ut a turpis et justo fringilla aliquet et ac nisi. Quisque feugiat eleifend magna sit amet porta. Proin vehicula laoreet lorem at tempus. Curabitur urna mi, porta quis tincidunt quis, gravida in neque. Sed augue tortor, dictum commodo condimentum non, bibendum in felis. Quisque commodo fringilla nisl in malesuada.`,
    collapse: {
        title: "Overview of Past Meetings",
        text: "Lorem ipsum sit dolor ametdolor ametdolor ametdolor ametdolor ametdolor ametdolor ametdolor ametdolor ametdolor ametdolor amet.",
    },
    subtitle: "Corporate Governance Committee News",
    modal: {
        title: "Corporate Governance Committee",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit nisi lacus, at porta velit facilisis a. Donec a varius ex.",
        button: "SEE COMMITTEE PROFILE",
    },
    datas: [
        {
            img: President,
            id: 0,
            data: "November 10, 2021",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit...",
            url: "slug/4653",
        },
        {
            img: President,
            id: 1,
            data: "November 10, 2021",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit...",
            url: "slug/4653",
        },
        {
            img: President,
            id: 2,
            data: "November 10, 2021",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit...",
            url: "slug/4653",
        },
        {
            img: President,
            id: 3,
            data: "November 10, 2021",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit...",
            url: "slug/4653",
        },
        {
            img: President,
            id: 4,
            data: "November 10, 2021",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit...",
            url: "slug/4653",
        },
        {
            img: President,
            id: 5,
            data: "November 10, 2021",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit...",
            url: "slug/4653",
        },
        {
            img: President,
            id: 6,
            data: "November 10, 2021",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit...",
            url: "slug/4653",
        },
    ],
};
export const NEW_DATAS = {
    title: "Our News",
    datas: [
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 1,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 2,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 3,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
        {
            id: 0,
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: NewsBackground,
            url: "/slug354",
        },
    ],
};
export const SINGLE_NEWS_DATA = {
    title: "AmCham Uzbekistan Board of Directors Strategy Session",
    date: "17.11.21",
    img: Bratlar,
    text_conent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit nisi lacus, at porta velit facilisis a. Donec a varius ex, nec suscipit nunc. Fusce eu urna nec ipsum sodales posuere. Integer nec tellus id dolor lacinia scelerisque a ac velit. Ut a turpis et justo fringilla aliquet et ac nisi. Quisque feugiat eleifend magna sit amet porta. Proin vehicula laoreet lorem at tempus. Curabitur urna mi, porta quis tincidunt quis, gravida in neque. Sed augue tortor, dictum commodo condimentum non, bibendum in felis. Quisque commodo fringilla nisl in malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit nisi lacus, at porta velit facilisis a. Donec a varius ex, nec suscipit nunc. Fusce eu urna nec ipsum sodales posuere. Integer nec tellus id dolor lacinia scelerisque a ac velit. Ut a turpis et justo fringilla aliquet et ac nisi. Quisque feugiat eleifend magna sit amet porta. Proin vehicula laoreet lorem at tempus. Curabitur urna mi, porta quis tincidunt quis, gravida in neque. Sed augue tortor, dictum commodo condimentum non, bibendum in felis. Quisque commodo fringilla nisl in malesuada.",
    url: "",
    related: [
        {
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: President,
            url: "slug651530",
        },
        {
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: President,
            url: "slug651530",
        },
        {
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            img: President,
            url: "slug651530",
        },
    ],
};
export const EVENT_DATAS = {
    title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor.",
    img: EventBanner,
    date: "November 18, 2021",
    time: "10:00AM - 12:00PM",
    place: "Online",
    start_date: "Started",
    url: "/register-sample-url",
    extra_text: "Speakers",
    description:
        "Nullam hendrerit nisi lacus, at porta velit facilisis a. Donec a varius ex, nec suscipit nunc. Fusce eu urna nec ipsum sodales posuere. Integer nec tellus id dolor lacinia scelerisque a ac velit. Ut a turpis et justo fringilla aliquet et ac nisi. Quisque feugiat eleifend magna sit amet porta. Proin vehicula laoreet lorem at tempus. Curabitur urna mi, porta quis tincidunt quis, gravida in neque. Sed augue tortor, dictum commodo condimentum non, bibendum in felis. Quisque commodo fringilla nisl in malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus tortor. Nullam hendrerit nisi lacus, at porta velit facilisis a. Donec a varius ex, nec suscipit nunc. Fusce eu urna nec ipsum sodales posuere. Integer nec tellus id dolor lacinia scelerisque a ac velit. Ut a turpis et justo fringilla aliquet et ac nisi. Quisque feugiat eleifend magna sit amet porta. Proin vehicula laoreet lorem at tempus. Curabitur urna mi, porta quis tincidunt quis, gravida in neque. Sed augue tortor, dictum commodo condimentum non, bibendum in felis. Quisque commodo fringilla nisl in malesuada.",
    speakers: [
        {
            fullname: "Lazizbek Qudratov",
            job_title: "Agency for Strategic Development",
            img: Lazizbek,
        },
        {
            fullname: "Lazizbek Qudratov",
            job_title: "Agency for Strategic Development",
            img: Lazizbek,
        },
        {
            fullname: "Lazizbek Qudratov",
            job_title: "Agency for Strategic Development",
            img: Lazizbek,
        },
        {
            fullname: "Lazizbek Qudratov",
            job_title: "Agency for Strategic Development",
            img: Lazizbek,
        },
    ],
    other_events: [
        {
            date: "18.11.2021",
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            place: "Online",
            time: "3:00PM",
        },
        {
            date: "18.11.2021",
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            place: "Online",
            time: "3:00PM",
        },
        {
            date: "18.11.2021",
            title:
                "American Chamber of Commerce in Uzbekistan Board of Directors Elections 2022",
            place: "Online",
            time: "3:00PM",
        },
    ],
    tarifs: [
        {
            members: "154",
            status: "Platinum:",
            img: Platinum,
            meta_data: [
                "Only registered participants will be able to attend the seminar.",
                "Non-members of AmCham are also welcomed upon the registration.",
                "Number of offline seats is limited.",
            ],
        },
        {
            members: "65 ",
            status: "Gold:",
            img: Gold,
            meta_data: [
                "Only registered participants will be able to attend the seminar.",
                "Non-members of AmCham are also welcomed upon the registration.",
                "Number of offline seats is limited.",
            ],
        },
        {
            members: "70 ",
            img: Silver,
            status: "Silver:",
            meta_data: [
                "Only registered participants will be able to attend the seminar.",
                "Non-members of AmCham are also welcomed upon the registration.",
                "Number of offline seats is limited.",
            ],
        },
        {
            members: "32 ",
            status: "Bronze:",
            img: Bronze,
            meta_data: [
                "Only registered participants will be able to attend the seminar.",
                "Non-members of AmCham are also welcomed upon the registration.",
                "Number of offline seats is limited.",
            ],
        },
    ],
};
export const MEMBERSHIP_DATAS = {
    title: "Membership",
    data: [

        {
            title: "Air Products Central Asia Group LLC (APCAG)",
            id: 1,
            img: Air,
            status: "gold"
        },
        {
            title: "CNH Industrial",
            id: 1,
            img: CHN,
            status: "silver"
        },
        {
            title: "Air Products Central Asia Group LLC (APCAG)",
            id: 1,
            img: Air,
            status: "gold"
        },
        {
            title: "CNH Industrial",
            id: 1,
            img: CHN,
            status: "silver"
        },
        {
            title: "Coca-Cola Representative Office in Tashkent",
            id: 1,
            img: Cola,
            status: "gold"
        },
        {
            title: "CNH Industrial",
            id: 1,
            img: CHN,
            status: "silver"
        },
        {
            title: "Air Products Central Asia Group LLC (APCAG)",
            id: 1,
            img: Air,
            status: "gold"
        },
        {
            title: "Oriflame",
            id: 1,
            img: Oriflame,
            status: "silver"
        },
        {
            title: "Coca-Cola Representative Office in Tashkent",
            id: 1,
            img: Cola,
            status: "gold"
        }, {
            title: "CNH Industrial",
            id: 1,
            img: CHN,
            status: "silver"
        },
        {
            title: "Air Products Central Asia Group LLC (APCAG)",
            id: 1,
            img: Air,
            status: "gold"
        },
        {
            title: "Oriflame",
            id: 1,
            img: Oriflame,
            status: "silver"
        },
        {
            title: "Coca-Cola Representative Office in Tashkent",
            id: 1,
            img: Cola,
            status: "gold"
        },
        {
            title: "CNH Industrial",
            id: 1,
            img: Air,
            status: "silver"
        },
    ],
};
export const INNER_MEMBERSHIP_COMPANY = {
    title: "FE LLC ANGLESEY FOOD",
    image: Artel,
    status: "gold",
    description:
        "Anglesey Food is the operator of more then 50 Korzinka.uz and Korzinka.uz DISKONT branded stores throughout Uzbekistan and one of the leading supermarket chains in the country with plans to grow its presence significantly in the coming years.",
    infos: {
        director: "Hugo Minderhoud",
        address: "120,Kichik Halqa Yo’li street, 100015 Tashkent",
        email: "h.minderhoud@korzinka.uz",
        website: "https://korzinka.uz",
    },
};
export const MEMBERSHIP_BY_SECTORS = {
    title: "Membership by Sectors",
    data: [
        {
            icon: <Agroculture/>,
            title: "AGRICULTURE",
            id: 0,
            sectors: [
                {
                    name: "Agrico BV NL",
                    id: 0,
                },
                {
                    name: "MaxamCorp. International, S.L.",
                    id: 1,
                },
                {
                    name: "Central Asia Seed Company",
                    id: 2,
                },
                {
                    name: "The Dow Chemical Company",
                    id: 3,
                },
                {
                    name: "The Dow Chemical Company",
                    id: 3,
                },
                {
                    name: "The Dow Chemical Company",
                    id: 3,
                },
                {
                    name: "The Dow Chemical Company",
                    id: 3,
                },
                {
                    name: "The Dow Chemical Company",
                    id: 3,
                },
            ],
        },
        {
            icon: <Auditing/>,
            id: 1,
            title: "AUDITING / TAX",
            sectors: [
                {
                    name: "Audit company Ernst & Young LLC",
                    id: 0,
                },
                {
                    name: "CROWE TAC",
                    id: 1,
                },
                {
                    name: "Grant Thornton",
                    id: 2,
                },
                {
                    name: "PricewaterhouseCoopers (PwC)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Banking/>,
            id: 1,
            title: "BANKING / FINANCIAL INSTITUTIONS",
            sectors: [
                {
                    name: "JP Morgan Chase Bank N.A. Uzbekistan",
                    id: 0,
                },
                {
                    name: "TBC Bank in Uzbekistan",
                    id: 1,
                },
            ],
        },
        {
            icon: <Commerce/>,
            id: 3,
            title: "COMMERCE / RETAIL",
            sectors: [
                {
                    name: "“Lean Trade Solutions” LLC (LeBazar)",
                    id: 0,
                },
                {
                    name: "FE LLC Anglesey Food",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Consulting/>,
            id: 3,
            title: "CONSULTING / TRAINING / RECRUITMENT",
            sectors: [
                {
                    name: "““AFS-Research” LLC",
                    id: 0,
                },
                {
                    name: "Brunel UBK LLC",
                    id: 1,
                },
                {
                    name: "Global Translation Service",
                    id: 2,
                },
                {
                    name: "Antal Uzbekistan",
                    id: 3,
                },
                {
                    name: "DaVinci Management Consulting",
                    id: 4,
                },
            ],
        },
        {
            icon: <Consumer/>,
            id: 3,
            title: "CONSUMER PRODUCTS",
            sectors: [
                {
                    name: "‘Besan Besin Sanayi ve Ticaret Anonim Şirketi’ Branch in Azerbaijan Republic",
                    id: 0,
                },
                {
                    name: "British American Tobacco Uzbekistan",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Commerce/>,
            id: 3,
            title: "COMMERCE / RETAIL",
            sectors: [
                {
                    name: "“Lean Trade Solutions” LLC (LeBazar)",
                    id: 0,
                },
                {
                    name: "FE LLC Anglesey Food",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Agroculture/>,
            id: 3,
            title: "COMMERCE / RETAIL",
            sectors: [
                {
                    name: "“Lean Trade Solutions” LLC (LeBazar)",
                    id: 0,
                },
                {
                    name: "FE LLC Anglesey Food",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Agroculture/>,
            id: 3,
            title: "COMMERCE / RETAIL",
            sectors: [
                {
                    name: "“Lean Trade Solutions” LLC (LeBazar)",
                    id: 0,
                },
                {
                    name: "FE LLC Anglesey Food",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Agroculture/>,
            id: 3,
            title: "COMMERCE / RETAIL",
            sectors: [
                {
                    name: "“Lean Trade Solutions” LLC (LeBazar)",
                    id: 0,
                },
                {
                    name: "FE LLC Anglesey Food",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Agroculture/>,
            id: 3,
            title: "COMMERCE / RETAIL",
            sectors: [
                {
                    name: "“Lean Trade Solutions” LLC (LeBazar)",
                    id: 0,
                },
                {
                    name: "FE LLC Anglesey Food",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
        {
            icon: <Agroculture/>,
            id: 3,
            title: "COMMERCE / RETAIL",
            sectors: [
                {
                    name: "“Lean Trade Solutions” LLC (LeBazar)",
                    id: 0,
                },
                {
                    name: "FE LLC Anglesey Food",
                    id: 1,
                },
                {
                    name: "“PROMOSTOCK” LLC",
                    id: 2,
                },
                {
                    name: "LLC Darvoza Savdo ( Makro)",
                    id: 3,
                },
            ],
        },
    ],
};
export const CALENDAR_EVENTS = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(),
        end: new Date(2015, 3, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2015, 3, 9, 0, 0, 0),
        end: new Date(2015, 3, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2015, 3, 11),
        end: new Date(2015, 3, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2015, 3, 12, 12, 0, 0, 0),
        end: new Date(2015, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 14, 0, 0, 0),
        end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2015, 3, 12, 17, 0, 0, 0),
        end: new Date(2015, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2015, 3, 12, 20, 0, 0, 0),
        end: new Date(2015, 3, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Planning Meeting with Paige',
        start: new Date(2015, 3, 13, 8, 0, 0),
        end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
        id: 11.1,
        title: 'Inconvenient Conference Call',
        start: new Date(2015, 3, 13, 9, 30, 0),
        end: new Date(2015, 3, 13, 12, 0, 0),
    },
    {
        id: 11.2,
        title: "Project Kickoff - Lou's Shoes",
        start: new Date(2015, 3, 13, 11, 30, 0),
        end: new Date(2015, 3, 13, 14, 0, 0),
    },
    {
        id: 11.3,
        title: 'Quote Follow-up - Tea by Tina',
        start: new Date(2015, 3, 13, 15, 30, 0),
        end: new Date(2015, 3, 13, 16, 0, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 17, 23, 30, 0),
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2015, 3, 20, 19, 30, 0),
        end: new Date(2015, 3, 22, 2, 0, 0),
    },
    {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
        id: 15,
        title: 'Point in Time Event',
        start: now,
        end: now,
    },
    {
        id: 16,
        title: 'Video Record',
        start: new Date(2015, 3, 14, 15, 30, 0),
        end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
        id: 17,
        title: 'Dutch Song Producing',
        start: new Date(2015, 3, 14, 16, 30, 0),
        end: new Date(2015, 3, 14, 20, 0, 0),
    },
    {
        id: 18,
        title: 'Itaewon Halloween Meeting',
        start: new Date(2015, 3, 14, 16, 30, 0),
        end: new Date(2015, 3, 14, 17, 30, 0),
    },
    {
        id: 19,
        title: 'Online Coding Test',
        start: new Date(2015, 3, 14, 17, 30, 0),
        end: new Date(2015, 3, 14, 20, 30, 0),
    },
    {
        id: 20,
        title: 'An overlapped Event',
        start: new Date(2015, 3, 14, 17, 0, 0),
        end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
        id: 21,
        title: 'Phone Interview',
        start: new Date(2015, 3, 14, 17, 0, 0),
        end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
        id: 22,
        title: 'Cooking Class',
        start: new Date(2015, 3, 14, 17, 30, 0),
        end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
        id: 23,
        title: 'Go to the gym',
        start: new Date(2015, 3, 14, 18, 30, 0),
        end: new Date(2015, 3, 14, 20, 0, 0),
    },
]
export const MEMBERSHIP_TWO_MEMBERSHIP = {
    title: "MEMBER TO MEMBER OFFERS",
    heading_banner: Member2Member,
    description:
        "Dear members, <br/><br/> We are happy to introduce Member to Member discounts within the AmCham network (M2M) for February.<br/><br/> The AmCham Member Discounts Program is provided as a Membership Benefit. It serves as a mutually beneficial opportunity for both AmCham Members and AmCham Discount Partners.<br/><br/> <b>Cards holders will be able to purchase discounted service by presenting personal card with the service providers.</b> <br/><br/> This page will be updated constantly, so be sure to check back for updates.",
    companies: [
        {
            image: Promostock,
            title: "“Promostock” LLC",
            benefits_title: "Business gifts, promotional products and packaging",
            benefits_items: [
                "Discount: 15-20%",
                "Date this service is valid: 31.12.2022",
            ],
            contact_person: "Murad Mammadzada",
            phone: "+998 93 114 40 00",
        },
        {
            image: Promostock,
            title: "“Promostock” LLC",
            benefits_title: "Business gifts, promotional products and packaging",
            benefits_items: [
                "Discount: 15-20%",
                "Date this service is valid: 31.12.2022",
            ],
            contact_person: "Murad Mammadzada",
            phone: "+998 93 114 40 00",
        },
        {
            image: Promostock,
            title: "“Promostock” LLC",
            benefits_title: "Business gifts, promotional products and packaging",
            benefits_items: [
                "Discount: 15-20%",
                "Date this service is valid: 31.12.2022",
            ],
            contact_person: "Murad Mammadzada",
            phone: "+998 93 114 40 00",
        },
        {
            image: Promostock,
            title: "“Promostock” LLC",
            benefits_title: "Business gifts, promotional products and packaging",
            benefits_items: [
                "Discount: 15-20%",
                "Date this service is valid: 31.12.2022",
            ],
            contact_person: "Murad Mammadzada",
            phone: "+998 93 114 40 00",
        },
        {
            image: Promostock,
            title: "“Promostock” LLC",
            benefits_title: "Business gifts, promotional products and packaging",
            benefits_items: [
                "Discount: 15-20%",
                "Date this service is valid: 31.12.2022",
            ],
            contact_person: "Murad Mammadzada",
            phone: "+998 93 114 40 00",
        },
        {
            image: Promostock,
            title: "“Promostock” LLC",
            benefits_title: "Business gifts, promotional products and packaging",
            benefits_items: [
                "Discount: 15-20%",
                "Date this service is valid: 31.12.2022",
            ],
            contact_person: "Murad Mammadzada",
            phone: "+998 93 114 40 00",
        },
    ],
};
export const JOIN_US_DATAS = {
    title: "JOIN US",
    image: President,
    subtitle: "WELCOME TO THE CHAMBER",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia ligula. Nullam maximus neque nec tortor finibus, ac euismod lectus vulputate. Sed dolor nisi, congue maximus arcu sit amet, efficitur accumsan tellus. Pellentesque id ligula dapibus, lacinia tortor non, egestas purus. Nam eget odio turpis. Praesent id dapibus lectus. Curabitur tincidunt ligula sed tempor aliquet. Fusce egestas dui vitae mattis convallis. Aliquam lorem elit, facilisis sed lobortis vel, venenatis sit amet ipsum. Pellentesque semper elit a vehicula malesuada. Vestibulum id efficitur quam. Fusce bibendum risus dui, sed tincidunt enim aliquam sodales. Quisque tempus sem quis metus laoreet bibendum.",
    table: {
        title: "Membership Benefits",
        table_datas: [
            {
                key: "1",
                name: "Access to GoU contacts/ Regular Dialogue",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: <Checked/>,
            },
            {
                key: "2",
                name: "Access to resource library with market reports, white papers, board and committee minutes, etc.",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "3",
                name: "Business and Social networking",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "4",
                name: "Number of corporate emails in AmCham circulation list",
                silver: "2",
                gold: "3",
                platinum: '4',
                bronze: "1",
                non: '2'
            },
            {
                key: "5",
                name: "Member 2 Member Discount Program",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "6",
                name: "Regional Business Contacts",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "7",
                name: "Reliable market information",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "8",
                name: "Sponsorship opportunities (with the aim to promote your company)",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "9",
                name: "Weekly E-newsletter & information on Tenders",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "10",
                name: "Number of Company representatives eligible for M2M program",
                silver: "1",
                gold: '2',
                platinum: "3",
                bronze: "1",
                non: '1'
            },
            {
                key: "11",
                name: "Corporate logo on homepage of AmCham website",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: '',
                non: ''
            },
            {
                key: "12",
                name: "Company name and profile listed in annual members directory, brochure, and website",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum:<Checked/>,
                bronze: "",
                non: <Checked/>,
            },
            {
                key: "13",
                name: "Banner advertising at AmCham Website",
                silver: '',
                gold: <Checked/>,
                platinum:<Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "14",
                name: "Banner advertising in AmCham Weekly E-Newsletter",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "14",
                name: "Corporate news featured in AmCham newsletter",
                silver: "",
                gold: "",
                platinum: <Checked/>,
                bronze: '',
                non: ''
            },
            {
                key: "15",
                name: "Corporate news / advertising via email to all members (per quarter)",
                silver: "3",
                gold: "4",
                platinum: '5',
                bronze: "2",
                non: '3'
            },
            {
                key: "16",
                name: "1 complementary full-page advertisement in Business Connections per year",
                silver: '',
                gold:<Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "17",
                name: "Discount on advertising in Dynamic Uzbekistan",
                silver: "",
                gold: '',
                platinum: <Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "18",
                name: "Corporate news/advertisement circulation",
                silver: "Once a month",
                gold: "Every 2 week",
                platinum: "Weekly",
                bronze: 'Once a month',
                non: 'Once a month'
            },
            {
                key: "19",
                name: "Eligible to vote at General Assembly",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "20",
                name: "Eligible to be elected to BOD",
                silver: '',
                gold: <Checked/>,
                platinum:<Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "21",
                name: "Eligible to be selected to position of Committee Chair",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
            {
                key: "22",
                name: "Round tables and policy dialogue at highest level of the GoU",
                silver: "",
                gold: <Checked/>,
                platinum:<Checked/>,
                bronze: '',
                non: ''
            },
            {
                key: "23",
                name: "Business Advocacy and Lobbing",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: <Checked/>,
            },
            {
                key: "23",
                name: "Preparation of recommendations (white papers) to drive policy in certain areas",
                silver: <Checked/>,
                gold:<Checked/>,
                platinum: <Checked/>,
                bronze:<Checked/>,
                non: <Checked/>,
            },
            {
                key: "23",
                name: "The ability to provide comments on Uzbek Legislation through the AmCham committees",
                silver:<Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: <Checked/>,
            },
            {
                key: "23",
                name: "Exclusive meetings with visiting delegations and investors",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "23",
                name: "Number of delegates allowed to participate in AmCham committees (as observer)",
                silver: "1",
                gold: "2",
                platinum: '3',
                bronze: "1",
                non: '2'
            },
            {
                key: "23",
                name: "Participation in the US Trade Missions to Uzbekistan",
                silver: "2",
                gold: "3",
                platinum: '3',
                bronze: "1",
                non: '3'
            },
            {
                key: "23",
                name: "Building contacts with companies in the US (Business tours to the US)",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "23",
                name: "Regional Business Trips",
                silver: "",
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: "",
                non: ''
            },
            {
                key: "23",
                name: "Number of delegates allowed to participate at regular",
                silver: "1",
                gold: "2",
                platinum: '3',
                bronze: "1",
                non: '2'
            },
            {
                key: "23",
                name: "Access to all other events / services",
                silver: <Checked/>,
                gold: <Checked/>,
                platinum: <Checked/>,
                bronze: <Checked/>,
                non: <Checked/>,
            },
        ],
        table_columns: [
            {
                title: "Membership Benefits",
                dataIndex: "name",
            },
            {
                title: "Platinum",
                dataIndex: "platinum",
            },
            {
                title: "Gold",
                dataIndex: "gold",
            },
            {
                title: "Silver",
                dataIndex: "silver",
            },
            {
                title: "Bronze",
                dataIndex: "bronze",
            },
            {
                title: 'Non-resident',
                dataIndex: 'non'
            }
        ],
    },
    guides: [
        {
            title: "",
        },
    ],
};
export const ACCOUNT_DATAS = {
    sidebar: [
        {
            title: "My Profile",
            path: "",
        },

        {
            title: "My Events",
            path: "events",
        },
        {
            title: "Change Password",
            path: "password",
        },
        {
            title: "Company Settings",
            path: "password",
        },
    ],
};
export const APPLY_GUIDES = [
    {
        id: 1,
        title: "Fill in and submit the application form",
        text: "Please fill in all required fields. This will speed up the process of information processing and moving to the next step",
    },
    {
        id: 2,
        title: "Get follow up from the Chamber Team",
        text: "Be ready to provide additional information or references on company’s activities",
    },
    {
        id: 3,
        title:
            "The applications are submitted to the Board of Directors for consideration",
        text: "The Board of Directors reviews applications once a month during Board Meeting",
    },
    {
        id: 4,
        title: "Receive an invoice and pay Membership dues",
        text: "If the application is approved by the Board of Directors a Welcome Letter and invoice for Membership dues will be provided",
    },
    {
        id: 5,
        title: "Welcome to the Chamber Family",
        text: "Once an invoice is paid, new members will have an access to all Chamber membership benefits",
    },
    {
        id: 6,
        title:
            "If the application is not approved, the applicant will be informed as soon as decision is taken",
        text: "",
    },
];

