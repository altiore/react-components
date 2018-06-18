import { configure/*, addDecorator*/ } from '@storybook/react';

import React from 'react'
// import {Helmet} from 'react-helmet'

const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

import "../@src/styles/app.scss"

configure(loadStories, module);