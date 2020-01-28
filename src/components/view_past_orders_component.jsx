import React, { Component } from 'react'
import { getPastOrderActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import PastOrdersCard from './past_orders_card';

export class ViewPastOrdersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderData:null
        }
    }

    componentDidMount(){
        this.props.getPastOrderActions.getPastOrders(this.state)
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

    render() {
        let {orderData}=this.state
        console.log(this.state.orderData)
        return (
            <div className="bodycontainer">
                <h1>Past orders</h1>
                <hr/>
                {orderData && orderData.map(property => <PastOrdersCard  props={property}/>)}
                {/* key={property.craftId} */} <hr/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPastOrderActions: bindActionCreators(getPastOrderActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.HandleOrders,

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)  (ViewPastOrdersComponent))
