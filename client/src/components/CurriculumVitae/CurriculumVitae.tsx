import React, { useRef } from 'react';

export const CurriculumVitae = () => {
    const titleRef = useRef(document.createElement("div"));
    const aboutRef = useRef(document.createElement("div"));
    const experienceRef = useRef(document.createElement("div"));

    const handleScrollToView = (ref: any) => {
        ref.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="cv-container">
            <div className="nav-menu">
                <div onClick={() => handleScrollToView(titleRef)}>
                    To Title
                </div>

                <div onClick={() => handleScrollToView(aboutRef)}>
                    About
                </div>

                <div onClick={() => handleScrollToView(experienceRef)}>
                    Experience
                </div>
            </div>

            <div ref={titleRef} className="title">
                <h1>Daniel</h1>
                <h2>Mesu</h2>
            </div>

            <div ref={aboutRef} className="sub-title">
                <h1>About</h1>
                <h2>Me</h2>
            </div>

            <div ref={experienceRef} className="sub-title">
                <h1>Experience</h1>
            </div>

        </div>
    )
}
