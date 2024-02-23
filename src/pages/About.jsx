import "../styles/about.css";
import "../App.css";
import info from "../data/info";

function About() {
  const pdfPath = "/images/bootcamp-certificate.pdf";

  return (
    <section className="container">
      <div className="about-container">
        <img
          className="profile-image"
          src="/images/profile.png"
          alt="Jose Dominguez"
        ></img>

        <div className="main-card">
          {/* <h2 className="about-header">About Me</h2> */}
          <div className="about-layout">
            <div>
              <div className="about-text">
                <h3 className="about-subheader">About Me</h3>
                <p>
                  Hey! My name is Jose, and I have had a lifelong passion for
                  computers. Growing up, I always found a way to be on a
                  computer, whether it was designing my own sites in Piczo or
                  playing click-and-point puzzle games. Today, my mission is to
                  design and build high quality functional apps that help make
                  people's lives easier. In 2021, I expanded my skill set
                  through a full-stack coding bootcamp, which is where my web
                  development journey began.
                </p>
                <br></br>
                <p>
                  Since then, I have been leading on a multitude of projects
                  that help organizations leverage their data for social good.
                  My diverse background in government, non-profit, and
                  consulting work gives me unique insight into applying
                  different perspectives to solve business problems.
                </p>
                {/* Growing up I had always found a way to be on a
                  computer, whether it was designing my own sites in Piczo or
                  playing click-and-point puzzle games. */}
                {/* , my focus is being an energetic
                  problem-solver and hard working team member to design and
                  build high quality functional apps.
                  My web development journey began through a full-stack coding bootcamp where my passion for technology was kindled. With my expanded skill set and eagerness to learn, I have been leading on a multitude of projects that now help organizations leverage their data for social good. My diverse background in government, non-profit, and consulting work gives me unique insight into applying different perspectives to solve business problems. */}
              </div>

              <div className="about-text">
                <h3 className="about-subheader">My Interests</h3>
                <div className="tech-container education-container">
                  <div className="education-link">
                    <i className="fa-solid fa-guitar education-icon"></i>
                    <p>Guitar</p>
                  </div>
                  <div className="education-link">
                    <i className="fa-solid fa-gamepad education-icon"></i>
                    <p>Video Games</p>
                  </div>
                  <div className="education-link">
                    <i className="fa-solid fa-frog education-icon"></i>
                    <p>Herping</p>
                  </div>
                  <div className="education-link">
                    <i className="fa-solid fa-laptop education-icon"></i>
                    <p>PC Hardware</p>
                  </div>
                </div>
              </div>
              {/* <details>
                <summary className="about-text">
                  <strong>A little more about me...</strong>
                </summary>
                <p className="about-text">
                  My dev journey began through a full-stack coding bootcamp
                  where my passion for technology was kindled. With my expanded
                  skill set and eagerness to learn, I have been leading on a
                  multitude of projects that now help organizations leverage
                  their data for social good. My diverse background in
                  government, non-profit, and consulting work gives me unique
                  insight into applying different perspectives to solve business
                  problems.
                </p>
                <p className="about-text">
                  When I’m not busy coding, my interests include playing guitar,
                  building vivariums, and playing video games. I am also
                  fascinated with computer hardware and have built and
                  troubleshooted several PCs for friends and family. I also
                  enjoy going herping at my local and state parks when I have
                  the chance.
                </p>
              </details> */}
              <div className="about-text">
                <h3 className="about-subheader">My Education</h3>
                <div className="tech-container education-container">
                  <a
                    className="education-link active"
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <i className="fa-solid fa-certificate education-icon"></i>
                    </span>
                    <div>
                      <h4 className="education-name">
                        Full Stack Web Development Bootcamp
                      </h4>
                      <h5 className="education-subname">
                        University of Pennsylvania
                      </h5>
                      <h5 className="education-subname">March 2022</h5>
                    </div>
                  </a>
                  <div className="education-link">
                    <i className="fa-solid fa-scroll education-icon"></i>
                    <div>
                      <h4 className="education-name">
                        Wildlife Ecology and Conservation, BS
                      </h4>
                      <h5 className="education-subname">
                        University of Delaware
                      </h5>
                      <h5 className="education-subname">December 2018</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-text">
                <h3 className="about-subheader">Technologies I work with</h3>
                <div className="tech-container">
                  {info.tech.skills.map((item) => {
                    return (
                      <div key={item.name} className="tech-tag">
                        {/* <i className={`${item.icon} fa-fw icon-size`}></i> */}
                        <h4 className="tech-name">{item.name}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
