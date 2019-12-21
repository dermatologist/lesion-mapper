
<template>
    <div class="lesion-mapper">
        <h3>Lesion Mapper</h3>
        <vue-fabric ref="canvas" @mouse:up="mouseUp" @mouse:down="mouseDown" @mouse:dblclick="dblClick" :width="width" :height="height"></vue-fabric>
        <div class="controls">
            <button v-on:click="createLesion('bulla')">Bulla</button>
            <button v-on:click="createLesion('erosion')">Erosion</button>
            <button v-on:click="createLesion('macule')">Macule</button>
            <button v-on:click="createLesion('nodule')">Nodule</button>
            <button v-on:click="createLesion('papule')">Papule</button>
            <button v-on:click="createLesion('plaque')">Plaque</button>
            <button v-on:click="createLesion('pustule')">Pustule</button>
            <button v-on:click="createLesion('ulcer')">Ulcer</button>
            <button v-on:click="createLesion('vesicle')">Vesicle</button>
            <hr>
            <button v-on:click="createLesion('atrophy')">Atrophy</button>
            <button v-on:click="createLesion('crusting')">Crusting</button>
            <button v-on:click="createLesion('demarcated')">Demarcated</button>
            <button v-on:click="createLesion('lichenification')">Lichenification</button>
            <button v-on:click="createLesion('purpura')">Purpura</button>
            <button v-on:click="createLesion('scaling')">Scaling</button>
            <button v-on:click="createLesion('scarring')">Scarring</button>
            <button v-on:click="createLesion('telangiectasia')">Telangiectasia</button>
            <hr>
            <button v-on:click="startDraw()">Draw</button>
            <button v-on:click="clearCanvas()">Clear</button>
            <button v-on:click="saveCanvasJson()">Save</button>
            <button v-on:click="saveCanvasImage()">Export</button>

        </div>
        <div id="color-opacity-controls">

            <label for="opacity">Opacity: </label>
            <input @change="changeOpacity" id="opacity" type="range" v-model="opacity" value="100">

        </div>
        <div id="debug" v-if="lmDebug">
            {{ debugOutput }}
        </div>
    </div>
    
</template>

<script>
    import VueFabric from 'vuejs-fabric';
    import Lesions from './images';

    export default {
        name: 'LesionMapper', // vue component name
        components: {
            VueFabric
        },
        computed: {},
        mounted: function () {
            if (this.lmImage == null)
                this.$refs.canvas.setBackgroundImage(this.getLesion('body'));
            else
                this.$refs.canvas.setBackgroundImage(this.lmImage);
            this.$refs.canvas.loadFromJSON(this.lmJson);
        },
    methods: {

        getLesion(lesion){
            return Lesions[lesion]
        },
        createLesion(lesion){
            this.$refs.canvas.createImage(Lesions[lesion])            
        },
        startDraw(){
            this.isHiddenDraw = !this.isHiddenDraw;
            this.$refs.canvas.freeDrawConfig(this.isHiddenDraw,0,0);
        },
        dblClick(){
            //this.isHiddenDraw = !this.isHiddenDraw;
        },
        mouseDown(){
            this.$refs.canvas.freeDrawConfig(!this.isHiddenDraw,1,2);
        },
        mouseUp(){
            this.$refs.canvas.freeDrawConfig(!this.isHiddenDraw,0,0);
        },
        changeOpacity(){
            this.selectedObject = this.$refs.canvas.getEditObj();
            this.selectedObject.set('opacity', this.opacity / 100);
            this.$refs.canvas.setEditObj(this.selectedObject)
        },
        clearCanvas() {
            this.$refs.canvas.clear();
            this.$refs.canvas.setBackgroundImage(this.getLesion('body'));
        },
        saveCanvasJson() {
            const _canvasjson = this.$refs.canvas.toJson();
            this.$emit('savelm', _canvasjson);
            this.debugOutput = _canvasjson;
        },
        saveCanvasImage() {
            const _canvasimage = this.$refs.canvas.toDataUrl();
            this.$emit('exportlm', _canvasimage);
            this.debugOutput = _canvasimage;
        },
    },
        data() {
            return {
                width: 600,
                height: 500,
                isHiddenDraw: true,
                opacity: 100,
                selectedObject: null,
                debugOutput: "",
            };
        },
        // model: {
        //     prop: 'canvasjson',
        //     event: 'savecanvas',
        // },
        props: {
            lmJson: String,
            lmImage: String,
            lmDebug: Boolean,
        },
    }
</script>


<style scoped>
    .lesion-mapper {
        display: block;
        width: 600px;
        margin: 25px auto;
        border: 1px solid #ccc;
        background: #eaeaea;
        text-align: center;
        padding: 25px;
    }
    .lesion-mapper p {
        margin: 0 0 1em;
    }
</style>
