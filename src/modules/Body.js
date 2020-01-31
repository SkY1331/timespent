import React from 'react'
import {Button, Icon, message, Divider} from 'antd'
import { Loading } from './Errors'

import firebase from "firebase"
import { db } from '../config'

import Timer from './timer'
import DataToChart from './dataToChart'

class Body extends React.Component {
  state={
    isLoaded:false,
    last:{},
    historics:[]
  }

  callData = () => {
    db.collection("historics")
      .where('uid', '==', this.props.user.uid)
      .orderBy('date', 'desc')
      .get()
      .then(async querySnapshot => {
        const data = await querySnapshot.docs.map(
          doc => ({ ...doc.data(), id: doc.id })
        );
        if(data[0]){
          this.setState({
            historics:data,
            last:{
              category:data[0].category,
              date:data[0].date.seconds,
              spent:data[0].spent,
              id:data[0].id,
            },
            isLoaded:true
          })
        }else{
          this.setState({
            isLoaded:true
          })
        }
      })
      .catch(err => {
        message.error('Erreur', err)
        console.log(err);
      })
  }

  componentDidMount() {
    this.callData()
  }

  updateCategory = (category, id, dateStart, spent, lastCat, uid) => {
    const newDate = Math.round(new Date().getTime()/1000)
    if(lastCat === category ){
      db.collection('historics').doc(String(id)).update({
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        spent: spent + (newDate - dateStart)
      })
      this.setState({
        last:{
          date: newDate,
          category: this.state.last.category,
          spent: spent + (newDate - dateStart),
          id:id,
        },
      })
    }else{
      db.collection('historics').doc(String(newDate)).set({
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        uid:uid,
        spent: dateStart ? newDate - dateStart : 0,
        category: category
      })
      this.setState({
        last:{
          category: category,
          date: newDate,
          spent:null,
          id:newDate
        }
      })
    }
    this.state.historics.push({
      category:category,
      date:{
        seconds:newDate,
      },
      spent: dateStart ? newDate - dateStart : 0,
      id:newDate,
      uid:uid
    })
    message.success('Statut mis à jour')
  }

  render(){
    console.log(this.state);
    const { last, historics, isLoaded } = this.state
    const { user } = this.props
    if(isLoaded){
      return(
        <div style={{marginTop:"15px"}}>
        {last.id ?
          <Timer pre="Vous changez d'activité, Qu'avez-vous fait depuis : " post=" ?" dueDate={last.date} disabled={false}/>  :
          <Timer pre="Quelle à été votre dernière activité ? " dueDate={last.date} disabled={true}/>
        }
          <Button style={{marginTop:'25px'}} onClick={() => this.updateCategory('travail', last.id, last.date, last.spent, last.category, user.uid)} block>Travail {last.category==="travail" && <Icon type="sync" spin />}</Button>
          <Button style={{marginTop:'5px'}} onClick={() => this.updateCategory('dormir', last.id, last.date, last.spent, last.category, user.uid)} block>Temps de Récupération (dormir){last.category==="dormir" && <Icon type="sync" spin />}</Button>
          <Button style={{marginTop:'5px'}} onClick={() => this.updateCategory('obligation', last.id, last.date, last.spent, last.category, user.uid)} block>Temps Obligatoire {last.category==="obligation" && <Icon type="sync" spin />}</Button>
          <Button style={{marginTop:'5px'}} onClick={() => this.updateCategory('personnel', last.id, last.date, last.spent, last.category, user.uid)} block>Temps Personnel {last.category==="personnel" && <Icon type="sync" spin />}</Button>
          <Button style={{marginTop:'5px'}} onClick={() => this.updateCategory('perdu', last.id, last.date, last.spent, last.category, user.uid)} block>Temps Perdu{last.category==="perdu" && <Icon type="sync" spin />}</Button>

          <Divider/>
          <DataToChart data={historics} />
        </div>
      )
    } else {
      return <Loading title="Chargement des données"/>
    }
  }
}

export default Body
