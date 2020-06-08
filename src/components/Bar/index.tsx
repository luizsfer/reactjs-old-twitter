import React from 'react';

import { BarContainer, List, Actions, ContentContainer } from './styles';
import More from '../../assets/more.svg';

const Bar: React.FC = () => (
  <BarContainer>
    <ContentContainer>
      <List>
        <li className="active">
          <span>Tweets</span>
          <strong>1234</strong>
        </li>
        <li>
          <span>Tweets</span>
          <strong>1234</strong>
        </li>
        <li>
          <span>Tweets</span>
          <strong>1234</strong>
        </li>
        <li>
          <span>Tweets</span>
          <strong>1234</strong>
        </li>
      </List>
      <Actions>
        <button type="button">Follow</button>
        <img src={More} alt="More" />
      </Actions>
    </ContentContainer>
  </BarContainer>
);

export default Bar;
