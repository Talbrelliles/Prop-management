import React, { Component } from 'react';
import RequestsBox from './requestsBox';
import { connect } from 'react-redux';
class RequestsBoxes extends Component {
    render() {
        return (
            <div className='requests-boxes'>
            <RequestsBox title={'pending'} count={this.props.pendingCount}/>
           <RequestsBox title={'in-progress'} count={this.props.progressCount}/>
            <RequestsBox title={'completed'} count={this.props.completeCount}/>
            </div>
            )
    }
}

function mapStateToProps(state) {
    const { requests } = state.requests
   var pendingCount = 0;
   var progressCount = 0;
   var completeCount = 0;
   
   
   
    requests.map(request => {
        if(request.status== 'pending'){
            pendingCount += 1;
        }else if(request.status == 'progress'){
            progressCount += 1;
        }else if(request.status == 'complete'){
            completeCount += 1;
        }
    })
    return{
        pendingCount,
        progressCount,
        completeCount
    }
}

RequestsBoxes = connect(mapStateToProps)(RequestsBoxes);

export default RequestsBoxes;