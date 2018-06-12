import styled from 'styled-components';

export const TalkListStyle = styled.div`
  float: left;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #212121;
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