import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';
import Projects from './projects';
import Blog from './blog';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
    </Switch>
)

export default Main;