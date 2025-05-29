import { LiaDesktopSolid } from "react-icons/lia";
import { CiGlobe } from "react-icons/ci";
import { SlLayers } from "react-icons/sl";
import { TbRosetteDiscount } from "react-icons/tb";

export const internetInfoCards=[
    {
        icon: <LiaDesktopSolid className="head-icon" />,
        heading: "Fiber",
        desc: "Some of the best internet providers in Texas offer speedy fiber internet services. They also avoid limiting data usage for their customers and give optimum reliability.",
        buttonText: "View all providers",
        buttonLink: "#"
    },  
    {
        icon: <CiGlobe className="head-icon" />,
        heading: "Wireless",
        desc: "Faster wireless internet services are available for most of the Texas citizens. The top Texas providers enable accessibility with easy installation procedures.",
        buttonText: "View all providers",
        buttonLink: "#"
    },
    {
        icon: <TbRosetteDiscount className="head-icon" />,
        heading: "Cable",
        desc: "Texas internet providers also deliver services to Texans in the form of cable internet. Cable internet [ethernet] is one of the fastest methods to access the internet with high speeds.",
        buttonText: "Compare providers",
        buttonLink: "#"
    },
]