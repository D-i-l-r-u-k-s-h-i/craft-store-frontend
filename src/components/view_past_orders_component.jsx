import React, { Component } from 'react'
import { getPastOrderActions,craftsForReviewActions,creatorForRatingActions,addRatingActions,addReviewActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import PastOrdersCard from './past_orders_card';
import { Card, CardText,CardImg,CardTitle,Row,Col} from 'reactstrap';
import Rater from 'react-rater'

export class ViewPastOrdersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderData:null,
            craftData:null,
            RatingsData:null,
            ReviewData:null,
            CreatorData:null,
            review:null,
            rating:0,
            craftId:null
        }
    }

    componentDidMount(){
        this.props.getPastOrderActions.getPastOrders(this.state)
        this.props.craftsForReviewActions.getCraftForReview(this.state)
        this.props.creatorForRatingActions.getCreatorForRating(this.state)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.orderData && nextProps.orderData !== prevState.orderData) {
            newProps.orderData = nextProps.orderData
        }
        if (nextProps.craftData && nextProps.craftData !== prevState.craftData) {
            newProps.craftData = nextProps.craftData
        }
        if (nextProps.CreatorData && nextProps.CreatorData !== prevState.CreatorData) {
            newProps.CreatorData = nextProps.CreatorData
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

    handleFieldChange = (e) => {
        this.setState({
            review:e.target.value
        })
    };

    onSubmit=(craftid)=> {
        console.log(craftid)
        let obj={
            craftId:craftid,
            review:this.state.review
        }
       
        this.props.addReviewActions.addReview(obj)

    }

    handleRating=(e)=>{
        console.log(e.rating)
        this.setState({
            rating:e.rating
        })
    }

    handleRateClick=(creatorId)=>{

        let obj={
            creatorId:creatorId,
            rating:this.state.rating
        }

        this.props.addRatingActions.addRating(obj)
        
    }

    render() {
        let {orderData,craftData,CreatorData}=this.state
        
        return (
            <div className="bodycontainer">
                <h1>Past orders</h1>
                <hr/>
                {orderData && orderData.map(property => <PastOrdersCard  props={property}/>)}
                {/* key={property.craftId} */} <hr/>
                <h1>All Crafts Purchased by you so far..</h1><br/>
                {craftData && craftData.map(property => {
                    return(
                        <Row>
                            <Col sm="10">
                                <Card body outline color="warning">
                                    <Row>
                                        <Col md="2">
                                            <CardImg
                                                src={property.img}
                                            />
                                        </Col>
                                        <Col>
                                            <CardTitle><div className="font-weight-bold">{property.ciName}</div></CardTitle>
                                            <CardText className="text-muted">Leave yor thoughts about the craft bellow.</CardText>
                                            <form onSubmit={(e)=>{e.preventDefault();this.onSubmit(property.craftId)}}>
                                                <div className="form-group">
                                                    <textarea
                                                        onChange={this.handleFieldChange}
                                                        value={this.state.review}
                                                        className="form-control"
                                                        placeholder="Write a review..."
                                                        name="message"
                                                        rows="2"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <button className="btn btn-primary">
                                                        Comment &#10148;
                                                </button>
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    )
                })}
                
                
                <hr/>
                <h1>All Crafts Creators You have Purchased from so far..</h1><br/>
                {Array.isArray(CreatorData) && CreatorData && CreatorData.map(property=>{
                    return(
                        <Row>
                            <Col sm="10">
                                <Card body outline color="primary">
                                    <CardTitle>{property.creatorName}</CardTitle>
                                    <CardText>{property.creatorEmail}</CardText>
                                    Rate your experience: <Rater total={5} interactive={true} rating={this.state.rating}
                                // onRating={({rating}) => {this.handleRating(rating)}} 
                                onRate={this.handleRating} 
                                // onCancelRate={this.handleCancelRate}
                                onClick={(e)=>{e.preventDefault();this.handleRateClick(property.creatorId)}} /><br />
                                </Card>
                            </Col>
                        </Row>
                    )
                })}
                <hr/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPastOrderActions: bindActionCreators(getPastOrderActions, dispatch),
        craftsForReviewActions: bindActionCreators(craftsForReviewActions, dispatch),
        creatorForRatingActions: bindActionCreators(creatorForRatingActions, dispatch),
        addRatingActions: bindActionCreators(addRatingActions, dispatch),
        addReviewActions: bindActionCreators(addReviewActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.HandleOrders,
        ...state.AllCraft,
        ...state.Ratings,
        ...state.Reviews,
        ...state.CreatorForRating
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)  (ViewPastOrdersComponent))
