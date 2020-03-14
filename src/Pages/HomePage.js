import React from 'react';
import Hero from '../Components/Hero/Hero';
import {Link} from 'react-router-dom';

export default function HomePage() {
    return (
        <>
        <Hero>
        <Link to="PetsPage" className="btn hero-btn"> Find Your loved Cat</Link>
        </Hero>
        </>
    )
}
