import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';
import TableStandingsContainer from '../containers/TableStandingsContainer';
import Teams from './Teams/Teams';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <main>
                <Route exact path='/' />
                <Route path='/table' component={TableStandingsContainer} />
                <Route path='/teams' component={Teams} />
            </main>
            <Footer />
        </React.Fragment>
    </Router>
);

export default App;
