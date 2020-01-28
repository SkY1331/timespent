import React from 'react'
import {Row, Col, Button, Avatar, Icon, Typography} from 'antd'

const { Title } = Typography

const HeaderMaster = ({user, signInWithGoogle, signOut}) => {
  if(user){
    return(
      <Row>
        <Col style={{textAlign:'center'}}>
          <Avatar src={user.photoURL} size={64}/>
        </Col>
        <Col style={{textAlign:'center'}}>
          <Title level={3} style={{marginTop:'5px', marginBottom:'0px'}}>Votre activité {user.displayName}</Title>
        </Col>
        <Col style={{textAlign:'center'}}>
          <Button onClick={() => signOut()} type="link">(déconnexion)</Button>
        </Col>
      </Row>
    )
  }else{
  return(
    <Row>
      <Col style={{textAlign:'center'}}>
        <Title level={3} style={{marginTop:'5px', marginBottom:'0px'}}>Bienvenue sur TimeSpent</Title>
        <Title level={4} style={{marginTop:'5px', marginBottom:'0px'}}>l'appli pour gérer son temps</Title>
      </Col>
      <Col style={{textAlign:'center', marginTop:'20px'}}>
        <Button onClick={() => signInWithGoogle()} style={{backgroundColor:'#DB4437', color:'white', marginBottom:'5px'}} block>
          <Icon type="google-plus" />Connexion avec Google
        </Button>
      </Col>
    </Row>

  )
  }
}

export default HeaderMaster
