# [Base Layout Spacers](http://getbase.org)

Base Layout Spacers is designed in a way where you can add it on top of the Base CSS framework or to your own custom project.

[![Travis Build Status][travis-img]][travis] [![David Dependencies Status][david-img]][david]

[travis-img]:   https://img.shields.io/travis/getbase/layout-spacers.svg?branch=master
[david-img]:    https://img.shields.io/david/dev/getbase/layout-spacers.svg?branch=master&label=dependencies
[travis]:       https://travis-ci.org/getbase/layout-spacers
[david]:        https://david-dm.org/getbase/layout-spacers?type=dev

* * *

## Table of contents

* [Overview](#overview)
* [Installation](#installation)
* [Documentation](#documentation)
* [Demo](#demo)
* [Support](#support)
* [Authors](#authors)
* [License](#license)

* * *

## Overview

Base Layout Spacers contains styles for adding spaced rows (`.pad-top-5, .pad-bottom-20`, etc) and spaced layout (`pad-5, pad-20`, etc) for all breakpoints.

* * *

## Installation

If you have an existing project and would like to include the Base layout spacers module, run the following command:

```bash
npm install --save @getbase/layout-spacers
```

Once you have the layout spacers module installed, you can include it in your CSS/LESS/SCSS file with one of the following ways:

#### CSS Import:
  ```css
  @import url("https://unpkg.com/@getbase/layout-spacers/index.css");
  ```

#### SCSS Import:

  ```scss
  /* Import Base Layout Spacers */
  @import "~@getbase/layout-spacers/scss/index";
  /* Your Other Styles */
  @import "main"
  ```


#### LESS Import:

  ```less
  /* Import Base Layout Spacers */
  @import "~@getbase/layout-spacers/less/index";
  /* Your Other Styles */
  @import "main"
  ```

* * *

## Documentation

Base Layout Spacers includes styles for adding spaced rows (`.pad-top-5, .pad-bottom-20`, etc) and spaced layout (`pad-5, pad-20`, etc) for all breakpoints.

#### Helpers (Applies to SCSS/LESS)

| Helper Class | Purpose | Example | Outcome |
| ------------ | ------- | ------- | ------- |
| `.pad-top-5` | Applies top padding `5px` | `<div class="pad-top-5">This element will have a top padding of 5px</div>` | Applies a `padding-top` of `5px` to a `div` element for all breakpoints |
| `.pad-top-10` | Applies top padding `10px` | `<div class="pad-top-10">This element will have a top padding of 10px</div>` | Applies a `padding-top` of `10px` to a `div` element for all breakpoints |
| `.pad-top-15` | Applies top padding `15px` | `<div class="pad-top-15">This element will have a top padding of 15px</div>` | Applies a `padding-top` of `15px` to a `div` element for all breakpoints |
| `.pad-top-20` | Applies top padding `20px` | `<div class="pad-top-20">This element will have a top padding of 20px</div>` | Applies a `padding-top` of `20px` to a `div` element for all breakpoints |
| `.pad-top-25` | Applies top padding `25px` | `<div class="pad-top-25">This element will have a top padding of 25px</div>` | Applies a `padding-top` of `25px` to a `div` element for all breakpoints |
| `.pad-top-30` | Applies top padding `30px` | `<div class="pad-top-30">This element will have a top padding of 30px</div>` | Applies a `padding-top` of `30px` to a `div` element for all breakpoints |
| `.pad-top-35` | Applies top padding `35px` | `<div class="pad-top-35">This element will have a top padding of 35px</div>` | Applies a `padding-top` of `35px` to a `div` element for all breakpoints |
| `.pad-top-40` | Applies top padding `40px` | `<div class="pad-top-40">This element will have a top padding of 40px</div>` | Applies a `padding-top` of `40px` to a `div` element for all breakpoints |
| `.pad-top-45` | Applies top padding `45px` | `<div class="pad-top-45">This element will have a top padding of 45px</div>` | Applies a `padding-top` of `45px` to a `div` element for all breakpoints |
| `.pad-top-50` | Applies top padding `50px` | `<div class="pad-top-50">This element will have a top padding of 50px</div>` | Applies a `padding-top` of `50px` to a `div` element for all breakpoints |
| `.pad-top-55` | Applies top padding `55px` | `<div class="pad-top-55">This element will have a top padding of 55px</div>` | Applies a `padding-top` of `55px` to a `div` element for all breakpoints |
| `.pad-top-60` | Applies top padding `60px` | `<div class="pad-top-60">This element will have a top padding of 60px</div>` | Applies a `padding-top` of `60px` to a `div` element for all breakpoints |
| `.pad-bottom-5` | Applies bottom padding `5px` | `<div class="pad-bottom-5">This element will have a bottom padding of 5px</div>` | Applies a `padding-bottom` of `5px` to a `div` element for all breakpoints |
| `.pad-bottom-10` | Applies bottom padding `10px` | `<div class="pad-bottom-10">This element will have a bottom padding of 10px</div>` | Applies a `padding-bottom` of `10px` to a `div` element for all breakpoints |
| `.pad-bottom-15` | Applies bottom padding `15px` | `<div class="pad-bottom-15">This element will have a bottom padding of 15px</div>` | Applies a `padding-bottom` of `15px` to a `div` element for all breakpoints |
| `.pad-bottom-20` | Applies bottom padding `20px` | `<div class="pad-bottom-20">This element will have a bottom padding of 20px</div>` | Applies a `padding-bottom` of `20px` to a `div` element for all breakpoints |
| `.pad-bottom-25` | Applies bottom padding `25px` | `<div class="pad-bottom-25">This element will have a bottom padding of 25px</div>` | Applies a `padding-bottom` of `25px` to a `div` element for all breakpoints |
| `.pad-bottom-30` | Applies bottom padding `30px` | `<div class="pad-bottom-30">This element will have a bottom padding of 30px</div>` | Applies a `padding-bottom` of `30px` to a `div` element for all breakpoints |
| `.pad-bottom-35` | Applies bottom padding `35px` | `<div class="pad-bottom-35">This element will have a bottom padding of 35px</div>` | Applies a `padding-bottom` of `35px` to a `div` element for all breakpoints |
| `.pad-bottom-40` | Applies bottom padding `40px` | `<div class="pad-bottom-40">This element will have a bottom padding of 40px</div>` | Applies a `padding-bottom` of `40px` to a `div` element for all breakpoints |
| `.pad-bottom-45` | Applies bottom padding `45px` | `<div class="pad-bottom-45">This element will have a bottom padding of 45px</div>` | Applies a `padding-bottom` of `45px` to a `div` element for all breakpoints |
| `.pad-bottom-50` | Applies bottom padding `50px` | `<div class="pad-bottom-50">This element will have a bottom padding of 50px</div>` | Applies a `padding-bottom` of `50px` to a `div` element for all breakpoints |
| `.pad-bottom-55` | Applies bottom padding `55px` | `<div class="pad-bottom-55">This element will have a bottom padding of 55px</div>` | Applies a `padding-bottom` of `55px` to a `div` element for all breakpoints |
| `.pad-bottom-60` | Applies bottom padding `60px` | `<div class="pad-bottom-60">This element will have a bottom padding of 60px</div>` | Applies a `padding-bottom` of `60px` to a `div` element for all breakpoints |
| `.pad-5` | Applies padding `5px` | `<div class="pad-5">This element will have a padding of 5px</div>` | Applies a `padding` of `5px` to a `div` element for all breakpoints |
| `.pad-10` | Applies padding `10px` | `<div class="pad-10">This element will have a padding of 10px</div>` | Applies a `padding` of `10px` to a `div` element for all breakpoints |
| `.pad-15` | Applies padding `15px` | `<div class="pad-15">This element will have a padding of 15px</div>` | Applies a `padding` of `15px` to a `div` element for all breakpoints |
| `.pad-20` | Applies padding `20px` | `<div class="pad-20">This element will have a padding of 20px</div>` | Applies a `padding` of `20px` to a `div` element for all breakpoints |
| `.pad-25` | Applies padding `25px` | `<div class="pad-25">This element will have a padding of 25px</div>` | Applies a `padding` of `25px` to a `div` element for all breakpoints |
| `.pad-30` | Applies padding `30px` | `<div class="pad-30">This element will have a padding of 30px</div>` | Applies a `padding` of `30px` to a `div` element for all breakpoints |
| `.pad-35` | Applies padding `35px` | `<div class="pad-35">This element will have a padding of 35px</div>` | Applies a `padding` of `35px` to a `div` element for all breakpoints |
| `.pad-40` | Applies padding `40px` | `<div class="pad-40">This element will have a padding of 40px</div>` | Applies a `padding` of `40px` to a `div` element for all breakpoints |
| `.pad-45` | Applies padding `45px` | `<div class="pad-45">This element will have a padding of 45px</div>` | Applies a `padding` of `45px` to a `div` element for all breakpoints |
| `.pad-50` | Applies padding `50px` | `<div class="pad-50">This element will have a padding of 50px</div>` | Applies a `padding` of `50px` to a `div` element for all breakpoints |
| `.pad-55` | Applies padding `55px` | `<div class="pad-55">This element will have a padding of 55px</div>` | Applies a `padding` of `55px` to a `div` element for all breakpoints |
| `.pad-60` | Applies padding `60px` | `<div class="pad-60">This element will have a padding of 60px</div>` | Applies a `padding` of `60px` to a `div` element for all breakpoints |
| `.pad-top-0-m` | Applies top padding `0px` | `<div class="pad-top-0-m">This element will have a top padding of 0px</div>` | Applies a `padding-top` of `0px` to a `div` element for medium devices and above |
| `.pad-top-5-m` | Applies top padding `5px` | `<div class="pad-top-5-m">This element will have a top padding of 5px</div>` | Applies a `padding-top` of `5px` to a `div` element for medium devices and above |
| `.pad-top-10-m` | Applies top padding `10px` | `<div class="pad-top-10-m">This element will have a top padding of 10px</div>` | Applies a `padding-top` of `10px` to a `div` element for medium devices and above |
| `.pad-top-15-m` | Applies top padding `15px` | `<div class="pad-top-15-m">This element will have a top padding of 15px</div>` | Applies a `padding-top` of `15px` to a `div` element for medium devices and above |
| `.pad-top-20-m` | Applies top padding `20px` | `<div class="pad-top-20-m">This element will have a top padding of 20px</div>` | Applies a `padding-top` of `20px` to a `div` element for medium devices and above |
| `.pad-top-25-m` | Applies top padding `25px` | `<div class="pad-top-25-m">This element will have a top padding of 25px</div>` | Applies a `padding-top` of `25px` to a `div` element for medium devices and above |
| `.pad-top-30-m` | Applies top padding `30px` | `<div class="pad-top-30-m">This element will have a top padding of 30px</div>` | Applies a `padding-top` of `30px` to a `div` element for medium devices and above |
| `.pad-top-35-m` | Applies top padding `35px` | `<div class="pad-top-35-m">This element will have a top padding of 35px</div>` | Applies a `padding-top` of `35px` to a `div` element for medium devices and above |
| `.pad-top-40-m` | Applies top padding `40px` | `<div class="pad-top-40-m">This element will have a top padding of 40px</div>` | Applies a `padding-top` of `40px` to a `div` element for medium devices and above |
| `.pad-top-45-m` | Applies top padding `45px` | `<div class="pad-top-45-m">This element will have a top padding of 45px</div>` | Applies a `padding-top` of `45px` to a `div` element for medium devices and above |
| `.pad-top-50-m` | Applies top padding `50px` | `<div class="pad-top-50-m">This element will have a top padding of 50px</div>` | Applies a `padding-top` of `50px` to a `div` element for medium devices and above |
| `.pad-top-55-m` | Applies top padding `55px` | `<div class="pad-top-55-m">This element will have a top padding of 55px</div>` | Applies a `padding-top` of `55px` to a `div` element for medium devices and above |
| `.pad-top-60-m` | Applies top padding `60px` | `<div class="pad-top-60-m">This element will have a top padding of 60px</div>` | Applies a `padding-top` of `60px` to a `div` element for medium devices and above |
| `.pad-bottom-0-m` | Applies bottom padding `0px` | `<div class="pad-bottom-0-m">This element will have a bottom padding of 0px</div>` | Applies a `padding-bottom` of `0px` to a `div` element for medium devices and above |
| `.pad-bottom-5-m` | Applies bottom padding `5px` | `<div class="pad-bottom-5-m">This element will have a bottom padding of 5px</div>` | Applies a `padding-bottom` of `5px` to a `div` element for medium devices and above |
| `.pad-bottom-10-m` | Applies bottom padding `10px` | `<div class="pad-bottom-10-m">This element will have a bottom padding of 10px</div>` | Applies a `padding-bottom` of `10px` to a `div` element for medium devices and above |
| `.pad-bottom-15-m` | Applies bottom padding `15px` | `<div class="pad-bottom-15-m">This element will have a bottom padding of 15px</div>` | Applies a `padding-bottom` of `15px` to a `div` element for medium devices and above |
| `.pad-bottom-20-m` | Applies bottom padding `20px` | `<div class="pad-bottom-20-m">This element will have a bottom padding of 20px</div>` | Applies a `padding-bottom` of `20px` to a `div` element for medium devices and above |
| `.pad-bottom-25-m` | Applies bottom padding `25px` | `<div class="pad-bottom-25-m">This element will have a bottom padding of 25px</div>` | Applies a `padding-bottom` of `25px` to a `div` element for medium devices and above |
| `.pad-bottom-30-m` | Applies bottom padding `30px` | `<div class="pad-bottom-30-m">This element will have a bottom padding of 30px</div>` | Applies a `padding-bottom` of `30px` to a `div` element for medium devices and above |
| `.pad-bottom-35-m` | Applies bottom padding `35px` | `<div class="pad-bottom-35-m">This element will have a bottom padding of 35px</div>` | Applies a `padding-bottom` of `35px` to a `div` element for medium devices and above |
| `.pad-bottom-40-m` | Applies bottom padding `40px` | `<div class="pad-bottom-40-m">This element will have a bottom padding of 40px</div>` | Applies a `padding-bottom` of `40px` to a `div` element for medium devices and above |
| `.pad-bottom-45-m` | Applies bottom padding `45px` | `<div class="pad-bottom-45-m">This element will have a bottom padding of 45px</div>` | Applies a `padding-bottom` of `45px` to a `div` element for medium devices and above |
| `.pad-bottom-50-m` | Applies bottom padding `50px` | `<div class="pad-bottom-50-m">This element will have a bottom padding of 50px</div>` | Applies a `padding-bottom` of `50px` to a `div` element for medium devices and above |
| `.pad-bottom-55-m` | Applies bottom padding `55px` | `<div class="pad-bottom-55-m">This element will have a bottom padding of 55px</div>` | Applies a `padding-bottom` of `55px` to a `div` element for medium devices and above |
| `.pad-bottom-60-m` | Applies bottom padding `60px` | `<div class="pad-bottom-60-m">This element will have a bottom padding of 60px</div>` | Applies a `padding-bottom` of `60px` to a `div` element for medium devices and above |
| `.pad-0-m` | Applies padding `0px` | `<div class="pad-0-m">This element will have a padding of 0px</div>` | Applies a `padding` of `0px` to a `div` element for medium devices and above |
| `.pad-5-m` | Applies padding `5px` | `<div class="pad-5-m">This element will have a padding of 5px</div>` | Applies a `padding` of `5px` to a `div` element for medium devices and above |
| `.pad-10-m` | Applies padding `10px` | `<div class="pad-10-m">This element will have a padding of 10px</div>` | Applies a `padding` of `10px` to a `div` element for medium devices and above |
| `.pad-15-m` | Applies padding `15px` | `<div class="pad-15-m">This element will have a padding of 15px</div>` | Applies a `padding` of `15px` to a `div` element for medium devices and above |
| `.pad-20-m` | Applies padding `20px` | `<div class="pad-20-m">This element will have a padding of 20px</div>` | Applies a `padding` of `20px` to a `div` element for medium devices and above |
| `.pad-25-m` | Applies padding `25px` | `<div class="pad-25-m">This element will have a padding of 25px</div>` | Applies a `padding` of `25px` to a `div` element for medium devices and above |
| `.pad-30-m` | Applies padding `30px` | `<div class="pad-30-m">This element will have a padding of 30px</div>` | Applies a `padding` of `30px` to a `div` element for medium devices and above |
| `.pad-35-m` | Applies padding `35px` | `<div class="pad-35-m">This element will have a padding of 35px</div>` | Applies a `padding` of `35px` to a `div` element for medium devices and above |
| `.pad-40-m` | Applies padding `40px` | `<div class="pad-40-m">This element will have a padding of 40px</div>` | Applies a `padding` of `40px` to a `div` element for medium devices and above |
| `.pad-45-m` | Applies padding `45px` | `<div class="pad-45-m">This element will have a padding of 45px</div>` | Applies a `padding` of `45px` to a `div` element for medium devices and above |
| `.pad-50-m` | Applies padding `50px` | `<div class="pad-50-m">This element will have a padding of 50px</div>` | Applies a `padding` of `50px` to a `div` element for medium devices and above |
| `.pad-55-m` | Applies padding `55px` | `<div class="pad-55-m">This element will have a padding of 55px</div>` | Applies a `padding` of `55px` to a `div` element for medium devices and above |
| `.pad-60-m` | Applies padding `60px` | `<div class="pad-60-m">This element will have a padding of 60px</div>` | Applies a `padding` of `60px` to a `div` element for medium devices and above |
| `.pad-top-0-l` | Applies top padding `0px` | `<div class="pad-top-0-l">This element will have a top padding of 0px</div>` | Applies a `padding-top` of `0px` to a `div` element for large devices and above |
| `.pad-top-5-l` | Applies top padding `5px` | `<div class="pad-top-5-l">This element will have a top padding of 5px</div>` | Applies a `padding-top` of `5px` to a `div` element for large devices and above |
| `.pad-top-10-l` | Applies top padding `10px` | `<div class="pad-top-10-l">This element will have a top padding of 10px</div>` | Applies a `padding-top` of `10px` to a `div` element for large devices and above |
| `.pad-top-15-l` | Applies top padding `15px` | `<div class="pad-top-15-l">This element will have a top padding of 15px</div>` | Applies a `padding-top` of `15px` to a `div` element for large devices and above |
| `.pad-top-20-l` | Applies top padding `20px` | `<div class="pad-top-20-l">This element will have a top padding of 20px</div>` | Applies a `padding-top` of `20px` to a `div` element for large devices and above |
| `.pad-top-25-l` | Applies top padding `25px` | `<div class="pad-top-25-l">This element will have a top padding of 25px</div>` | Applies a `padding-top` of `25px` to a `div` element for large devices and above |
| `.pad-top-30-l` | Applies top padding `30px` | `<div class="pad-top-30-l">This element will have a top padding of 30px</div>` | Applies a `padding-top` of `30px` to a `div` element for large devices and above |
| `.pad-top-35-l` | Applies top padding `35px` | `<div class="pad-top-35-l">This element will have a top padding of 35px</div>` | Applies a `padding-top` of `35px` to a `div` element for large devices and above |
| `.pad-top-40-l` | Applies top padding `40px` | `<div class="pad-top-40-l">This element will have a top padding of 40px</div>` | Applies a `padding-top` of `40px` to a `div` element for large devices and above |
| `.pad-top-45-l` | Applies top padding `45px` | `<div class="pad-top-45-l">This element will have a top padding of 45px</div>` | Applies a `padding-top` of `45px` to a `div` element for large devices and above |
| `.pad-top-50-l` | Applies top padding `50px` | `<div class="pad-top-50-l">This element will have a top padding of 50px</div>` | Applies a `padding-top` of `50px` to a `div` element for large devices and above |
| `.pad-top-55-l` | Applies top padding `55px` | `<div class="pad-top-55-l">This element will have a top padding of 55px</div>` | Applies a `padding-top` of `55px` to a `div` element for large devices and above |
| `.pad-top-60-l` | Applies top padding `60px` | `<div class="pad-top-60-l">This element will have a top padding of 60px</div>` | Applies a `padding-top` of `60px` to a `div` element for large devices and above |
| `.pad-bottom-0-l` | Applies bottom padding `0px` | `<div class="pad-bottom-0-l">This element will have a bottom padding of 0px</div>` | Applies a `padding-bottom` of `0px` to a `div` element for large devices and above |
| `.pad-bottom-5-l` | Applies bottom padding `5px` | `<div class="pad-bottom-5-l">This element will have a bottom padding of 5px</div>` | Applies a `padding-bottom` of `5px` to a `div` element for large devices and above |
| `.pad-bottom-10-l` | Applies bottom padding `10px` | `<div class="pad-bottom-10-l">This element will have a bottom padding of 10px</div>` | Applies a `padding-bottom` of `10px` to a `div` element for large devices and above |
| `.pad-bottom-15-l` | Applies bottom padding `15px` | `<div class="pad-bottom-15-l">This element will have a bottom padding of 15px</div>` | Applies a `padding-bottom` of `15px` to a `div` element for large devices and above |
| `.pad-bottom-20-l` | Applies bottom padding `20px` | `<div class="pad-bottom-20-l">This element will have a bottom padding of 20px</div>` | Applies a `padding-bottom` of `20px` to a `div` element for large devices and above |
| `.pad-bottom-25-l` | Applies bottom padding `25px` | `<div class="pad-bottom-25-l">This element will have a bottom padding of 25px</div>` | Applies a `padding-bottom` of `25px` to a `div` element for large devices and above |
| `.pad-bottom-30-l` | Applies bottom padding `30px` | `<div class="pad-bottom-30-l">This element will have a bottom padding of 30px</div>` | Applies a `padding-bottom` of `30px` to a `div` element for large devices and above |
| `.pad-bottom-35-l` | Applies bottom padding `35px` | `<div class="pad-bottom-35-l">This element will have a bottom padding of 35px</div>` | Applies a `padding-bottom` of `35px` to a `div` element for large devices and above |
| `.pad-bottom-40-l` | Applies bottom padding `40px` | `<div class="pad-bottom-40-l">This element will have a bottom padding of 40px</div>` | Applies a `padding-bottom` of `40px` to a `div` element for large devices and above |
| `.pad-bottom-45-l` | Applies bottom padding `45px` | `<div class="pad-bottom-45-l">This element will have a bottom padding of 45px</div>` | Applies a `padding-bottom` of `45px` to a `div` element for large devices and above |
| `.pad-bottom-50-l` | Applies bottom padding `50px` | `<div class="pad-bottom-50-l">This element will have a bottom padding of 50px</div>` | Applies a `padding-bottom` of `50px` to a `div` element for large devices and above |
| `.pad-bottom-55-l` | Applies bottom padding `55px` | `<div class="pad-bottom-55-l">This element will have a bottom padding of 55px</div>` | Applies a `padding-bottom` of `55px` to a `div` element for large devices and above |
| `.pad-bottom-60-l` | Applies bottom padding `60px` | `<div class="pad-bottom-60-l">This element will have a bottom padding of 60px</div>` | Applies a `padding-bottom` of `60px` to a `div` element for large devices and above |
| `.pad-0-l` | Applies padding `0px` | `<div class="pad-0-l">This element will have a padding of 0px</div>` | Applies a `padding` of `0px` to a `div` element for large devices and above |
| `.pad-5-l` | Applies padding `5px` | `<div class="pad-5-l">This element will have a padding of 5px</div>` | Applies a `padding` of `5px` to a `div` element for large devices and above |
| `.pad-10-l` | Applies padding `10px` | `<div class="pad-10-l">This element will have a padding of 10px</div>` | Applies a `padding` of `10px` to a `div` element for large devices and above |
| `.pad-15-l` | Applies padding `15px` | `<div class="pad-15-l">This element will have a padding of 15px</div>` | Applies a `padding` of `15px` to a `div` element for large devices and above |
| `.pad-20-l` | Applies padding `20px` | `<div class="pad-20-l">This element will have a padding of 20px</div>` | Applies a `padding` of `20px` to a `div` element for large devices and above |
| `.pad-25-l` | Applies padding `25px` | `<div class="pad-25-l">This element will have a padding of 25px</div>` | Applies a `padding` of `25px` to a `div` element for large devices and above |
| `.pad-30-l` | Applies padding `30px` | `<div class="pad-30-l">This element will have a padding of 30px</div>` | Applies a `padding` of `30px` to a `div` element for large devices and above |
| `.pad-35-l` | Applies padding `35px` | `<div class="pad-35-l">This element will have a padding of 35px</div>` | Applies a `padding` of `35px` to a `div` element for large devices and above |
| `.pad-40-l` | Applies padding `40px` | `<div class="pad-40-l">This element will have a padding of 40px</div>` | Applies a `padding` of `40px` to a `div` element for large devices and above |
| `.pad-45-l` | Applies padding `45px` | `<div class="pad-45-l">This element will have a padding of 45px</div>` | Applies a `padding` of `45px` to a `div` element for large devices and above |
| `.pad-50-l` | Applies padding `50px` | `<div class="pad-50-l">This element will have a padding of 50px</div>` | Applies a `padding` of `50px` to a `div` element for large devices and above |
| `.pad-55-l` | Applies padding `55px` | `<div class="pad-55-l">This element will have a padding of 55px</div>` | Applies a `padding` of `55px` to a `div` element for large devices and above |
| `.pad-60-l` | Applies padding `60px` | `<div class="pad-60-l">This element will have a padding of 60px</div>` | Applies a `padding` of `60px` to a `div` element for large devices and above |
| `.pad-top-0-xl` | Applies top padding `0px` | `<div class="pad-top-0-xl">This element will have a top padding of 0px</div>` | Applies a `padding-top` of `0px` to a `div` element for extra large devices and above |
| `.pad-top-5-xl` | Applies top padding `5px` | `<div class="pad-top-5-xl">This element will have a top padding of 5px</div>` | Applies a `padding-top` of `5px` to a `div` element for extra large devices and above |
| `.pad-top-10-xl` | Applies top padding `10px` | `<div class="pad-top-10-xl">This element will have a top padding of 10px</div>` | Applies a `padding-top` of `10px` to a `div` element for extra large devices and above |
| `.pad-top-15-xl` | Applies top padding `15px` | `<div class="pad-top-15-xl">This element will have a top padding of 15px</div>` | Applies a `padding-top` of `15px` to a `div` element for extra large devices and above |
| `.pad-top-20-xl` | Applies top padding `20px` | `<div class="pad-top-20-xl">This element will have a top padding of 20px</div>` | Applies a `padding-top` of `20px` to a `div` element for extra large devices and above |
| `.pad-top-25-xl` | Applies top padding `25px` | `<div class="pad-top-25-xl">This element will have a top padding of 25px</div>` | Applies a `padding-top` of `25px` to a `div` element for extra large devices and above |
| `.pad-top-30-xl` | Applies top padding `30px` | `<div class="pad-top-30-xl">This element will have a top padding of 30px</div>` | Applies a `padding-top` of `30px` to a `div` element for extra large devices and above |
| `.pad-top-35-xl` | Applies top padding `35px` | `<div class="pad-top-35-xl">This element will have a top padding of 35px</div>` | Applies a `padding-top` of `35px` to a `div` element for extra large devices and above |
| `.pad-top-40-xl` | Applies top padding `40px` | `<div class="pad-top-40-xl">This element will have a top padding of 40px</div>` | Applies a `padding-top` of `40px` to a `div` element for extra large devices and above |
| `.pad-top-45-xl` | Applies top padding `45px` | `<div class="pad-top-45-xl">This element will have a top padding of 45px</div>` | Applies a `padding-top` of `45px` to a `div` element for extra large devices and above |
| `.pad-top-50-xl` | Applies top padding `50px` | `<div class="pad-top-50-xl">This element will have a top padding of 50px</div>` | Applies a `padding-top` of `50px` to a `div` element for extra large devices and above |
| `.pad-top-55-xl` | Applies top padding `55px` | `<div class="pad-top-55-xl">This element will have a top padding of 55px</div>` | Applies a `padding-top` of `55px` to a `div` element for extra large devices and above |
| `.pad-top-60-xl` | Applies top padding `60px` | `<div class="pad-top-60-xl">This element will have a top padding of 60px</div>` | Applies a `padding-top` of `60px` to a `div` element for extra large devices and above |
| `.pad-bottom-0-xl` | Applies bottom padding `0px` | `<div class="pad-bottom-0-xl">This element will have a bottom padding of 0px</div>` | Applies a `padding-bottom` of `0px` to a `div` element for extra large devices and above |
| `.pad-bottom-5-xl` | Applies bottom padding `5px` | `<div class="pad-bottom-5-xl">This element will have a bottom padding of 5px</div>` | Applies a `padding-bottom` of `5px` to a `div` element for extra large devices and above |
| `.pad-bottom-10-xl` | Applies bottom padding `10px` | `<div class="pad-bottom-10-xl">This element will have a bottom padding of 10px</div>` | Applies a `padding-bottom` of `10px` to a `div` element for extra large devices and above |
| `.pad-bottom-15-xl` | Applies bottom padding `15px` | `<div class="pad-bottom-15-xl">This element will have a bottom padding of 15px</div>` | Applies a `padding-bottom` of `15px` to a `div` element for extra large devices and above |
| `.pad-bottom-20-xl` | Applies bottom padding `20px` | `<div class="pad-bottom-20-xl">This element will have a bottom padding of 20px</div>` | Applies a `padding-bottom` of `20px` to a `div` element for extra large devices and above |
| `.pad-bottom-25-xl` | Applies bottom padding `25px` | `<div class="pad-bottom-25-xl">This element will have a bottom padding of 25px</div>` | Applies a `padding-bottom` of `25px` to a `div` element for extra large devices and above |
| `.pad-bottom-30-xl` | Applies bottom padding `30px` | `<div class="pad-bottom-30-xl">This element will have a bottom padding of 30px</div>` | Applies a `padding-bottom` of `30px` to a `div` element for extra large devices and above |
| `.pad-bottom-35-xl` | Applies bottom padding `35px` | `<div class="pad-bottom-35-xl">This element will have a bottom padding of 35px</div>` | Applies a `padding-bottom` of `35px` to a `div` element for extra large devices and above |
| `.pad-bottom-40-xl` | Applies bottom padding `40px` | `<div class="pad-bottom-40-xl">This element will have a bottom padding of 40px</div>` | Applies a `padding-bottom` of `40px` to a `div` element for extra large devices and above |
| `.pad-bottom-45-xl` | Applies bottom padding `45px` | `<div class="pad-bottom-45-xl">This element will have a bottom padding of 45px</div>` | Applies a `padding-bottom` of `45px` to a `div` element for extra large devices and above |
| `.pad-bottom-50-xl` | Applies bottom padding `50px` | `<div class="pad-bottom-50-xl">This element will have a bottom padding of 50px</div>` | Applies a `padding-bottom` of `50px` to a `div` element for extra large devices and above |
| `.pad-bottom-55-xl` | Applies bottom padding `55px` | `<div class="pad-bottom-55-xl">This element will have a bottom padding of 55px</div>` | Applies a `padding-bottom` of `55px` to a `div` element for extra large devices and above |
| `.pad-bottom-60-xl` | Applies bottom padding `60px` | `<div class="pad-bottom-60-xl">This element will have a bottom padding of 60px</div>` | Applies a `padding-bottom` of `60px` to a `div` element for extra large devices and above |
| `.pad-0-xl` | Applies padding `0px` | `<div class="pad-0-xl">This element will have a padding of 0px</div>` | Applies a `padding` of `0px` to a `div` element for extra large devices and above |
| `.pad-5-xl` | Applies padding `5px` | `<div class="pad-5-xl">This element will have a padding of 5px</div>` | Applies a `padding` of `5px` to a `div` element for extra large devices and above |
| `.pad-10-xl` | Applies padding `10px` | `<div class="pad-10-xl">This element will have a padding of 10px</div>` | Applies a `padding` of `10px` to a `div` element for extra large devices and above |
| `.pad-15-xl` | Applies padding `15px` | `<div class="pad-15-xl">This element will have a padding of 15px</div>` | Applies a `padding` of `15px` to a `div` element for extra large devices and above |
| `.pad-20-xl` | Applies padding `20px` | `<div class="pad-20-xl">This element will have a padding of 20px</div>` | Applies a `padding` of `20px` to a `div` element for extra large devices and above |
| `.pad-25-xl` | Applies padding `25px` | `<div class="pad-25-xl">This element will have a padding of 25px</div>` | Applies a `padding` of `25px` to a `div` element for extra large devices and above |
| `.pad-30-xl` | Applies padding `30px` | `<div class="pad-30-xl">This element will have a padding of 30px</div>` | Applies a `padding` of `30px` to a `div` element for extra large devices and above |
| `.pad-35-xl` | Applies padding `35px` | `<div class="pad-35-xl">This element will have a padding of 35px</div>` | Applies a `padding` of `35px` to a `div` element for extra large devices and above |
| `.pad-40-xl` | Applies padding `40px` | `<div class="pad-40-xl">This element will have a padding of 40px</div>` | Applies a `padding` of `40px` to a `div` element for extra large devices and above |
| `.pad-45-xl` | Applies padding `45px` | `<div class="pad-45-xl">This element will have a padding of 45px</div>` | Applies a `padding` of `45px` to a `div` element for extra large devices and above |
| `.pad-50-xl` | Applies padding `50px` | `<div class="pad-50-xl">This element will have a padding of 50px</div>` | Applies a `padding` of `50px` to a `div` element for extra large devices and above |
| `.pad-55-xl` | Applies padding `55px` | `<div class="pad-55-xl">This element will have a padding of 55px</div>` | Applies a `padding` of `55px` to a `div` element for extra large devices and above |
| `.pad-60-xl` | Applies padding `60px` | `<div class="pad-60-xl">This element will have a padding of 60px</div>` | Applies a `padding` of `60px` to a `div` element for extra large devices and above |

* * *

## Demo

[View page example](https://unpkg.com/@getbase/layout-spacers/index.html) with the layout spacers stylesheet applied.

* * *

## Support

* IE10+ and all other modern browsers.
* Please specify browsers you need to support in `package.json` according to [browserslist docs](https://github.com/ai/browserslist#queries).

* * *

## Authors

#### Matthew Hartman

* [https://twitter.com/matthewhartmans](https://twitter.com/matthewhartmans)
* [https://github.com/matthewhartman](https://github.com/matthewhartman)

* * *

## License

Code released under the [MIT Open Source](https://opensource.org/licenses/MIT) license.