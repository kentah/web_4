import React, { useState, useEffect } from 'react';

import './soundFileStyle.css';

interface Props {
  id: number
  file: string;
  name: string;
  title: string;
  about: string;
  date: Date;
  img: string;
}

const SoundFile: React.FC<Props> = ({
  id,
  file,
  name,
  title,
  about,
  date,
  img,
}) => {

  // state of divs for mouseEnter and changing color
  const [colorBox, setColorBox] = useState(false);

  // set initial volume
  useEffect(() => {
    const vol = document.getElementById(`audio${title}`);
    (vol as HTMLAudioElement).volume = 0.25
  },[title])

  // check if a given track is playing
  const isPlaying = (ele: HTMLElement | any) => ele?.paused;

  // play or stop playing based on state
  const togglePlay = (title: string) => {
    const audio = document.getElementById(`audio${title}`);
    isPlaying(audio)
      ? (audio as HTMLAudioElement).play()
      : (audio as HTMLAudioElement).pause();
  };

  return (
    <div
      onMouseEnter={() => setColorBox(true)}
      onMouseLeave={() => setColorBox(false)}
      onClick={() => togglePlay(title)}
      className={`fileContainer${colorBox ? 'True' : 'False'}`}
    >
      <audio id={`audio${title}`} className='aud' controls>
        <source src={file} />
      </audio>
      <div className="textContainer">
        <div>
        <img
          src={img}
          className={`imgContainer${colorBox ? 'True' : 'False'}`}
          alt=''
        />
        </div>
        <div>
        <h3 className="title">{title}</h3>
        </div>
        <div><small className="date">{date.toDateString()}</small></div>
        <div><p className="about">{about}</p></div>
      </div>
    </div>
  );
};

export default SoundFile;
