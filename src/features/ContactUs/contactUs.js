import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';

export class Header extends React.Component{
    render(){
        return <h1 id='header'>Contact Us</h1>
    }
}
export class Teams extends React.Component{
    render(){
        return (
            <div id="teams">
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
                    <PersonIcon></PersonIcon>
                    <p>Mr.Thanh</p>
                </section>
                <section id='phone'>
                    <LocalPhoneIcon></LocalPhoneIcon>
                    <p>+84 921852309</p>
                </section>
                <section id='email'>
                    <AlternateEmailIcon></AlternateEmailIcon>
                    <p>thanhHH1907@gmail.com</p>
                </section>
                <section id='address'>
                    <BusinessIcon></BusinessIcon>
                    <p>178 Quan Nhan, Thanh Xuan , Ha Noi , VietNam</p>
                </section>
        </div>
        )
    }
}