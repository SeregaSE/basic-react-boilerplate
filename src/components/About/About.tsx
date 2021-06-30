import React from 'react';
import { Link } from 'react-router-dom';
import Title from '@components/Title';

const About = () => {
    return (
        <>
            <Title>&copy; all rights reserved. 2018.</Title>
            <Link to="/">go to home</Link>
        </>
    );
};

export default About;
