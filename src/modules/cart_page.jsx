import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import ViewCartComponent from '../components/view_cart_component';

export class CartPage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                <NavBarComponent/>
                <ViewCartComponent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CartPage
