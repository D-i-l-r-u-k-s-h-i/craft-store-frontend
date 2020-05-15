import React, { Component } from 'react'
import Masonry from 'react-masonry-css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';
  import { getCreatorsCraftActions,getReviewActions, addToCartActions} from '../actions'
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux'
  import { withRouter} from 'react-router-dom'
  import { Pagination} from 'react-bootstrap'
  import Rater from 'react-rater'
  import BuyItemModal from './buy_item_modal';
  import ConfirmDeleteModal from './confirmDeleteModal';
import UpdateCraftComponent from './update_craft_component';
import {Spinner} from 'react-bootstrap'

export class CreatorsProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            craftData:null,
            deletedCraftData:null,
            ReviewData:null,
            allCraftState: null,
            noOfPages:1,
            active:1,
            modalShow: false,
            item:null,
            editModalShow: false,
            deleteModalShow: false,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.craftData && nextProps.craftData !== prevState.craftData) {
            newProps.craftData = nextProps.craftData
        }

        if (nextProps.ReviewData && nextProps.ReviewData !== prevState.ReviewData) {
            newProps.ReviewData = nextProps.ReviewData
        }

        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.craftData){
            return{
               loaded: true,
               craftData:newProps.craftData,
               noOfPages:newProps.craftData && newProps.craftData[0].noOfPages
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    componentDidMount(){
        let obj={
            page:0,
            creatorId:this.props.location.props.creator.creatorId
        }
        this.props.getCreatorsCraftActions.getCreatorsCraft(obj)
        
        this.props.getReviewActions.getReview(this.props.location.props.creator.creatorId)
    //    window.onbeforeunload = function () {
    //         return false;
    //     }
    }

    onAddToCartClick=(item)=>{
        var craftId=item.craftId
        this.props.addToCartActions.addToCart(craftId)
    }

    pageChanged=(e)=>{
        this.setState({active:parseInt(e.target.text)})
        console.log(e.target.text)
        let obj={
            page:parseInt(e.target.text)-1,
            creatorId:this.props.location.props.creator.creatorId
        }

        this.props.getCreatorsCraftActions.getCreatorsCraft(obj)
   }

    render() {
        const { craftData,ReviewData}=this.state
        console.log(ReviewData)
        // console.log(this.props.location.props.creator)
        let modalClose = () => this.setState({ modalShow: false });
        let deleteModalClose = () => this.setState({ deleteModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        let nums = [];
        for (let number = 1; number <= this.state.noOfPages; number++) {
            nums.push(
                <Pagination.Item key={number} active={number === this.state.active}>
                    {number}
                </Pagination.Item>,
            );
        }

        var items=craftData && craftData.map((item) =>{
            return <div key={item.craftId}>
                <Card>
                    <CardImg top width="100%" src={`data:image/png;base64,${item.imgFile}`} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{item.ciName}</CardTitle>
                        <CardSubtitle>{item.shortDescription}</CardSubtitle>
                        <CardText className="text-muted">{item.longDescription}</CardText>
                        <CardText className="font-weight-normal">Rs.{item.ciPrice}.00</CardText>
                        {localStorage.getItem("roleId") == 1 ? <div><Button onClick={() => this.setState({ editModalShow: true ,item:item})} className="btn btn-info mr-1 float-left">Edit</Button>
                        <Button onClick={() => this.setState({ deleteModalShow: true ,item:item})} className="btn btn-secondary float-left">Delete</Button><br/><br/></div>:null }
                        {item.availabilityStatus?<div><Button onClick={() => this.setState({ modalShow: true ,item:item})} className="btn btn-info ml-1 float-right">Buy</Button></div>:null}
                        <Button onClick={()=>this.onAddToCartClick(item)} className="btn btn-secondary float-right">Add to Cart</Button>
                    </CardBody>
                </Card>
            </div>
        })
        return (
            <div className="bodycontainer">
                <table className="table table-borderless">
                    <tr>
                        <td>
                        <h1>{craftData && craftData[0].creator.creatorName}</h1> <span>{craftData && craftData[0].creator.creatorEmail}</span> 
                        </td>
                        <td className="align-bottom">
                        Rating:<Rater rating={craftData && craftData[0].creatoroverallRating} total={5} interactive={false} />
                        </td>
                    </tr>
                </table>
                
                
                <hr/>
                {craftData==null?<div className="text-center"><br/><Spinner animation="border" variant="info"/></div>:null}
                 <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {items}
                </Masonry>
                <Pagination onClick={this.pageChanged} >{nums}</Pagination>

                <ConfirmDeleteModal show={this.state.deleteModalShow} onHide={deleteModalClose} props={this.state.item}/>
                <UpdateCraftComponent show={this.state.editModalShow} onHide={editModalClose} props={this.state.item}/>

                <hr/>
                <h3>Reviews for Craft Items({ReviewData && ReviewData.length})</h3><br/>
                {ReviewData && ReviewData.map(property => {
                    return( 
                        <Row>
                            <Col sm="10">
                                <Card body outline color="info">
                                    <Row>
                                        <Col md="2">
                                            <CardImg
                                                src={`data:image/png;base64,${property.craftItem.imgFile}`}
                                            />
                                        </Col>
                                        <Col>
                                            <CardTitle><div className="font-weight-bold">{property.craftItem.ciName}</div></CardTitle>
                                            <CardText className="font-weight-normal">{property.reviewDescription} <span className="text-secondary">-{property.user.username}-</span></CardText>
                                            <CardText className="text-muted float-right">{property.date}</CardText>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                     ) 
                    })
                } 
                {this.state.item!=null?<BuyItemModal show={this.state.modalShow} onHide={modalClose} props={this.state.item}/>:null}
                <hr/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCreatorsCraftActions: bindActionCreators(getCreatorsCraftActions, dispatch),
        getReviewActions:bindActionCreators(getReviewActions, dispatch),
        addToCartActions:bindActionCreators(addToCartActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllCraft,
        ...state.Reviews,
        ...state.HandleOrders
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatorsProfile))
