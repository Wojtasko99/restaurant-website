import React from 'react';

import './SpecialMenu.css';
import MenuItem from '../../components/Menuitem/MenuItem';
import images from '../../constants/images';

const SpecialMenu = () => (
  <div className='app__specialmenu section__padding'>
    <div className='app__specialmenu-heading'>
        <p className='p__cormorant'>Menu that fits you palatte</p>
        <img src={images.spoon} alt="specialmenu_spoon" className="spoon__img" />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>
    <div className='app__specialmenu-menu'>
      <div className='app__specialmenu-menu-items'>
        <h2>Wine & Beer</h2>
        <MenuItem name="Chapel Hill Shiraz" type="AU | Bottle" price="$56"/>
        <MenuItem name="Catena Malbec" type="AR | Bottle" price="$59"/>
        <MenuItem name="La Vieille Rosé" type="FR | 750 ml" price="$44"/>
        <MenuItem name="Rhino Pale Ale" type="CA | 750 ml" price="$31"/>
        <MenuItem name="Irish Guinness" type="IE | 750 ml" price="$26"/>
      </div>
      <div className='app__specialmenu-menu-image app__wrapper-img'>
        <img alt="image" src={images.menu}/>
      </div>
      <div className='app__specialmenu-menu-items'>
        <h2>Cocktails</h2>
        <MenuItem name="Aperol Spritz" type="Aperol | Villa Marchesi prosecco | soda | 30ml" price="$20"/>
        <MenuItem name="Dark 'N' Stormy" type="Dark rum | Ginger beer | Slice of lime. " price="$16"/>
        <MenuItem name="Daiquiri" type="Rum | Citrus juice | Sugar" price="$10"/>
        <MenuItem name="Old Fashioned" type="Bourbon | Brown sugar | Angostura Bitters" price="$31"/>
        <MenuItem name="Negroni" type="Gin | Sweet Vermouth | Campari | Orange garnish" price="$26"/>
      </div>
    </div>
    <button className='custom__button'>View More</button>
  </div>
);

export default SpecialMenu;
