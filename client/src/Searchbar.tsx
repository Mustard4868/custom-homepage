import React, { useState } from 'react'

function Searchbar() {
    const [squery, setSquery] = useState('');
    return (
        <form onSubmit={handleSubmit} onChange={handleChange} action="" method="get" className='w-screen flex flex-col items-center text-cat-macchiato-text'>
            <input type="search" name="" id="squery" placeholder='Search with DuckDuckGo' className='p-2 placeholder-cat-macchiato-text w-1/3 h-10 box-border border-2 border-cat-macchiato-pink rounded-full bg-cat-macchiato-crust bg-opacity-55 hover:scale-105 ease-in-out duration-300' autoComplete="off" />
        </form>
    )
    function handleChange(event: any) {
        setSquery(event.target.value as string);
    }
    function handleSubmit(event: any) {
        event.preventDefault()
        if (squery !== "") {
            window.location.href = `https://duckduckgo.com/?t=ffab&q=${squery}&ia=web`;
        }
    }
}



export default Searchbar