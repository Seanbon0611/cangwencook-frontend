import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/icons/x.svg";

const MobileDropDown = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default MobileDropDown;
