import React from "react";
import styles from "./ProjectStyles.module.css";
import pratama from "../../assets/pratama-2.png";
import mangan from "../../assets/mangan.png";
import campuscompass from "../../assets/campuscompass.png";
import umnstory from "../../assets/umnstory.png";
import ProjectCard from "../../common/ProjectCard";

function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pratama}
          link="https://pratamawheelstore.com/"
          h3="Pratama Wheel Store"
          p="Website Toko Velg"
        />
        <ProjectCard
          src={mangan}
          link="https://github.com/cowcow22/UTS_MAP_Mangan"
          h3="Mangan."
          p="Diary Food App"
        />
        <ProjectCard
          src={campuscompass}
          link="https://www.figma.com/proto/Ln3Go48woKVWkdaw4TG1uw/Prototype-CampusCompass---Proyek-HCI?node-id=1-5&p=f&t=3SHwM4xfoF5Yi3rX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=747%3A2787"
          h3="CampusCompass"
          p="Website Prototype Design"
        />
        <ProjectCard
          src={umnstory}
          link="https://github.com/jacques6810/UTS_MAP_LAB"
          h3="UMN Story"
          p="Simple Social Media App"
        />
      </div>
    </section>
  );
}

export default Project;
