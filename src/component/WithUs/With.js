import React from 'react';
import { Row, Col } from 'react-bootstrap';

const With = () => {
    return (
        <div className='mt-5 mb-5 pt-5 pb-5' style={{ backgroundColor: 'lightgray' }}>
            <h3 className='text-center mt-5 mb-5'>Why Travel with Bengle Tour & Trip...?</h3>
            <Row lg={3} md={1} sm={1} className='mt-5 mb-5 pt-5 pb-5'>
                <Col className='text-center '>
                    <img src="http://goto.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2021/08/why-us-save-money.png" alt="" />
                    <h5>Save Money</h5>
                    <p>Get special rates found nowhere else ipsum pellentesque habitant</p>
                </Col>
                <Col className='text-center'>
                    <img src="http://goto.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2021/08/get-help.png" alt="" />
                    <h5>Get Help</h5>
                    <p>You drive to adventures, we get it. We and our roadside assistance partners</p>
                </Col>
                <Col className='text-center '>
                    <img src="http://goto.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2021/08/stay-safe.png" alt="" />
                    <h5>Stay Safe</h5>
                    <p>We ensure the safety and security of all our customers</p>
                </Col>
            </Row>
        </div>
    );
};

export default With;