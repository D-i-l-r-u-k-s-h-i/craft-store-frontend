import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import ViewPastOrdersComponent from '../components/view_past_orders_component';

export class ViewAllOrdersPage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                <NavBarComponent/>
                <ViewPastOrdersComponent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ViewAllOrdersPage
