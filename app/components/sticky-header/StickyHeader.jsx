import React from "react";
import "./sticky-header.scss";
import Link from "next/link";

const StickyHeader = () => {
  return (
    <div className="sticky-header">
      <p>
        Get Xfinity now
        <span>
          <Link href={"#"}> Call 1-855-399-1542</Link>
        </span>
      </p>
      <Link href={"#"}>Order Online</Link>
    </div>
  );
};

export default StickyHeader;
