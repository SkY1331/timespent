import React, { PureComponent } from 'react';
import { Row, Col, Button, Typography } from 'antd'

import Chart from './Chart'

export default class Example extends PureComponent {
  state={
    newData:[],
    data: this.props.data,
    from: 86400
  }

  componentDidMount(){
    this.loadData()
  }

  changeFrom = (amount) => {
    this.setState({
      from: amount
    })
    this.loadData(amount)
  }

  loadData = (from) => {
    const dateNow = Math.round(new Date().getTime()/1000)
    let somTravail = 0
    let somDormir = 0
    let somObligation = 0
    let somPerdu = 0
    let somPersonnel = 0

    this.state.data.forEach(item => {
      if(item.id > (dateNow - (from ? from : this.state.from))){
        if(item.category === "travail") {
            somTravail += item.spent
        } else if(item.category === 'personnel') {
            somPersonnel += item.spent
        } else if(item.category === 'obligation') {
            somObligation += item.spent
        } else if(item.category === 'perdu') {
            somPerdu += item.spent
        } else if(item.category === 'dormir') {
            somDormir += item.spent
        } else {
            console.log('Erreur, catégorie nulle', item.id, item.category)
        }
      }
    })

    this.setState({
      newData: [
        {category:'dormir', som:somDormir},
        {category:'travail', som:somTravail},
        {category:'personnel', som:somPersonnel},
        {category:'obligation', som:somObligation},
        {category:'perdu', som:somPerdu},
      ]
    })
  }

  render() {
    return (
      <div>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Title level={4}>Vos statistiques</Typography.Title>
        </Col>
        <Col>
          <Button onClick={() => this.changeFrom(86400)} disabled={this.state.from===86400} >24 heure</Button>
          <Button onClick={() => this.changeFrom(172800)} disabled={this.state.from===172800}>48 heures</Button>
          <Button onClick={() => this.changeFrom(604800)} disabled={this.state.from===604800}>7 jours</Button>
          <Button onClick={() => this.changeFrom(2419200)} disabled={this.state.from===2419200}>1 mois</Button>
        </Col>
      </Row>
        <div style={{ width: '100%', height: 250 }}>
          <Chart data={this.state.newData}/>
        </div>
      </div>
    );
  }
}
