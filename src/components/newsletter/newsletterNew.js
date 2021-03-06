import React, { Component } from 'react';
import NewNewsletterForm from './newsletterNewForm';
class NewNewsletter extends Component {
    onSubmit = (fields) => {
        this.props.history.push('/dashboard');
    }
    onCancel = () => {
   this.props.history.push('/dashboard');
    }
    render(){
        return (
            <div className='new-newsletter'>
            <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}
           formTitle='New Newsletter'
           fieldOnePlaceholder='Newsletter Title'
           fieldOneTitle='Newsletter Title'
           fieldTwoPlaceholder ='Newsletter Description Here'
           fieldTwoTitle ='Description'
           />
            </div>
            
            );
    }
    
}
export default NewNewsletter;