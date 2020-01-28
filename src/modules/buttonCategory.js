import React from 'react'
import {Button} from 'antd'

class ButtonCategory extends React.Component {
  render(){
    const {action, category, key} = this.props
    return(
      <Button>{category}</Button>
    )
  }
}

export default ButtonCategory
