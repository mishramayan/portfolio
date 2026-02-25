import React from "react";
// import ReactDOM from 'react-dom';
import "./about.css";
import ME from '../../assets/me-about2.png'
import {MdWork} from 'react-icons/md'
import {HiUsers} from 'react-icons/hi'
import {BsFolderFill} from 'react-icons/bs'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <HiUsers className="about__icon"/>
              <h5>Highest Qualification</h5>
              <small>MS in Information Systems</small>
            </article>

            <article className="about__card">
              <BsFolderFill className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Full Stack Engineer with 6+ years of experience in both software development and DevOps. 
            Built automated CI/CD pipelines and scalable MLOps systems for model deployment 
            using Terraform, Docker, and Python, while also developing production-ready 
            applications with Java, React, and TypeScript. Created an Azure DevOps extension 
            to streamline infrastructure management and deliver real-time resource insights. 
            Eager to apply combined expertise in development and automation to drive efficient, 
            cloud-native solutions for the team. 
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
