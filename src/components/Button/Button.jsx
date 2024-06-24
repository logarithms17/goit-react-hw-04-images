import React, { Component } from 'react'
import css from './Button.module.css'

export default class Button extends Component {
  render() {
    const {handleClick} = this.props
    return (
        <div className={css.buttonWrap}>
        <button onClick={handleClick} className={css.Button}>Load More</button>
      </div>
    )
  }
}
