import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { updateCraftActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class UpdateCraftComponent extends Component {
    constructor(props){
        super(props);
        this.state={ 
            craftid:null,
            name:null,
            price:null,
            image:null,
            quantity:null,
            shortDesc:null,
            longDesc:null,
            type:null,
            category:"Other",
            availability:null,
            // craftData:null,
        }
    }

    handleCraftName=(e)=>{
        this.setState({name:e.target.value,craftid:this.props.props.craftId})
    }
    handlePrice=(e)=>{
        this.setState({price:e.target.value,craftid:this.props.props.craftId})
    }
    
    handlequantity=(e)=>{
        this.setState({quantity:e.target.value,craftid:this.props.props.craftId})
    }
    handleShortDesc=(e)=>{
        this.setState({shortDesc:e.target.value,craftid:this.props.props.craftId})
    }

    handlelongDesc=(e)=>{
        this.setState({longDesc:e.target.value,craftid:this.props.props.craftId})
    }

    handleUrl=(e)=>{
        this.setState({image:e.target.value,craftid:this.props.props.craftId})
    }

    // fileChangedHandler = (event) => {
    //     this.setState({ image: event.target.files[0] })
    //     console.log(this.state.image)
    // }

    handleChange=(e)=>{
        this.setState({category:e.target.value,craftid:this.props.props.craftId})
    }

    handleCheckBox=(e)=>{
        console.log(e.target.value)
        this.setState({availability:e.target.value,craftid:this.props.props.craftId})
    }

    handleUpdateBtnClick=(e)=>{
        e.preventDefault();
        
        this.props.updateCraftActions.updateCraft(this.state)
        this.props.onHide()
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {/* {property.vehicleName} */}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.loginhandler}>
                            <h1><span className="font-weight-bold">C&#8476;&#8491;ft Store &#9752;</span></h1>
                            <h2 className="text-center">Edit and Update Craft</h2><hr />
                            <FormGroup>
                                <Label>Craft Name/Title</Label>
                                <Input onChange={this.handleCraftName} type="text" placeholder={this.props.props&&this.props.props.ciName} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleCheckBox} type="checkbox" />{' '}
                                    Is Available
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input value={this.state.category} onChange={this.handleChange} type="select" name="select" id="exampleSelect">
                                    <option>Scrapbooking</option>
                                    <option>Sewing and quilting</option>
                                    <option>Kids craft</option>
                                    <option>Beading</option>
                                    <option>Embroidery</option>
                                    <option>Drawing</option>
                                    <option>Quilling</option>
                                    <option>Woodcraft</option>
                                    <option>Crochet & knitting</option>
                                    <option>Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <legend>Type</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input onClick={() => this.setState({ type: "READY_MADE" })} type="radio" name="radio1" />{' '}
                                        Ready Made
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input onClick={() => this.setState({ type: "CRAFT_KIT" })} type="radio" name="radio1" />{' '}
                                        Craft Kit
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input onChange={this.handlePrice} type="text" placeholder={this.props.props&&this.props.props.ciPrice} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Quantity</Label>
                                <Input onChange={this.handlequantity} type="text" placeholder={this.props.props&&this.props.props.itemQuantity} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Short description</Label>
                                <Input onChange={this.handleShortDesc} type="text" placeholder={this.props.props&&this.props.props.shortDescription} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Long description</Label>
                                <Input onChange={this.handlelongDesc} type="textarea" placeholder={this.props.props&&this.props.props.longDescription} />
                            </FormGroup>
                            {/* for now to add img urls */}
                            <FormGroup>
                                <Label>Image URL</Label>
                                <Input onChange={this.handleUrl} type="text" placeholder={this.props.props&&this.props.props.img} />
                            </FormGroup>

                            {/* <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input type="file" name="file" onChange={this.fileChangedHandler} id="exampleFile" />
                                <FormText color="muted">
                                    Add image of your craft here
                                    </FormText>
                            </FormGroup> */}
                            <Button onClick={this.handleUpdateBtnClick} className="btn-lg btn-dark btn-block" type="submit">Update</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCraftActions: bindActionCreators(updateCraftActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllCraft,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (UpdateCraftComponent))
