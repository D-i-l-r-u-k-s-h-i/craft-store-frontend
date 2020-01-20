import React, { Component } from 'react'
import Masonry from 'react-masonry-css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { getCreatorsCraftActions} from '../actions'
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux'
  import { withRouter} from 'react-router-dom'

export class CreatorsProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            craftData:null,
            creatorId:this.props.location.props.creator.creatorId,
            allCraftState: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.craftData && nextProps.craftData !== prevState.craftData) {
            newProps.craftData = nextProps.craftData
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
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    componentDidMount(){
        this.props.getCreatorsCraftActions.getCreatorsCraft(this.state)
    }

    render() {
        const { craftData}=this.state
        // console.log(this.props.location.props.creator)
        console.log(this.props.history.location.props.creator.creatorId)
        

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        var items=craftData && craftData.map(function (item) {
            return <div key={item.craftId}>
                <Card>
                    <CardImg top width="100%" src={item.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{item.ciName}</CardTitle>
                        <CardSubtitle>{item.shortDescription}</CardSubtitle>
                        <CardText className="text-muted">{item.longDescription}</CardText>
                        <CardText className="font-weight-normal">Rs.{item.ciPrice}.00</CardText>
                        <Button className="btn btn-info ml-1 float-right">Buy</Button>
                        <Button className="btn btn-secondary float-right">Add to Cart</Button>
                    </CardBody>
                </Card>
            </div>
        })
        return (
            <div className="bodycontainer">
                 <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {items}
                </Masonry>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCreatorsCraftActions: bindActionCreators(getCreatorsCraftActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllCraft,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatorsProfile))
