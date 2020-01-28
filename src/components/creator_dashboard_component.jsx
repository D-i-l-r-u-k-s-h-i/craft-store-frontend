import React, { Component } from 'react'
import AddCraftComponent from './add_craft_component';
import Rater from 'react-rater'
import CreatorCraftItems from './creatorCraftItems';
import OrdersCreatorModal from './orders_creator_modal';

export class CreatorDashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            ordersModalShow:false
        }
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let ordersModalClose = () => this.setState({ ordersModalShow: false });
        return (
            <div className="bodycontainer">
                <button type="button" className="btn btn-primary btn-circle btn-xl" onClick={() => this.setState({ modalShow: true })}>
                    &#43;New Craft</button> <button type="button" className="btn btn btn-warning btn-lg" onClick={() => this.setState({ ordersModalShow: true })}>Orders</button>
                {/* Rating:<Rater rating={3} total={5} interactive={false} /> */}
                <AddCraftComponent show={this.state.modalShow} onHide={modalClose} />
                <OrdersCreatorModal show={this.state.ordersModalShow} onHide={ordersModalClose}/>
                <br />
                <CreatorCraftItems/>
            </div>
        )
    }
}

export default CreatorDashboardComponent
