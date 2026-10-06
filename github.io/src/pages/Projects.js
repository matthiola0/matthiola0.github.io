import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data, { categories } from '../data/projects';

const toId = (category) => category.toLowerCase().replace(/\s+/g, '-');

const Projects = () => (
  <Main title="Projects" description="Learn about Po-Yu Pan's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <div className="link-container">
            {categories.map((category) => (
              <h4 key={category}>
                <a href={`#${toId(category)}`}>{category}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {categories.map((category) => (
        <section className="project-category" key={category}>
          <div className="link-to" id={toId(category)} />
          <div className="title">
            <h3>{category}</h3>
          </div>
          {data
            .filter((project) => project.category === category)
            .map((project) => (
              <Cell data={project} key={project.title} />
            ))}
        </section>
      ))}
    </article>
  </Main>
);

export default Projects;
