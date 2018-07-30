import React from 'react';

export default function NewsletterBox({date}){
    
    const months = [
            'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
        ]
    
    return(
        <div className='newsletter-box'>
        <div className='newsletter-box__day'>{date.getDate()}</div>
        <div className='newsletter-box__month-year'>{months[date.getMonth()]} {date.getFullYear()}</div>
        </div>
        )
    
    
    
}