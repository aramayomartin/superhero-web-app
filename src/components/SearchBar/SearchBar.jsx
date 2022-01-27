import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

export default function SearchBar({ searchByName }) {
    const [input, setInput] = useState('');
    function handleChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        searchByName(input);
        document.getElementById('input-search').value='';
    }
    return (
        <div>
            <form class='home-form-search' action="" onSubmit={handleSubmit}>
                <input class='home-form-search-input' id='input-search' type="text" placeholder='Search a superhero' onChange={handleChange} />
                <button class='home-form-search-button'><AiOutlineSearch/></button>
            </form>
        </div>
    )
}