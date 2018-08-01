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
           />
            </div>
            
            );
    }
    
}
export default NewNewsletter;