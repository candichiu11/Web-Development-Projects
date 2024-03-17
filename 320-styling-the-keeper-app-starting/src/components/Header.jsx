import React from "react";
import Icon from '@mdi/react';
import { mdiLightbulbOnOutline } from '@mdi/js';


function Header() {
  return (
    <header>
      <h1><Icon path={mdiLightbulbOnOutline} size={2} /> Keeper</h1>
    </header>
  );
}

export default Header;
