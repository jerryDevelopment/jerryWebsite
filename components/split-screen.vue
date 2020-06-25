<template>
  <div class="screen bg-black">
    <div :class="'screen split-screen-left pointer' + activeClassLeft" @click="activateLeft()">
      <div class="screen split-screen-left-inner"></div>
    </div>
    <div :class="'screen split-screen-right pointer' + activeClassRight" @click="activateRight()">
      <div class="screen split-screen-right-inner"></div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      activeState: false,
      leftIsActive: false,
      rightIsActive: false,
    }
  },
  computed: {
    activeClassLeft: function() {
      if(this.activeState) {
        if(this.leftIsActive) {
          return ' is-active'
        } else {
          return ' is-inactive'
        }
      } else {
        return ''
      }
    },
    activeClassRight: function() {
      if(this.activeState) {
        if(this.rightIsActive) {
          return ' is-active'
        } else {
          return ' is-inactive'
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    activateLeft() {
      this.leftIsActive = true
      this.rightIsActive = false
      this.activeState = true
    },
    activateRight() {
      this.leftIsActive = false
      this.rightIsActive = true
      this.activeState = true
      console.log(this.leftIsActive)
      console.log(this.rightIsActive)
      console.log(this.activeState)
      console.log(this.activeClassRight)
    }
  }
}

</script>

<style>

.split-screen-left {
  transition: 2s;
  width: 100%;
  height: 100%;
  background: black;
  border: 1em solid yellow;
  box-sizing: border-box;
  clip-path: polygon(0 0, 42% 0, 80% 100%, 0% 100%);
}

.split-screen-left.is-active {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.split-screen-left.is-inactive {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}

.split-screen-left-inner {
  transition: 2s;
  background: yellow;
  width: 100%;
  height: 100%;
  clip-path: polygon(calc(42% - 1.5em) 0, 42% 0, 100% 100%, calc(80% - 1.5em) 100%);
}

.split-screen-left.is-active .split-screen-left-inner {
  clip-path: polygon(calc(100% - 1em) 0, 100% 0, 100% 100%, calc(100% - 1em) 100%);
}

.split-screen-left.is-inactive .split-screen-left-inner {
  clip-path: polygon(calc(0% - 1em) 0, 0% 0, 0% 100%, calc(0% - 1em) 100%);
}

.split-screen-right {
  transition: 2s;
  width: 100%;
  height: 100%;
  background: black;
  border: 1em solid blue;
  box-sizing: border-box;
  clip-path: polygon(42% 0, 100% 0, 100% 100%, 80% 100%);
}

.split-screen-right.is-active {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.split-screen-right.is-inactive {
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
}

.split-screen-right-inner {
  transition: 2s;
  background: blue;
  width: 100%;
  height: 100%;
  clip-path: polygon(42% 0, calc(42% + 1.5em) 0, calc(80% + 2em) 100%, 80% 100%);
}

.split-screen-right.is-active .split-screen-right-inner {
  clip-path: polygon(0% 0, calc(0% + 1em) 0, calc(0% + 1em) 100%, 0% 100%);
}

.split-screen-right.is-inactive .split-screen-right-inner {
  clip-path: polygon(100% 0, calc(100% + 1.5em) 0, calc(100% + 2em) 100%, 100% 100%);
}

</style>