import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className = {classes.Logo} style={{height: props.height, marginBottom: props.marginBottom}}>
        <img src={burgerLogo} alt="Eddie's Burgers" />
    </div>
);

export default logo;