import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';

import Cookies from 'js-cookie';

import { getBanners } from './api/requests';
import { Slider } from './components/Slider/Slider'
import { HomePage } from './components/HomePage/HomePage'
import { Footer } from './components/Footer/Footer'
import { CartPage } from './components/CartPage/CartPage'

import './App.scss';
import { Menu } from './components/Menu/Menu';

function App() {
  const [isTablet, setIsTablet] = useState(true);
  const [banners, setBanners] = useState([]);

  const checkCookieTablet = () => {
    // Cookies.set('isDeviceTablet', 'cookie de prueba')
    setIsTablet(Cookies.get('isDeviceTablet'));
  }

  const fetchBanners = async () => {
    const resBanners = await getBanners();
    setBanners(resBanners);
  }

  useEffect(() => {
    // checkCookieTablet();
    fetchBanners();
  }, [])

  return (
    <>
      {isTablet ?
        <>
          <Menu />
          <Slider dataSlider={banners} />
          <Switch>
            <Route path="/cart" exact component={CartPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
          <Footer />
        </>
        :
        <div>Tu dispositivo no es compatible</div>
      }
    </>
  );
}

export default App;
