/** @format */
import styled from "styled-components";

export const AddPostWrapper = styled.div`
  width: 80vw;
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin: auto;
`;

export const AddPostDiv = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: grey;
  padding-left: 15px;
`;

export const AddPostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    margin: 0 15px;
  }
  input {
    flex: 1;
    outline-width: 0;
    font-weight: 600;
    margin: 10px;
    padding: 10px;
    min-height: 35px;
    border: 1px solid lightgray;
    border-radius: 30px;
  }
  textarea {
    margin-left: 10px;
    outline-width: 0;
    font-weight: 600;
    min-height: 350px;
    margin: 10px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 30px;
    resize: vertical;
  }
  button {
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 1px solid lightgrey;
    border-radius: 30px;
    padding: 10px;
    transition: 0.2s;
    :hover {
      background-color: rgb(240, 240, 240, 0.9);
    }
  }
`;
