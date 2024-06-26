import React from 'react'
import css from './Modal.module.css'
import PropTypes from 'prop-types'

export const Modal = ({largeImageURL, tags, closeButton}) => {
    return (
        <div className={css.Overlay}>
            <div className={css.Modal}>
                    <img src={largeImageURL} alt={tags} />
                    <button type='click' className={css.btnClose} onClick={closeButton}>X</button>
            </div>
        </div>
    )
}

export default Modal

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    closeButton: PropTypes.func.isRequired
}