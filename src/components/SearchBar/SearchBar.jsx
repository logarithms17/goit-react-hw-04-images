import React from 'react'
import { FaSearch } from "react-icons/fa";
import css from './SearchBar.module.css'
import PropTypes from 'prop-types'


export const SearchBar = ({handleSubmit}) => {
    return (
    <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
                <FaSearch />
                <span className={css.SearchFormButtonLabel}></span>
            </button>

            <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name='search'
            />
            </form>
            
    </header>
    )
}

export default SearchBar

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}