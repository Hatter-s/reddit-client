import React from 'react';

export class Header extends React.Component{
    render(){
        return <h1 id='header' >About Us</h1>
    }
}

export class Vu extends React.Component{
    render(){
        return (
            <div id="vu">
            <h2>Ha Thanh Vu Nguyen</h2>
            <h3>Leader</h3>
            <h4>Fullstack Developer</h4>
            <p>Write somethings</p>
        </div>
        )
    }
}
export class Team extends React.Component{
    render(){
        return (
            <div id="team">
            <p>GTV Team</p>
            <p>Gnosis To Victory</p>
        </div>
        )
    }
}
export class Thanh extends React.Component{
    render(){
        return (
            <div id="thanh">
            <h2>Gia Thanh Nguyen</h2>
            <h3>Designer</h3>
            <h4>Frontend Developer</h4>
            <p>Life is live in fucking earth.</p>
        </div>
        )
    }
}