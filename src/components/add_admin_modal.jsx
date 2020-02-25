import React, { Component } from 'react'
import { Modal ,Button} from 'react-bootstrap'
import { addAdminActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import {Form, FormGroup, Label, Input} from 'reactstrap';
import { Alert } from 'reactstrap'

export class AddAdminModal extends Component {
    constructor(props){
        super(props);
        this.state={ 
            email:null,
            username:null,
            password:null,
            confirm_pass:null,
            current_admin_pass:null,
            visible:false,
            SignUpData:null
        }
    }

    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handleUsername=(e)=>{
        this.setState({username:e.target.value})
    }
    
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    handleConfirmPassword=(e)=>{
        this.setState({confirm_pass:e.target.value})
    }

    handleCurrentAdminPassword=(e)=>{
        this.setState({current_admin_pass:e.target.value})
    }

    handleSignUpBtnClick=(e)=>{
        e.preventDefault();
        // debugger
        this.props.addAdminActions.addAdmin(this.state)
        this.setState({
            visible:true
        })
    }

    onDismiss = () =>{
        this.setState({
            visible:false
        })
        this.props.onHide()
    }

    render() {
        return (
            <div>
                <Modal {...this.props} animation={false}>

                    <Modal.Body>
                    <Form onSubmit={this.loginhandler}>
                                <h1><span className="font-weight-bold">C&#8476;&#8491;ft Store &#9752;</span></h1>
                                <h2 className="text-center">&#43; New Admin</h2><hr/>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input onChange={this.handleEmail} type="email" placeholder="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input onChange={this.handleUsername} type="text" placeholder="username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input onChange={this.handlePassword} type="password" placeholder="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Confirm Password</Label>
                                    <Input onChange={this.handleConfirmPassword} type="password" placeholder="Confirm Password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Current Admin Password</Label>
                                    <Input onChange={this.handleCurrentAdminPassword} type="password" placeholder="Your Password" />
                                </FormGroup>
                                <Button onClick={this.handleSignUpBtnClick} className="btn-lg btn-dark btn-block" type="submit">Register</Button>
                            </Form>
                            <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
                        {this.props.SignUpData}
                    </Alert>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAdminActions: bindActionCreators(addAdminActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.SignUp,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAdminModal))
