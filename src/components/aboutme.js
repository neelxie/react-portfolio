import React, { Component } from "react";
import { Grid, Cell, Button } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid className="overall">
            <Cell col={4} className="personal-details">

              <h2 style={{ paddingTop: "2em" }}>Derrick Sekidde</h2>
              <h4 style={{ color: "grey" }}>Programmer</h4>
              <hr style={{ borderTop: "3px solid #00bf8f", width: "50%" }} />
              <p>
                I am an experienced innovative Software Developer. I have worked 
                building Backend systems in Python and Frontend systems with 
                Angular and React. I thrive on challenges and love tasks that
                push me out of my comfort-zone to learn new things. I am a life-long
                learner. I love unconventional ideas and humor. I occassionally write.
                I an ex-Civil engineer.
              </p>
              <hr style={{ borderTop: "3px solid #00bf8f", width: "50%" }} />
              <h5>Address</h5>
              <p>Kampala, Uganda</p>
              <h5>Phone</h5>
              <p>+256 (070) 582-8612</p>
              <h5>Email</h5>
              <p>kidricederek@gmail.com</p>
              <h5>Web</h5>
              <p>https://neelxie.github.io/react-portfolio</p>
              <hr style={{ borderTop: "3px solid #00bf8f", width: "50%" }} />
            </Cell>
            <Cell className="resume-right-col" col={8}>

              <h2 style={{ color: "white"}}>Experience</h2>

              <Experience
                startYear={2019}
                endYear={2019}
                companyName="Andela"
                jobName="Software Engineer"
                jobDescription="I worked in distributed cross-cultural teams as a Full Stack Developer for various projects undertaken by Andela such as Landville, Authors' Haven, Epic-Mail, Ireporter, Send-IT"
              />

              <Experience
                startYear={2019}
                endYear="On-Going"
                companyName="Landire"
                jobName="Full Stack Developer"
                jobDescription="I work as part of the engineering team that is building both Frontend and Backend features for a real-estate online Platform."
              />

              <Experience
                startYear={2018}
                endYear={2019}
                companyName="Coder Corp"
                jobName="Software Developer"
                jobDescription="Coder Corp was a digital solutions company that provided tech solutions to christian based organizations. I worked as a Software Developer and concentrated on Frontend Tasks."
              />

              <hr style={{ borderTop: "3px solid #001510" }} />

              <h2 style={{ color: "white"}}>Education</h2>

              <Education
                startYear={2019}
                endYear="On-going"
                schoolName="UDACITY"
                schoolQualification="Nano Degree"
                schoolMajor="Full Stack Development"
              />

              <hr style={{ borderTop: "3px solid #001510" }} />
              <h2 style={{ color: "white"}}>Skills</h2>
              <Button raised accent ripple>HTML/CSS3</Button>
              <Button raised accent ripple>Sass</Button>
              <Button raised accent ripple>Javascript</Button>
              <Button raised accent ripple>React</Button>
              <Button raised accent ripple>Angular</Button>
              <Button raised accent ripple>Python</Button>
              <Button raised accent ripple>Django</Button>
              <Button raised accent ripple>Flask</Button>
              <Button raised accent ripple>PHP/Laravel</Button>
              <Button raised accent ripple>Postgresql</Button>
              <Button raised accent ripple>Heroku</Button>
              <Button raised accent ripple>Git/Github</Button>
              <Button raised accent ripple>WordPress</Button>
              <Button raised accent ripple>Shopify</Button>
              <Button raised accent ripple>Travic CI/Circle CI</Button>
              <Button raised accent ripple>NPM/ Webpack/ Babel</Button>
              
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default About;
