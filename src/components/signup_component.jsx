import {Button, Form, FormGroup, Label, Input,ButtonGroup} from 'reactstrap';
import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { signUpActions } from '../actions'

export class SignupComponent extends Component {

    constructor(props){
        super(props);
        this.state={ 
            email:null,
            username:null,
            password:null,
            confirm_pass:null,
            user_type:null,
            signupState:null
        }
    }
    

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        if(prevState.signupState===null){
            return{
                signupState: nextProps.SignUpData
            }
        }else return null
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

    handleSignUpBtnClick=(e)=>{
        e.preventDefault();
        debugger
        this.props.signUpActions.signUp(this.state)
    }

    render() {
        return (
            <div className='background_container'>
                <div className='app-card app-card-content'>
                    <div className='app-card-content-inner'>
                        <div className="app-form-item">
                            <Form onSubmit={this.loginhandler}>
                                <h1><span className="font-weight-bold">C&#8476;&#8491;ft Store &#9752;</span></h1>
                                <h2 className="text-center">Sign Up</h2><hr/>
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
                                <Label>Sign Up as a &#9759;</Label>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.setState({ user_type: "CUSTOMER" })} active={this.state.user_type === "CUSTOMER"}>Regular user</Button>
                                    <Button color="primary" onClick={() => this.setState({ user_type: "CREATOR" })} active={this.state.user_type === "CREATOR"}>Craft creator</Button>
                                </ButtonGroup><hr />
                                <Button onClick={this.handleSignUpBtnClick} className="btn-lg btn-dark btn-block" type="submit">Sign Up</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        signUpActions: bindActionCreators(signUpActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.SignUp,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignupComponent))
