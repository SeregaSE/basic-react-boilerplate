import { Link } from 'react-router-dom';

import Title from '@components/Title';

const About = () => {
    return (
        <>
            <Title>{`© all rights reserved. 2018-${new Date().getFullYear()}.`}</Title>
            <Link to="/">go to home</Link>
        </>
    );
};

export default About;
