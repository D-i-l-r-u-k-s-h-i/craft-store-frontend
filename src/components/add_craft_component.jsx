import {Button, Form, FormGroup, Label, Input,FormText,FormFeedback} from 'reactstrap';
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
            type:null,
            category:"Other",
            // craftData:null,
            addCraftState:null,
            selectedFile:null,
            validate:{
                priceState:'',
                quantityState:''
            },
            required_inputs:false
        }
    }
    
    checkRequiredInputs=()=>{
        const {name,price, quantity,shortDesc, longDesc, image,selectedFile, validate}=this.state

        if(name!=null && price!=null && quantity!=null && selectedFile !=null && shortDesc!=null && longDesc!=null && validate.priceState!='has-danger' && validate.quantityState!='has-danger'){
            this.setState({required_inputs:true})
            return true
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
        this.checkRequiredInputs()
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

        this.setState({price:e.target.value})
        this.checkRequiredInputs()
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

        this.setState({quantity:e.target.value})
        this.checkRequiredInputs()
    }
    handleShortDesc=(e)=>{
        this.setState({shortDesc:e.target.value})
        this.checkRequiredInputs()
    }

    handlelongDesc=(e)=>{
        this.setState({longDesc:e.target.value})
        this.checkRequiredInputs()
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
        this.checkRequiredInputs()
    }

    handleChange=(e)=>{
        this.setState({category:e.target.value})
        this.checkRequiredInputs()
    }

    handleAddBtnClick=(e)=>{
        e.preventDefault();
        // debugger
        // console.log(this.state.selectedFile)
        let {name,price,quantity,shortDesc,longDesc,type,category,selectedFile,image} =this.state

        const data = new FormData() 
        data.append('imgFile', selectedFile,selectedFile.name)
        
        data.append('b64image',image)
        data.append('ciName',name)
        data.append('ciPrice',price)
        data.append('itemQuantity', quantity)
        data.append('shortDescription', shortDesc)
        data.append('longDescription', longDesc)
        data.append('type', type)
        data.append('category', category)

        this.props.addCraftActions.addCraft(data)
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

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.loginhandler}>
                            <h1><span className="font-weight-bold">C&#8476;&#8491;ft Store &#9752;</span></h1>
                            <h2 className="text-center">Add Crafts</h2><hr />
                            <FormGroup>
                                <Label>Craft Name/Title</Label>
                                <Input onChange={this.handleCraftName} type="text" name="ciName" placeholder="Craft Name" />
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
                                <Input onChange={this.handlePrice} type="number" name="ciPrice" placeholder="Price per item" 
                                valid={this.state.validate.priceState === 'has-success'} invalid={this.state.validate.priceState === 'has-danger'}/>
                                <FormFeedback invalid>
                                    The price should be only numerical
                            </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Quantity</Label>
                                <Input onChange={this.handlequantity} type="number" name="itemQuantity" placeholder="No. of items" 
                                valid={this.state.validate.quantityState === 'has-success'} invalid={this.state.validate.quantityState === 'has-danger'}/>
                                <FormFeedback invalid>
                                    The quantity should be only in numerical form
                            </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Short description</Label>
                                <Input onChange={this.handleShortDesc} type="text" name="shortDescription" placeholder="Short description" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Long description</Label>
                                <Input onChange={this.handlelongDesc} type="textarea" name="longDescription" placeholder="Long description" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input type="file" name="imgFile" onChange={this.fileChangeHandler} /** id="exampleFile"*/ />
                                <FormText color="muted">
                                    Add image of your craft here
                                    </FormText>
                            </FormGroup>
                            {this.state.required_inputs ?<Button onClick={this.handleAddBtnClick} className="btn-lg btn-dark btn-block" type="submit">Add</Button>:<Button onClick={this.handleAddBtnClick} className="btn-lg btn-dark btn-block" type="submit" disabled>Add</Button>}
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
        ...state.AllCraft,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddCraftComponent))
