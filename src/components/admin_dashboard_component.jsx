import React, { Component } from 'react'
import {Container} from "reactstrap";
import AddAdminModal from './add_admin_modal';
import Select from 'react-select';
import * as api from '../services/HTTPclient'
import * as endPoints from '../services/endpoints'
import { getNewUserActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { Table } from 'reactstrap';

export class AdminDashBoardComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            creatorData:null,
            modalShow: false,
            creatorsList:[],
            searchQuery:null,
            userData:null
        }
    }

    getFromBackend = (endpoint, id) => {
        let HTTPclient=api
        HTTPclient.get(
          endpoint + id //Creating URL with details and send  GET request to get data
        ).then(({ data }) => {
          console.log("getFromBackend",data);
        //   let arr = this.state.selectCallers;
        //   console.log(arr);
          console.log(data.length);
        //   let newArr = data.concat(data);
        //   console.log(newArr.length);
    
          console.log(data);
          this.setState({
            creatorsList: data // Set data comes from backend to local state
          });
    
        }).catch(err => {
    
        });
    }

    componentDidMount(){
        this.props.getNewUserActions.getNewUsers(this.state)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.userData && nextProps.userData !== prevState.userData) {
            newProps.userData = nextProps.userData
        }
        // if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
        //     return {
        //         hash: nextProps.location.hash
        //     }
        // }
        if(newProps.userData){
            return{
               loaded: true,
               userData:newProps.userData,
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }
    
    handleInputChange=(e)=>{
        console.log(e)
        this.setState({searchQuery:e})
        this.getFromBackend(endPoints.SEARCH_CREATOR, e)
    }

    handleChange = (selectedOptions) => {
        console.log(selectedOptions)
        this.props.props.history.push({
            pathname: '/creatorprofile',
            // search: '?query=abc',
            props: {
                creator: {
                    creatorId:selectedOptions.creatorId,
                    creatorName:selectedOptions.creatorName,
                    creatorEmail:selectedOptions.creatorEmail,
                    overallRating:selectedOptions.overallRating
                }
            }
        })
      }
    

    render() {
        console.log(this.state)
        let {userData}=this.state
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div>
                <Container>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">Search Creators
                                <Select options={Array.isArray(this.state.creatorsList) && this.state.creatorsList && this.state.creatorsList}
                                    closeMenuOnSelect={false}
                                    onInputChange={this.handleInputChange}
                                    labelKey="creatorName"
                                    valueKey="creatorEmail"
                                    getOptionLabel={option => {
                                        return option.creatorName + "-" + option.creatorEmail;
                                    }}
                                    getOptionValue={option => {
                                        return option.creatorEmail;
                                    }}
                                    value={this.state.selectedOptions}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                
                <br/><br/>
                <button type="button" className="btn btn-danger btn-xl" onClick={() => this.setState({ modalShow: true })}>&#43; New Admin</button>
                <hr/>
                <h3>Recently Registered Users</h3><br/>
                    <Table dark>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData && userData.map(property=>{
                                return(
                                    <tr>
                                        <td>{property.index}</td>
                                        <td>{property.userName}</td>
                                        <td>{property.userType}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
                <AddAdminModal show={this.state.modalShow} onHide={modalClose} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewUserActions: bindActionCreators(getNewUserActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.NewUsers,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminDashBoardComponent))
