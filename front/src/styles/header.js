import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: #424242;
  text-align: center;
  h1 {
    display: inline-block;
    margin: 0;
    height: 60px;
    text-align: center;
    a {
      display: block;
      height: 60px;
      color: #fff;
      font-size: 1.6rem;
      line-height: 60px;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
      i {
        height: 60px;
        line-height: 60px;
        vertical-align: top;
      }
    }
  }
  .left, .right {
    float: left;
    width: 300px;
    height: 60px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #212121;
  }
  .left {
    input[type="text"] {
      width: calc(100% - 70px);
      height: 20px;
      margin: 0;
      padding: 10px;
      border: none;
      border-radius: 2px;
      box-shadow: none !important;
      background-color: #616161;
      font-weight: bold;
      color: #fff;
      line-height: 20px;
      opacity: 0.6;
      &:hover, &:focus, &.valid {
        border: none;
        opacity: 1;
      }
      &:hover {
        color: #fff;
        &::placeholder {
          opacity: 1;
        }
      }
      &:focus {
        background-color: #fff;
        color: #333;
        &::placeholder {
          color: #333;
          opacity: 0.6;
        }
      }
      &::placeholder {
        color: #fff;
        opacity: 0.6;
      }
    }
    .btn {
      width: 40px;
      height: 40px;
      margin-left: 10px;
      padding: 0;
      background-color: #ffc107;
      color: #333;
      line-height: 40px;
      vertical-align: top;
      &:hover {
        background-color: #ff6f00;
      }
      i {
        font-size: 1.6rem;
      }
    }
  }
  .right {
    color: #fff;
    text-align: right;
    .btn {
      height: 40px;
      padding: 0 10px;
      box-shadow: none !important;
      background-color: #ffc107;
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
  &:after {
    position: absolute;
    top: 60px;
    left: 0;
    height: 1px;
    z-index: 10;
    width: 100%;
    background-color: #616161;
    opacity: 0.6;
    content: '';
  }
`;