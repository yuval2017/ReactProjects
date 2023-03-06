import React from "react"
import { memeData } from "../MemeData"


export function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
        })

    const [allMemImages ,setAllMemeImages] = React.useState({
        memeData
    })
    function getMemeImage(){
        const allMemImages = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * allMemImages.length)
        const url = allMemImages[randomNumber].url
        setMeme( 
            prevData => ({
            ...prevData,
            randomImage: url
            })
        )
    }

    function handleChane(event){
        const {name, value} = event.target
        setMeme(prevData =>({
            ...prevData,
            [name]:value
         })
        )
    }
    return(
        <main>
            <div className="form">
                <input 
                    
                    type="text"
                    placeholder="Top text"
                    className="form--inputs" 
                    name="topText"
                    value={meme.topText}
                    onChange = {handleChane}
                    />
                <input 
                    type="text"
                    placeholder="Bottop text"
                    className="form--inputs" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange = {handleChane}
                />
                <button 
                    className="form--bottom"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
                <img src={meme.randomImage} className = "meme--image"/>
            </div>
        </main>
    )
}