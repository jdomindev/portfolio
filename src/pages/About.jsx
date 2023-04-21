import "../styles/about.css";
import "../App.css";
import info from "../data/info";

function About() {
  return (
    <section className="container">
      <div className="main-card">
        <h2 className="about-header">About Me</h2>
        <div className="about-layout">
          <img className="img" src="/images/profile.png" alt="Jose Dominguez"></img>
          <div>
            <p className="about-text">
              Hey! My name is Jose Dominguez, my focus is being an energetic
              problem-solver and hard working team member to design and build
              high quality functional apps.
            </p>
            <details>
              <summary className="about-text"><strong>A little more about me...</strong></summary>
              <p className="about-text">
                My dev journey began through a full-stack coding bootcamp where my
                passion for technology was kindled. With my expanded skill set and eagerness to learn, I have been leading on a multitude of projects that now help
                organizations leverage their data for social good. My diverse
                background in government, non-profit, and consulting work gives me
                unique insight into applying different perspectives to solve
                business problems.
              </p>
              <p className="about-text">
                When I’m not busy coding, my interests include playing guitar,
                building vivariums, and playing video games. I am also fascinated
                with computer hardware and have built and troubleshooted several PCs for
                friends and family. I also enjoy going herping at my local and
                state parks when I have the chance.
              </p>
            </details>
            <div className="about-text">
              <h3 className="about-subheader">Technologies I'm working with:</h3>
              <div className="tech-container">
                {info.tech.skills.map((item) => {
                  return (
                    <div className="tech-tag">
                      {/* <i className={`${item.icon} fa-fw icon-size`}></i> */}
                      <h3 className="tech-name">{item.name}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
