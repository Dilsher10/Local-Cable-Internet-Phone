'use client'
import React, { useState, Children } from "react";
import "./accordion.scss";

const Accordion = ({id, title, cssClass, children}) => {
  const [accordion, setAccordion] = useState(false);
  
  let accordionHandler = (i) => {
    return setAccordion(!i);
  };
  return (

<div className="accordion">
  <div key={id} className="item" >
    <h3 className="title" onClick={() => accordionHandler(accordion)}>
      <span>{accordion === true ? "-" : "+"}</span> {title}
    </h3>
    <div className={accordion === true ? cssClass + " show"  : cssClass}>
      {children}     
    </div>
  </div>
</div>

    
  );
};

export default Accordion;
