import React from 'react';

export default function Button ({classname, callback, text, icon}){
    if(icon) {
        return(
            <a onClick={callback} className={`${classname} button`}>
            <i className={icon}></i>
            </a>
            )
    }
}