import React, { useState } from 'react'

interface SearchbarProps {text: string}

function Searchbar(props: SearchbarProps) {
    const [squery, setSquery] = useState('');
    return (
        <form onSubmit={handleSubmit} onChange={handleChange} action="" method="get" className='w-screen flex flex-col items-center'>
            <input type="search" name="" id="squery" placeholder='Search:' className='p-2 placeholder-black w-1/2 h-10 box-border border-2 border-black rounded-full bg-opacity-50 bg-white' autoComplete="off" />
            {squery !='' ? (<input type="submit" value="Submit" className='flex-col transition-all ease-in-out duration-300' />): null}
        </form>
    )
    function handleChange(event: any) {
        setSquery(event.target.value as string);
        console.log(event.target.value as string);
    }
}

function handleSubmit(event: any) {
    event.preventDefault()
    const squery = (document.getElementById('squery') as HTMLInputElement)?.value;
    if (squery !== "") {
        window.location.href = `https://duckduckgo.com/?t=ffab&q=${squery}&ia=web`;
    }
}

export default Searchbar