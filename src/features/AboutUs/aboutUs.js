import React from 'react';
import './about_us.css'


export class AboutTeam extends React.Component{
    render(){
        return (
            <section>
                <h1 id='about-header' >About Us</h1>
                <div id="team">
                    <p>GTV Team</p>
                    <p>Gnosis To Victory</p>
                </div>
            </section>
        )
    }
}

export class AboutCharacter extends React.Component{
    render(){
        return (
            <section className='character'>
                <div id="vu">
                    <h2>Ha Thanh Vu Nguyen</h2>
                    <h3>Leader</h3>
                    <h4>Fullstack Developer</h4>
                    <p>Write somethings</p>
                    <div className="icon-container" id='about-icon'>
                        <a href='/' target='_blank'><i className="bi bi-facebook"></i></a>
                        <a href='/' target='_blank'><i className="bi bi-twitter"></i></a>
                        <a href='/' target='_blank'><i className="bi bi-inbox"></i></a>
                        <a href='/' target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                </div>
                <div id="thanh">
                    <h2>Gia Thanh Nguyen</h2>
                    <h3>Designer</h3>
                    <h4>Frontend Developer</h4>
                    <p>Life is live in fucking earth.</p>
                    <div className="icon-container" id='about-icon'>
                        <a href='/' target='_blank'><i className="bi bi-facebook"></i></a>
                        <a href='/' target='_blank'><i className="bi bi-twitter"></i></a>
                        <a href='/' target='_blank'><i className="bi bi-inbox"></i></a>
                        <a href='/' target='_blank'><i className="bi bi-github"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

