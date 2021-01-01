import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/mynotes' component={MyNotes} />
                <Route path='/favorites' component={Favorites} />
                <Route path="/note/:id" component={NotePage} />
            </Layout>
        </Router>
    );
};

export default Pages;