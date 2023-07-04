import { AiFillHome } from "react-icons/ai"
import { FaInfoCircle } from "react-icons/fa"
import { BsQuestionCircleFill } from "react-icons/bs" 

export const MenuItems =  [
    {
        title: "Home",
        isUrl: true,
        url: "/",
        cName: "nav-links",
        icon: <AiFillHome className="iconItems"/>,
        subMenu: []
    },
    {
        title: "About",
        isUrl: false,
        url: "",
        cName: "nav-links",
        icon: <FaInfoCircle className="iconItems"/>,
        isSubMenu: true,
        subMenu: [
            {
                title: "Story so far",
                url: "/about/story",
                cNameDropLinks: "nav-dropLinks"
            },
            {
                title: "About Straw Hat",
                url: "/about/strawhat",
                cNameDropLinks: "nav-dropLinks" 
            },
            {
                title: "Organization or Group",
                url: "/about/organization",
                cNameDropLinks: "nav-dropLinks"
            },
            {
                title: "What is Devil Fruit",
                url: "/about/devilfruit",
                cNameDropLinks: "nav-dropLinks"
            },
            {
                title: "Birthday list",
                url: "/about/birthday",
                cNameDropLinks: "nav-dropLinks"
            }
        ]
    },
    {
        title: "Quiz",
        isUrl: true,
        url: "/quiz",
        cName: "nav-links",
        icon: <BsQuestionCircleFill className="iconItems"/>,
        subMenu: []
    }
]
