import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-user about__icon'></i>
                <h3 className="about__title">Name</h3>
                <span className="about__subtitle">Tanya Agrawal</span>
            </div>

            <div className="about__box">
                <i className='bx bx-map about__icon'></i>
                <h3 className="about__title">City</h3>
                <span className="about__subtitle">Indore,M.P,India</span>
            </div>

            <div className="about__box">
                <i className='bx bx-home about__icon'></i>
                <h3 className="about__title">University</h3>
                <span className="about__subtitle">SGSITS</span>
            </div>

            <div className="about__box">
                <i className='bx bx-book about__icon'></i>
                <h3 className="about__title">Degree</h3>
                <span className="about__subtitle">Btech in Computer Science</span>
            </div>

        
        </div>
    )
}

export default Info;