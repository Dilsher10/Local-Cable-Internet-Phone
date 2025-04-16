"use client"
import React from "react";
import Hero from "../components/hero/Hero";
import Link from "next/link";
import "./blog-card.scss";

export default function Blog() {

  const blogs = [
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
      slug: "best-streaming-services-2023"
    },
    {
      id: 3,
      image: "./blog.webp",
      title: "Best Streaming Services 2023: Amazon Prime Video, Hulu, And More",
      desc: "Major league sports are always in season. If you’re a cord-cutter, make sure you’re set up with the right streaming service to get your game on.",
      author: "Randy Harward",
      date: "11 Jan 2022",
      slug: "best-streaming-services-2023"
    }
  ]
  return (
    <div className="home">
      <Hero />
      <div className="section start-watching">
        <div className="head">
          <h2 className="sect-heading">
            Lights, Camera, Action: It's Time to Start <span>watching!</span>
          </h2>
          <p className="sect-desc">
            Calling all super fans! Celebrate your passion with our TV guides,
            ensuring you catch all the entertainment you love—from pro football
            and live news to streaming originals.
          </p>
        </div>
        <div className="cards">
          {
            blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="thumbnail">
                  <img src={blog.image} alt="blog-thumbnail" />
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="icon-box">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="upright-arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>
                    </div>
                  </Link>
                </div>
                <div className="blog-details">
                  <Link href={`/blog/${blog.slug}`} className="blog-card-title">
                    {blog.title}
                  </Link>
                  <p className="blog-card-desc">
                    {blog.desc}
                  </p>
                </div>
                <div className="meta-data">
                  <div className="writer-info">
                    <p>By {blog.author}</p>
                  </div>
                  <p className="date">
                    {blog.date}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
