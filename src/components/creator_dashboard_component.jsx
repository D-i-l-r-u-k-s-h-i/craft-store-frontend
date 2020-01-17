import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import AddCraftComponent from './add_craft_component';

export class CreatorDashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
        }
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div>
                <ButtonToolbar>
                    <Button varient='primary'
                        onClick={() => this.setState({ modalShow: true })}>
                        Add New Craft
                    </Button>
                    <AddCraftComponent show={this.state.modalShow} onHide={modalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}

export default CreatorDashboardComponent
