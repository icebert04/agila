import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Futer from '../components/Futer'

export default function About() {
    return ( 
        <>
    <Hero >
    <Banner title='About us' subtitle='coming soon'>
        <Link to='/' className='btn-primary'>return home</Link>
    </Banner>
    </Hero>
        
    <Futer />
        </>
    )
}