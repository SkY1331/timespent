import React from 'react'
import {Row, Col, message} from 'antd'

import {NoMatchPage} from './modules/Errors'
import {Bg} from './modules/background.js'

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
    const { user, signOut, error } = this.props
    if(!error){
      return (
      <div>
      <Row type="flex" justify="space-around" style={{marginTop:"50px"}} gutter={8}>
        <Col xs={22} sm={22} md={18} lg={16} xl={12} xxl={10} style={{backgroundColor:"#e8e8e8de", borderRadius:"10px", padding:"15px"}}>
          <HeaderMaster user={user} signInWithGoogle={() => this.login()} signOut={signOut}/>
          {user && <Body user={user}/>}
        </Col>
      </Row>
      <Row style={{}}>
        <Col style={{textAlign:'center', marginTop:'5px'}}>
          TimeSpent.fr 2020 | <a href="https://github.com/SkY1331/timespent">Github</a> | <a href='mailto:lulu.tag@hotmail.fr'>Contact</a>
        </Col>
      </Row>
      <Bg />
      </div>
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
