import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import AllCraftItems from '../components/allCraftItems';
import Footer from '../components/footer';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                <NavBarComponent/>
                <AllCraftItems/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage
