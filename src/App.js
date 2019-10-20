import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Sekidde Derrick Isaac</Link>} scroll>
          <Navigation>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
          </Navigation>
        </Header>
        <Content className="page-content">
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
