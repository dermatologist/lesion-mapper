# Lesion Mapper - Vue Component

![LesionMapper](https://github.com/dermatologist/lesion-mapper/raw/develop/notes/lesion-mapper.png)

## What is Lesion Mapper

Documenting skin lesions on body wireframes is common in dermatology and can be better in many ways than lengthy textual documentation.  LesionMapperTM is a tool and a method to standardize the mapping. In the LesionMapper methodology, the type of lesions are represented by clinical pictures instead of icons. The severity is represented by the opacity/translucency of the image and the location and distribution by the position and size of the lesion, respectively. The images can be dragged, enlarged or rotated. 

This is a vue component that can be embedded in other systems.

## Installation

```
npm install lesion-mapper --save
```

## Import

```
import LesionMapper from 'lesion-mapper';
```

```
Vue.component('LesionMapper',LesionMapper);
```

## Use

```
 <lesion-mapper ref="canvas" :width="width" :height="height"></lesion-mapper>
```

## Usage

#### Props

| Name   | Type   | Default | Description   |
| ------ | ------ | ------- | ------------- |
| lmWidth  | Number | 0       | canvas width  |
| lmHeight | Number | 0       | canvas height |
| lmJson   | String | ""      | Json to render|
| lmImage  | String | ""      | Background    |
| lmDebug  | Boolean| false   | Debug?        |

#### Events

| name                     | Type  | Description                                    |
| ------------------------ | ----- | ------------------- |
| savelm                   | event | Json representation |
| exportlm                 | event | Base64 String       |

## Contributors

* [Bell Eapen](https://nuchange.ca)