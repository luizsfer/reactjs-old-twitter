import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  max-width: 1168px;
  margin: 0 auto;
  padding: 0 32px;
  flex-direction: column;
`;

export const Profile = styled.div`
  width: 256px;

  img.avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid white;
    margin-top: -128px;
  }
  h1 {
    font-size: 24px;
    color: #1f2226;
    margin-top: 8px;
  }
  span {
    font-size: 16px;
    color: #53626c;
  }

  p {
    margin-top: 24px;
    font-size: 16px;
    color: #1f2226;
  }

  ul {
    list-style: none;
    margin-top: 24px;

    li {
      font-size: 16px;
      color: #657786;
      display: flex;
      align-items: center;
      margin-top: 8px;

      img {
        max-width: 16px;
        margin-right: 8px;
      }
    }

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Followers = styled.div`
  margin-top: 24px;
  width: 256px;

  strong {
    font-weight: normal;
    font-size: 16px;
    color: #3bb9e3;
    display: flex;
    align-items: center;

    img {
      max-width: 16px;
      margin-right: 8px;
    }
  }

  ul {
    margin-top: 8px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
    margin-top: 4px;

    li {
      width: 44px;
      height: 44px;
      background: #d0d5d9;
      border-radius: 50%;
      flex: 1 0 auto;
      margin: 0 4px 8px 0;
    }
  }
`;

export const Images = styled.div`
  margin-top: 8px;
  width: 256px;

  strong {
    font-weight: normal;
    font-size: 16px;
    color: #3bb9e3;
    display: flex;
    align-items: center;

    img {
      max-width: 16px;
      margin-right: 8px;
    }
  }

  ul {
    margin-top: 8px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
    margin-top: 4px;

    li {
      width: 80px;
      height: 80px;
      background: #d0d5d9;
      border-radius: 16px;
      flex: 1 0 auto;
      margin: 0 4px 8px 0;
    }
  }
`;
