'use client'
import { createContext, useContext } from "react";

const blogData = [
    {
        id: 1,
        image: "./blog.webp",
        title: "Best Streaming Services 2023: Amazon Prime Video, Hulu, And More",
        desc: "Major league sports are always in season. If you’re a cord-cutter, make sure you’re set up with the right streaming service to get your game on.",
        author: "Randy Harward",
        date: "11 Jan 2022",
        slug: "best-streaming-services-2023"
    },
    {
        id: 2,
        image: "./blog.webp",
        title: "Best Streaming Services 2023: Amazon Prime Video, Hulu, And More",
        desc: "Major league sports are always in season. If you’re a cord-cutter, make sure you’re set up with the right streaming service to get your game on.",
        author: "Randy Harward",
        date: "11 Jan 2022",
        slug: "best-streaming-services-2024"
    },
    {
        id: 3,
        image: "./blog.webp",
        title: "Best Streaming Services 2023: Amazon Prime Video, Hulu, And More",
        desc: "Major league sports are always in season. If you’re a cord-cutter, make sure you’re set up with the right streaming service to get your game on.",
        author: "Randy Harward",
        date: "11 Jan 2022",
        slug: "best-streaming-services-2025"
    }
];


const BlogContext = createContext(blogData);


export const RootContext = ({ children }) => {
    return (
        <BlogContext.Provider value={blogData}>
            {children}
        </BlogContext.Provider>
    )
}


export const useContextData = () => useContext(BlogContext);