import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
    return ( <section className ="error-page">
        <div className = "error-container ">
            <h1> OOPS .. this is dead end page</h1>
            <Link to="/">Back Home</Link>
        </div>
        </section>
    )
}