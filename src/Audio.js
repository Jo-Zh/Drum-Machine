import React, { useEffect } from "react";
import "./Audio.css";


const Audio = ({ id, drumKey, url, setClip }) => {
   
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




    const audioPlayHandler = () => {
      let x = document.getElementById(drumKey);
      x.play();
      setClip(drumKey);
     
    };
  

    // const handleKeyPress = (event)=> {
    //   setKeystate(event.key)
    //   console.log(keyState.toUpperCase())
    //   if (keyState.toUpperCase() === drumKey){
    //     audioPlayHandler();
    //   }
      //  let x = document.getElementById(drumKey);
      //  console.log(x);
      //  console.log(x.id);
      //  console.log(keyState);
      //  {
      //     x.play();
      //    setClip(drumKey);
      // }
    // };
  
    return (
      <div id={id} className="drum-pad" onClick={audioPlayHandler} >
        <audio className="clip" id={drumKey} src={url}></audio>
        {drumKey}
        {/* <input type="text" id="one" onKeyPress={handleKeyPress} /> */}
      </div>
    );
  };
  
export default Audio;
