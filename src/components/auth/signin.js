import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FormTitle } from './signinForm';
import SigninForm from './signinForm';
class Signin extends Component {
  
   onSubmit = (fields) => {
    this.props.signIn(fields, ()=> {
      this.props.history.push('/dashboard')
    })
  }
  
  render() {
    return (
      <div className= 'sign-in'>
      <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    )
  }
}

export default connect(null, actions)(Signin);

//email
//:
//"utilitytitan@gmail.com"
//fullname
//:
//"Talmage Goodman"
//password
//:
//":omegalul:"
//unit
//:
//"636"