import React from 'react'
import {Divider, Typography, Icon} from 'antd'

const { Title, Text } = Typography;

export const NotAllowed = () => {
  return(
    <div style={{ margin: '50px 16px 50px 0' }}>
    <center>
      <Title level={2}>Erreur 403 </Title>
      <Text>
        Rien ici, connectez-vous pour accéder au contenu :/ (ajouter module de connection)
      </Text>
    </center>
    <Divider/>
    </div>
  )
}

export const NoMatchPage = () => {
  return (
    <div style={{ margin: '50px 16px 50px 0' }}>
    <center>
      <Title level={2}>Erreur 404</Title>
      <Text>
        Rien à cette adresse :/
      </Text>
    </center>
    <Divider/>
    </div>
  );
};

export const AccessDenied = () => {
  return (
    <div style={{ margin: '50px 16px 50px 0' }}>
    <center>
      <Title level={2}>Erreur 401</Title>
      <Text>
        Acces Refusé
      </Text>
    </center>
    <Divider/>
    </div>
  );
};

export const Loading = ({ title }) => {
  return (
    <div style={{ margin: '50px 0 50px 0' }}>
    <center>
      <Icon type="loading" style={{ fontSize: 36 }} spin /><br/><br/>
      {title && <p style={{textTransform:'uppercase', color:'#00000059'}}>{title}</p>}
    </center>
    </div>
  );
};
