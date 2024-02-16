import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faLinkedin, faAngellist, faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Socials({ flex }) {
  const socials = [
    { id: 'twitter', icon: faTwitter, url: 'https://twitter.com/SadiqJuwairiyya', label: 'Twitter' },
    { id: 'medium', icon: faMedium, url: 'https://medium.com/@juwairiyyasadiq', label: 'Medium' },
    { id: 'github', icon: faGithub, url: 'https://github.com/Zuwairanajma', label: 'GitHub' },
    { id: 'linkedin', icon: faLinkedin, url: 'https://www.linkedin.com/in/zuwaira-sadiq-566b891b0?', label: 'LinkedIn' },
    { id: 'angellist', icon: faAngellist, url: 'https://wellfound.com/u/zuwaira-enehuwa-sadiq', label: 'AngelList' },
    { id: 'email', icon: faEnvelope, url: 'mailto:juwairiyyasadiq@gmail.com', label: 'Email' },
  ];

  return (
    <div className={`flex gap-5 ${flex}`}>
      {socials.map(({ id, icon, url, label }) => (
        <a href={url} key={id} className="hover:text-yellow-400 text-neutral-600" target="_blank" rel="noreferrer" aria-label={label}>
          <FontAwesomeIcon icon={icon} className="md:w-8 md:h-8 max-sm:w-6 max-sm:h-6 hover:-translate-y-1 transition-transform" />
        </a>
      ))}
    </div>
  );
}

Socials.propTypes = {
  flex: PropTypes.string.isRequired,
};

export default Socials;
