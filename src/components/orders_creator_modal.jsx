import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import { Modal ,Button} from 'react-bootstrap'
import { getCreatorsOrdersActions,confirmDeliveryActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class OrdersCreatorModal extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData:null,
            deliveryData:null
        }
    }

    onDeleveredBtnClick = (id) =>{
        this.props.confirmDeliveryActions.confirmDelivery(id)
        // this.props.onHide()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.orderData && nextProps.orderData !== prevState.orderData) {
            newProps.orderData = nextProps.orderData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.orderData){
            return{
               loaded: true,
               orderData:newProps.orderData,
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    componentDidMount(){
        this.props.getCreatorsOrdersActions.getCreatorsOrders(this.state)
    }

    render() {
        console.log(this.state)
        let {orderData}=this.state

        return (
            <div>
                <Modal {...this.props} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Due Orders</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {orderData && orderData.map(property=>{
                            return (
                                <Alert color="info" role="alert" >
                                    <div>Date of purchase: {property.purchaseDate}</div>
                                    <div className="font-weight-bolder">{property.craftName} * {property.quantity} </div>
                                    <div>Customer: {property.username}</div>
                                    <button type="button" onClick={()=>this.onDeleveredBtnClick(property.orderCraftItemId)} class="btn btn-primary btn-sm float-right">DELIVERED</button>
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
        getCreatorsOrdersActions: bindActionCreators(getCreatorsOrdersActions, dispatch),
        confirmDeliveryActions: bindActionCreators(confirmDeliveryActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.HandleOrders,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)  (OrdersCreatorModal))
