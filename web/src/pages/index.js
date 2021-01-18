import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {useQuery, gql}

// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/mynotes' component={MyNotes} />
                <Route path='/favorites' component={Favorites} />
                <Route path="/note/:id" component={NotePage} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
            </Layout>
        </Router>
    );
};

export default Pages;