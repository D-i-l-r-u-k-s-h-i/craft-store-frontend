import {Button, Form, FormGroup, Label, Input,FormText} from 'reactstrap';
import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { addCraftActions } from '../actions'
import { Modal } from 'react-bootstrap'

export class AddCraftComponent extends Component {

    constructor(props){
        super(props);
        this.state={ 
            name:null,
            price:null,
            image:null,
            quantity:null,
            shortDesc:null,
            longDesc:null,
            addCraftState:null
        }
    }
    

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        if(prevState.addCraftState===null){
            return{
                addCraftState: nextProps.craftData
            }
        }else return null
    }

    
    handleCraftName=(e)=>{
        this.setState({name:e.target.value})
    }
    handlePrice=(e)=>{
        this.setState({price:e.target.value})
    }
    
    handlequantity=(e)=>{
        this.setState({quantity:e.target.value})
    }
    handleShortDesc=(e)=>{
        this.setState({shortDesc:e.target.value})
    }

    handlelongDesc=(e)=>{
        this.setState({longDesc:e.target.value})
    }

    handleUrl=(e)=>{
        this.setState({image:e.target.value})
    }

    // fileChangedHandler = (event) => {
    //     this.setState({ image: event.target.files[0] })
    //     console.log(this.state.image)
    // }

    handleAddBtnClick=(e)=>{
        e.preventDefault();
        // debugger
        console.log(this.props)
        this.props.addCraftActions.addCraft(this.state)
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
                            <h2 className="text-center">Add Crafts</h2><hr />
                            <FormGroup>
                                <Label>Craft Name/Title</Label>
                                <Input onChange={this.handleCraftName} type="text" placeholder="Craft Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input onChange={this.handlePrice} type="text" placeholder="Price per item" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Quantity</Label>
                                <Input onChange={this.handlequantity} type="text" placeholder="No. of items" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Short description</Label>
                                <Input onChange={this.handleShortDesc} type="text" placeholder="Short description" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Long description</Label>
                                <Input onChange={this.handlelongDesc} type="textarea" placeholder="Long description" />
                            </FormGroup>
                            {/* for now to add img urls */}
                            <FormGroup>
                                <Label>Image URL</Label>
                                <Input onChange={this.handleUrl} type="text" placeholder="Image URL" />
                            </FormGroup>

                            {/* <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input type="file" name="file" onChange={this.fileChangedHandler} id="exampleFile" />
                                <FormText color="muted">
                                    Add image of your craft here
                                    </FormText>
                            </FormGroup> */}
                            <Button onClick={this.handleAddBtnClick} className="btn-lg btn-dark btn-block" type="submit">Add</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        addCraftActions: bindActionCreators(addCraftActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.AddCraft,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddCraftComponent))
