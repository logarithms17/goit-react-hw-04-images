import React, { Component } from 'react'
import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";

export default class SearchBar extends Component {

    render() {
    const {handleSubmit} = this.props
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
}
