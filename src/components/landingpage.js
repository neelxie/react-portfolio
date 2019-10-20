import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1 className="myname">Sekidde Derrick Isaac</h1>

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS3 | Sass | JavaScript | Angular | React | Python | Django | Flask | Postgresql | PHP/Laravel | Writer</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="www.linkedin.com/in/derrick-tech-expert" rel="noopener noreferrer" target="_blank" alt="Linkedln">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/neelxie" rel="noopener noreferrer" target="_blank" alt="Github">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
        )
    }
}

export default Landing;