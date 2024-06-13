import '../Footer.css';

import { FaGooglePlay } from 'react-icons/fa';
import { TbVectorBezierCircle } from 'react-icons/tb';

import Button from '../components/button';
import Icon from '../assets/img/icon2.png';

export const BlockText = [
    {
        x: "Be Our Friend",
        addresses: ["3, Season Park, Jakarta", "support@foodyar.co,id", "021 - 1111 - 2222"]
    },
    {
        x: "Be Our Friend",
        addresses: ["3, Season Park, Jakarta", "support@foodyar.co,id", "021 - 1111 - 2222"]
    }
];

export default function Footer() {
    return(
        <footer>
            <section>
                <article className='icon-block'>
                    <img src={Icon} alt="Icon" />
                    <h3>tere</h3>
                </article>
                <article className='texts-block'>
                    {BlockText.map(item => (
                        <div>
                            <h5>{item.x}</h5>
                            {item.addresses.map(address => (
                                <h6>{address}</h6>
                            ))}
                        </div>
                    ))}
                </article>
                <article className='controll-block'>
                    <Button params={{ svgFile: FaGooglePlay, text: 'DOWNLOAD' }} />
                    <Button params={{ svgFile: TbVectorBezierCircle, text: 'DOWNLOAD' }} />
                </article>
            </section>
            <hr />
            <p>All Rights Reserved tere by Codematics 2022</p>
        </footer>
    )
}