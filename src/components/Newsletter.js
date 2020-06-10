import React from 'react'

export default function example() {
    return (
        <>
            <input type="hidden" name="form-name" value="contact"/>
            <input type="email" name="email" className="btn" placeholder="Enter Email..."/>
            <input type="submit" value="Subscribe" className="btn btn-primary"/>
        </>
    )
}