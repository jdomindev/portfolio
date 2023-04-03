import "../styles/landing.css";
import "../App.css";

function Landing() {
  return (
    <section className="container">
        <div className="image-container">
            <img className="img-landing" src="images/profile.png" alt="Jose Dominguez"></img>
            <div>
                <h1 className="landing-header">Jose Dominguez</h1>
                <h2 className="landing-subheader">Web Developer</h2>
            </div>
            <h3 className="brand-statement">My aim is to build enjoyable user experiences that help people get the information they need with ease</h3>
        </div>
    </section>
  );
}

export default Landing;
