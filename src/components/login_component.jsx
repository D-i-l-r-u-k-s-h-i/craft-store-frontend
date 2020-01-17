import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {GoogleLoginButton} from 'react-social-login-buttons';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { loginActions } from '../actions'

export class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            uname:null,
            pass:null,
            loginState:null
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        if(prevState.loginState===null){
            return{
                loginState: nextProps.LoginData
            }
        }else return null
    }

    handleUsername=(e)=>{
        this.setState({uname:e.target.value})
    }

    handlePassword=(e)=>{
        this.setState({pass:e.target.value})
    }

    handleloginBtnClick=(e)=>{
        e.preventDefault();
        // debugger
        this.props.loginActions.login(this.state)
        
    }

    render() {
        return (
            <div>
                <Form className="login-form">
                    <h1><span className="font-weight-bold">C&#8476;&#8491;ft Store &#9752;</span></h1>
                    <h2 className="text-center">Welcome</h2>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input onChange={this.handleUsername} type="text" placeholder="Username"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input onChange={this.handlePassword} type="password" placeholder="Password"/>
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={this.handleloginBtnClick} type="submit">Log in</Button>
                    <div className="text-center pt-3">Or continue with Google</div>
                    {/* <div>{this.props.msg}</div> */}
                    <GoogleLoginButton className="mt-3 mb-3"/>
                    <div className="text-center">
                        <a href="/signup">Sign Up</a>
                        <span className="p-2">|</span>
                        <a href="/forgot-password">Forgot Password</a>
                    </div>
                    </Form>
            </div>
        )
    }
}
function mapDispatchToProps (dispatch){
    return{
        loginActions: bindActionCreators(loginActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.login,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginComponent))