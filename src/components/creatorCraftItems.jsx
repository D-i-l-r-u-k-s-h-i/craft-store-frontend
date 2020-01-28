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
import ConfirmDeleteModal from './confirmDeleteModal';
import UpdateCraftComponent from './update_craft_component';

export class CreatorCraftItems extends Component {
    constructor(props){
        super(props);
        this.state={
            craftData:null,
            creatorId:0,
            allCraftState: null,
            editModalShow: false,
            modalShow: false,
            item:null,
            page:null
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
        let modalClose = () => this.setState({ modalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });

        const { craftData}=this.state
        console.log()

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        
        let items = Array.isArray(craftData) &&craftData && craftData.map((item)=> {
            return <div key={item.craftId}>
                <Card>
                    <CardImg top width="100%" src={item.img} alt="Card image cap" />
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

        // let active = 2;
        // let nums = [];
        // for (let number = 1; number <= 5; number++) {
        //     nums.push(
        //         <Pagination.Item key={number} active={number === active}>
        //             {number}
        //         </Pagination.Item>,
        //     );
        // }
        
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

                <ConfirmDeleteModal show={this.state.modalShow} onHide={modalClose} props={this.state.item}/>
                <UpdateCraftComponent show={this.state.editModalShow} onHide={editModalClose} props={this.state.item}/>
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
