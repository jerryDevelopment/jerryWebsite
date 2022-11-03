import Vue from 'vue'
Vue.mixin({
  data() {
    return {
      scrollPositionY: 0,
      lastScrollTop: 0,
      scrollDirection: 'none',
      windowHeight: 0,
      windowWidth: 0,
    }
  },
  computed: {
    isResp1: function () {
      return this.windowWidth <= 1440 && this.windowWidth > 1024
    },
    isResp2: function () {
      return this.windowWidth <= 1024 && this.windowWidth > 768
    },
    isResp3: function () {
      return this.windowWidth <= 768 && this.windowWidth > 500
    },
    isResp4: function () {
      return this.windowWidth <= 500
    }
  },
  created(){
    if (process.browser) { 
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  mounted() {
    window.addEventListener('resize', ()=>{
      this.getWindowHeightAndWidth()
    })
    this.getWindowHeightAndWidth()  
    this.handleScroll()
  },
  destroyed () {
    if (process.browser) { 
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.getWindowHeightAndWidth);
    }
  },
  methods: {
    getWindowHeightAndWidth (event) {
      this.windowHeight = document.documentElement.clientHeight
      this.windowWidth = document.documentElement.clientWidth
    },
    handleScroll () {
      this.scrollPositionY = window.scrollY || window.pageYOffset

      if (this.scrollPositionY > this.lastScrollTop){
        this.scrollDirection = 'down'
      } else {
        this.scrollDirection = 'up'
      }
      this.lastScrollTop = this.scrollPositionY <= 0 ? 0 : this.scrollPositionY;
    }
  }
})