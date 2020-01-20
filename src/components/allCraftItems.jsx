import Masonry from 'react-masonry-css'
import React, { Component } from 'react'
import { allCraftActions ,getCraftByCategoryActions,getRecentCraftActions,searchCraftActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter,Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,Row,ButtonGroup
  } from 'reactstrap';

export class AllCraftItems extends Component {

    constructor(props){
        super(props);
        this.state={
            craftData:null,
            loaded: false,
            category: null,
            searchString:null,
            allCraftState: null
        }
    }

    componentDidMount() {
        this.props.getRecentCraftActions.getRecentCraft(this.state)
    }

    componentDidUpdate(prevState,prevProps){
        if(this.state.category!==prevProps.category){
            //fire action to filter by category
            this.props.getCraftByCategoryActions.getCraftByCategory(this.state)
        }
    }

    handleAll=()=>{
        this.props.allCraftActions.allCraft(this.state)
    }

    handleSearchChange=(e)=>{
        this.setState({searchString:e.target.value})
    }

    onSearchClick=()=>{
        this.props.searchCraftActions.searchCraft(this.state)
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
                        <CardTitle className="font-weight-bold">{item.ciName} {localStorage.getItem("user")==item.creator.creatorName?<button type="button" class="btn btn-sm btn-warning" disabled>{item.creator.creatorName}</button>:<Link to={{
                        pathname: '/creatorprofile',
                        props: {
                            creator: item.creator
                        }
                    }}
                        id="submit"
                        type="submit"
                        className="btn btn-outline-warning btn-sm"
                    >{item.creator.creatorName}</Link>}</CardTitle>
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
            <div className='bodycontainer'>
                <Container>
                <Row className="search">
                    <Col sm="12">
                        <InputGroup>
                            <Input onChange={this.handleSearchChange} placeholder="Search..."/>
                            <InputGroupAddon addonType="prepend">
                                <Button onClick={this.onSearchClick} color="success" 
                                        className="search-button">
                                    Search
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                </Container> 
                <br/>
                <ButtonGroup>
                    <Button onClick={() => this.setState({ category: "Scrapbooking" })} active={this.state.category === "Scrapbooking"}><h1>🦄</h1>Scrapbooking</Button>
                    <Button onClick={() => this.setState({ category: "Kids craft" })} active={this.state.category === "Kids craft"}><h1>🐣</h1>Kids craft</Button> 
                    <Button onClick={() => this.setState({ category: "Drawings" })} active={this.state.category === "Drawings"}><h1>🎨</h1>Drawings</Button>
                    <Button onClick={() => this.setState({ category: "Embroidery" })} active={this.state.category === "Embroidery"}><h1>🍁</h1>Embroidery</Button>
                    <Button onClick={() => this.setState({ category: "Sewing and quilting" })} active={this.state.category === "Sewing and quilting"}>Sewing and quilting</Button>                    
                    <Button onClick={() => this.setState({ category: "Crochet & knitting" })} active={this.state.category === "Crochet & knitting"}>Crochet & knitting</Button>
                    <Button onClick={() => this.setState({ category: "Beading" })} active={this.state.category === "Beading"}>Beading</Button>
                    <Button onClick={() => this.setState({ category: "Woodcraft" })} active={this.state.category === "Woodcraft"}>Woodcraft</Button>
                    <Button onClick={() => this.setState({ category: "Quilling<" })} active={this.state.category === "Quilling<"}>Quilling</Button>
                    <Button onClick={() => this.setState({ category: "Other" })} active={this.state.category === "Other"}>Other</Button>
                    <Button onClick={this.handleAll}><h1>🧚‍♀️</h1>All</Button>
                </ButtonGroup>
                <br/><br/>
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
        allCraftActions: bindActionCreators(allCraftActions, dispatch),
        getCraftByCategoryActions: bindActionCreators(getCraftByCategoryActions, dispatch),
        getRecentCraftActions:bindActionCreators(getRecentCraftActions, dispatch),
        searchCraftActions:bindActionCreators(searchCraftActions, dispatch)
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllCraft,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCraftItems))
