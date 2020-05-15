import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import CreatorsProfile from '../components/creators_profile';

export class CreatorProfilePage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                <NavBarComponent/>
                <CreatorsProfile/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CreatorProfilePage
