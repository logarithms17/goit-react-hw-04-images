import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import css from './ImageGallery.module.css'

export default class ImageGallery extends Component {
  render() {
    const {images} = this.props
    return (
      <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} id={id} />)}
        
    </ul>
    )
  }
}
