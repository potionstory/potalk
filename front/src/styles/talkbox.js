import styled from 'styled-components';

export const TalkBoxStyle = styled.div`
  .talk_list {
    color: #fff;
  }
  .enter_area {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    input[type="text"] {
      margin: 0;
      padding: 10px;
      width: calc(100% - 60px);
      height: 20px;
      border: none;
      border-radius: 2px 0 0 2px;
      background-color: #fff;
      line-height: 20px;
    }
    .btn {
      width: 40px;
      height: 40px;
      padding: 0;
      box-shadow: none !important;
      border-radius: 0 2px 2px 0;
      background-color: #ffb300;
      line-height: 40px;
      vertical-align: top;
      &:hover, &:focus, &.valid {
        border: none;
      }
      &:hover {
        background-color: #ff6f00;
      }
      i {
        color: #333;
        font-size: 1.6rem;
      }
    }
  }
`;