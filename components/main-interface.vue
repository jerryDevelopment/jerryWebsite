<template>
  <div :class="isIndex ? 'interface-index' : 'interface-digital'" v-if="isNotLegal">
    <div class="cor-tl fixed main-menu-button-container" style="z-index: 3; top: 2em; transform: translateY(-50%);" v-if="($store.state.splitScreenActiveState || isNoIndexPage) && (scrollPositionY >= windowHeight || isNoIndexPage)">
      <transition name="fade">
        <div class="col auto-width float-right pad-lr-2">
            <svg v-if="isIndex" class="header-logo pointer" v-scroll-to="'#top'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288.13 63.59">
              <path :class="logoFillColorClass" d="M118.4,40.77l-.08-23.07h-8.16l.12,14.11a5.92,5.92,0,0,1-6.07,6.13c-5.23,0-5.83-4.37-5.83-6.13L98.26,17.7h-8l.12,14.11c0,8.2,4.92,13.72,12.33,13.72a10.22,10.22,0,0,0,7.7-3.3l0,7.82a5.74,5.74,0,0,1-11.48,0V49.5h-8v.3c0,7.84,5.35,13.79,13.73,13.79s13.78-6,13.78-13.79Z"/>
              <path :class="logoFillColorClass" d="M11.65,0a6.67,6.67,0,1,0,6.67,6.67A6.66,6.66,0,0,0,11.65,0"/>
              <path :class="logoFillColorClass" d="M7.56,49.92a5.41,5.41,0,0,1-5.71,5.7H0v7.84H2c8.26-.1,13.58-6,13.58-13.78V17.57h-8Z"/>
              <path :class="logoFillColorClass" d="M26.62,27.53a6,6,0,0,1,5.71-4.08,6,6,0,0,1,5.86,4.18l.18.35h-12c.07-.15.15-.3.23-.45m10.89,7.89h0a5.67,5.67,0,0,1-5.16,2.84,6.16,6.16,0,0,1-5.89-4.14L26.39,34h0c-.07-.19-.13-.39-.19-.59h20a15,15,0,0,0,.2-2.44,14.24,14.24,0,0,0-14-14.4,14.41,14.41,0,0,0,0,28.81,14.11,14.11,0,0,0,13.37-10Z"/>
              <path :class="logoFillColorClass" d="M56.84,21.19V17.57H49.19v27.5h8V34c0-2.49.31-5,2-6.8,1.82-1.95,4.49-2.31,7.71-1.95V17.49a10.47,10.47,0,0,0-10.08,3.7"/>
              <path :class="logoFillColorClass" d="M77.49,21.19V17.57H69.84v27.5h8V34c0-2.49.31-5,2-6.8,1.82-1.95,4.49-2.31,7.71-1.95V17.49a10.48,10.48,0,0,0-10.08,3.7"/>
            </svg>
            <svg v-else-if="!isIndex && isNoIndexPage" @click="gotoPageDigitalTop()" class="header-logo pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288.13 63.59">
              <path :class="logoFillColorClass" d="M118.4,40.77l-.08-23.07h-8.16l.12,14.11a5.92,5.92,0,0,1-6.07,6.13c-5.23,0-5.83-4.37-5.83-6.13L98.26,17.7h-8l.12,14.11c0,8.2,4.92,13.72,12.33,13.72a10.22,10.22,0,0,0,7.7-3.3l0,7.82a5.74,5.74,0,0,1-11.48,0V49.5h-8v.3c0,7.84,5.35,13.79,13.73,13.79s13.78-6,13.78-13.79Z"/>
              <path :class="logoFillColorClass" d="M11.65,0a6.67,6.67,0,1,0,6.67,6.67A6.66,6.66,0,0,0,11.65,0"/>
              <path :class="logoFillColorClass" d="M7.56,49.92a5.41,5.41,0,0,1-5.71,5.7H0v7.84H2c8.26-.1,13.58-6,13.58-13.78V17.57h-8Z"/>
              <path :class="logoFillColorClass" d="M26.62,27.53a6,6,0,0,1,5.71-4.08,6,6,0,0,1,5.86,4.18l.18.35h-12c.07-.15.15-.3.23-.45m10.89,7.89h0a5.67,5.67,0,0,1-5.16,2.84,6.16,6.16,0,0,1-5.89-4.14L26.39,34h0c-.07-.19-.13-.39-.19-.59h20a15,15,0,0,0,.2-2.44,14.24,14.24,0,0,0-14-14.4,14.41,14.41,0,0,0,0,28.81,14.11,14.11,0,0,0,13.37-10Z"/>
              <path :class="logoFillColorClass" d="M56.84,21.19V17.57H49.19v27.5h8V34c0-2.49.31-5,2-6.8,1.82-1.95,4.49-2.31,7.71-1.95V17.49a10.47,10.47,0,0,0-10.08,3.7"/>
              <path :class="logoFillColorClass" d="M77.49,21.19V17.57H69.84v27.5h8V34c0-2.49.31-5,2-6.8,1.82-1.95,4.49-2.31,7.71-1.95V17.49a10.48,10.48,0,0,0-10.08,3.7"/>
              <rect :class="logoFillColorClass" x="171.84" y="27.64" width="4.87" height="17.37"/>
              <path :class="logoFillColorClass" d="M150.29,40.91a5.08,5.08,0,0,1-4.87-5.35c0-3.1,2.18-5.46,4.87-5.46a5.18,5.18,0,0,1,4.87,5.46,5.12,5.12,0,0,1-4.87,5.35m4.87-13.09a8,8,0,0,0-5.61-2.21c-4.94,0-9,4.28-9,9.92s4.09,9.88,9,9.88A8,8,0,0,0,155.38,43v2H160V17.57h-4.87Z"/>
              <rect :class="logoFillColorClass" x="283.26" y="17.57" width="4.87" height="27.44"/>
              <path :class="logoFillColorClass" d="M266.93,37.63c0,2.43-2.36,3.43-5.28,3.43-1.95,0-3.21-.74-3.21-1.81,0-1.4,1.48-1.92,3.88-2.18a11.3,11.3,0,0,0,4.61-1.21ZM271.46,32c0-1.51-.59-6.49-8.3-6.49-5,0-8.44,2.69-8.92,6.31h4.87c.44-1.63,2.43-2.4,4.17-2.4,2.17,0,3.46.81,3.46,1.81,0,1.55-2.25,1.92-5.42,2.21-4.2.37-7.78,1.48-7.78,5.75s3.69,6.16,7.71,6.16a7.65,7.65,0,0,0,5.82-2.14,6.84,6.84,0,0,0,.48,1.77H272a11.46,11.46,0,0,1-.56-3.09Z"/>
              <rect :class="logoFillColorClass" x="218.53" y="27.64" width="4.87" height="17.37"/>
              <path :class="logoFillColorClass" d="M197.17,40.91a5.07,5.07,0,0,1-4.87-5.35c0-3.1,2.17-5.46,4.87-5.46S202,32.54,202,35.56a5.12,5.12,0,0,1-4.86,5.35M202.25,28a7.93,7.93,0,0,0-5.82-2.43c-4.94,0-9,4.28-9,9.92s4.1,9.88,9,9.88A8,8,0,0,0,202,43.2v.92c0,3.39-1.55,5.64-5,5.64-1.32,0-3.24-.59-3.87-2.1h-5.35c.74,4,4.69,6.64,9.22,6.64,6.09,0,9.85-3.95,9.85-10.26V26h-4.65Z"/>
              <path :class="logoFillColorClass" d="M240.64,37V30.33h3.43V26h-3.43V21.18h-4.87V26h-2.28v4.32h2.28V37c0,5.2,2.95,8.56,8.52,8V40.54c-2.43.15-3.65-.85-3.65-3.5"/>
              <path :class="logoFillColorClass" d="M174.22,17.34A3.77,3.77,0,1,0,176.68,24h0v0a3.76,3.76,0,0,0-2.49-6.59"/>
              <path :class="logoFillColorClass" d="M221,17.34a3.77,3.77,0,1,0,3.77,3.77A3.77,3.77,0,0,0,221,17.34"/>
            </svg>
            <svg v-else class="header-logo pointer" v-scroll-to="'#top'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288.13 63.59">
              <path :class="logoFillColorClass" d="M118.4,40.77l-.08-23.07h-8.16l.12,14.11a5.92,5.92,0,0,1-6.07,6.13c-5.23,0-5.83-4.37-5.83-6.13L98.26,17.7h-8l.12,14.11c0,8.2,4.92,13.72,12.33,13.72a10.22,10.22,0,0,0,7.7-3.3l0,7.82a5.74,5.74,0,0,1-11.48,0V49.5h-8v.3c0,7.84,5.35,13.79,13.73,13.79s13.78-6,13.78-13.79Z"/>
              <path :class="logoFillColorClass" d="M11.65,0a6.67,6.67,0,1,0,6.67,6.67A6.66,6.66,0,0,0,11.65,0"/>
              <path :class="logoFillColorClass" d="M7.56,49.92a5.41,5.41,0,0,1-5.71,5.7H0v7.84H2c8.26-.1,13.58-6,13.58-13.78V17.57h-8Z"/>
              <path :class="logoFillColorClass" d="M26.62,27.53a6,6,0,0,1,5.71-4.08,6,6,0,0,1,5.86,4.18l.18.35h-12c.07-.15.15-.3.23-.45m10.89,7.89h0a5.67,5.67,0,0,1-5.16,2.84,6.16,6.16,0,0,1-5.89-4.14L26.39,34h0c-.07-.19-.13-.39-.19-.59h20a15,15,0,0,0,.2-2.44,14.24,14.24,0,0,0-14-14.4,14.41,14.41,0,0,0,0,28.81,14.11,14.11,0,0,0,13.37-10Z"/>
              <path :class="logoFillColorClass" d="M56.84,21.19V17.57H49.19v27.5h8V34c0-2.49.31-5,2-6.8,1.82-1.95,4.49-2.31,7.71-1.95V17.49a10.47,10.47,0,0,0-10.08,3.7"/>
              <path :class="logoFillColorClass" d="M77.49,21.19V17.57H69.84v27.5h8V34c0-2.49.31-5,2-6.8,1.82-1.95,4.49-2.31,7.71-1.95V17.49a10.48,10.48,0,0,0-10.08,3.7"/>
              <rect :class="logoFillColorClass" x="171.84" y="27.64" width="4.87" height="17.37"/>
              <path :class="logoFillColorClass" d="M150.29,40.91a5.08,5.08,0,0,1-4.87-5.35c0-3.1,2.18-5.46,4.87-5.46a5.18,5.18,0,0,1,4.87,5.46,5.12,5.12,0,0,1-4.87,5.35m4.87-13.09a8,8,0,0,0-5.61-2.21c-4.94,0-9,4.28-9,9.92s4.09,9.88,9,9.88A8,8,0,0,0,155.38,43v2H160V17.57h-4.87Z"/>
              <rect :class="logoFillColorClass" x="283.26" y="17.57" width="4.87" height="27.44"/>
              <path :class="logoFillColorClass" d="M266.93,37.63c0,2.43-2.36,3.43-5.28,3.43-1.95,0-3.21-.74-3.21-1.81,0-1.4,1.48-1.92,3.88-2.18a11.3,11.3,0,0,0,4.61-1.21ZM271.46,32c0-1.51-.59-6.49-8.3-6.49-5,0-8.44,2.69-8.92,6.31h4.87c.44-1.63,2.43-2.4,4.17-2.4,2.17,0,3.46.81,3.46,1.81,0,1.55-2.25,1.92-5.42,2.21-4.2.37-7.78,1.48-7.78,5.75s3.69,6.16,7.71,6.16a7.65,7.65,0,0,0,5.82-2.14,6.84,6.84,0,0,0,.48,1.77H272a11.46,11.46,0,0,1-.56-3.09Z"/>
              <rect :class="logoFillColorClass" x="218.53" y="27.64" width="4.87" height="17.37"/>
              <path :class="logoFillColorClass" d="M197.17,40.91a5.07,5.07,0,0,1-4.87-5.35c0-3.1,2.17-5.46,4.87-5.46S202,32.54,202,35.56a5.12,5.12,0,0,1-4.86,5.35M202.25,28a7.93,7.93,0,0,0-5.82-2.43c-4.94,0-9,4.28-9,9.92s4.1,9.88,9,9.88A8,8,0,0,0,202,43.2v.92c0,3.39-1.55,5.64-5,5.64-1.32,0-3.24-.59-3.87-2.1h-5.35c.74,4,4.69,6.64,9.22,6.64,6.09,0,9.85-3.95,9.85-10.26V26h-4.65Z"/>
              <path :class="logoFillColorClass" d="M240.64,37V30.33h3.43V26h-3.43V21.18h-4.87V26h-2.28v4.32h2.28V37c0,5.2,2.95,8.56,8.52,8V40.54c-2.43.15-3.65-.85-3.65-3.5"/>
              <path :class="logoFillColorClass" d="M174.22,17.34A3.77,3.77,0,1,0,176.68,24h0v0a3.76,3.76,0,0,0-2.49-6.59"/>
              <path :class="logoFillColorClass" d="M221,17.34a3.77,3.77,0,1,0,3.77,3.77A3.77,3.77,0,0,0,221,17.34"/>
            </svg>
        </div>
      </transition>
    </div>
    <transition name="fast-fade">
      <div class="cor-tr fixed main-menu-button-container" style="z-index: 3; top: 2em; transform: translateY(-50%);" v-if="( $store.state.splitScreenActiveState && !$store.state.splitScreenAnimationState ) || isNoIndexPage">
          <div class="col auto-width float-right pad-tb-1 pad-lr-2">
            <button v-if="!isNoIndexPage" type="button" @click="toggleMenu()">
              <svg :class="'menu-button-icon' + ( scrollPositionY >= windowHeight ? ' on-shade' : '') + ( $store.state.mainMenuActiveState ? ' is-active' : '' )" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.96 20.99">
                <path :class="'path-1 ' + menuButtonFillColorClass" d="M1.29,2.58H29.67a1.29,1.29,0,0,0,0-2.58H1.29a1.29,1.29,0,0,0,0,2.58Z"/>
                <path :class="'path-2 ' + menuButtonFillColorClass" d="M29.67,9.21H1.29a1.29,1.29,0,1,0,0,2.58H29.67a1.29,1.29,0,0,0,0-2.58Z"/>
                <path :class="'path-3 ' + menuButtonFillColorClass" d="M29.67,18.41H1.29a1.29,1.29,0,1,0,0,2.58H29.67a1.29,1.29,0,0,0,0-2.58Z"/>
              </svg>
            </button>
            <button v-else type="button" @click="$router.go(-1)">
              <svg class="close-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.13 23.13">
                <path :class="menuButtonFillColorClass" d="M13.39,11.56,22.75,2.2A1.29,1.29,0,0,0,20.92.38L11.56,9.74,2.2.38A1.27,1.27,0,0,0,.38.38a1.27,1.27,0,0,0,0,1.82l9.36,9.36L.38,20.92A1.29,1.29,0,1,0,2.2,22.75l9.36-9.36,9.36,9.36a1.33,1.33,0,0,0,.92.38,1.29,1.29,0,0,0,.91-.38,1.3,1.3,0,0,0,0-1.83Z"/>
              </svg>
            </button>
          </div>
      </div>
    </transition>
    <div class="cor-br fixed" style="z-index: 2;" v-if="($store.state.splitScreenActiveState || isNoIndexPage) && (scrollPositionY >= 100 && !isNoIndexPage)">
      <transition name="fast-fade">
        <div>
          <div class="col auto-width float-right pad-a-2" v-if="!switchButtonIsActive" @click="activateSwitchButton()">
              <div class="media-container"><svg class="switch-icon pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                <path class="fill-white" d="M10.92,23.71a8.08,8.08,0,0,1-2.3-5.78A8.18,8.18,0,0,1,9.8,13.84L12.89,16A.3.3,0,0,0,13,16a.33.33,0,0,0,.13,0,.25.25,0,0,0,.11-.26L12.09,9.31a.27.27,0,0,0-.3-.21L5.4,10.3a.26.26,0,0,0-.2.2.26.26,0,0,0,.1.26l3,2A10,10,0,0,0,15.42,28a9.39,9.39,0,0,0,1.19.08l0-1.88A8.11,8.11,0,0,1,10.92,23.71Z"/>
                <path class="fill-white" d="M24.08,11.29a8.08,8.08,0,0,1,2.3,5.78,8.18,8.18,0,0,1-1.18,4.09l-3.09-2.11A.3.3,0,0,0,22,19a.33.33,0,0,0-.13,0,.25.25,0,0,0-.11.26l1.19,6.39a.27.27,0,0,0,.3.21l6.39-1.2a.26.26,0,0,0,.2-.2.26.26,0,0,0-.1-.26l-2.95-2A10,10,0,0,0,19.58,7a9.39,9.39,0,0,0-1.19-.08l0,1.88A8.11,8.11,0,0,1,24.08,11.29Z"/>
              </svg></div>
          </div>
          <div class="col auto-width float-right pad-a-2" @click="changeSplitScreen()" v-if="switchButtonIsActive">
            <nuxt-link :to="localePath(switchRoute)">
              <button class="relative bor-rad-2" type="button">
                <svg style="position: absolute; top: 50%; left: .9em; transform: translateY(-55%); height: .75em;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.42 10.98"><polygon class="fill-white" points="7.93 0 6.62 1.32 9.86 4.56 0 4.56 0 6.42 9.86 6.42 6.62 9.66 7.93 10.98 13.42 5.49 7.93 0"/></svg>
                <p class="text-xs c-white pad-tb-0-6 pad-resp-4-tb-0-3 pad-lr-2-5"><span v-html="isIndex ? 'Jerry Digital' : 'Jerry Consulting'"></span></p>
              </button>
            </nuxt-link>
          </div>
          <div :class="'switch-button-background' + switchBackgroundColorClass + ( switchButtonIsActive ? ' is-active' : '' )"></div>
        </div>
      </transition>
    </div>
    <transition name="fast-fade">
      <div :class="'edge-t fixed main-menu-button-container' + shadeColorClass" style="z-index: 2; height: 4em;" v-if="($store.state.splitScreenActiveState || isNoIndexPage) && (scrollPositionY >= windowHeight || isNoIndexPage)">
      </div>
    </transition>
  </div>
</template>

<script>


export default {
  data() {
    return {
      menuButtonColor: '',
      switchButtonIsActive: false
    }
  },
  methods: {
    openMenu() {
      this.$store.commit('activateMainMenu')
    },
    closeMenu() {
      this.$store.commit('deactivateMainMenu')
    },
    toggleMenu() {
      if(!this.$store.state.mainMenuActiveState){
        this.$store.commit('activateMainMenu')
      } else {
        this.$store.commit('deactivateMainMenu')
      }
    },
    changeSplitScreen() {
      if(!this.isIndex) {
        $nuxt.$emit('changeSplitScreen', 'digital')
      } else {
        $nuxt.$emit('changeSplitScreen', 'index')
      }
    },
    activateSwitchButton() {
      this.switchButtonIsActive = true
      setTimeout(()=>{
        this.switchButtonIsActive = false
      },4000)
    },
    gotoPageDigitalTop() {
      this.$router.push(this.localePath({ name: "digital" }));
      $nuxt.$emit('changeSplitScreen', 'digital')
    }
  },
  computed: {
    isIndex: function() {
      return this.$route.name == 'index___de' || this.$route.name == 'index___en'
    },
    isNoIndexPage: function() {
      return this.$route.name != 'index___de' && this.$route.name != 'index___en' && this.$route.name != 'digital___de' && this.$route.name != 'digital___en'
    },
    isNotLegal: function() {
      return this.$route.name != 'imprint___de' && this.$route.name != 'imprint___en' && this.$route.name != 'privacy-policy___de' && this.$route.name != 'privacy-policy___en'
    },
    logoFillColorClass: function() {
      if(!this.$store.state.mainMenuActiveState){
        if(this.isIndex){
          return 'fill-white'
        } else {
          return 'fill-blue'
        }
      } else {
        if(this.isIndex) {
          return 'fill-yellow'
        } else {
          return 'fill-blue'
        }
      }
    },
    shadeColorClass: function() {
      return this.isIndex ? ' bg-yellow' : ' bg-grey-1'
    },
    switchFillColorClass: function() {
      return this.isIndex ? 'fill-blue' : 'fill-yellow'
    },
    switchBackgroundColorClass: function() {
      return this.isIndex ? ' bg-blue' : ' bg-yellow'
    },
    menuButtonFillColorClass: function() {
      if(this.scrollPositionY < this.windowHeight || this.isNoIndexPage) {
        return this.menuButtonColor == 'yellow' ? ' fill-yellow' : ' fill-blue'
      } else {
        if(this.isIndex) {
        return 'fill-white'
        } else {
        return 'fill-blue'
        }
      }
    },
    switchRoute: function() {
      return this.isIndex ? '/digital' : '/'
    }    
  },
  created() {
    this.$nuxt.$on('changeMenuButtonColor', (type) => {
      if( type == 'index' ) {
        this.menuButtonColor = 'yellow'
      } else {
        this.menuButtonColor = 'blue'
      }
    })

    this.$nuxt.$on('setSwitchState', (bool) => {
      this.switchButtonIsActive = bool
    })
  }
}

</script>

<style>

.menu-button-icon path {
  transition: .2s;
  transform-origin: center;
}

.menu-button-icon.is-active .path-1 {
  transform: rotate(-45deg) translate(0%,43%);
}

.menu-button-icon.is-active .path-2 {
  opacity: 0;
}

.menu-button-icon.is-active .path-3 {
  transform: rotate(45deg) translate(0%,-43%);
}

</style>