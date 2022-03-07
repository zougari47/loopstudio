import { Contact } from './Footer.styled';
import Logo from '/src/img/logo.svg?component';
import IconFacebook from '/src/img/icon-facebook.svg?component';
import IconTwitter from '/src/img/icon-twitter.svg?component';
import IconPinterest from '/src/img/icon-pinterest.svg?component';
import IconInstagram from '/src/img/icon-instagram.svg?component';

export default function Footer() {
  return (
    <Contact id="support">
      <a href="#about" id="logo">
        <Logo />
      </a>

      <ul className="links">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#careers">careers</a>
        </li>
        <li>
          <a href="#product">events</a>
        </li>
        <li>
          <a href="#product">products</a>
        </li>
        <li>
          <a href="#support">support</a>
        </li>
      </ul>

      <ul className="social">
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconPinterest />
          </a>
        </li>
        <li>
          <a href="https://github.com/zougari47" target="_blank">
            <IconInstagram />
          </a>
        </li>
      </ul>

      <p>&copy; Loopsstudios. All rights reserved.</p>
    </Contact>
  );
}
