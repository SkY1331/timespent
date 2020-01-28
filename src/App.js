import React from 'react'
import {Row, Col, message} from 'antd'

import {NoMatchPage} from './modules/Errors'

import firebase from "firebase"
import withFirebaseAuth from 'react-with-firebase-auth'
import { firebaseAppAuth } from './config'

import HeaderMaster from './modules/Header'
import Body from './modules/Body'

class App extends React.Component {
  login = () => {
    this.props.signInWithGoogle()
    message.loading('Connexion')
    if(this.props.error){
      message.error(this.props.error)
    }
  }

  render(){
    console.log(this.props);
    const { user, signOut, error } = this.props
    if(!error){
      return (
      <Row type="flex" justify="space-around" style={{marginTop:"50px"}} gutter={8}>
        <Col xs={24} sm={22} md={18} lg={16} xl={12} xxl={10}>
          <HeaderMaster user={user} signInWithGoogle={() => this.login()} signOut={signOut}/>
          {user && <Body user={user}/>}
        </Col>
      </Row>
      )
    }else{
      return <NoMatchPage />
    }
  }
}

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({providers, firebaseAppAuth})(App)
