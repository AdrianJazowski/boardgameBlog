/** @format */

import React from "react";
import {
  ImgSIdebarPhoto,
  SidebarWrapper,
  InnerWrapper,
  SidebarTitle,
  SidebarDescription,
} from "./SidebarStyles";
import PhotoPortrait from "../../assets/photo.png";
import SidebarPhoto from "../../assets/sidebarPhoto.jpg";
import { ImArrowUp } from "react-icons/im";

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <InnerWrapper>
          <SidebarTitle>
            Cześć jestem Adrian i serdecznie witam Cię na moim blogu o grach
            planszowych
          </SidebarTitle>
          <ImgSIdebarPhoto portret src={PhotoPortrait} />
          <SidebarDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            harum, dicta, ex doloremque, ipsam impedit rem ad quisquam ut modi
            voluptates praesentium soluta pariatur natus. Quidem sequi molestias
            nemo. Consectetur!
          </SidebarDescription>
          <ImgSIdebarPhoto banner src={SidebarPhoto} />
          <SidebarDescription>
            Sprawdź najnowszą grę polskiego wydawnicta, która bije rekordy
            sprzedaży!! <ImArrowUp />
            <ImArrowUp />
            <ImArrowUp />
          </SidebarDescription>
        </InnerWrapper>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
