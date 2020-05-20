import {Button, Form, FormGroup, Label, Input,ButtonGroup,FormFeedback,FormText} from 'reactstrap';
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
            signupState:null,
            validate:{
                emailState:'',
                confirm_passState:'',
            },
            required_inputs:false
        }
    }
    
    checkRequiredInputs=()=>{
        const {email,username,password,confirm_pass,validate}=this.state

        if(email!=null && username !=null && password!=null && confirm_pass!=null && validate.emailState!='has-danger' && validate.confirm_passState!='has-danger'){
            this.setState({required_inputs:true})
            return true
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
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
        this.setState({ validate })

        this.setState({email:e.target.value})
        this.checkRequiredInputs()
    }
    handleUsername=(e)=>{
        this.setState({username:e.target.value})
        this.checkRequiredInputs()
    }
    
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
        this.checkRequiredInputs()
    }
    handleConfirmPassword=(e)=>{
        const { validate, password } = this.state
          if (password == e.target.value) {
            validate.confirm_passState = 'has-success'
          } else {
            validate.confirm_passState = 'has-danger'
          }
        this.setState({ validate })
        this.setState({confirm_pass:e.target.value})
        this.checkRequiredInputs()
    }

    handleSignUpBtnClick=(e)=>{
        e.preventDefault();
        debugger
        this.props.signUpActions.signUp(this.state)
    }

    render() {
        console.log(this.state)
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
                                    <Input onChange={this.handleEmail} type="email" placeholder="email" valid={ this.state.validate.emailState === 'has-success' } invalid={ this.state.validate.emailState === 'has-danger' } required/>
                                    <FormFeedback invalid>
                                        Uh oh! Looks like there is an issue with your email. Please input a correct email.
                                    </FormFeedback>
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
                                    <Input onChange={this.handleConfirmPassword} type="password" placeholder="Confirm Password" valid={ this.state.validate.confirm_passState === 'has-success' } invalid={ this.state.validate.confirm_passState === 'has-danger' } />
                                    <FormFeedback invalid>
                                        Passwords doesn't match. Sorry!
                                    </FormFeedback>
                                </FormGroup>
                                <Label>Sign Up as a &#9759;</Label>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.setState({ user_type: "CUSTOMER" })} active={this.state.user_type === "CUSTOMER"}>Regular user</Button>
                                    <Button color="primary" onClick={() => this.setState({ user_type: "CREATOR" })} active={this.state.user_type === "CREATOR"}>Craft creator</Button>
                                </ButtonGroup>
                                {this.state.required_inputs ? null:<FormText>All Fields are required to be filled.</FormText>}
                                <hr />
                                {this.state.required_inputs ? <Button onClick={this.handleSignUpBtnClick} className="btn-lg btn-dark btn-block" type="submit">Sign Up</Button>:<Button onClick={this.handleSignUpBtnClick} className="btn-lg btn-dark btn-block" type="submit" disabled>Sign Up</Button>}
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
