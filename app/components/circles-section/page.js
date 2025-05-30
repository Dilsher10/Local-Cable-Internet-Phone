"use client"
import React, { useState } from 'react';
import './circle.css';

export const CircleSection = () => {
    const defaultTitle = 'Mesh Network';
    const defaultDesc =
        'Some of the fastest internet service providers offer Mesh network service. This will help to counter the dead spots for internet signals within the place.';

    const [title, setTitle] = useState(defaultTitle);
    const [desc, setDesc] = useState(defaultDesc);

    const updateContent = (newTitle, newDesc) => {
        setTitle(newTitle);
        setDesc(newDesc);
    };

    const resetContent = () => {
        setTitle(defaultTitle);
        setDesc(defaultDesc);
    };

    return (
        <div className='section circle-main'>
            <h2>Texas Internet Features for Home WI-FI</h2>
            <p>Here are the top Texas internet features available for home Wi-Fi usage.</p>
            <div className="circle-sec">
                <div className="left">
                    <h3
                        id="main-title"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p id="main-desc">{desc}</p>
                    <button className="btn">Talk to an Expert</button>
                </div>
                <div className="right">
                    <div
                        className="circle resilience"
                        onMouseOver={() =>
                            updateContent(
                                'Full Control',
                                'Control what the internet is being used for on electronic devices. Keep a full check on your kids internet activity.'
                            )
                        }
                        onMouseOut={resetContent}
                    >
                        Full Control
                    </div>
                    <div
                        className="circle sustainability"
                        onMouseOver={() =>
                            updateContent(
                                'Extensive Coverage',
                                'Have full access to the home Wi-Fi with fast speed, wide coverage, and strong signals.'
                            )
                        }
                        onMouseOut={resetContent}
                    >
                        Extensive Coverage
                    </div>
                    <div
                        className="circle transparency"
                        onMouseOver={() =>
                            updateContent(
                                'Advanced Security',
                                'Keep an eye on the security of your network. Be aware of the speed, number of connected devices, and performance.'
                            )
                        }
                        onMouseOut={resetContent}
                    >
                        Advanced Security
                    </div>
                    <div className="center-icon">!</div>
                </div>
            </div>
        </div>
    );
};
