import React from 'react';

import { BannerContainer } from './styles';

interface BannerProps {
  item?: string;
}

const Banner: React.FC<BannerProps> = ({ item }: BannerProps) => (
  <BannerContainer>
    <h1>{item}</h1>
  </BannerContainer>
);

export default Banner;
