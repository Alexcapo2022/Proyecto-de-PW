import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProfileInfo  from '../pages/ProfileInfo';
import Historial from '../pages/Historial';
import React from "react";



const User = () =>{
    // Styles
    const mystyles = {
        gap:"5px",
        marginLeft: "20px",
        marginTop:"50px"
      }
      const [selected] = React.useState(0);
      const [setActualizar]=React.useState(false);

      const deleteHistory = ()=>{
        localStorage.removeItem("orderHistory");
        setActualizar(true);
    }
    return(
      
      <div>
      <div>
      <button className='botonAA1' id="ga" style={{display:localStorage.getItem("orderHistory")!=null&&selected===0?"flex":"none"}}  onClick={()=>{deleteHistory()}} >Clear history</button>  
      
      </div>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link2">
          <Row>
            <Col sm={3}>
              <ListGroup style={mystyles}>
                <ListGroup.Item action eventKey='#link1' href="#link1">
                  Order History
                </ListGroup.Item>
                <ListGroup.Item action eventKey='#link2' href="#link2">
                  Profile Info
                </ListGroup.Item>
                <ListGroup.Item action href="/">
                  Logout
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    <Historial />
                    
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                    <ProfileInfo />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </div>
    );
}
export default User