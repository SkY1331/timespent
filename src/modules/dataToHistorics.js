import React, { PureComponent } from 'react';
import { Row, Col, Button, Typography, List, Icon, message } from 'antd'

import moment from 'moment'
import secondsToHms from './secondsToHms'

import {Loading} from './Errors'

export default class Example extends PureComponent {
  state={
    data: this.props.data.slice(0, 7),
    from: 86400,
    isLoaded: false,
  }

  /*changeFrom = (amount) => {
    this.setState({
      from: amount
    })
  }*/

  render() {
    console.log(this.state);
    const {isLoaded, data } = this.state
    return (
      <div>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Title level={4}>Votre historique</Typography.Title>
        </Col>
        {/*<Col>
          <Button onClick={() => this.changeFrom(86400)} disabled={this.state.from===86400} >24 heures</Button>
          <Button onClick={() => this.changeFrom(172800)} disabled={this.state.from===172800}>48 heures</Button>
          <Button onClick={() => this.changeFrom(604800)} disabled={this.state.from===604800}>7 jours</Button>
          <Button onClick={() => this.changeFrom(2419200)} disabled={this.state.from===2419200}>1 mois</Button>
        </Col>*/}
      </Row>
      {!isLoaded ?
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={item =>
            <List.Item
            actions={[<Button onClick={() => message.loading('Cette fonction n\'est pas encore disponible')} type='link' key="edit"><Icon style={{color:'blue'}} type="edit" /></Button>,
              <Button onClick={() => message.loading('Cette fonction n\'est pas encore disponible')} type='link' key="delete"><Icon style={{color:'red'}} type="delete" /></Button>]}
            ><i>{moment.unix(item.date.seconds).format('DD-MM HH:mm')}</i> | <b>{item.category}</b> - durée {secondsToHms(item.spent)}</List.Item>
          }
          />
        :
        <Loading title="Récupération de l'historique"/>
      }
      </div>
    );
  }
}
