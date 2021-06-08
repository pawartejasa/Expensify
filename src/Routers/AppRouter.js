import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashbordPage from '../Components/ExpenseDashbordPage';
import HelpexpensePage from '../Components/HelpexpensePage';
import EditexpensePage from '../Components/EditexpensePage';
import AddexpensePage from '../Components/AddexpensePage';
import NotFoundPage from '../Components/NotFoundPage';
import Header from '../Components/Header';
const AppRouter=()=>(
    <BrowserRouter>
       <div>
       <Header />
       <Switch>
       <Route path="/" component={ExpenseDashbordPage} exact={true}/>
       <Route path="/create" component={AddexpensePage}/>
       <Route path="/help" component={HelpexpensePage}/>
       <Route path="/edit" component={EditexpensePage}/>
       <Route component={NotFoundPage}/>
       </Switch>
       </div>
   </BrowserRouter>
);
export default AppRouter;