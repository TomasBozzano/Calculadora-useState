import Linkedin from '/linkedin.svg';
import Github from '/git.svg';
import { Link } from './Link';
import '../components/Footer.css';
export function Footer() {
  return (
    <footer>
      <p>Create by Bozzano, Tomás</p>
      <div className='ft-links'>
        <Link href={'https://www.linkedin.com/in/tomasbozzano/'} src={Linkedin} alt={'red social de Linkedin de Tomas Bozzano'} />
        <Link href={'https://www.github.com/tomasbozzano/'} src={Github} alt={'repositorio de github de Tomas Bozzano'} />
      </div>

    </footer>
  );
}