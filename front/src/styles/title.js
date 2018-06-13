import styled from 'styled-components';

export const TitleStyle = styled.div`
  position: absolute;
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
`;