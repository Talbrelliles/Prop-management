import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import RequestsItem from './requestsItem';

class Requests extends Component {
    render(){
     return(
         <div className='requests'>
          {
              this.props.requests.map(requestItem => {
                  return <RequestsItem {...requestItem} key={requestItem._id} title={requestItem.title} body={requestItem.body}/>
              })
          }
         </div>
         )   
    }
}
function mapStateToProps(state){
    const { requests }  = state.requests;
    return {
        requests
    }
}

export default connect(mapStateToProps)(Requests);