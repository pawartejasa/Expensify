import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header=()=>(
    <header>
    <h1>Exemplify</h1>
    <NavLink to="/" activeClassName="active" >Dashboard</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expenses</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help Expenses</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expenses</NavLink>
    </header>
 );
 export default Header;