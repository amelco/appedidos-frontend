import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pedido from './pages/Pedido';
import New from './pages/New';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Pedido} />
            <Route path='/New' component={New} />
        </Switch>
    );
}

export default Routes;