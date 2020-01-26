import React, { Component } from 'react'
import CartItemCard from './cartItemCard';
import { viewCartActions,displayCardTotalActions,buyOrderActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { Alert } from 'reactstrap';

export class ViewCartComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            orderData:null,
            totalData:null,
            visible:false,
            purchaseData:null
        }
    }

    componentDidMount() {
        this.props.viewCartActions.viewCart(this.state)
        this.props.displayCardTotalActions.displayCardTotal(this.state)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.orderData && nextProps.orderData !== prevState.orderData) {
            newProps.orderData = nextProps.orderData
        }

        if (nextProps.totalData && nextProps.totalData !== prevState.totalData) {
            newProps.totalData = nextProps.totalData
        }

        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.orderData){
            return{
               orderData:newProps.orderData,
            //    totalData:newProps.totalData
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    onBuyOrderClick=()=>{
        this.setState({
            visible:true
        })
        this.props.buyOrderActions.buyOrder(this.state)
    }

    onDismiss = () =>{
        this.setState({
            visible:false
        })
        window.location.reload();
    }

    onRefresh=()=>{
        window.location.reload();
    }

    render() {
        const {orderData,totalData}=this.state;
        console.log(totalData)
        return (
            <div className="bodycontainer">
                {!orderData ||orderData.length==0 ? <h1>No items in the cart</h1>: <div>{Array.isArray(orderData) && orderData && orderData.map(property => <CartItemCard refresh={this.onRefresh} key={property.craftId} props={property}/>)}
                    <hr/>
                    <table className="table table-striped table-dark">
                        <tr  class="bg-info">
                            <td>
                                <h1>Order Total</h1>
                            </td>
                            <td>
                                <h3>Rs.{totalData}.00</h3>
                            </td>
                        </tr>
                    </table>
                    <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                        {this.props.purchaseData}! Order Total: 
                    </Alert>
                    <button type="button" onClick={this.onBuyOrderClick} className="btn btn-success float-right">Buy</button><br/><hr/> </div>
                }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewCartActions: bindActionCreators(viewCartActions, dispatch),
        displayCardTotalActions: bindActionCreators(displayCardTotalActions, dispatch),
        buyOrderActions:bindActionCreators(buyOrderActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.HandleOrders,
        ...state.OrderTotal,
        ...state.BuyOrder
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (ViewCartComponent))
