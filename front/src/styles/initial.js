import styled from 'styled-components';

export const InitialStyle = styled.div`
  text-align: center;
  .logo {
    display: block;
    padding: 60px 0;
    i {
      color: #212121;
      font-size: 240px;
    }
  }
  .btns {
    color: #fff;
    .btn {
      height: 40px;
      padding: 0 10px;
      box-shadow: none !important;
      background-color: #ffb300;
      font-weight: bold;
      color: #333;
      line-height: 40px;
      &:hover, &:focus, &.valid {
        border: none;
      }
      &:hover {
        background-color: #ff6f00;
      }
    }
  }
`;