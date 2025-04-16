import React from "react";
import "./blog-card.scss";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({
  thumbnail,
  title,
  shortDesc,
  postDate,
  writerName,
  writerImg,
  linkPath,
  buttonIcon,
}) => {
  linkPath = linkPath == null ? "#" : linkPath;
  return (
    <div className="blog-card">
      <div className="thumbnail">
        <Image src={thumbnail} alt="blog-thumbnail" />
        <Link href={linkPath}>
          <div className="icon-box">{buttonIcon}</div>
        </Link>
      </div>

      <div className="blog-details">
        <Link href={linkPath} className="blog-card-title">
          {title}
        </Link>
        <p className="blog-card-desc">{shortDesc}</p>
      </div>

      {postDate && writerName && writerImg !== undefined ? (
        <div className="meta-data">
          <div className="writer-info">
            {/* {writerImg} */}
            <Image src={writerImg} className="writer-pic" alt="writer-pictures" />
            <p>By {writerName}</p>
          </div>

          <p className="date">{postDate}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogCard;
