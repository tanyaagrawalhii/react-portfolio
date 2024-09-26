import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification_button qualification_active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification_button qualification_active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification_content qualification_content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Btech Degree</h3>
                                <span className="qualification__subtitle">SGSITS - 7.99CGPA</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">CBSE 12th Board</h3>
                                <span className="qualification__subtitle">93.2%</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">CBSE 10th Board</h3>
                                <span className="qualification__subtitle">94.16%</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">JEE Percentile</h3>
                                <span className="qualification__subtitle">91.98</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021-2022
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification_content qualification_content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Member of SGSITS Computer Club</h3>
                                <span className="qualification__subtitle">Selected in top five percent of the department</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Dance Member in KshitijClub</h3>
                                <span className="qualification__subtitle">SGSITS</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification