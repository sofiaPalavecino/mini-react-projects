import React from 'react';
import "./MemeForm.scss"
import data from '../../memes_data'

export default function MemeForm() {

    const [meme, setMeme] = React.useState({
        topText: "Shut up",
        bottomText: "and take my money",
        randomImage: "https://imgflip.com/s/meme/Shut-Up-And-Take-My-Money-Fry.jpg"
    })
    const [allImg, setAllImg] = React.useState(data.data.memes);

    function setMemeSource(){
        const memeIndex = Math.floor(Math.random() * data.data.memes.length);
        setMeme( prevMeme => ({...prevMeme, randomImage: allImg[memeIndex].url}))
    }

    return (
        <section className='c-section'>
            <div className="wrap">
                <div className='meme-form'>
                    <div className="row">
                        <div className='col-sm'>
                            <label htmlFor="top" className='form-label'>Top text</label>
                            <div className="input-group">
                                <input id="top" className='meme-form__top form-control' placeholder="Shut up" type="text" />
                            </div>
                        </div>
                        <div className='col-sm'>
                            <label htmlFor="bottom" className='form-label'>Bottom text</label>
                            <div className="input-group">
                                <input id="bottom" className='meme-form__bottom form-control' placeholder="And take my money" type="text" />
                            </div>
                        </div>
                    </div>
                    <button className='w-100 mt-3 btn' onClick={setMemeSource}  /* type='submit' */>Get a new meme image</button>
                    <div className="meme-form-container">
                        <img className='img-fluid img-thumbnail mx-auto d-block' src={`${meme.randomImage}`} />
                    </div>
                </div>
            </div>
        </section>
    )
}