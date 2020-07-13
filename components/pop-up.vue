<template>
  <transition name="fast-fade">
    <div v-if="popUpIsActive" class="screen fixed bg-white-trans" style="z-index: 20;">
      <div :class="'pop-up fixed' + backgroundColorClass">
        <div class="cor-tr pad-a-2" style="z-index: 2;">
          <button type="button" @click="close()">
            <svg class="close-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.13 23.13">
              <path class="fill-white" d="M13.39,11.56,22.75,2.2A1.29,1.29,0,0,0,20.92.38L11.56,9.74,2.2.38A1.27,1.27,0,0,0,.38.38a1.27,1.27,0,0,0,0,1.82l9.36,9.36L.38,20.92A1.29,1.29,0,1,0,2.2,22.75l9.36-9.36,9.36,9.36a1.33,1.33,0,0,0,.92.38,1.29,1.29,0,0,0,.91-.38,1.3,1.3,0,0,0,0-1.83Z"/>
            </svg>
          </button>
        </div>
        <div class="c-frame">
          <div class="c-area pad-a-2 pad-resp-2-r-6  pad-resp-4-r-2">
            <div class="col col-unit-2 col-resp-4-unit-12 mar-resp-4-b-2 float-left align-left">
              <div class="media-container"><img class="w-per-75 w-resp-4-per-33" :src="staticMediaSrcBase + 'images/pictograms/' + selectedResult.img"></div>
            </div>
            <div class="col col-unit-10 col-resp-4-unit-12 float-left align-left">
              <h5 :class="'text-s mar-b-1 ' + textColorClass" v-html="selectedResult.title"></h5>
              <p :class="'text-xs ' + textColorClass" v-html="selectedResult.text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      popUpIsActive: false,
      selectedResult: {}
    }
  },
  methods: {
    close() {
      this.popUpIsActive = false
    },
    open() {
      this.popUpIsActive = true
    }
  },
  computed: {
    isIndex: function(){
      return this.$route.name == 'index___de' || this.$route.name == 'index___en'
    },
    backgroundColorClass: function() {
      return this.isIndex ? ' bg-yellow' : ' bg-blue'
    },
    textColorClass: function() {
      return this.isIndex ? ' c-black' : ' c-white'
    }
  },
  created() {
    this.$nuxt.$on('openPopUp', (content) => {
      this.selectedResult = content
      this.open()
    })
  }
}

</script>

<style>

  .pop-up {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 46em;
    height: auto;
  }

</style>