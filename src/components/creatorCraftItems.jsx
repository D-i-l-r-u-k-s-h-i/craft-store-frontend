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

export class CreatorCraftItems extends Component {
    constructor(props){
        super(props);
        this.state={
            craftData:null,
            creatorId:0,
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
        console.log()

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        
        var items = craftData && craftData.map(function (item) {
            return <div key={item.craftId}>
                <Card>
                    <CardImg top width="100%" src={item.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{item.ciName}</CardTitle>
                        <CardSubtitle>{item.shortDescription}</CardSubtitle>
                        <CardText className="text-muted">{item.longDescription}</CardText>
                        <CardText className="font-weight-normal">Rs.{item.ciPrice}.00</CardText>
                        <Button className="btn btn-info ml-1 float-right">Edit</Button>
                        <Button className="btn btn-danger float-right">Remove</Button>
                    </CardBody>
                </Card>
            </div>
        })
        
        return (
            <div>
                 <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {items}
                </Masonry>

                {/* reviews component- add here later */}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatorCraftItems))
