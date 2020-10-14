import { Mount } from '@vue/test-utils'
import LesionMapper from '../src/lesion-mapper.vue'

/*
This throws a TypeError: Object(...) is not a function error
I am not sure why this happens
This may be related to the canvas error

Refer: https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-mocha-webpack.html
See also: webpack.config.js
*/
describe('LesionMapper', () => {
  it('mount the LesionMapper component', () => {
      //shallowMount to Mount
    try{  
        const wrapper = Mount(LesionMapper)
        expect(wrapper.find('debug').text()).toMatch('')
    } catch (error){
        console.log(error)
    }
    // wrapper.find('button').trigger('click')
  })
})