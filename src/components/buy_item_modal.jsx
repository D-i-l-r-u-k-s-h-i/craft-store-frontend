import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Card, Button, CardTitle, CardText, Row, Col ,CardImg,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { buyItemActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { Alert } from 'reactstrap'
import history from '../history'

export class BuyItemModal extends Component {
    constructor(props){
        super(props);
        this.state={
            dropdownOpen:false,
            purchaseData:null,
            orderData:null,
            qty:1, //initially
            craft:this.props.props,
            visible:false,
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
    }

    buyItemClick=()=>{
        if(localStorage.getItem("jwt")){
            this.setState({
                visible:true
            })
            this.props.buyItemActions.buyItem(this.state)
        }
        else{
            history.push('/login')
        }
        
    }

    onDismiss = () =>{
        this.setState({
            visible:false
        })
        this.props.onHide()
    }

    render() {
        console.log(this.props)
        let {ciName,craftId,imgFile,itemQuantity,ciPrice}=this.props.props
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Purchase Craft Item
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Row>
                    <Col sm="10">
                        <Card body>
                            <Row>
                                <Col md="2">
                                    <CardImg
                                        src={`data:image/png;base64,${imgFile}`}
                                    />
                                </Col>
                                <Col>
                                    <CardTitle className="font-weight-bold">{ciName}</CardTitle>
                                    {/* <CardText className="text-muted">{shortDescription}</CardText> */}
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
                            </Row>
                        </Card>
                    </Col>
                </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.buyItemClick} className="btn btn-info ml-1 float-right">Buy</Button>
                    <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
                        {this.props.orderData}
                    </Alert>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        buyItemActions:bindActionCreators(buyItemActions, dispatch),
    }
}

function mapStateToProps(state) {
    return {
        ...state.HandleOrders
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuyItemModal))
