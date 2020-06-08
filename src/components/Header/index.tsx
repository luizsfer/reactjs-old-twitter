import React from 'react';

import { Container, Content, Side } from './styles';

import Home from '../../assets/home.svg';
import Notification from '../../assets/notification.svg';
import Logo from '../../assets/logo.svg';
import Avatar from '../../assets/avatar.svg';

const Header: React.FC = () => (
  <Container>
    <Content>
      <nav>
        <ul>
          <li>
            <img src={Home} alt="Home" />
            Home
          </li>
          <li>
            <img src={Notification} alt="Notification" />
            Notification
          </li>
          <li>
            <img src={Notification} alt="Messages" />
            Messages
          </li>
        </ul>
      </nav>
      <img src={Logo} alt="Logo Twitter" />
      <Side>
        <input type="text" placeholder="Search on Twitter" />
        <img src={Avatar} alt="Avatar" />
        <button type="button">Tweet</button>
      </Side>
    </Content>
  </Container>
);

export default Header;
