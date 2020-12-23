# Lesion Mapper - Vue Component

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/dermatologist/lesion-mapper)
[![npm](https://img.shields.io/npm/dt/lesion-mapper)](https://www.npmjs.com/package/lesion-mapper)
[![Build](https://github.com/dermatologist/lesion-mapper/workflows/tests/badge.svg)](https://nuchange.ca)

![LesionMapper](https://github.com/dermatologist/lesion-mapper/raw/develop/notes/lesion-mapper.png)

## What is Lesion Mapper

Documenting skin lesions on body wireframes is common in dermatology and can be better in many ways than textual documentation.  LesionMapperTM is a tool and a method to standardize the mapping of lesions. In the LesionMapper methodology, the type of lesions are represented by icons. The severity is represented by the opacity of the icon and the location and distribution by the position and size of the icon, respectively. The images can be dragged, enlarged or rotated.

This is a vue component that can be embedded in other systems. It can export the map as a JSON string or a base64 encoded image.

## Installation

```
npm install vuejs-fabric --save
npm install lesion-mapper --save

```

## Import

```
import VueFabric from 'vuejs-fabric';
import LesionMapper from 'lesion-mapper';
```

```
Vue.component('LesionMapper',LesionMapper);
```

## Use

```
 <lesion-mapper ref="lmCanvas" :lmWidth="width" :lmHeight="height"></lesion-mapper>
```

## Usage

#### Props

| Name     | Type   | Default | Description   |
| -------- | ------ | ------- | ------------- |
| lmWidth  | Number | 0       | canvas width  |
| lmHeight | Number | 0       | canvas height |
| lmJson   | String | ""      | Json to render|
| lmImage  | String | ""      | Background    |
| lmDebug  | Boolean| false   | Debug?        |
| lmColor  | String | green   | Button color  |

#### Events

| name                     | Type  | Description                                    |
| ------------------------ | ----- | ------------------- |
| savelm                   | event | Json representation |
| exportlm                 | event | Base64 String       |


#### Methods
setLmBackground(image)

#### Install the development version from GitHub as below

Add the following to .npmrc

```
registry=https://registry.npmjs.org/
@dermatologist:registry=https://npm.pkg.github.com

```
And

```
npm install @dermatologist/lesion-mapper --save

```

## Contributors

* [Bell Eapen](https://nuchange.ca) | [![Twitter Follow](https://img.shields.io/twitter/follow/beapen?style=social)](https://twitter.com/beapen)
