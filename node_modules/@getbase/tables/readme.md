# [Base Tables](http://getbase.org)

Base tables is designed in a way where you can add it on top of the Base CSS framework or to your own custom project.

[![Travis Build Status][travis-img]][travis] [![David Dependencies Status][david-img]][david]

[travis-img]:   https://img.shields.io/travis/getbase/tables.svg?branch=master
[david-img]:    https://img.shields.io/david/dev/getbase/tables.svg?branch=master&label=dependencies
[travis]:       https://travis-ci.org/getbase/tables
[david]:        https://david-dm.org/getbase/tables?type=dev

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

Base Tables is a very thin layer which contains styles for tables for all breakpoints.

* * *

## Installation

If you have an existing project and would like to include the Base tables module, run the following command:

```bash
npm install --save @getbase/tables
```

Once you have the tables module installed, you can include it in your CSS/LESS/SCSS file with one of the following ways:

#### CSS Import:
  ```css
  import url("https://unpkg.com/@getbase/tables/index.css");
  ```

#### SCSS Import:

  ```scss
  /* Import Base Tables */
  @import "~@getbase/tables/scss/index";
  /* Your Other Styles */
  @import "main"
  ```


#### LESS Import:

  ```less
  /* Import Base Tables */
  @import "~@getbase/tables/less/index";
  /* Your Other Styles */
  @import "main"
  ```

* * *

## Documentation

Base Tables includes styles for tables. Currently there is only 1 style applied to all tables. To preview how it looks, check out the example / demo below.

* * *

## Demo

[View page example](https://unpkg.com/@getbase/tables/index.html) with the tables stylesheet applied.

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