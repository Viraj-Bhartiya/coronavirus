import React from 'react';
import {Instagram, GitHub, Globe, Mail, Youtube} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <p>
          Made with ❤ by{' '}
          <a
            href="https://viraj-bhartiya.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viraj Bhartiya
          </a>
        </p>
      </div>

      <h5>{t('#StaySafe')}</h5>

      <div className="links">
        <a
          href="https://github.com/Viraj-Bhartiya"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="website"
          href="https://viraj-bhartiya.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe />
        </a>

        <a
          href="https://www.youtube.com/channel/UCvwfCZDYeUKWdmHUAGhgsnQ?view_as=subscriber"
          className="youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube />
        </a>

        <a
          href="https://www.instagram.com/_viraj.bhartiya_"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <Instagram />
        </a>

        <a
          href="mailto:vlbhartiya@gmail.com"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
