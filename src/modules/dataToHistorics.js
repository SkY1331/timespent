import React, { PureComponent } from 'react';
import { Row, Col, Button, Typography, List } from 'antd'

import {Loading} from './Errors'

export default class Example extends PureComponent {
  state={
    data: this.props.data,
    from: 86400,
    isLoaded: false,
  }


  changeFrom = (amount) => {
    this.setState({
      from: amount
    })
  }



  render() {
    console.log(this.state);
    const {isLoaded, data } = this.state
    return (
      <div>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Title level={4}>Votre historique</Typography.Title>
        </Col>
        <Col>
          <Button onClick={() => this.changeFrom(86400)} disabled={this.state.from===86400} >24 heures</Button>
          <Button onClick={() => this.changeFrom(172800)} disabled={this.state.from===172800}>48 heures</Button>
          <Button onClick={() => this.changeFrom(604800)} disabled={this.state.from===604800}>7 jours</Button>
          <Button onClick={() => this.changeFrom(2419200)} disabled={this.state.from===2419200}>1 mois</Button>
        </Col>
      </Row>
      {!isLoaded ?
        <div style={{ width: '100%', height: 250 }}>
        <List
          size="small"
          header={<div>Header</div>}
          bordered
          dataSource={data}
          renderItem={item =>
            <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            >{item.category}</List.Item>
          }
          />
        </div>
        :
        <Loading title="Récupération de l'historique"/>
      }
      </div>
    );
  }
}
