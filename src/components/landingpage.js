import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1 className="myname"><span className="text-name">Sekidde</span> Derrick </h1>

              <h2>Full Stack Web Developer</h2>

            <hr/>

            <p className="text-name">HTML/CSS3 | JavaScript | Angular | React | Python | Django | Flask | Writer</p>
            
            <hr/>
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