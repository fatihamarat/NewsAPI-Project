import React from 'react'
import Layout from '../components/Layout';

function AboutPage() {
  return (
    <Layout>
      <div className="container">
        <section id="cv">
          <div id="first">
            <h5 className="name">FATİH HAMARAT</h5>
            <h5 className="job">FRONTEND DEVELOPER</h5>
          </div>
          <div id="second">
            <div className="left">
              <span><strong>E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</strong> fatihhamarat@hotmail.com</span>
              <span><strong>Linkedin :</strong><a href="https://www.linkedin.com/in/fatih-hamarat-b571341a9/" target="_blank"> www.linkedin.com/in/fatih-hamarat-b571341a9/</a></span>
              <span><strong>GitHub &nbsp;&nbsp;&nbsp;:</strong><a href="https://github.com/fatihamarat" target="_blank"> https://github.com/fatihamarat</a></span>

              <h5>SUMMARY</h5>
            </div>
            <div className="right">
              <span><strong>Phone :</strong> +90 544 612 93 94</span>
              <span><strong>Address :</strong> KOCAELİ, TURKEY</span>
            </div>
          </div>
          <div id="parag">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experienced in IT and an expert front-end developer, interested in writing codes, skilled
              at developing complex solutions, creating responsive designs, possessing strong creative thinking skills,
              high energy and integrity.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Well Experience in HTML5 / CSS3, SCSS/SASS, Bootstrap5, Material UI, JavaScript, React JS,
              Redux, Tailwind, TypeScript, Python, Linux, Jira Software. Experienced in each phase of Software
              Development Life Cycle (SDLC) and Agile methodologies. Experienced in using Git as a version control
              system and GitHub as a repository.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ability to create algorithms effectively, and interact positively and communicate appropriately with
              team members. Quickly grasp new technologies and concepts to develop innovative and creative solutions
              to problems. A team player with willingness to take initiative and considerate in leading roles while ensuring
              inclusivity. Passionate about engaging with team members not only to work collaboratively also to share
              learning, experience sharing, improvement opportunities. Able to prioritize supporting others, smart-working
              practices and friendly work environment while comfortable working under timeline pressure with competitive
              creative and productive environment. Able to demonstrate transferable skills such as self-discipline,
              organizational, technical skills inherited from previous roles as system admin in different roles.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Always eager to learn various technologies, tools and libraries. Especially interested in the
              Frontend /Web Development, HTML, CSS, JS, React. Excited to learn new things and improve, lifetime
              student.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage;