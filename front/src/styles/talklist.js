import styled from 'styled-components';

export const TalkListStyle = styled.div`
  float: left;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #212121;
  .search {
    height: 60px;
    padding: 10px;
    box-sizing: border-box;
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
  .collection {
    margin: 0;
    border: none;
    .collection-item {
      border: none;
      border-bottom: 1px solid #424242;
      background-color: transparent;
      color: #fff;
      transition: unset;
      &:hover {
        background-color: #ffc107 !important;
        color: #333;
        opacity: 1;
        .badge {
          color: #333;
        }
      }
      .badge {
        color: #ffc107;
      }
    }
  }
`;