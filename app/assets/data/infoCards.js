import { LiaDesktopSolid } from "react-icons/lia";
import { CiGlobe } from "react-icons/ci";
import { SlLayers } from "react-icons/sl";
// import { TbDiscount2 } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";

export const infoCards=[
    {
        icon: <LiaDesktopSolid className="head-icon" />,
        heading: "TV Service",
        desc: "Discover your favorite shows and movies on cable, satellite, and streaming services. We'll help you navigate these TV options, finding your preferred way to tune in and enjoy entertainment effortlessly.",
        buttonText: "View all providers",
        buttonLink: "#"
    },  
    {
        icon: <CiGlobe className="head-icon" />,
        heading: "Internet Service",
        desc: "Dive into the entertainment world with your favorite shows and movies on cable TV, satellite TV, and online streaming services. Let us simplify TV options, guiding you to indulge in your preferred content.",
        buttonText: "View all providers",
        buttonLink: "#"
    },
    {
        // icon: <TbDiscount2 className="head-icon" />,
        icon: <TbRosetteDiscount className="head-icon" />,
        heading: "Compare Providers",
        desc: "Dive into a universe of entertainment where your go-to shows and movies await across cable TV, satellite TV, and online streaming services. Let us explore TV options to find the ideal channel for your preferred vibes.",
        buttonText: "Compare providers",
        buttonLink: "#"
    },
    {
        icon: <SlLayers className="head-icon" />,
        heading: "Helpful Resources",
        desc: "Discover your favorite shows and movies across cable TV, satellite TV, and online streaming services. We'll guide you through these TV options, ensuring you find the perfect way to tune in to your favorites.",
        buttonText: "Browse all articles",
        buttonLink: "#"
    },
]