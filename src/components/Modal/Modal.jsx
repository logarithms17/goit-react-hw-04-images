import React, { Component } from 'react'
import css from './Modal.module.css'

export default class Modal extends Component {

    render() {
    const {largeImageURL, tags, closeButton} = this.props
    return (
        <div className={css.Overlay}>
        
        <div className={css.Modal}>
                <img src={largeImageURL} alt={tags} />
                <button type='click' className={css.btnClose} onClick={closeButton}>X</button>
        </div>
    </div>
    )
    }
}
