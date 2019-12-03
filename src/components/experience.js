import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{color: 'white'}} >{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell> <h3 className="companyName">{this.props.companyName}</h3></Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p className="job-info">{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
