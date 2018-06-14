import styled from 'styled-components';

export const JoinStyle = styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  min-width: 680px;
  padding-top: 60px;
  box-sizing: border-box;
  background-color: #424242;
  .card {
    width: 300px;
    margin: 0 auto;
    padding: 60px 0;
    box-shadow: none;
    background-color: transparent;
    h2 {
      height: 40px;
      margin: 0 0 20px 0;
      font-size: 1.6rem;
      color: #ffc107;
      text-align: center;
      line-height: 40px;
    }
    .card-content {
      border-radius: 2px;
      background-color: #212121;
      .row {
        input {
          color: #fff;
          border-color: #ffc107;
          [type="password"].vaild:not(.browser-default) {
            border-color: #ffc107;
            box-shadow: 0 1px 0 0 #ffc107;
          }
          &:not(.browser-default):focus:not([readonly]) {
            box-shadow: 0 1px 0 0 #ffc107;
          }
          &:not(.browser-default):focus:not([readonly]) + label {
            color: #ffc107;
          }
        }
        input.valid:not(.browser-default):focus,
        input.valid:not(.browser-default) {
          border-color: #ffc107;
          box-shadow: 0 1px 0 0 #ffc107;
        }
        .card-action {
          margin-top: 20px;
          padding: 0;
          border: none;
          .btn {
            display: block;
            height: 40px;
            margin: 0;
            border-radius: 2px;
            background-color: #ffc107;
            font-weight: bold;
            color: #333;
            text-align: center;
            line-height: 40px;
            &:hover, &:focus, &.valid {
              border: none;
            }
            &:hover {
              background-color: #ff6f00;
            }
          }
        }
      }
    }
    .card_add {
      margin-top: 20px;
      color: #fff;
      text-align: center;
      a {
        display: inline-block;
        margin-left: 10px;
        color: #ffc107;
        &:hover {
          color: #ff6f00;
        }
      }
    }
  }
`;