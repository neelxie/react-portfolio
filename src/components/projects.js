import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                fontFamily: "monospace",
              }}
            >
              LandVille
            </CardTitle>
            <CardText className="card-text">
              LandVille is an online platform where Africans in the diaspora can sign up,
              browse and purchase real estate properties. Django
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/landvilleng/landville-backend-web-api/blob/develop/'}>GitHub</Button>
              <Button colored className="demo-button" href={'https://landville-backend-web-api.herokuapp.com/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Authors' Haven
            </CardTitle>
            <CardText className="card-text">
              Authors' Haven is an online platform similar to medium where users can
              signup and create, read, edit, rate, like and delete articles. Django
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/ah-backend-realers/tree/develop/'}>GitHub</Button>
              <Button colored className="demo-button" href={'https://ah-backend-realers.herokuapp.com/swagger'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Epic Mail
            </CardTitle>
            <CardText className="card-text">
              Epic Mail is a communication application that allows registered users to communicate
              to each other and also create groups. Flask
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/epic-mail/tree/challenge3'}>GitHub</Button>
              <Button colored className="demo-button" href={'https://app.swaggerhub.com/apis-docs/GreatestCoderEverApi/Epic-mail/1.0.0'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              iReporter
            </CardTitle>
            <CardText className="card-text">
              iReporter is an application that allows every citizen to raise an issue that needs 
              community or leadership authority to intervene and solve it. Flask
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/ireport-api/tree/challenge3'}>GitHub</Button>
              <Button colored className="demo-button" href={'https://my-ireporta.herokuapp.com/api/v2/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Send-IT
            </CardTitle>
            <CardText className="card-text">
              This is an application where users signup to have their packages delivered, and
              also be able to monitor the updates of their packages enroute. Flask
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/sendApi/tree/develop'}>GitHub</Button>
              <Button colored className="demo-button" href={'https://senditcourierapp.herokuapp.com/api/v1/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Store Manager
            </CardTitle>
            <CardText className="card-text">
              Store Manager is an application for a business where store personell can
              log in, add stock, check store and make sales. Flask
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/Store-Manager'}>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Embeera Yo
            </CardTitle>
            <CardText className="card-text">
              Embeera Yo is a health app. It helps registered users to follow a healthy diet composed of
              local foods with the ability to know beforehand the calories intake per meal. Django
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={''}>Private Repo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              LandVille
            </CardTitle>
            <CardText className="card-text">
              LandVille is an online platform where Africans in the diaspora can sign up,
              browse and purchase real estate properties. Angular
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/landvilleng/landville-frontend'}>GitHub</Button>
              <Button colored className="demo-button" href={'https://landville-frontend.herokuapp.com/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Authors' Haven
            </CardTitle>
            <CardText className="card-text">
              Authors' Haven is an online platform similar to medium where users can
              signup and create, read, edit, rate, like and delete articles. React
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/ah-frontend-realers'}>GitHub</Button>
              <Button colored className="demo-button" href={'authors-frontend-staging.herokuapp.com/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Impala Global Logistics
            </CardTitle>
            <CardText className="card-text">
              This is an Application for the tech innovation Logistics startup company for their flagship product
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={''}>Private Repo</Button>
              <Button colored className="demo-button" href={'https://impala-logistics.herokuapp.com/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Epic-Mail
            </CardTitle>
            <CardText className="card-text">
              This is a React implementation of the Epic Mail application built on a Django Backend.
              This was built by WebPack, React and Babel.
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/EpicMailReactJs/tree/develop'}>Github</Button>
              <Button colored className="demo-button" href={'https://epicmailreact.herokuapp.com/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Portofolio
            </CardTitle>
            <CardText className="card-text">
              This project for my portofolio which is done in plain React. This is the actual project that you are navigating.
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/react-portfolio'}>Github</Button>
              <Button colored className="demo-button" href={'https://neelxie.github.io/react-portfolio/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              Node-Sass Portofolio
            </CardTitle>
            <CardText className="card-text">
              This is my Portofolio. This was my first attempt at making a Portofolio. It is a 
              Node-Sass Project.
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://www.github.com/neelxie/portofolio'}>GitHub</Button>
              <Button colored className="demo-button" href={'https://neelxie.github.io/portfolio/index.html'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              MakeWish Site
            </CardTitle>
            <CardText className="card-text">
              This is a project for the MakeWish Tech Solutions Company website. MakeWish provides ICT-related
              solutions like Software development, Digital Marketing, Networking and others. PHP/Laravel
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={''}>Private Repo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              InterConn
            </CardTitle>
            <CardText className="card-text">
              InterConn is an application platform to interconnect farmers and sellers. It requires users to be
              registered in-order to buy or sell produce. PHP/Laravel
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={''}>Private Repo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} className="project-card">
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
              }}
            >
              TicTacToe
            </CardTitle>
            <CardText className="card-text">
              Tictatoe is the popular tictactoe game implementation. It is an online game please try it out.
              It is plain Vanilla Javascript, CSS3 and HTML.
            </CardText>
            <CardActions border>
              <Button colored className="git-button" href={'https://github.com/neelxie/tictactoe/tree/ft-draft'}>Github</Button>
              <Button colored className="demo-button" href={'https://neelxie.github.io/tictactoe/UI/'}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } 
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Backend</Tab>
          <Tab>Frontend</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
