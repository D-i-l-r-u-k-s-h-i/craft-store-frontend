import React, { Component } from 'react'
import Masonry from 'react-masonry-css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';
  import { getCreatorsCraftActions,getReviewActions} from '../actions'
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux'
  import { withRouter} from 'react-router-dom'
import ConfirmDeleteModal from './confirmDeleteModal';
import UpdateCraftComponent from './update_craft_component';
import { Pagination} from 'react-bootstrap'

export class CreatorCraftItems extends Component {
    constructor(props){
        super(props);
        this.state={
            craftData:null,
            ReviewData:null,
            creatorId:0,
            noOfPages:1,
            allCraftState: null,
            editModalShow: false,
            modalShow: false,
            item:null,
            active:1
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
            creatorId:this.state.creatorId
        }
        this.props.getCreatorsCraftActions.getCreatorsCraft(obj)

        this.props.getReviewActions.getReview(this.state.creatorId)
    }

    pageChanged=(e)=>{
        this.setState({active:parseInt(e.target.text)})
        console.log(e.target.text)
        let obj={
            page:parseInt(e.target.text)-1,
            creatorId:this.state.creatorId
        }

        this.props.getCreatorsCraftActions.getCreatorsCraft(obj)
   }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });

        const { craftData, ReviewData}=this.state
        console.log(ReviewData)

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        
        
        let items = Array.isArray(craftData) &&craftData && craftData.map((item)=> {
            return <div key={item.craftId}>
                <Card>
                    <CardImg top width="100%" src={`data:image/png;base64,${item.imgFile}`} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{item.ciName}</CardTitle>
                        <CardSubtitle>{item.shortDescription}</CardSubtitle>
                        <CardText className="text-muted">{item.longDescription}</CardText>
                        <CardText className="font-weight-normal">Rs.{item.ciPrice}.00</CardText>
                        <Button onClick={() => this.setState({ editModalShow: true ,item:item})} className="btn btn-info ml-1 float-right">Edit</Button>
                        <Button onClick={() => this.setState({ modalShow: true ,item:item})} className="btn btn-danger float-right">Remove</Button>
                    </CardBody>
                </Card>
            </div>
        })


        let nums = [];
        for (let number = 1; number <= this.state.noOfPages; number++) {
            nums.push(
                <Pagination.Item key={number} active={number === this.state.active}>
                    {number}
                </Pagination.Item>,
            );
        }
        
        console.log(this.state)

        return (
            <div>
                 <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {items}
                </Masonry>
                <Pagination onClick={this.pageChanged} >{nums}</Pagination>

                {/* reviews component- add here later */}

                <ConfirmDeleteModal show={this.state.modalShow} onHide={modalClose} props={this.state.item}/>
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
                 })} 
                <hr/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCreatorsCraftActions: bindActionCreators(getCreatorsCraftActions, dispatch),
        getReviewActions:bindActionCreators(getReviewActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllCraft,
        ...state.Reviews
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatorCraftItems))
