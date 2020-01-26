import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col ,CardImg,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { changeQuantityActions,removeFromCartActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class CartItemCard extends Component {

    constructor(props){
        super(props);
        this.state={
            dropdownOpen:false,
            quantityData:null,
            qty:this.props.props.quantity
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    select = (event) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            qty:parseInt(event.target.innerText)
        });
        console.log(this.props.props.craftItem.craftId)

        let obj = {
            qty: parseInt(event.target.innerText),
            itemid: this.props.props.craftItem.craftId
        }

        this.props.changeQuantityActions.changeQuantity(obj)
        if(this.props.quantityData!=null){
            this.props.refresh()
        }
        
    }

    removeItemClick=()=>{
        this.props.removeFromCartActions.removeFromCart(this.props.props.craftItem.craftId)
    }

    render() {
        console.log(this.props)
        const {ciName,img,ciPrice,shortDescription,itemQuantity}=this.props.props.craftItem

        return (
            <div>
                <Row>
                    <Col sm="10">
                        <Card body>
                            <Row>
                                <Col md="2">
                                    <CardImg
                                        src={img}
                                    />
                                </Col>
                                <Col>
                                    <CardTitle className="font-weight-bold">{ciName}</CardTitle>
                                    <CardText className="text-muted">{shortDescription}</CardText>
                                    <CardText>Rs.{ciPrice}.00</CardText>
                                    <CardText><div className="badge badge-primary text-wrap">
                                        Only {itemQuantity} available</div></CardText>
                                    <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                                        <DropdownToggle caret>
                                            Quantity
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {[...Array(itemQuantity).keys()].map(x => <DropdownItem onClick={this.select}>{++x}</DropdownItem>)}
                                        </DropdownMenu>
                                    </Dropdown>
                                    <input type="text" className="inputsize" value={this.state.qty} readonly/>
                                </Col>
                                <Col>
                                    <Button onClick={this.removeItemClick} className="float-right" outline color="danger" size="sm">remove</Button>
                                    </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeQuantityActions: bindActionCreators(changeQuantityActions, dispatch),
        removeFromCartActions: bindActionCreators(removeFromCartActions, dispatch),
    }
}

function mapStateToProps(state) {
    return {
        ...state.ChangeQuantity,
        ...state.HandleOrders,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartItemCard))
