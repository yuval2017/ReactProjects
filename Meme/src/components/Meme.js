import React from "react"

export function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
        })

    const [allMemImages ,setAllMemeImages] = React.useState([])
    function getMemeImage(){
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
    React.useEffect(()=>{fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))},[])
    console.log(allMemImages)
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
                </div>
                <div>
                <img src={meme.randomImage} className = "meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            
        </main>
    )
}