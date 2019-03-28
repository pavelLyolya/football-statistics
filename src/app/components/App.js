import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header/Header';
import Footer from './Footer';
import TableStandingsContainer from '../containers/TableStandingsContainer';
import TeamsContainer from '../containers/TeamsContainer';
import TeamContainer from '../containers/TeamContainer';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <main>
                <Route exact path='/' component={Home} />
                <Route path='/table' component={TableStandingsContainer} />
                <Route exact path='/teams' component={TeamsContainer} />
                <Route path='/teams/:id' component={TeamContainer} />
            </main>
            <Footer />
        </React.Fragment>
    </Router>
);

export default App;
