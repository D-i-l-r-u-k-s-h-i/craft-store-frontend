import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import CreatorDashboardComponent from '../components/creator_dashboard_component';
import Footer from '../components/footer';

export class CreatorsPage extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <CreatorDashboardComponent/>
                <Footer/>
            </div>
        )
    }
}

export default CreatorsPage
