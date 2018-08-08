import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from '../icon';
import Button from '../button';
import {ROOT_URL} from '../../config';
import AnimateHeight from 'react-animate-height';
class RequestsItem extends Component{
   constructor(){
       super()
       this.state = {
           height: 0
       }
   }
    
    toggleDropdown = () => {
        var element = document.getElementById('requests-item');
        if(this.state.height==0){
            element.classList.add('bg-F8');
            this.setState({height: 'auto'})
        }else{
            this.setState({height: 0})
             element.classList.remove('bg-F8');
        }
    }
    handleStatus = () => {
        const { _id, status } = this.props;
        this.props.changeStatus({_id, status}, () => {
          this.props.fetchRequests();  
        })
    }
    render(){
      
        const { title, body, date, imageUrl, status} = this.props;
           var iconString = 'fas fa-wrench';
         var mainIcon = 'fas f-exclamation-triangle';
        const parsedDate= new Date(date);
        if(status == 'in-progress') {
            iconString = 'fas fa-check-square';
            mainIcon = 'fas fa-wrench';
        } else if(status == 'complete'){
            iconString = 'fas fa-exclamation-triangle';
        }
        
        return (
            <div id='requests-item' className='requests-item'>
     
            <Icon className='requests-item__icon' icon={mainIcon}/>
            <div className='requests-item__title'>
            <div className='requests-item__title__text'>{title}</div>
              <Icon callback={() => this.toggleDropdown()} className='requests-item__title__arrow' icon='fas fa-sort-down'/>
            </div>
            <div className='requests-item__tenant-unit'>
           {} - Unit {}
            </div>
            
          
           
            <div className='requests-item__date'>
             { parsedDate.getMonth()+1 }
                /
                { parsedDate.getDate() }
                /
                { parsedDate.getFullYear()-2000 }
            </div>
           
            <Button className='requests-item__move' icon={iconString} callback={() => this.handleStatus()}/>
            
           
             <div className='requests-item__description'>
              <AnimateHeight
            duration={300}
            height={this.state.height}
            >
               <div className='item-description'>
                <img
                className='item-description__img'
                src={`${ROOT_URL}/${imageUrl}`}
                />
                <p className='item-description__text'>
               {body}
                </p>
                </div>
                   </AnimateHeight>
                </div>
             
            </div>
           
            
        )
    }
}
RequestsItem = connect(null, actions)(RequestsItem);
export default RequestsItem;