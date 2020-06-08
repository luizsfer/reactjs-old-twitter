import styled from 'styled-components';

export const Container = styled.div`
  height: 46px;
  background: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        align-items: center;

        font-size: 13px;
        color: #667580;
        font-weight: bold;

        margin-left: 30px;

        img {
          margin-right: 7px;
        }
      }
      &:first-child {
        margin: 0px;
      }
    }
  }
`;

export const Side = styled.div`
  display: flex;

  img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }

  button {
    height: 34px;
    width: 90px;
    background: #3bb9e3;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 34px;
    width: 220px;
    border: solid 1px #e6ecf0;
    border-radius: 16px;
    padding: 0 32px 0 16px;
    color: #667581;
    font-size: 12px;
  }
`;
