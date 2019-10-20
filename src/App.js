import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <layout>
        <Header title="Portofolio">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
      </layout>
      <div>Derek</div>
    </div>
  );
}

export default App;
