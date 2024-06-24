import React, { Component } from 'react'
import SearchBar from "./SearchBar/SearchBar";
import { getAPI } from "pixabay-api";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { Circles } from 'react-loader-spinner';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    isError: false,
    isEnd: false,
  };

  componentDidUpdate = async (_prevProps, prevState) => {
    const { search, page } = this.state
    
    if (prevState.search !== search || prevState.page !== page) {
      await this.fetchImages(search, page)
    }
  }

  fetchImages = async (search, page) => {
    try {
      this.setState({ isLoading: true })
      const fetchedImages = await getAPI(search, page)

      const { hits, totalHits } = fetchedImages

      if (hits.length === 0) {
        toast.error(`Sorry we cant find images matching your search query.`)
        return
      }


      if (page === 1) {
        toast.success(`We found ${totalHits} images`)
      }

      if (page * 12 >= totalHits) {
        this.setState({ isEnd: true })
        toast.error('Sorry you have reached the end of your search')
      }
      

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...hits]
        }
      })
      
    } catch {
      this.setState({ isError: true })
    } finally {
      this.setState(prevState => {
        return { ...prevState, isLoading: false }
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { search } = this.state
    const searchedImage = e.target.search.value.trim().toLowerCase()

    console.log(searchedImage)
    if (searchedImage !== search) {
      this.setState(prevState => {
      return { ...prevState, search: searchedImage, page: 1, images: [], isEnd: false }
    })
    }

    e.target.search.value = ''
  }

  handleClick = e => {
    console.log(e.target)

    this.setState(prevState => {
      return { ...prevState, page: prevState.page + 1 }
    })
  }

  

  render() {
    const { images, isLoading, isError, isEnd } = this.state
    
    return (
      <div className={css.App}>
        <SearchBar handleSubmit={this.handleSubmit} />
        {images.length >= 1 && <ImageGallery images={images} />}
        {isLoading && <Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />}
        {isError && toast.error("This didn't work.")}
        {images.length >= 1 && !isEnd && <Button handleClick={this.handleClick} />}

        
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    )
  }
}

