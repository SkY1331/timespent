import React from 'react'

import moment from 'moment'
import 'moment/locale/fr'

class Timer extends React.Component {
  state={
    reminderTime :  moment.unix(this.props.dueDate).toNow(true)
  }

  componentDidMount(){
    this.interval = setInterval(this.updateReminderTime.bind(this), 10000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  updateReminderTime(){
    this.setState({
      reminderTime : moment.unix(this.props.dueDate).toNow(true)
    })
  }

  render(){
    return(
      <div>
        {this.props.pre && this.props.pre}
        {!(this.props.diabled) && this.state.reminderTime}
        {this.props.post && this.props.post}
      </div>
    )
  }
}

export default Timer
