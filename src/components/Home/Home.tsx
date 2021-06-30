import React from 'react';
import { Link } from 'react-router-dom';
import Title from '@components/Title';

const Home = () => {
    return (
        <>
            <Title>basic react boilerplate</Title>
            <Link to="/about">go to about</Link>
        </>
    );
};

export default Home;
