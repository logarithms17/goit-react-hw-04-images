import React, { Component } from 'react'
import css from './ImageGalleryItem.module.css'
import Modal from 'components/Modal/Modal'

export default class ImageGalleryItem extends Component {
    state = {
        isOpen: false
    }
    imageClick = e => {

        this.setState({isOpen: true})
    }

    closeButton = () => {
        console.log('clicked')
        this.setState({isOpen: false})
    }

    render() {
        const { id, webformatURL, largeImageURL, tags } = this.props
        const { isOpen } = this.state

    return (
        <li className={css.ImageGalleryItem}>
            <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage} onClick={this.imageClick} id={id}/>
            {isOpen && <Modal largeImageURL={largeImageURL} tags={tags} closeButton={this.closeButton} />}
        </li>
    )
} 
}
