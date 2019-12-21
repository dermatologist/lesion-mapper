# Lesion Mapper - Vue Component

![LesionMapper](https://github.com/dermatologist/lesion-mapper/raw/develop/notes/lesion-mapper.png)

## What is Lesion Mapper

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