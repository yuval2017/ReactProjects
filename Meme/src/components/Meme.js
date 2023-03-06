import React from "react"
import { memeData } from "../MemeData"


export function Meme(){
    const [data, urlFunc] = React.useState({
        topText: "",
        bottomText: "",
        img: "",
        })

    const [allMemImages ,setAllMemeImages] = React.useState({
        memeData
    })
    function memeImage(){
        const allMemImages = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * allMemImages.length)
        const url = allMemImages[randomNumber].url
        urlFunc( 
            prevData => ({
            ...prevData,
            img: url
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
                    />
                <input 
                    type="text"
                    placeholder="Bottop text"
                    className="form--inputs" 
                />
                <button 
                    className="form--bottom"
                    onClick={memeImage}
                >
                    Get a new meme image  🖼
                </button>
                <img src={data.img}/>
            </div>
        </main>
    )
}