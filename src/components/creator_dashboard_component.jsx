import React, { Component } from 'react'
import AddCraftComponent from './add_craft_component';
import Rater from 'react-rater'
import CreatorCraftItems from './creatorCraftItems';

export class CreatorDashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
        }
    }

    handleOrders=()=>{

    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="bodycontainer">
                <button type="button" className="btn btn-primary btn-circle btn-xl" onClick={() => this.setState({ modalShow: true })}>
                    &#43;New Craft</button> <button type="button" class="btn btn btn-warning btn-lg">Orders</button>
                {/* Rating:<Rater rating={3} total={5} interactive={false} /> */}
                <AddCraftComponent show={this.state.modalShow} onHide={modalClose} />
                <br />
                <CreatorCraftItems/>
            </div>
        )
    }
}

export default CreatorDashboardComponent
