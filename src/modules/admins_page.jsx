import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import AdminDashBoardComponent from '../components/admin_dashboard_component';

export class AdminsPage extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                    <AdminDashBoardComponent props={this.props} />
                <Footer/>
            </div>
        )
    }
}

export default AdminsPage
