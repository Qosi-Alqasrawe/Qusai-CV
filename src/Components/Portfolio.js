import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (project) {
      return (
        <div key={project.title} className="card">
          <img src={project.image} alt={project.title} className="card-image" />
          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" className="read-more">
              See Project <span className="arrow">→</span>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <h1>Check Out Some of My Projects</h1>
      <div className="portfolio-container">{projects}</div>
    </section>
  );
};

export default Portfolio;
