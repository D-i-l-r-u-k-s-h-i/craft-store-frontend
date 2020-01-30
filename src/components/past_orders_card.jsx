import React from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

function PastOrdersCard(props) {
    console.log(props)
    let {orderItemsList,orderTotal,purchaseDate,orderStatus}=props.props
    return (
        <div>
            <Row>
                <Col sm="10">
                    <Card body outline color="info">
                        <CardTitle>Purchase Date: <span className="text-muted">{purchaseDate}</span></CardTitle>
                        <CardText><ul>{orderItemsList && orderItemsList.map(item=>{
                          return(
                            <div>
                              
                               <table className="table table-borderless">
                               <li><tr>
                                       <td>
                                            <div className="font-weight-bold">{item.craftItem.ciName}</div>
                                       </td>
                                       <td>
                                            {item.quantity} x  Rs.{item.craftItem.ciPrice}.00  
                                       </td>
                                       <td>
                                            <div className="text-primary">{item.status}</div>
                                       </td>
                                       </tr></li> 
                               </table>
                               
                            </div> 
                          )
                        })}
                        </ul></CardText>
                        <CardText>Order Total: Rs.{orderTotal}.00</CardText>
                        <CardText><div className="float-right">Order Status: <span className="text-muted">{orderStatus}</span></div></CardText>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default PastOrdersCard
