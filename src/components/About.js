import profile from '../assets/image.jpg';

function About() {
  return (
    <section id="about">
      <img src={profile} alt="Abirami J" />
      <h2>About Me</h2>
      <p>
        Hi! I’m <strong>Abirami J</strong>, a curious mind passionate about Artificial Intelligence and Data Science, 
        currently pursuing my pre-final year at <strong>Anna University Regional Campus, Coimbatore</strong>.
        <br /><br />
        I love building smart solutions, exploring the power of machine learning, and turning data into actionable insights. 
        I enjoy blending creativity with logic — whether it’s coding interactive apps or analyzing complex datasets.
      </p>
    </section>
  );
}

export default About;
