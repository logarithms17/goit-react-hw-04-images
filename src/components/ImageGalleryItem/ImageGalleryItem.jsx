import React, { useState } from 'react'
import css from './ImageGalleryItem.module.css'
import Modal from 'components/Modal/Modal'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {

    const [isOpen, setIsOpen] = useState(false)
    
    const imageClick = (e) => {
        setIsOpen(true)
    }
    
    const closeButton = () => {
        setIsOpen(false)
    }

    return (
        <li className={css.ImageGalleryItem}>
            <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage} onClick={imageClick} id={id}/>
            {isOpen && <Modal largeImageURL={largeImageURL} tags={tags} closeButton={closeButton} />}
        </li>
    )
}

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}
