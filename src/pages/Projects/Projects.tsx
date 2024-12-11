import arrow from '../../assets/arrow.svg';

const Projects = () => {
  const projects: {
    id: number,
    name: string,
    contributors: string[] | null,
    domain: string[],
    link: { text: string, url: string }[] | null,
    description: string,
    status: ["Completed" | "Ongoing" | "Upcoming"],
    keynote: string[]
  }[] = [
    {
      id: 1,
      name: "Intrusion Detection System",
      contributors: ["Srivatsan N", "Hemachandran S K"],
      domain: ["Cyber Security", "Deep Learning"],
      link: [{ text: "GitHub Repository", url: "https://github.com/AbiXnash/An-Intrusion-Detection-System-using-Deep-Learning-models-on-UNSW_NB15-dataset" }],
      description: "Developed a hybrid CNN-LSTM model achieving an accuracy of 97% on UNSW_NB15 dataset, reducing the false positive rate by 25% and boosting response time by 30%.",
      status: ["Completed"],
      keynote: [
        "Used TensorFlow and Keras to process 200,000+ data points in under 10 seconds.",
        "Integrated advanced anomaly detection with 97% recall for proactive threat response.",
        "Achieved adaptable real-time detection, minimizing vulnerability exposure time."
      ]
    },
    // Add other project data...
  ];

  return (
    <section className="projects" id="projects">
      <div className="container row">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h2 className="project-name">{project.name}</h2>
              {project.contributors && (
                <p className="project-contributors">
                  <strong>Contributors:</strong> {project.contributors.join(", ")}
                </p>
              )}
              <p className="project-domain">
                <strong>Domain:</strong> {project.domain.join(", ")}
              </p>
              {project.link && (
                <p className="project-links">
                  <strong>Links:</strong>{" "}
                  {project.link.map((link, key) => (
                    <span className="link-item" key={key}>
                      <a
                        className="arrow-link"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={arrow}
                          alt="Arrow"
                          style={{ marginRight: "5px", width: "16px", height: "16px" }}
                        />
                        {link.text}
                      </a>
                    </span>
                  ))}
                </p>
              )}
              <p className="project-description">{project.description}</p>
              <p className="project-status">
                <strong>Status:</strong> {project.status.join(", ")}
              </p>
              <ul className="project-keynotes">
                {project.keynote.map((keynote, key) => (
                  <li key={key}>{keynote}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
