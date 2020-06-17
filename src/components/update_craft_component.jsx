import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import {Button, Form, FormGroup, Label, Input, FormText,FormFeedback} from 'reactstrap';
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
            type:this.props.props && this.props.props.type,
            category:this.props.props && this.props.props.category,
            availability:null,
            selectedFile:null,
            validate:{
                priceState:'',
                quantityState:''
            },
            required_inputs:false,
            isChecked:true
        }
    }

    handleCraftName=(e)=>{
        this.setState({name:e.target.value,craftid:this.props.props.craftId})
    }
    handlePrice=(e)=>{
        const priceRex =  /^[0-9]+$/;
        const { validate } = this.state
          if (priceRex.test(e.target.value)) {
            validate.priceState = 'has-success'
          } else {
            validate.priceState = 'has-danger'
          }
        this.setState({ validate })
        this.setState({price:e.target.value,craftid:this.props.props.craftId})
    }
    
    handlequantity=(e)=>{
        const priceRex =  /^[0-9]+$/;
        const { validate } = this.state
          if (priceRex.test(e.target.value)) {
            validate.quantityState = 'has-success'
          } else {
            validate.quantityState = 'has-danger'
          }
        this.setState({ validate })
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

    fileChangeHandler = (event) => {
        console.log(event.target.files)
        
        this.setState({
            selectedFile: event.target.files[0]
        });

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            this.setState({image: reader.result});
        };
        
    }

    handleChange=(e)=>{
        this.setState({category:e.target.value,craftid:this.props.props.craftId})
    }

    handleCheckBox=(e)=>{
        console.log(e.currentTarget.value)

        if(this.props.props && this.props.props.availabilityStatus==false || this.props.props && this.props.props.availabilityStatus=='false'){
            this.setState({isChecked:true})
        }
        else{
            this.setState({isChecked:false})
        }

        this.setState({isChecked:!this.state.isChecked, availability:e.currentTarget.value,craftid:this.props.props.craftId})
    }

    handleUpdateBtnClick=(e)=>{
        e.preventDefault();
        let {name,price,quantity,shortDesc,longDesc,type,category,selectedFile,availability,craftid,image} =this.state

        const data = new FormData() 
        selectedFile && data.append('imgFile', selectedFile,selectedFile.name)

        data.append('craftId',craftid)
        image && data.append('b64image',image)
        name && data.append('ciName',name)
        price && data.append('ciPrice',price)
        quantity && data.append('itemQuantity', quantity)
        shortDesc && data.append('shortDescription', shortDesc)
        longDesc && data.append('longDescription', longDesc)
        type && data.append('type', type)
        category && data.append('category', category)
        availability && data.append('availabilityStatus',availability)

        this.props.updateCraftActions.updateCraft(data)
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
                                <Input onChange={this.handleCraftName} type="text" name="ciName" defaultValue={this.props.props&&this.props.props.ciName} placeholder={this.props.props&&this.props.props.ciName} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input onChange={this.handleCheckBox} name="availabilityStatus" type="checkbox" value={this.state.isChecked}/>{'Is Available'}
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input value={this.state.category} onChange={this.handleChange} type="select" name="category" id="exampleSelect">
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
                                        <Input onClick={() => this.setState({ type: "READY_MADE" })} type="radio" name="type" />{' '}
                                        Ready Made
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input onClick={() => this.setState({ type: "CRAFT_KIT" })} type="radio" name="type" />{' '}
                                        Craft Kit
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input onChange={this.handlePrice} defaultValue={this.props.props&& parseFloat(this.props.props.ciPrice)} type="number" name="ciPrice" placeholder={this.props.props&&this.props.props.ciPrice}
                                valid={this.state.validate.priceState === 'has-success'} invalid={this.state.validate.priceState === 'has-danger'} />
                            <FormFeedback invalid>
                                    The price should be only numerical
                            </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Quantity</Label>
                                <Input onChange={this.handlequantity} type="number" defaultValue={this.props.props&& parseInt(this.props.props.itemQuantity)}/** */ name="itemQuantity" placeholder={this.props.props&&this.props.props.itemQuantity} 
                                valid={this.state.validate.quantityState === 'has-success'} invalid={this.state.validate.quantityState === 'has-danger'}/>
                            <FormFeedback invalid>
                                    The quantity should be only in numerical form
                            </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Short description</Label>
                                <Input onChange={this.handleShortDesc} type="text" name="shortDescription" defaultValue={this.props.props&&this.props.props.shortDescription} placeholder={this.props.props&&this.props.props.shortDescription} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Long description</Label>
                                <Input onChange={this.handlelongDesc} type="textarea" name="longDescription" defaultValue={this.props.props&&this.props.props.longDescription} placeholder={this.props.props&&this.props.props.longDescription} />
                            </FormGroup>
    
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                {/* accept="image/*" */}
                                <Input type="file" name="imgFile" onChange={this.fileChangeHandler} /** id="exampleFile"*/ />
                                <FormText color="muted">
                                    Add image of your craft here
                                    </FormText>
                            </FormGroup>
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
