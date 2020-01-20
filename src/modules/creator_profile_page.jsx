import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import CreatorsProfile from '../components/creators_profile';

export class CreatorProfilePage extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <CreatorsProfile/>
                <Footer/>
            </div>
        )
    }
}

export default CreatorProfilePage
