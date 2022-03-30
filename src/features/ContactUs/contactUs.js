import React from 'react';
import './contact_us.css'

export class ContactHeader extends React.Component{
    render(){
        return <h1 id='contact-header'>Contact Us</h1>
    }
}
export class ContactTeam extends React.Component{
    render(){
        return (
            <div id="contact-team">
            <p>GTV Team</p>
            <p>Gnosis To Victory</p>
        </div>
        )
    }
}
export class Information extends React.Component{
    render(){
        return (
            <div id="information">
                <section id='person'>
                    <i class="bi bi-person-fill"></i>
                    <p>Mr.Thanh</p>
                </section>
                <section id='phone'>
                    <i class="bi bi-telephone-fill"></i>
                    <p>+84 921852309</p>
                </section>
                <section id='email'>
                    <i class="bi bi-envelope-fill"></i>
                    <p>thanhHH1907@gmail.com</p>
                </section>
                <section id='address'>
                    <i class="bi bi-door-open-fill"></i>
                    <p>178 Quan Nhan, Thanh Xuan , Ha Noi , VietNam</p>
                </section>
        </div>
        )
    }
}