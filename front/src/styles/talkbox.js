import styled from 'styled-components';

export const TalkBoxStyle = styled.div`
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
      width: calc(100% - 20px);
      height: 20px;
      border: none;
      border-radius: 2px;
      background-color: #fff;
      line-height: 20px;
    }
  }
`;