/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import { css as bootstrapCss } from 'horyd-bootstrap-loader'
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';

function Header() {
  return (
    <div>
      <div className={s.root}>
        <div className={s.container}>
          <Navigation className={s.nav}/>
          <Link className={s.brand} to="/">
            <img src={logoUrl} width="38" height="38" alt="React"/>
            <span className={s.brandTxt}>Your Company</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="jumbotron">
          <h1>Hello <a href="https://github.com/shakacode/bootstrap-loader/">bootstrap-loader</a>!
          </h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.</p>
          <p><a className="btn btn-primary btn-lg"
                href="http://getbootstrap.com/components/#jumbotron" role="button">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
