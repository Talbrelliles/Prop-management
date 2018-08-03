import React, { Component } from 'react';


import Button from '../button';
import history from '../../history';

 class NewsletterLatest extends Component {
     
   handleEdit = () => {
    history.push(`/newsletter/edit/${this.props._id}`);
   }
   
    render() {
        
        const {title, imageUrl, body } = this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img className='newsletter-latest__image' src={imageUrl}/>
                <Button callback={() => this.handleEdit()} classname="newsletter-latest__button" icon='fas fa-pencil-alt'/>
                <div className='newsletter-latest__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}


//function mapStateToProps(state) {
 //   const { newsletters } = state.newsletters;
 //   const latestNewsletter= newsletters[0];
  //  return{
  //      ...latestNewsletter
  //  }
//}

 export default /*connect(mapStateToProps)*/NewsletterLatest;