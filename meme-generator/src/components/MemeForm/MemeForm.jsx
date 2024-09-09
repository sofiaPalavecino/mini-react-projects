import React from 'react';
import "./MemeForm.scss"
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';


export default function MemeForm() {

    const [meme, setMeme] = React.useState({
        topText: "Shut up",
        bottomText: "and take my money",
        randomImage: "https://imgflip.com/s/meme/Shut-Up-And-Take-My-Money-Fry.jpg"
    })
    const [allImg, setAllImg] = React.useState([]);

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllImg(data.data.memes))
    }, [])

    function setMemeSource(){
        const memeIndex = Math.floor(Math.random() * allImg.length);
        setMeme( prevMeme => ({...prevMeme, randomImage: allImg[memeIndex].url}))
    }

    function setMemeText(event){
        const {name, value} = event.target
        setMeme( prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <section className='c-section'>
            <div className="wrap">
                <div className='meme-form'>
                    <div className="row">
                        <div className='col-sm'>
                            <label htmlFor="top" className='form-label'>Top text</label>
                            <div className="input-group">
                                <input id="top" value={meme.topText} name="topText" onChange={setMemeText} className='meme-form__top form-control' placeholder="Shut up" type="text" />
                            </div>
                        </div>
                        <div className='col-sm'>
                            <label htmlFor="bottom" className='form-label'>Bottom text</label>
                            <div className="input-group">
                                <input id="bottom" value={meme.bottomText} name="bottomText" onChange={setMemeText} className='meme-form__bottom form-control' placeholder="And take my money" type="text" />
                            </div>
                        </div>
                    </div>
                    <button className='w-100 mt-3 btn' onClick={setMemeSource}>Get a new meme image</button>
                    <div className="meme-form-container">
                        <img className='img-fluid img-thumbnail mx-auto d-block' src={`${meme.randomImage}`} />
                        <h2 className='meme-form-container__text top'>{meme.topText}</h2>
                        <h2 className='meme-form-container__text bottom'>{meme.bottomText}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}