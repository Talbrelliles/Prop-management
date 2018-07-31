import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';
import TextLink from '../textLink';

class NewNewsletterForm extends Component {
  render() {
 const { handleSubmit } = this.props;
      
    return (
      <form onSubmit={handleSubmit} className='new-newsletter-form'>
        <FormTitle className='new-newsletter-form__title' text='New Newsletter'/>
        <Field className='new-newsletter-form__newsletter-title' placeholder='Newsletter Title' component={FormInput} name='title' type='text' title="Newsletter Title"/>
         <Field className='new-newsletter-form__body' placeholder='Body' component={FormTextArea} name='body' type='text' title="Body"/>
      <Field className="new-newsletter-form__submit" small={true} danger={true} name="Submit" type="submit" title="Submit" component={FormButton}/>
 <Field className="new-newsletter-form__cancel" small={true}  name="cancel" type="button" title="Cancel" component={FormButton} onClick={this.props.onCancel}/>
  <Field className="new-newsletter-form__image" small={true}  name="image"  type="file" title="Image" component={FormImage}/>   
      </form>
    );
  }
}

NewNewsletterForm = reduxForm({
  form: 'newsletter'
})(NewNewsletterForm)

export default NewNewsletterForm;
