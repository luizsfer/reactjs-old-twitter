import React from 'react';

import { Wrapper, Profile, Followers, Images } from './styles';
import Avatar from '../../assets/avatar.svg';
import Place from '../../assets/place.svg';
import URL from '../../assets/url.svg';
import Joined from '../../assets/joined.svg';
import Born from '../../assets/born.svg';
import People from '../../assets/people.svg';
import Image from '../../assets/image.svg';

const Body: React.FC = () => (
  <Wrapper>
    <Profile>
      <img className="avatar" src={Avatar} alt="Avatar" />
      <h1>Luiz Ferreira</h1>
      <span>@eu_luizferreira</span>
      <p>
        texto texto texto texto texto texto texto texto texto texto texto texto
        texto texto texto texto texto texto texto texto
      </p>
      <ul>
        <li>
          <img src={Place} alt="Place" />
          Feira de Santana, Brazil
        </li>
        <li>
          <img src={URL} alt="URL" />
          luizferreira.dev
        </li>
        <li>
          <img src={Joined} alt="Joined" />
          Joined March 2019
        </li>
        <li>
          <img src={Born} alt="Born" />
          Born the 13th of December 1990
        </li>
      </ul>
    </Profile>
    <Followers>
      <strong>
        <img src={People} alt="" />
        73 followers that you know
      </strong>
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </Followers>
    <Images>
      <strong>
        <img src={Image} alt="" />
        266 Photos and videos
      </strong>
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </Images>
  </Wrapper>
);

export default Body;
