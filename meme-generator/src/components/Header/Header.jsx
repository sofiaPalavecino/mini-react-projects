import React from 'react';
import "./Header.scss"

export default function Header(){
    return (
        <header className='header'>
            <img className='header__img' src="./troll_face.svg" alt="" />
            <h2 className='header__title'>Meme Generator</h2>
            <h4 className='header__text'>React Course - Project 3</h4>
        </header>
    )
}