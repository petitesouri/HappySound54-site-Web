import React, { useState } from 'react';

import Mix1 from "../musiques/TestMix1.mp3"
import Mix2 from "../musiques/TestMix2.mp3"
import Mix3 from "../musiques/TestMix3.mp3"
import Ecouteurs from "../images/ecouteurs.png"
import PosteRadio from "../images/poste-radio.png"

const Music = () => {
    const musiques = [
        { src: Mix1, alt: 'AMBIANCE FESTIVE' },
        { src: Mix2, alt: 'AMBIANCE ELECTRO' },
        { src: Mix3, alt: 'AMBIANCE LOUNGE' }
    ];

    const [playingIndex, setPlayingIndex] = useState(null);

    const handleImageClick = (index) => {
        if (playingIndex === index) {
            const audio = document.getElementById(`audio-${index}`);
            audio.pause();
            setPlayingIndex(null);
        } else {
            if (playingIndex !== null) {
                const currentAudio = document.getElementById(`audio-${playingIndex}`);
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            const newAudio = document.getElementById(`audio-${index}`);
            newAudio.play();
            setPlayingIndex(index);
        }
    };
  
    return (
        <div className='ambiance-musics'> 
            {musiques.map((musique, index) => (
                <button 
                    key={index} 
                    className={index === 1 ?'ambiance-musics__button-radio' : "ambiance-musics__button"}
                    onClick={() => handleImageClick(index)}
                    >                        
                    <img 
                        src={index === 1 ? PosteRadio : Ecouteurs} 
                        className={index === 1 ? "radio" : "headphones"}
                        alt={musique.alt} />                   
                    <audio id={`audio-${index}`} src={musique.src} style={{ display: 'none' }}>
                        <track kind="captions" src="musique" srcLang="fr" label="French captions" />   
                    </audio>
                    <p>{musique.alt}</p>
                </button>
            ))}
        </div>
    );
  }

export default Music;
