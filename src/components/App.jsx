import React, { useState, useEffect } from 'react'
import SearchBar from "./SearchBar/SearchBar";
import { getAPI } from "pixabay-api";
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { Circles } from 'react-loader-spinner';

const App = () => {

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    if (search === "") {
      return
    }

    (async () => {
      await fetchImages(search, page)
    })();
  
    return () => {
    }
    // eslint-disable-next-line
  }, [search, page])
  
  

  const fetchImages = async (search, page) => {
    try {
      setIsLoading(true)
      const fetchedImages = await getAPI(search, page)

      const { hits, totalHits } = fetchedImages
      console.log(hits)
      console.log(totalHits)

      if (hits.length === 0) {
        toast.error(`Sorry we cant find images matching your search query.`)
        return
      }


      if (page === 1) {
        toast.success(`We found ${totalHits} images`)
      }

      if (page * 12 >= totalHits) {
        setIsEnd(true)
        toast.error('Sorry you have reached the end of your search')
      }
      

      setImages(prevState => {
        return [...prevState, ...hits]
      })
      console.log(images)
      console.log(hits)

    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const searchedImage = e.target.search.value.trim().toLowerCase()

    console.log(searchedImage)
    if (searchedImage !== search) {
      // this.setState(prevState => {
      // return { ...prevState, search: searchedImage, page: 1, images: [], isEnd: false }
      // })
      setSearch(searchedImage)
      setPage(1)
      setImages([])
      setIsEnd(false)
    }

    e.target.search.value = ''
  }

  const handleClick = e => {
    console.log(e.target)

    setPage(prevState => {
      return prevState + 1
    })
  }
    
    return (
      <div className={css.App}>
        <SearchBar handleSubmit={handleSubmit} />
        {images.length >= 1 && <ImageGallery images={images} />}
        {isLoading && <Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />}
        {isError && toast.error("This didn't work.")}
        {images.length >= 1 && !isEnd && <Button handleClick={handleClick} />}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    )
  
}

export default App