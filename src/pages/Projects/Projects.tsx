import React, { useState } from 'react';
import './Projects.scss';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const projects = [
    {
      id: 1,
      name: "Intrusion Detection System",
      contributors: ["Srivatsan N", "Hemachandran S K"],
      domain: ["Cyber Security", "Deep Learning"],
      link: [
        {
          text: "GitHub Repository",
          url: "https://github.com/AbiXnash/An-Intrusion-Detection-System-using-Deep-Learning-models-on-UNSW_NB15-dataset",
        },
      ],
      description:
        "Developed a hybrid CNN-LSTM model achieving an accuracy of 97% on UNSW_NB15 dataset, reducing the false positive rate by 25% and boosting response time by 30%.",
      status: ["Completed"],
      keynote: [
        "Used TensorFlow and Keras to process 200,000+ data points in under 10 seconds.",
        "Integrated advanced anomaly detection with 97% recall for proactive threat response.",
        "Achieved adaptable real-time detection, minimizing vulnerability exposure time.",
      ],
    },
    {
      id: 2,
      name: "WiFi Trolly Bot using ESP32",
      contributors: ["Srivatvan N", "Hari Prasad S"],
      domain: ["Internet of Things", "Robotics"],
      link: [
        {
          text: "GitHub Repository",
          url: "https://github.com/AbiXnash/WiFi-Trolley-Bot-using-ESP32",
        },
      ],
      description:
        "Engineered a WiFi-controlled trolley bot using ESP32 to enhance automation in warehouses and factories by 40% and reduce downtime by 20%.",
      status: ["Completed"],
      keynote: [
        "Leveraged ESP32's dual-core processor to enable real-time data processing and control.",
        "Integrated a web server for remote control and monitoring, reducing manual intervention by 50%.",
        "Enabled real-time video streaming for remote surveillance and monitoring.",
      ],
    },
    {
      id: 3,
      name: "University International Conference and Event Management Website",
      contributors: null,
      domain: ["Web Development"],
      link: [
        { text: "Conference Site", url: "https://github.com/AbiXnash/conference-site" },
        { text: "Theta 24", url: "https://github.com/AbiXnash/Theta-24" },
        { text: "Theta 2k23", url: "https://github.com/AbiXnash/theta2k23" },
      ],
      description:
        "Created web application for SASTRA University's International Conference and National Level Event, enabling seamless event management and participant registration.",
      status: ["Completed"],
      keynote: [
        "Developed a user-friendly interface for event registration and payment processing, boosted user retention by 30%.",
        "Enabled real-time updates and notifications for participants and organizers.",
        "Optimized website performance for 1000+ concurrent users, ensuring seamless user experience.",
        "Integrated a secure payment gateway for hassle-free transactions.",
      ],
    },
  ];

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h1 style={{ display: 'block' }}>Projects</h1>
      <div className="container row">
        <div className={`${selectedProject ? "with-modal" : ""}`}>
          <div className="projects-container">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <h3 className="title">{project.name}</h3>
                <p className="contributors">
                  Contributors:&nbsp;
                  {project.contributors ? project.contributors.join(", ") : "Solo Project"}
                </p>
                <p className="domain">Domain: {project.domain.join(", ")}</p>
                {project.link &&
                  project.link.map((link, idx) => (
                    <a
                      key={idx}
                      className="source-link"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ))}
                <button className="see-more" onClick={() => openModal(project)}>
                  See More...
                </button>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>{selectedProject.name}</h2>
                <p>
                  <strong>Description:</strong> {selectedProject.description}
                </p>
                <p>
                  <strong>Status:</strong> {selectedProject.status.join(", ")}
                </p>
                <p>
                  <strong>Keynotes:</strong>
                </p>
                <ul>
                  {selectedProject.keynote.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <button className="close-button" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Projects;
