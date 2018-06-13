import styled from 'styled-components';

export const UserListStyle = styled.div`
  float: left;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #212121;
  .sign {
    height: 60px;
    padding: 10px;
    box-sizing: border-box;
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
  .collection {
    margin: 0;
    border: none;
    .collection-item {
      height: 62px;
      min-height: 62px;
      border: none;
      background-color: transparent;
      color: #fff;
      line-height: 42px;
    }
  }
`;