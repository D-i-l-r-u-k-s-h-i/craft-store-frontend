import React, { Component } from 'react'
import {Container} from "reactstrap";
import AddAdminModal from './add_admin_modal';
import Select from 'react-select';
import * as api from '../services/HTTPclient'
import * as endPoints from '../services/endpoints'
// import {Link} from 'react-router-dom'

export class AdminDashBoardComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            creatorData:null,
            modalShow: false,
            creatorsList:[],
            searchQuery:null
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
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div>
                <Container>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
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
                </Container>
                <AddAdminModal show={this.state.modalShow} onHide={modalClose} />
            </div>
        )
    }
}

export default AdminDashBoardComponent
