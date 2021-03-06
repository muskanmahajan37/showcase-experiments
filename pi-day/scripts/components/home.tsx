// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import { Link } from "react-router-dom";

import homeDesktopImage from "../../assets/home-desktop.svg";
import homeImage from "../../assets/home.svg";
import logoImage from "../../assets/logo.svg";
import styles from "../../styles/home.css";
import sharedStyles from "../../styles/shared.css";
import { gaEvent } from "../services/ga";

export const Home: React.SFC = () => (
    <div className={ styles.page }>
        { gaEvent( { event: "pageview", path: location.pathname } ) }

        <div className={ styles.logoContainer }>
            <img src={ homeImage } width="100%" className={ sharedStyles.mobile } />
            <img src={ homeDesktopImage } width="100%" className={ sharedStyles.desktop } />
            <img src={ logoImage } className={ styles.logo } />
        </div>

        <h1 className={ styles.title }>A Pi Day Celebration</h1>
        <p className={ styles.description }>
            We have 31.4 trillion digits to celebrate! In honor of Pi Day, we’ve built you a tool
            that can generate 31.4 trillion unique pieces of graphic art in real-time.
        </p>

        <Link to="/experiment/pi/generate" className={ `${ sharedStyles.button } ${ styles.button }` }>MAKE ART</Link>

        <div className={ `${ sharedStyles.experiment } ${ styles.experiment }` }>
            <a href="https://showcase.withgoogle.com/experiments">a Google Cloud experiment</a>
            &nbsp;&bull;&nbsp;
            <a href="https://policies.google.com/privacy?hl=en-US" target="_blank">Privacy</a>
        </div>
    </div>
);
