import Button from '../components/button';
import Mapa from '../assets/img/mapa.png';

import { FaGooglePlay } from 'react-icons/fa';
import { TbVectorBezierCircle } from 'react-icons/tb';

import '../Header.css';

export default function Header() {
    return (
        <header>
            <article className='blockText'>
                <h2>DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h2>
                <p>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ? Lets ride together</p>
                <div className='contButton'>
                    <Button params={{ svgFile: FaGooglePlay, text: 'DOWNLOAD' }} />
                    <Button params={{ svgFile: TbVectorBezierCircle, text: 'DOWNLOAD' }} />
                </div>
            </article>
            <img src={Mapa} alt='Image' />
        </header>
    );
}