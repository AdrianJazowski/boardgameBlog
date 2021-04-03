/** @format */

import React from "react";

import {
  WrapperForComentsComponent,
  ComentsLi,
  InputInComents,
  ComentsWrapper,
  OneComentAuthorAndContents,
} from "./ComentsStyles";

const Coments = ({ comments, visible }) => {
  return (
    <>
      <WrapperForComentsComponent visible={visible}>
        <InputInComents>
          <input name="coment" type="text" placeholder="wpisz swój komentarz" />
        </InputInComents>

        <ComentsWrapper>
          {comments.map((coment) => {
            const { comentAuthorName, comentContents } = coment;
            return (
              <ComentsLi key={comentAuthorName + comentContents}>
                <OneComentAuthorAndContents>
                  <p>{comentAuthorName}</p>
                  <p>{comentContents}</p>
                </OneComentAuthorAndContents>
              </ComentsLi>
            );
          })}
        </ComentsWrapper>
      </WrapperForComentsComponent>
    </>
  );
};

export default Coments;
