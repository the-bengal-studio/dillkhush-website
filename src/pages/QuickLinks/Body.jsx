import React from 'react'
import { Link } from "react-router-dom";

function Body ()
{
    return (
        <section id="about">
            <div class="ab">
                <div class="about-body">
                    <h1 style={ { fontSize: '4rem' } } className='h1'>Privacy Policy</h1>
                    <h4 style={ { fontSize: '1.6rem', fontStyle: 'italic' } } className='h4'>Last updated September 06, 2023</h4>
                    <Link to={ "/privacy-policy" }><button class="ab-but">Read More</button></Link>
                </div>
            </div>
        </section> )
}

export default Body