import "./watch-card.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WatchCard = ({ id, img, title, desc }) => {
  return (
    <div className="watch-card" key={id}>
      <Image src={img} alt="thumbnail" />

      <div className="watch-card-content">
        <h4 className="title">
          {title.before}
          {title.links.map((item, index) => (
            <span key={index}>
              <Link href={item.path}>{item.name}</Link>
            </span>
          ))}
          {title.after}
        </h4>
        <p className="desc">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WatchCard;
