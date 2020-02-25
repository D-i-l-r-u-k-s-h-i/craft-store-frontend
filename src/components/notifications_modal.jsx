import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import { Modal ,Button} from 'react-bootstrap'
import { getNotificationsActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class NotificationsModal extends Component {
    constructor(props){
        super(props);
        this.state={
            notificationData:null,
            
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.notificationData && nextProps.notificationData !== prevState.notificationData) {
            newProps.notificationData = nextProps.notificationData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.notificationData){
            return{
               loaded: true,
               notificationData:newProps.notificationData,
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    componentDidMount(){
        this.props.getNotificationsActions.getNotifications(this.state)
    }
    
    render() {
        console.log(this.state)
        let {notificationData}=this.state

        return (
            <div>
                <Modal {...this.props} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Due Orders</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {notificationData && notificationData.map(property=>{
                            return (
                                <Alert color="info" role="alert" >
                                    <div>{property.notification} - <span className="text-muted">{property.datetime}</span> -</div>
                                    
                                    {/* <button type="button" onClick={()=>this.onDeleveredBtnClick(property.orderCraftItemId)} class="btn btn-primary btn-sm float-right">DELIVERED</button> */}
                                    <hr/>
                                </Alert>
                            )
                        })} 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Done
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNotificationsActions: bindActionCreators(getNotificationsActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.HandleNotifications,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotificationsModal))
