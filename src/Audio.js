import React, { useEffect } from "react";
import "./Audio.css";


const Audio = ({ id, drumKey, url, setClip }) => {
   //implement keyDown events for keyboard play
   const keyDownHandler=(event)=>{ 
    console.log("clicked");
    if(event.key.toUpperCase() === drumKey){
    audioPlayHandler();
    console.log(setClip);

   } }; 
  
   useEffect(()=>{
      window.addEventListener("keydown", keyDownHandler)
      return ()=>{window.removeEventListener("keydown", keyDownHandler)}
    }, []);



   //mouse click play drum
    const audioPlayHandler = () => {
      let x = document.getElementById(drumKey);
      x.play();
      setClip(drumKey);
     
    };
  


  
    return (
      <div id={id} className="drum-pad" onClick={audioPlayHandler} >
        <audio className="clip" id={drumKey} src={url}></audio>
        {drumKey}
      </div>
    );
  };
  
export default Audio;
