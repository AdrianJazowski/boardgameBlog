/** @format */

import React from "react";
import { RecentGropupsWrapper, OneGroup } from "./RecentGroupStyles";

const RecentGropups = ({ name }) => {
  return (
    <RecentGropupsWrapper>
      <OneGroup>
        <p>{name}</p>
        <button>Obserwuj</button>
      </OneGroup>
    </RecentGropupsWrapper>
  );
};

export default RecentGropups;
