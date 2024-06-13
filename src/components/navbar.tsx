import '../Header.css';
import Icon from '../assets/img/icon.png'
import Button from './button';

export default function NavBar() {
    return(
        <nav>
            <section className='icon-text'>
                <img src={Icon} alt="Icon" />
                <h1>tere</h1>
            </section>
            <section className='controlls-links'>
                <article>
                    <h4>Home</h4>
                    <h4>How tere works</h4>
                    <h4>Tere benefits</h4>
                </article>
                <Button params={{ svgFile: "", text: "Help Center"}}/>
            </section>
        </nav>
    )
}