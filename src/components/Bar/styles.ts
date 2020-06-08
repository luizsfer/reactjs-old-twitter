import styled from 'styled-components';

export const BarContainer = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`;

export const ContentContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 285px;
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    position: relative;

    span {
      color: #667580;
      font-size: 12px;
      font-weight: bold;
    }

    strong {
      color: #667580;
      font-size: 18px;
      font-weight: bold;
      margin-top: 2px;
    }
  }

  & .active strong {
    color: #3bb9e3;
  }

  & .active:after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #3bb9e3;
  }
`;

export const Actions = styled.div`
  display: flex;

  button {
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    font-size: 14px;
    font-weight: bold;
    color: #3bb9e3;
    border: 1px solid #3bb9e3;
    border-radius: 16px;

    margin-right: 20px;
  }
`;
