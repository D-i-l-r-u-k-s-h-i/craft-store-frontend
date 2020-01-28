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
                        <CardTitle>Purchase Date: {purchaseDate}</CardTitle>
                        <CardText><ul>{orderItemsList && orderItemsList.map(item=>{
                          return(
                            <div>
                              
                               <table className="table table-borderless">
                               <li><tr>
                                       <td>
                                            {item.craftItem.ciName}
                                       </td>
                                       <td>
                                            {item.quantity} *  Rs.{item.craftItem.ciPrice}.00     {item.status}
                                       </td>
                                       </tr></li> 
                               </table>
                               
                            </div> 
                          )
                        })}
                        </ul></CardText>
                        <CardText>Order Total: Rs.{orderTotal}.00</CardText>
                        <CardText><div className="float-right">Order Status: {orderStatus} </div></CardText>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default PastOrdersCard
