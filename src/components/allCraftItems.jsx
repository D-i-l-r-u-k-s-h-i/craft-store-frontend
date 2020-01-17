import Masonry from 'react-masonry-css'
import React, { Component } from 'react'
import { allCraftActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class AllCraftItems extends Component {

    constructor(props){
        super(props);
        this.state={
            craftData:null,
            loaded: false,
            // property: null,
            allCraftState: null
        }
    }

    componentDidMount() {
        this.props.allCraftActions.allCraft(this.state)
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

    render() {
        console.log(this.props)
        console.log(this.state)

        const { craftData}=this.state

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
                        <Button className="btn btn-info mr-1">Buy</Button>
                        <Button className="btn btn-secondary">Add to Cart</Button>
                    </CardBody>
                </Card>
            </div>
        })
        
        return (
            <div className='bodycontainer'>
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
        allCraftActions: bindActionCreators(allCraftActions, dispatch)
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllCraft,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCraftItems))
