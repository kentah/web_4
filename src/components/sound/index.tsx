import React, { useState, useRef, useEffect } from 'react';

import Modal from '../modal';
import './soundStyle.css';
import SoundFile from './soundFile';

import cc1 from '../../audio/Cc.mp3';
import cc2 from '../../audio/Cc2.mp3';
import cc3 from '../../audio/Cc3.mp3';
import cc4 from '../../audio/Cc4.mp3';
import cc5 from '../../audio/Cc5.mp3';
import one from '../../img/one.png';
import two from '../../img/two.png';
import three from '../../img/three.png';
import four from '../../img/four.png';
import five from '../../img/five.png';

interface SoundFileType {
  id: number;
  file: string;
  name: string;
  title: string;
  about: string;
  date: Date;
  img: string;
}

const FILES: SoundFileType[] = [
  {
    id: 1,
    file: cc1,
    name: 'Cc.mp3',
    title: 'cc - 1',
    img: one,
    about:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur nibh, in maximus dolor ornare et. Etiam at finibus enim. Donec porttitor eu metus aliquet auctor. Nunc lobortis massa vitae est tincidunt vulputate. Sed laoreet sapien ac interdum pretium. Quisque mi augue, malesuada eu auctor eget, efficitur vitae turpis. Sed condimentum interdum turpis, id imperdiet libero viverra sit amet. Maecenas eu commodo urna. Aenean vel purus sed odio fringilla iaculis. Suspendisse at iaculis dui, sed congue nisl. In ac semper ipsum. Donec molestie vulputate ex, vel malesuada magna dapibus nec. Pellentesque a mi eu turpis varius placerat. Duis sit amet faucibus felis, at porttitor lacus.  ',
    date: new Date(2020, 9, 7),
  },
  {
    id: 2,
    file: cc2,
    name: 'Cc2.mp3',
    title: 'cc - 2',
    img: two,
    about: 'some things about retitled',
    date: new Date(2020, 9, 19),
  },
  {
    id: 3,
    file: cc3,
    name: 'Cc3.mp3',
    title: 'cc - 3',
    img: three,
    about: 'some things about retitled',
    date: new Date(2020, 10, 92020, 10, 9),
  },
  {
    id: 4,
    file: cc4,
    name: 'Cc4.mp3',
    title: 'cc - 4',
    img: four,
    about: 'some things about retitled',
    date: new Date(2020, 10, 25),
  },
  {
    id: 5,
    file: cc5,
    name: 'Cc5.mp3',
    title: 'cc - 5',
    img: five,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada commodo enim vel vehicula. Praesent aliquam sem mi, scelerisque mattis magna vestibulum id. Ut scelerisque purus vitae lectus elementum, ut vestibulum dui molestie. Fusce posuere malesuada quam quis sollicitudin. Mauris ex ante, vestibulum et nisi vulputate, pharetra aliquet erat. Sed. ',
    date: new Date(),
  },
];

const sound_text = `
All about the process, inspiration, instrumentation etc.
More about some things, maybe some history.
`;

const Sound: React.FC = () => {
  const [show, setShow] = useState(false);
  const [soundId, setSoundId] = useState(0);
  const [modalContent, setModalContent] = useState<SoundFileType>({
    id: 0,
    file: '',
    name: '',
    title: '',
    img: '',
    about: '',
    date: new Date()
  });

  // ref to mark the clickable div for closing (within the outer div)
  const node = useRef<HTMLDivElement>(null);

  // add/remove event listener for mousedown on clickable div
  useEffect(() => {
    if(show) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  },[show]);

 
  // handlie the click on the clickable div for closing
  const handleClick = (e: any)  => {
    console.log(e.target)
    if(node?.current?.contains(e.target)) {
      return
    }

    setShow(false)
  }


  // set the contents of the modal with the selected sound file
  const setModal = (toShow: boolean, id: number) => {
    setShow(toShow);
    setSoundId(id);
    console.log(soundId);
    const modal = FILES.find(f => f.id === id);
    setModalContent(modal!);
  };

  return (
    <div >
      <div className="soundText">
        <p>{sound_text}</p>
      </div>
      { !show ? (
      <div className="soundFileListContainer">
        {FILES.map(f => {
          return (
            <div
              className="soundFileList"
              onClick={() => setModal(!show, f.id)}
            >
              <SoundFile
                id={f.id}
                file={f.file}
                title={f.title}
                about={f.about}
                date={f.date}
                name={f.name}
                img={f.img}
              />
            </div>
          );
        })}
      </div>
      ) : (
        <div className="modalContainer">
          <div ref={node} >
          <Modal show={show} id={soundId} >
            <SoundFile
              id={modalContent?.id}
              file={modalContent?.file}
              title={modalContent?.title}
              about={modalContent?.about}
              date={modalContent?.date}
              name={modalContent?.name}
              img={modalContent?.img}
            />
          </Modal>
          </div>
        </div>
      ) }
      <div />
    </div>
  );
};

export default Sound;
