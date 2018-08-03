import React, { Component } from 'react';
import RequestsBox from './requestsBox';
class RequestsBoxes extends Component {
    render() {
        return (
            <div className='requests-boxes'>
            <RequestsBox title={'pending'} count={8}/>
           <RequestsBox title={'in-progress'} count={3}/>
            <RequestsBox title={'completed'} count={9}/>
            </div>
            )
    }
}

export default RequestsBoxes;