import React, { useState } from 'react';
import './project.css';
import { Data } from './Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3, centerMode: true },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3, centerMode: true },
  tablet: { breakpoint: { max: 768, min: 576 }, items: 2 },
  mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
};

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (project) => {
    setModalData(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="testimonial container section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="testimonial__container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="testimonial__card"
      >
        {Data.map((project) => (
          <div className="testimonial__card" key={project.id} onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} className="testimonial__img" />
            <h3 className="testimonial__name">{project.title}</h3>
          </div>
        ))}
      </Carousel>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={modalData.image} alt={modalData.title} className="modal-image" />
            <h3 className="modal-title">{modalData.title}</h3>
            <p className="modal-description">{modalData.description}</p>
            {/* Demo Button */}
            {modalData.demoUrl && (
              <a href={modalData.demoUrl} target="_blank" rel="noopener noreferrer" className="modal-demo-button">
                View Demo
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
