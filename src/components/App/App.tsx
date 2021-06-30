import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '@components/About';
import Home from '@components/Home';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </>
    );
};

export default App;
