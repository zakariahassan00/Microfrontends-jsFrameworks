import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './Landing';
import Pricing from './Pricing';

export default () => {
    
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/pricing" exact component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>   
    </div>
}