import React, { Component } from 'react';
import NewNewsletterForm from '../newsletter/newsletterNewForm';
class NewRequest extends Component {
    onSubmit = (fields) => {
        this.props.history.push('/dashboard');
    }
    onCancel = () => {
   this.props.history.push('/dashboard');
    }
    render(){
        return (
            <div className='new-request'>
            <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}
           formTitle='New Request'
           fieldOnePlaceholder='Service Request Title Here'
           fieldOneTitle='Service Request Title'
            fieldTwoPlaceholder ='Service Description Here'
           fieldTwoTitle ='Description'
           />
            </div>
            
            );
    }
    
}
export default NewRequest;