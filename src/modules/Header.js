import React from 'react'
import {Row, Col, Button, Avatar, Icon, Typography} from 'antd'
import { Loading } from './Errors'

const { Title, Text } = Typography

const HeaderMaster = ({isLog, user, signInWithGoogle, signOut}) => {
  if(isLog === 'true'){
    if(user){
      return(
        <Row>
          <Col style={{textAlign:'center'}}>
            <Avatar src={user ? user.photoURL : 'icon'} size={64}/>
          </Col>
          <Col style={{textAlign:'center'}}>
            <Title level={3} style={{marginTop:'5px', marginBottom:'0px'}}>Votre activité {user ? user.displayName : '...'}</Title>
          </Col>
          <Col style={{textAlign:'center'}}>
            <Button onClick={() => signOut()} type="link">(déconnexion)</Button>
          </Col>
        </Row>
      )
    }else { return <Loading title="Chargement des Informations ..." />}
  }else{
  return(
    <Row>
      <Col style={{textAlign:'center'}}>
        <Title level={3} style={{marginTop:'5px', marginBottom:'0px'}}>Bienvenue sur TimeSpent</Title>
        <Title level={4} style={{marginTop:'5px', marginBottom:'0px'}}>L'application de time tracking, simple, intuitive, et gratuite.</Title>
        <Text>Mesurez le temps passé sur vos différentes tâches et gagnez en productivité.</Text>
      </Col>
      <Col style={{textAlign:'center', marginTop:'30px'}}>
        <Button onClick={() => signInWithGoogle()} style={{backgroundColor:'#DB4437', color:'white', marginBottom:'5px', height:'40px'}} block>
          <Icon type="google-plus" />Connexion
        </Button>
      </Col>
      <Col>
        <Row type="flex" justify="space-around" style={{marginTop:'50px'}}>
          <Col xs={24} md={12}>
            <Text><i>"Chaque jour, on se réveille, on a 1440 minutes à consommer. On a ce cadeau-là tous les jours."</i> inspiré par <a href="https://www.fabienolicard.fr/">Fabien Olicard</a>, cette application permet de catégoriser les taches de sa journée en 5 catégories :<br/>
            - le temps dédié au travail, <br/>
            - le temps obligatoire, <br/>
            - le temps personnel, <br/>
            - le temps perdu, <br/>
            - et le temps de récupération.<br/>
            </Text>
            <Title level={4}>Déterminez dans quel temps vous êtes, pour mieux le maîtriser !</Title>
          </Col>
          <Col xs={24} md={12}>
            <img width="100%" title="Exemple de statistiques" alt='Exemple de statistiques' src="http://timespent.fr/stats.png"/>
          </Col>
        </Row>
      </Col>
    </Row>

  )
  }
}

export default HeaderMaster
