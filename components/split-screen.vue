<template>
  <div id="top" :class="'screen split-screen-container bg-black relative ' + ( !$store.state.splitScreenAnimationState ? hoverClass : '' ) + ( $store.state.splitScreenActiveState ? ' ' : '')" :style="'height: ' + ( windowHeight == 0 ? '100vh' : windowHeight + 'px' ) + ';z-index: 2; overflow: hidden'">
    <div class="cor-tl" style="z-index: 2;">
      <transition name="fast-fade">
        <div class="col col-100 pad-lr-2 pad-tb-1-25 align-center" v-show="(leftIsActive || rightIsActive) && !$store.state.splitScreenAnimationState" @click="closeSplitScreen()">
          <button type="button">
            <svg class="close-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.13 23.13">
              <path :class="closeButtonFillClass" d="M13.39,11.56,22.75,2.2A1.29,1.29,0,0,0,20.92.38L11.56,9.74,2.2.38A1.27,1.27,0,0,0,.38.38a1.27,1.27,0,0,0,0,1.82l9.36,9.36L.38,20.92A1.29,1.29,0,1,0,2.2,22.75l9.36-9.36,9.36,9.36a1.33,1.33,0,0,0,.92.38,1.29,1.29,0,0,0,.91-.38,1.3,1.3,0,0,0,0-1.83Z"/>
            </svg>
          </button>
        </div>
      </transition>
    </div>
    <div class="edge-t">
      <div class="c-frame">
        <div class="c-area">
          <transition name="fade">
            <div class="col col-100 pad-a-3-5 pad-resp-4-tb-7 align-center" v-show="showWelcomeMessage && (!isResp4 || (leftIsActive || rightIsActive))">
              <p style="transition: color 1s;" :class="'text-l ' + welcomeMessageColorClass" v-html="splitScreenCurrentLanguage.welcomeMessage"></p>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div :class="'screen split-screen-left bor-yellow pointer' + activeClassLeft" @click="activateLeft()" @mouseover="hoverClass='hover-left'" @mouseleave="hoverClass='hover-none'">
      <div class="screen split-screen-left-inner bg-yellow" style="z-index: 1"></div>
      <div class="screen absolute" style="z-index: 0">
        <picture class="obj-fit-cover">
          <source media="(min-width: 1441px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerry_aufmacher_2400x1350px_vvxpxo.jpg">
          <source media="(min-width: 1025px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900002/jerry-website-assets/jerry_aufmacher_2400x1350px_vvxpxo.jpg">
          <source media="(min-width: 769px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900002/jerry-website-assets/jerry_aufmacher_2400x1350px_vvxpxo.jpg">
          <source media="(min-width: 426px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900002/jerry-website-assets/jerry_aufmacher_2400x1350px_vvxpxo.jpg">
          <source media="(min-width: 0px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900002/jerry-website-assets/jerry_aufmacher_2400x1350px_vvxpxo.jpg">
          <source media="(min-width: 1441px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerry_aufmacher_mobil_1200x1800px_awx1ud.jpg">
          <source media="(min-width: 1025px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900002/jerry-website-assets/jerry_aufmacher_mobil_1200x1800px_awx1ud.jpg">
          <source media="(min-width: 769px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900002/jerry-website-assets/jerry_aufmacher_mobil_1200x1800px_awx1ud.jpg">
          <source media="(min-width: 426px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900002/jerry-website-assets/jerry_aufmacher_mobil_1200x1800px_awx1ud.jpg">
          <source media="(min-width: 0px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900002/jerry-website-assets/jerry_aufmacher_mobil_1200x1800px_awx1ud.jpg">
          <img class="obj-fit-cover lazyload" data-src="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerry_aufmacher_2400x1350px_vvxpxo.jpg">
        </picture>
        <div class="split-screen-logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
            <path class="fill-yellow" d="M309.75,150.73V143H293.5v58.39h17V177.94c0-5.29.65-10.71,4.26-14.44,3.87-4.13,9.54-4.91,16.38-4.13V142.86c-8-1.29-16,1.16-21.41,7.87"/>
            <path class="fill-yellow" d="M353.89,150.73V143H337.65v58.39h17V177.94c0-5.29.64-10.71,4.25-14.44,3.87-4.13,9.55-4.91,16.38-4.13V142.86c-8-1.29-16,1.16-21.41,7.87"/>
            <path class="fill-yellow" d="M214.48,105.73a14.16,14.16,0,1,0,14.16,14.15,14.16,14.16,0,0,0-14.16-14.15"/>
            <path class="fill-yellow" d="M440.77,192.3l-.17-49H423.26l.26,30c0,7.35-5.29,13-12.9,13-11.09,0-12.38-9.28-12.38-13l-.25-30H381l.25,30c0,17.41,10.45,29.14,26.18,29.14a21.7,21.7,0,0,0,16.35-7l.08,16.61c0,6.06-3.74,12.12-12.25,12.12s-12.12-6.06-12.12-12.12v-1.16h-17v.64c0,16.63,11.34,29.27,29.14,29.27s29.27-12.64,29.27-29.27Z"/>
            <path class="fill-yellow" d="M270,165.14H244.71c.15-.33.31-.64.47-.95,2.06-5.34,6.57-8.67,12.14-8.67a12.66,12.66,0,0,1,12.45,8.88c.12.25.25.49.36.74H270M257.42,141c-16.45,0-29.84,13.72-29.84,30.59s13.39,30.59,29.84,30.59a30,30,0,0,0,28.39-21.19H268.3c-2.21,4.12-6.54,6-11,6a13,13,0,0,1-12.49-8.78l-.13-.24h0c-.14-.41-.28-.82-.39-1.24h42.48a31.67,31.67,0,0,0,.43-5.18c0-16.87-13.38-30.59-29.84-30.59"/>
            <path class="fill-yellow" d="M205.79,211.72c0,6-3.71,12.05-12.13,12.11h-3.92v16.64H194c17.54-.21,28.83-12.76,28.83-29.26V143h-17Z"/>
          </svg>
        </div>
        <div class="cor-tl">
          <transition name="fade">
            <div class="col auto-width pad-a-3 pad-resp-4-a-1-5" v-show="showTextLayer">
              <p class="text-l mar-b-0-66 c-yellow" v-html="splitScreenCurrentLanguage.leftTagLine"></p>
              <p class="text-m c-white" v-html="splitScreenCurrentLanguage.leftText" v-if="isResp4"></p>
            </div>
          </transition>
        </div>
        <div class="cor-bl" v-if="!isResp4">
          <transition name="fade">
            <div class="col auto-width pad-a-3" v-show="showTextLayer">
              <p class="text-m c-white" v-html="splitScreenCurrentLanguage.leftText"></p>
            </div>
          </transition>
        </div>
        <div class="edge-b scroll-down-button-container" v-scroll-to="'#who'">
          <div class="c-frame">
            <div class="c-area">
              <transition name="fade">
                <div  class="col col-100 pad-a-2 align-center" v-show="leftIsActive && !$store.state.splitScreenAnimationState">
                  <p class="text-l c-yellow mar-b-1 mar-resp-4-b-0-5" v-html="splitScreenCurrentLanguage.leftTextScrollDownButton"></p>
                  <svg class="scrolldown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.7 12.8">
                    <path class="fill-yellow" d="M17.85,12.8a1.27,1.27,0,0,1-.68-.19L.61,2.39A1.31,1.31,0,0,1,.19.61,1.31,1.31,0,0,1,2,.19L17.85,10,33.73.19a1.31,1.31,0,0,1,1.78.42,1.31,1.31,0,0,1-.42,1.78L18.53,12.61A1.3,1.3,0,0,1,17.85,12.8Z"/>
                  </svg>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="'screen split-screen-right bor-blue pointer' + activeClassRight" @click="activateRight()" @mouseover="hoverClass='hover-right'" @mouseleave="hoverClass='hover-none'">
      <div class="screen split-screen-right-inner bg-blue" style="z-index: 1"></div>
      <div class="screen absolute" style="z-index: 0">
        <picture class="obj-fit-cover">
          <source media="(min-width: 1441px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerrydigital_aufmacher_2400x1350px_segi23.jpg">
          <source media="(min-width: 1025px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900002/jerry-website-assets/jerrydigital_aufmacher_2400x1350px_segi23.jpg">
          <source media="(min-width: 769px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900002/jerry-website-assets/jerrydigital_aufmacher_2400x1350px_segi23.jpg">
          <source media="(min-width: 426px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900002/jerry-website-assets/jerrydigital_aufmacher_2400x1350px_segi23.jpg">
          <source media="(min-width: 0px) and (orientation: landscape)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900002/jerry-website-assets/jerrydigital_aufmacher_2400x1350px_segi23.jpg">
          <source media="(min-width: 1441px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerrydigital_aufmacher_mobil_1200x1800px_bvuzpu">
          <source media="(min-width: 1025px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900002/jerry-website-assets/jerrydigital_aufmacher_mobil_1200x1800px_bvuzpu">
          <source media="(min-width: 769px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900002/jerry-website-assets/jerrydigital_aufmacher_mobil_1200x1800px_bvuzpu">
          <source media="(min-width: 426px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900002/jerry-website-assets/jerrydigital_aufmacher_mobil_1200x1800px_bvuzpu">
          <source media="(min-width: 0px) and (orientation: portrait)" data-srcset="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900002/jerry-website-assets/jerrydigital_aufmacher_mobil_1200x1800px_bvuzpu">
          <img class="obj-fit-cover lazyload" data-src="https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerrydigital_aufmacher_2400x1350px_segi23.jpg">
        </picture>
        <div class="split-screen-logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 360">
            <g>
              <path class="fill-blue" d="M309.75,150.73V143H293.5v58.39h17V177.94c0-5.29.65-10.71,4.26-14.44,3.87-4.13,9.54-4.91,16.38-4.13V142.86c-8-1.29-16,1.16-21.41,7.87"/>
              <path class="fill-blue" d="M353.89,150.73V143H337.65v58.39h17V177.94c0-5.29.64-10.71,4.25-14.44,3.87-4.13,9.55-4.91,16.38-4.13V142.86c-8-1.29-16,1.16-21.41,7.87"/>
              <path class="fill-blue" d="M214.48,105.73a14.16,14.16,0,1,0,14.16,14.15,14.16,14.16,0,0,0-14.16-14.15"/>
              <path class="fill-blue" d="M440.77,192.3l-.17-49H423.26l.26,30c0,7.35-5.29,13-12.9,13-11.09,0-12.38-9.28-12.38-13l-.25-30H381l.25,30c0,17.41,10.45,29.14,26.18,29.14a21.7,21.7,0,0,0,16.35-7l.08,16.61c0,6.06-3.74,12.12-12.25,12.12s-12.12-6.06-12.12-12.12v-1.16h-17v.64c0,16.63,11.34,29.27,29.14,29.27s29.27-12.64,29.27-29.27Z"/>
              <path class="fill-blue" d="M270,165.14H244.71c.15-.33.31-.64.47-.95,2.06-5.34,6.57-8.67,12.14-8.67a12.66,12.66,0,0,1,12.45,8.88c.12.25.25.49.36.74H270M257.42,141c-16.45,0-29.84,13.72-29.84,30.59s13.39,30.59,29.84,30.59a30,30,0,0,0,28.39-21.19H268.3c-2.21,4.12-6.54,6-11,6a13,13,0,0,1-12.49-8.78l-.13-.24h0c-.14-.41-.28-.82-.39-1.24h42.48a31.67,31.67,0,0,0,.43-5.18c0-16.87-13.38-30.59-29.84-30.59"/>
              <path class="fill-blue" d="M205.79,211.72c0,6-3.71,12.05-12.13,12.11h-3.92v16.64H194c17.54-.21,28.83-12.76,28.83-29.26V143h-17Z"/>
            </g>
            <transition name="fade">
              <g v-show="rightIsActive">
                <rect class="fill-blue" x="268.39" y="226.33" width="3.91" height="13.96"/>
                <path class="fill-blue" d="M251.07,237a4.08,4.08,0,0,1-3.92-4.29,3.93,3.93,0,1,1,3.92,4.29M255,226.47a6.46,6.46,0,0,0-4.51-1.78c-4,0-7.26,3.44-7.26,8s3.29,7.94,7.26,7.94a6.4,6.4,0,0,0,4.69-2v1.64h3.73V218.23H255Z"/>
                <rect class="fill-blue" x="357.96" y="218.23" width="3.91" height="22.06"/>
                <path class="fill-blue" d="M344.82,234.36c0,1.95-1.89,2.75-4.24,2.75-1.57,0-2.57-.59-2.57-1.45,0-1.13,1.18-1.54,3.11-1.75a8.92,8.92,0,0,0,3.7-1Zm3.65-4.51c0-1.21-.48-5.22-6.67-5.22-4,0-6.79,2.17-7.18,5.07h3.92c.36-1.3,2-1.92,3.35-1.92,1.75,0,2.79.65,2.79,1.45,0,1.24-1.81,1.54-4.36,1.78-3.38.29-6.26,1.18-6.26,4.62s3,5,6.2,5a6.16,6.16,0,0,0,4.68-1.72,5.56,5.56,0,0,0,.39,1.43h3.58a9.66,9.66,0,0,1-.44-2.49Z"/>
                <rect class="fill-blue" x="305.92" y="226.33" width="3.91" height="13.96"/>
                <path class="fill-blue" d="M288.75,237a4.09,4.09,0,0,1-3.92-4.3,3.93,3.93,0,1,1,3.92,4.3m4.09-10.35a6.4,6.4,0,0,0-4.69-2c-4,0-7.26,3.44-7.26,8s3.29,7.94,7.26,7.94a6.42,6.42,0,0,0,4.51-1.78v.74c0,2.73-1.25,4.54-4,4.54a3.38,3.38,0,0,1-3.12-1.69h-4.29c.59,3.23,3.76,5.34,7.41,5.34,4.89,0,7.91-3.18,7.91-8.25V225h-3.73Z"/>
                <path class="fill-blue" d="M323.69,233.88v-5.39h2.76V225h-2.76v-3.88h-3.91V225h-1.84v3.47h1.84v5.36c0,4.18,2.37,6.88,6.85,6.4V236.7c-2,.12-2.94-.68-2.94-2.82"/>
                <path class="fill-blue" d="M270.3,218.05a3,3,0,0,0,0,6.06,3,3,0,0,0,2-.75h0v0a3,3,0,0,0,1-2.26,3,3,0,0,0-3-3"/>
                <path class="fill-blue" d="M307.88,218.05a3,3,0,1,0,3,3,3,3,0,0,0-3-3"/>
              </g>
            </transition>
            <transition name="fade-glow">
              <image v-show="rightIsActive" class="splitscreen-logo-glow" width="1431" height="976" transform="translate(143.64 59.54) scale(0.24)" :xlink:href="glowSrc"/>
            </transition>
            <transition name="fade">
              <g v-show="rightIsActive">
                <path class="fill-raw-blue" d="M309.75,150.73c.31-.39.64-.76,1-1.12h-1Z"/>
                <path class="fill-raw-blue" d="M288.66,247.76a9.83,9.83,0,0,0,1.75-.15H287A9.47,9.47,0,0,0,288.66,247.76Z"/>
                <path class="fill-raw-blue" d="M283,245.61h11.39a7.08,7.08,0,0,0,.81-1h-13A6.1,6.1,0,0,0,283,245.61Z"/>
                <path class="fill-raw-blue" d="M291.86,242.61h4.26a8.12,8.12,0,0,0,.25-1h-4A4,4,0,0,1,291.86,242.61Z"/>
                <path class="fill-raw-blue" d="M285.54,242.42h-4.29c0,.06,0,.12,0,.19h4.36A1.86,1.86,0,0,1,285.54,242.42Z"/>
                <rect class="fill-raw-blue" x="268.39" y="238.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M245.64,238.61a7.31,7.31,0,0,0,1.29,1h7a6.7,6.7,0,0,0,1.18-1v1h3.73v-1Z"/>
                <rect class="fill-raw-blue" x="357.96" y="238.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M335.13,238.61a5.18,5.18,0,0,0,1.22,1H344a4.72,4.72,0,0,0,.9-.75,7.1,7.1,0,0,0,.15.75h3.64c-.08-.32-.14-.66-.19-1Z"/>
                <rect class="fill-raw-blue" x="305.92" y="238.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M296.57,238.61H283.32a7,7,0,0,0,1.29,1h7.06a7.38,7.38,0,0,0,1-.78v.78h3.91v-1Z"/>
                <path class="fill-raw-blue" d="M321.36,238.61a4.8,4.8,0,0,0,1.27,1h4v-1Z"/>
                <path class="fill-raw-blue" d="M402.78,239.61h17.61c1-.29,2.05-.62,3-1H399.76A31.42,31.42,0,0,0,402.78,239.61Z"/>
                <path class="fill-raw-blue" d="M189.74,238.61v1h11.47a33.08,33.08,0,0,0,3.42-1Z"/>
                <rect class="fill-raw-blue" x="268.39" y="235.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M253.93,235.61a3.93,3.93,0,0,1-1.26,1h6.22v-1Z"/>
                <path class="fill-raw-blue" d="M248.19,235.61h-4.47a8.92,8.92,0,0,0,.44,1h5.29A3.83,3.83,0,0,1,248.19,235.61Z"/>
                <rect class="fill-raw-blue" x="357.96" y="235.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M338,235.66v0h-3.95v0a5.08,5.08,0,0,0,.1,1h4.4A1.16,1.16,0,0,1,338,235.66Z"/>
                <path class="fill-raw-blue" d="M344.49,235.61a2.69,2.69,0,0,1-1.21,1h5.19v-1Z"/>
                <rect class="fill-raw-blue" x="305.92" y="235.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M285.86,235.61H281.4a8.85,8.85,0,0,0,.43,1h5.29A4,4,0,0,1,285.86,235.61Z"/>
                <path class="fill-raw-blue" d="M291.61,235.61a3.93,3.93,0,0,1-1.26,1h6.22v-1Z"/>
                <path class="fill-raw-blue" d="M324.05,235.61h-4.11a7.7,7.7,0,0,0,.26,1h5.14A1.91,1.91,0,0,1,324.05,235.61Z"/>
                <path class="fill-raw-blue" d="M395.69,236.61H427.5c.53-.32,1-.65,1.54-1H394.16C394.66,236,395.17,236.29,395.69,236.61Z"/>
                <path class="fill-raw-blue" d="M210.58,235.61H189.74v1H209C209.51,236.29,210.06,236,210.58,235.61Z"/>
                <rect class="fill-raw-blue" x="268.39" y="232.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M247.15,232.7s0-.06,0-.09h-3.94s0,0,0,.06a7.3,7.3,0,0,0,.06.94h4A5.5,5.5,0,0,1,247.15,232.7Z"/>
                <path class="fill-raw-blue" d="M255,232.61s0,.06,0,.09a4.6,4.6,0,0,1-.09.91h4v-1Z"/>
                <rect class="fill-raw-blue" x="357.96" y="232.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M334.51,233.61H343a5.58,5.58,0,0,0,1.82-.68v.68h3.65v-1H335.3A3.53,3.53,0,0,0,334.51,233.61Z"/>
                <rect class="fill-raw-blue" x="305.92" y="232.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M292.65,232.61s0,.06,0,.09a4.6,4.6,0,0,1-.09.91h4v-1Z"/>
                <path class="fill-raw-blue" d="M284.84,232.61h-3.95v.06c0,.32,0,.63.05.94h4a4.53,4.53,0,0,1-.09-.91S284.84,232.64,284.84,232.61Z"/>
                <rect class="fill-raw-blue" x="319.78" y="232.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M391.65,233.61h39.92c.36-.33.72-.66,1.06-1h-42C390.93,233,391.29,233.28,391.65,233.61Z"/>
                <path class="fill-raw-blue" d="M214.3,232.61H189.74v1h23.47Z"/>
                <rect class="fill-raw-blue" x="268.39" y="229.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M248.27,229.61h-4.51a7.75,7.75,0,0,0-.3,1h4.17A4.27,4.27,0,0,1,248.27,229.61Z"/>
                <path class="fill-raw-blue" d="M258.89,230.61v-1h-5a4.27,4.27,0,0,1,.64,1Z"/>
                <rect class="fill-raw-blue" x="357.96" y="229.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M343,230.61h5.43v-.76a2.09,2.09,0,0,0,0-.24H344.6C344.42,230.1,343.86,230.4,343,230.61Z"/>
                <path class="fill-raw-blue" d="M338.54,229.7l0-.09h-3.93a.29.29,0,0,0,0,.09Z"/>
                <rect class="fill-raw-blue" x="305.92" y="229.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M291.53,229.61a4.27,4.27,0,0,1,.64,1h4.4v-1Z"/>
                <path class="fill-raw-blue" d="M281.43,229.61a7.73,7.73,0,0,0-.29,1h4.17a4,4,0,0,1,.64-1Z"/>
                <rect class="fill-raw-blue" x="319.78" y="229.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M388.8,230.61h45.63c.27-.33.53-.66.78-1H388C388.28,230,388.54,230.28,388.8,230.61Z"/>
                <path class="fill-raw-blue" d="M217,229.61H189.74v1h26.42C216.43,230.28,216.7,230,217,229.61Z"/>
                <rect class="fill-raw-blue" x="268.39" y="226.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M258.89,226.61H245.73a7.14,7.14,0,0,0-.89,1h14Z"/>
                <rect class="fill-raw-blue" x="357.96" y="226.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M335.41,227.61H348a4.32,4.32,0,0,0-.66-1H336.25A5.64,5.64,0,0,0,335.41,227.61Z"/>
                <rect class="fill-raw-blue" x="305.92" y="226.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M282.51,227.61h14.06v-1h-3.73v0l0,0h-9.38A7.89,7.89,0,0,0,282.51,227.61Z"/>
                <rect class="fill-raw-blue" x="317.95" y="226.61" width="8.51" height="1"/>
                <path class="fill-raw-blue" d="M386.7,227.61h49.85c.2-.33.39-.66.58-1h-51C386.31,227,386.5,227.28,386.7,227.61Z"/>
                <path class="fill-raw-blue" d="M218.93,226.61H189.74v1h28.6C218.55,227.28,218.74,227,218.93,226.61Z"/>
                <rect class="fill-raw-blue" x="254.98" y="223.61" width="3.91" height="1"/>
                <rect class="fill-raw-blue" x="357.96" y="223.61" width="3.91" height="1"/>
                <rect class="fill-raw-blue" x="319.78" y="223.61" width="3.91" height="1"/>
                <path class="fill-raw-blue" d="M270.3,224.11a3,3,0,0,0,1.64-.5h-3.31A3.09,3.09,0,0,0,270.3,224.11Z"/>
                <path class="fill-raw-blue" d="M307.88,224.11a3,3,0,0,0,1.66-.5h-3.33A3.07,3.07,0,0,0,307.88,224.11Z"/>
                <path class="fill-raw-blue" d="M411.58,224.12a14.45,14.45,0,0,1-3.87-.51h-23c.13.33.27.67.42,1h53c.15-.33.29-.67.43-1H415.51A14.91,14.91,0,0,1,411.58,224.12Z"/>
                <path class="fill-raw-blue" d="M220.4,223.61H196.15a15,15,0,0,1-2.49.22h-3.92v.78H220C220.11,224.28,220.26,224,220.4,223.61Z"/>
                <rect class="fill-raw-blue" x="254.98" y="220.61" width="3.91" height="1"/>
                <rect class="fill-raw-blue" x="357.96" y="220.61" width="3.91" height="1"/>
                <rect class="fill-raw-blue" x="319.78" y="221.14" width="3.91" height="0.47"/>
                <path class="fill-raw-blue" d="M267.33,221.61h5.95a3.07,3.07,0,0,0,.06-.53,3.56,3.56,0,0,0,0-.47h-6a3.56,3.56,0,0,0-.05.47A3.07,3.07,0,0,0,267.33,221.61Z"/>
                <path class="fill-raw-blue" d="M304.9,221.61h6a3.07,3.07,0,0,0,.06-.53,3.56,3.56,0,0,0-.05-.47h-6a3.56,3.56,0,0,0-.05.47A3.07,3.07,0,0,0,304.9,221.61Z"/>
                <path class="fill-raw-blue" d="M384,221.61h19.75a10.31,10.31,0,0,1-1.08-1h-19C383.77,220.94,383.87,221.28,384,221.61Z"/>
                <path class="fill-raw-blue" d="M419.53,221.61H439.3l.3-1h-19A10.43,10.43,0,0,1,419.53,221.61Z"/>
                <path class="fill-raw-blue" d="M221.47,220.61H202.3a11.39,11.39,0,0,1-1.17,1h20C221.27,221.28,221.37,220.94,221.47,220.61Z"/>
                <rect class="fill-raw-blue" x="254.98" y="218.23" width="3.91" height="0.38"/>
                <rect class="fill-raw-blue" x="357.96" y="218.23" width="3.91" height="0.38"/>
                <path class="fill-raw-blue" d="M270.3,218.05a3,3,0,0,0-1.74.56h3.49A3,3,0,0,0,270.3,218.05Z"/>
                <path class="fill-raw-blue" d="M307.88,218.05a3,3,0,0,0-1.75.56h3.49A3,3,0,0,0,307.88,218.05Z"/>
                <path class="fill-raw-blue" d="M422.13,218.61h18c.07-.33.14-.67.2-1H422.64C422.49,218,422.31,218.28,422.13,218.61Z"/>
                <path class="fill-raw-blue" d="M383.18,218.61h18c-.19-.33-.36-.66-.52-1H383C383,217.94,383.11,218.28,383.18,218.61Z"/>
                <path class="fill-raw-blue" d="M222.21,217.61H204.46c-.17.34-.35.67-.55,1H222C222.08,218.28,222.14,217.94,222.21,217.61Z"/>
                <path class="fill-raw-blue" d="M423.36,215.61H440.6c0-.33.08-.67.11-1H423.58C423.52,214.94,423.45,215.28,423.36,215.61Z"/>
                <path class="fill-raw-blue" d="M382.68,215.61h17.25c-.09-.33-.16-.67-.22-1H382.57C382.6,214.94,382.64,215.28,382.68,215.61Z"/>
                <path class="fill-raw-blue" d="M222.64,214.61H205.48c-.07.34-.15.67-.24,1h17.29C222.57,215.28,222.61,214.94,222.64,214.61Z"/>
                <path class="fill-raw-blue" d="M423.83,212c0,.2,0,.4,0,.61h17c0-.33,0-.67,0-1h-17Z"/>
                <path class="fill-raw-blue" d="M399.48,212.61c0-.21,0-.41,0-.61v-.39h-17c0,.33,0,.67,0,1Z"/>
                <path class="fill-raw-blue" d="M222.8,211.61h-17v.11c0,.29,0,.59,0,.89h17C222.79,212.28,222.8,211.94,222.8,211.61Z"/>
                <polygon class="fill-raw-blue" points="423.82 209.61 440.84 209.61 440.84 208.61 423.81 208.61 423.82 209.61"/>
                <rect class="fill-raw-blue" x="205.79" y="208.61" width="17.02" height="1"/>
                <polygon class="fill-raw-blue" points="423.81 206.61 440.83 206.61 440.83 205.61 423.8 205.61 423.81 206.61"/>
                <rect class="fill-raw-blue" x="205.79" y="205.61" width="17.02" height="1"/>
                <polygon class="fill-raw-blue" points="423.79 203.61 440.82 203.61 440.81 202.61 423.79 202.61 423.79 203.61"/>
                <rect class="fill-raw-blue" x="205.79" y="202.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="199.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="199.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M397.43,200.61h19a20,20,0,0,0,2-1H395.2A23.62,23.62,0,0,0,397.43,200.61Z"/>
                <polygon class="fill-raw-blue" points="423.78 200.61 440.8 200.61 440.8 199.61 423.77 199.61 423.78 200.61"/>
                <path class="fill-raw-blue" d="M245.56,199.61c.84.37,1.7.7,2.57,1h18.58c.87-.3,1.73-.63,2.56-1Z"/>
                <rect class="fill-raw-blue" x="205.79" y="199.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="196.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="196.61" width="17.02" height="1"/>
                <polygon class="fill-raw-blue" points="423.76 197.61 440.79 197.61 440.79 196.61 423.76 196.61 423.76 197.61"/>
                <path class="fill-raw-blue" d="M421.39,197.61c.39-.32.77-.66,1.14-1H390.72c.41.34.82.68,1.25,1Z"/>
                <path class="fill-raw-blue" d="M274.47,196.61H240.34c.49.34,1,.68,1.48,1H273C273.51,197.29,274,197,274.47,196.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="196.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="193.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="193.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M388.64,194.61h52.14v-1h-53C388.05,194,388.34,194.28,388.64,194.61Z"/>
                <path class="fill-raw-blue" d="M278,193.61H236.78c.35.34.71.67,1.07,1H277C277.35,194.29,277.69,194,278,193.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="193.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="190.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="190.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M386.28,191.61h54.49v-1H385.64C385.85,191,386.06,191.28,386.28,191.61Z"/>
                <path class="fill-raw-blue" d="M280.71,190.61h-46.6c.26.34.54.67.81,1h45C280.18,191.28,280.45,191,280.71,190.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="190.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="187.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="187.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M384.54,188.61h56.21v-1H384.07C384.22,188,384.38,188.28,384.54,188.61Z"/>
                <path class="fill-raw-blue" d="M282.79,187.61H232c.2.33.41.67.63,1h49.47C282.36,188.28,282.59,188,282.79,187.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="187.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="184.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="184.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M382.92,184.61c.11.33.22.67.34,1h22.67a11,11,0,0,1-2.22-1Z"/>
                <path class="fill-raw-blue" d="M415,185.61h25.78v-1H417.23A13.24,13.24,0,0,1,415,185.61Z"/>
                <path class="fill-raw-blue" d="M265.1,184.61a12.29,12.29,0,0,1-1.67,1H283.9c.17-.33.32-.67.47-1Z"/>
                <path class="fill-raw-blue" d="M249.66,184.61H230.44c.16.34.33.67.49,1h20.4A13.41,13.41,0,0,1,249.66,184.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="184.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="181.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="181.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M382.34,182.61h19a10.26,10.26,0,0,1-.77-1H382.11C382.18,181.94,382.26,182.28,382.34,182.61Z"/>
                <path class="fill-raw-blue" d="M419.85,182.61h20.88v-1h-20C420.46,182,420.16,182.29,419.85,182.61Z"/>
                <path class="fill-raw-blue" d="M285.58,181.61h-17.7a11.8,11.8,0,0,1-.69,1h18Z"/>
                <path class="fill-raw-blue" d="M246.66,181.61H229.25c.11.33.23.67.36,1h17.84C247.17,182.29,246.91,182,246.66,181.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="181.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="178.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="178.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M422,179.61h18.7v-1H422.48C422.34,179,422.19,179.28,422,179.61Z"/>
                <path class="fill-raw-blue" d="M381.72,179.61h17.74c-.14-.33-.26-.67-.37-1H381.57C381.62,178.94,381.66,179.28,381.72,179.61Z"/>
                <path class="fill-raw-blue" d="M245,178.61H228.39c.08.33.16.67.25,1h16.82C245.3,179.28,245.15,179,245,178.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="178.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M310.58,175.61H293.5v1h17C310.55,176.27,310.56,175.94,310.58,175.61Z"/>
                <path class="fill-raw-blue" d="M337.65,176.61h17c0-.34,0-.67,0-1H337.65Z"/>
                <path class="fill-raw-blue" d="M381.36,176.61h17.2c-.06-.35-.12-.68-.16-1H381.29C381.31,175.94,381.33,176.28,381.36,176.61Z"/>
                <path class="fill-raw-blue" d="M423.12,176.61h17.59v-1H423.32C423.27,176,423.2,176.28,423.12,176.61Z"/>
                <path class="fill-raw-blue" d="M287,175.61H227.85c0,.33.09.67.14,1h58.85C286.9,176.28,287,175.94,287,175.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="175.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M310.84,172.61H293.5v1h17.22C310.75,173.27,310.79,172.94,310.84,172.61Z"/>
                <path class="fill-raw-blue" d="M337.65,173.61h17.21l.12-1H337.65Z"/>
                <path class="fill-raw-blue" d="M381.22,173.27c0,.11,0,.22,0,.34h17c0-.12,0-.23,0-.34v-.66h-17Z"/>
                <path class="fill-raw-blue" d="M423.52,173.27c0,.11,0,.22,0,.34h17.2v-1H423.51Z"/>
                <path class="fill-raw-blue" d="M287.24,172.61H227.6c0,.33,0,.67.05,1h59.54C287.21,173.28,287.23,172.94,287.24,172.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="172.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M311.44,169.61H293.5v1h17.69C311.27,170.27,311.35,169.94,311.44,169.61Z"/>
                <path class="fill-raw-blue" d="M337.65,170.61h17.69c.07-.34.15-.67.25-1H337.65Z"/>
                <polygon class="fill-raw-blue" points="381.2 170.61 398.22 170.61 398.21 169.61 381.19 169.61 381.2 170.61"/>
                <polygon class="fill-raw-blue" points="423.5 170.61 440.69 170.61 440.69 169.61 423.49 169.61 423.5 170.61"/>
                <path class="fill-raw-blue" d="M287.2,169.61H227.64c0,.33,0,.66,0,1h59.64C287.23,170.27,287.22,169.94,287.2,169.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="169.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M312.58,166.61H293.5v1h18.63C312.27,167.27,312.42,166.93,312.58,166.61Z"/>
                <path class="fill-raw-blue" d="M337.65,167.61h18.62c.14-.34.29-.68.46-1H337.65Z"/>
                <polygon class="fill-raw-blue" points="381.17 167.61 398.19 167.61 398.19 166.61 381.17 166.61 381.17 167.61"/>
                <polygon class="fill-raw-blue" points="423.47 167.61 440.68 167.61 440.68 166.61 423.46 166.61 423.47 167.61"/>
                <path class="fill-raw-blue" d="M286.87,166.61H228c-.05.33-.09.66-.14,1H287C287,167.27,286.92,166.94,286.87,166.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="166.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M314.68,163.61H293.5v1h20.34A11.4,11.4,0,0,1,314.68,163.61Z"/>
                <path class="fill-raw-blue" d="M337.65,164.61H358a11.4,11.4,0,0,1,.84-1H337.65Z"/>
                <polygon class="fill-raw-blue" points="381.15 164.61 398.17 164.61 398.16 163.61 381.14 163.61 381.15 164.61"/>
                <polygon class="fill-raw-blue" points="423.44 164.61 440.67 164.61 440.67 163.61 423.44 163.61 423.44 164.61"/>
                <path class="fill-raw-blue" d="M245.18,164.19c.08-.2.17-.39.25-.58H228.6c-.09.33-.16.66-.24,1H245Z"/>
                <path class="fill-raw-blue" d="M269.48,163.61c.1.26.2.52.29.79a2,2,0,0,0,.1.21h16.61c-.08-.34-.15-.67-.24-1Z"/>
                <rect class="fill-raw-blue" x="205.79" y="163.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M293.5,160.61v1H317a12.15,12.15,0,0,1,1.8-1Z"/>
                <path class="fill-raw-blue" d="M337.65,161.61h23.51a12.57,12.57,0,0,1,1.79-1h-25.3Z"/>
                <polygon class="fill-raw-blue" points="423.42 161.61 440.66 161.61 440.66 160.61 423.41 160.61 423.42 161.61"/>
                <polygon class="fill-raw-blue" points="381.12 161.61 398.14 161.61 398.13 160.61 381.11 160.61 381.12 161.61"/>
                <path class="fill-raw-blue" d="M285.28,160.61H267.83c.23.32.46.65.67,1h17.14C285.53,161.27,285.41,160.94,285.28,160.61Z"/>
                <path class="fill-raw-blue" d="M247.15,160.61H229.56c-.13.33-.25.66-.36,1h17.27A11.7,11.7,0,0,1,247.15,160.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="160.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="157.61" width="37.65" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="157.61" width="37.66" height="1"/>
                <polygon class="fill-raw-blue" points="381.1 158.61 398.12 158.61 398.11 157.61 381.09 157.61 381.1 158.61"/>
                <polygon class="fill-raw-blue" points="423.39 158.61 440.65 158.61 440.65 157.61 423.38 157.61 423.39 158.61"/>
                <path class="fill-raw-blue" d="M284,157.61H264.64a10.85,10.85,0,0,1,1.34,1h18.48C284.3,158.27,284.14,157.94,284,157.61Z"/>
                <path class="fill-raw-blue" d="M250.3,157.61H230.87c-.17.33-.33.66-.49,1H249A11.24,11.24,0,0,1,250.3,157.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="157.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="154.61" width="37.65" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="154.61" width="37.66" height="1"/>
                <polygon class="fill-raw-blue" points="423.37 155.61 440.64 155.61 440.64 154.61 423.36 154.61 423.37 155.61"/>
                <polygon class="fill-raw-blue" points="381.07 155.61 398.09 155.61 398.08 154.61 381.06 154.61 381.07 155.61"/>
                <rect class="fill-raw-blue" x="205.79" y="154.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="151.61" width="37.65" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="151.61" width="37.66" height="1"/>
                <polygon class="fill-raw-blue" points="381.05 152.61 398.07 152.61 398.06 151.61 381.04 151.61 381.05 152.61"/>
                <polygon class="fill-raw-blue" points="423.34 152.61 440.63 152.61 440.63 151.61 423.33 151.61 423.34 152.61"/>
                <path class="fill-raw-blue" d="M280,151.61H234.81c-.27.33-.54.66-.8,1h46.83C280.57,152.27,280.31,151.94,280,151.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="151.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M331.16,149.61v-1H311.7c-.33.32-.66.65-1,1Z"/>
                <rect class="fill-raw-blue" x="293.5" y="148.61" width="16.25" height="1"/>
                <rect class="fill-raw-blue" x="337.65" y="148.61" width="16.25" height="1"/>
                <path class="fill-raw-blue" d="M375.3,149.61v-1H355.85c-.34.32-.67.65-1,1Z"/>
                <polygon class="fill-raw-blue" points="423.32 149.61 440.62 149.61 440.62 148.61 423.31 148.61 423.32 149.61"/>
                <polygon class="fill-raw-blue" points="381.02 149.61 398.04 149.61 398.03 148.61 381.01 148.61 381.02 149.61"/>
                <path class="fill-raw-blue" d="M277.14,148.61H237.7c-.36.32-.71.66-1,1h41.54C277.85,149.27,277.5,148.93,277.14,148.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="148.61" width="17.02" height="1"/>
                <rect class="fill-raw-blue" x="293.5" y="145.61" width="16.25" height="1"/>
                <path class="fill-raw-blue" d="M331.16,146.61v-1H315.62c-.52.31-1,.64-1.52,1Z"/>
                <path class="fill-raw-blue" d="M375.3,146.61v-1H359.77c-.52.31-1,.64-1.53,1Z"/>
                <rect class="fill-raw-blue" x="337.65" y="145.61" width="16.25" height="1"/>
                <polygon class="fill-raw-blue" points="423.29 146.61 440.61 146.61 440.61 145.61 423.28 145.61 423.29 146.61"/>
                <polygon class="fill-raw-blue" points="398.02 146.61 398.01 145.61 380.99 145.61 381 146.61 398.02 146.61"/>
                <path class="fill-raw-blue" d="M273.22,145.61h-31.6c-.5.32-1,.65-1.46,1h34.52C274.21,146.26,273.72,145.93,273.22,145.61Z"/>
                <rect class="fill-raw-blue" x="205.79" y="145.61" width="17.02" height="1"/>
                <path class="fill-raw-blue" d="M331.16,143.61v-.75c-.77-.12-1.53-.2-2.29-.25h-3.69a22.5,22.5,0,0,0-5.09,1Z"/>
                <rect class="fill-raw-blue" x="293.5" y="143.03" width="16.25" height="0.57"/>
                <path class="fill-raw-blue" d="M375.3,143.61v-.75c-.76-.12-1.53-.2-2.29-.25h-3.69a22.3,22.3,0,0,0-5.08,1Z"/>
                <rect class="fill-raw-blue" x="337.65" y="143.03" width="16.25" height="0.57"/>
                <polygon class="fill-raw-blue" points="397.99 143.31 380.97 143.31 380.97 143.61 397.99 143.61 397.99 143.31"/>
                <polygon class="fill-raw-blue" points="440.29 143.31 423.58 143.31 423.26 143.31 423.27 143.61 440.6 143.61 440.6 143.31 440.29 143.31"/>
                <path class="fill-raw-blue" d="M269.57,143.61c-.81-.37-1.63-.71-2.47-1H247.74c-.84.29-1.66.63-2.47,1Z"/>
                <rect class="fill-raw-blue" x="205.79" y="143.03" width="17.02" height="0.57"/>
                <path class="fill-raw-blue" d="M214.48,134a14.22,14.22,0,0,0,3.41-.43h-6.81A14.14,14.14,0,0,0,214.48,134Z"/>
                <path class="fill-raw-blue" d="M206.55,131.61h15.86a15.83,15.83,0,0,0,1.29-1H205.26A15.83,15.83,0,0,0,206.55,131.61Z"/>
                <path class="fill-raw-blue" d="M203.35,128.61h22.26c.26-.33.5-.66.72-1h-23.7C202.86,128,203.1,128.28,203.35,128.61Z"/>
                <path class="fill-raw-blue" d="M201.54,125.61h25.88c.14-.33.27-.66.39-1H201.15C201.27,125,201.4,125.28,201.54,125.61Z"/>
                <path class="fill-raw-blue" d="M200.6,122.61h27.77c.06-.33.11-.67.15-1H200.44C200.48,121.94,200.53,122.28,200.6,122.61Z"/>
                <path class="fill-raw-blue" d="M200.34,119.61h28.28c0-.34,0-.67-.05-1H200.39C200.36,118.94,200.35,119.27,200.34,119.61Z"/>
                <path class="fill-raw-blue" d="M200.72,116.61h27.52c-.08-.34-.16-.68-.26-1H201C200.89,115.93,200.8,116.27,200.72,116.61Z"/>
                <path class="fill-raw-blue" d="M201.81,113.61h25.35c-.17-.34-.36-.68-.55-1H202.36C202.16,112.93,202,113.27,201.81,113.61Z"/>
                <path class="fill-raw-blue" d="M203.81,110.61h21.35c-.31-.35-.63-.68-1-1H204.77A12.91,12.91,0,0,0,203.81,110.61Z"/>
                <path class="fill-raw-blue" d="M209.61,106.61a13.22,13.22,0,0,0-2.16,1h14.06a12.84,12.84,0,0,0-2.16-1Z"/>
                <path class="fill-raw-blue" d="M282.26,154.61H232.58c-.21.33-.42.66-.62,1h23.87a12.17,12.17,0,0,1,1.49-.09,13.39,13.39,0,0,1,1.57.09h24Z"/>
              </g>
            </transition>
          </svg>
        </div>
        <div class="edge-b scroll-down-button-container" v-scroll-to="'#who'">
          <div class="c-frame">
            <div class="c-area">
              <transition name="fade">
                <div class="col col-100 pad-a-2 pad-resp-4-tb-4 align-center" v-show="rightIsActive && !$store.state.splitScreenAnimationState">
                  <p class="text-l c-blue mar-b-1 mar-resp-4-b-0-5" v-html="splitScreenCurrentLanguage.rightTextScrollDownButton"></p>
                  <svg class="scrolldown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.7 12.8">
                    <path class="fill-blue" d="M17.85,12.8a1.27,1.27,0,0,1-.68-.19L.61,2.39A1.31,1.31,0,0,1,.19.61,1.31,1.31,0,0,1,2,.19L17.85,10,33.73.19a1.31,1.31,0,0,1,1.78.42,1.31,1.31,0,0,1-.42,1.78L18.53,12.61A1.3,1.3,0,0,1,17.85,12.8Z"/>
                  </svg>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="cor-tr" v-if="!isResp4">
          <transition name="fade">
            <div class="col auto-width pad-a-3 align-right" v-show="showTextLayer">
              <p class="text-l c-blue" v-html="splitScreenCurrentLanguage.rightTagLine"></p>
            </div>
          </transition>
        </div>
        <div class="cor-br">
          <transition name="fade">
            <div class="col auto-width pad-a-3 pad-resp-4-a-1-5 align-right" v-show="showTextLayer">
              <p class="text-l c-blue mar-b-0-66" v-html="splitScreenCurrentLanguage.rightTagLine" v-if="isResp4"></p>
              <p class="text-m c-white" v-html="splitScreenCurrentLanguage.rightText"></p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      leftIsActive: false,
      rightIsActive: false,
      hoverClass: 'hover-none',
      showWelcomeMessage: false,
      showTextLayer: false,
      initTimer1: {},
      initTimer2: {},
      switchTimer1: {},
      closeTimer1: {}
    }
  },
  computed: {
    activeClassLeft: function() {
      if(this.$store.state.splitScreenActiveState) {
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
      if(this.$store.state.splitScreenActiveState) {
        if(this.rightIsActive) {
          return ' is-active'
        } else {
          return ' is-inactive'
        }
      } else {
        return ''
      }
    },
    welcomeMessageColorClass: function() {
      if(this.rightIsActive) {
        return 'c-blue'
      } else if(this.leftIsActive) {
        return 'c-yellow'
      } else {
        return 'c-white'
      }
    },
    closeButtonFillClass: function() {
      if(this.leftIsActive) {
        return 'fill-yellow'
      } else if (this.rightIsActive) {
        return 'fill-blue'
      } else {
        return 'fill-white'
      }
    },
    glowSrc: function(){
      if(this.isResp4){
        return this.staticMediaSrcBase + 'images/jerry-digital-split-screen-glow-425.png'
      } else if(this.isResp3){
        return this.staticMediaSrcBase + 'images/jerry-digital-split-screen-glow-425.png'
      } else if(this.isResp2) {
        return this.staticMediaSrcBase + 'images/jerry-digital-split-screen-glow-768.png'
      } else if(this.isResp1) {
        return this.staticMediaSrcBase + 'images/jerry-digital-split-screen-glow-1024.png'
      } else {
        return this.staticMediaSrcBase + 'images/jerry-digital-split-screen-glow-1280.png'
      }
    }
  },
  methods: {
    activateLeft(forceFromRouteChange=false) {
      $nuxt.$emit('changeMenuButtonColor', 'index')
      if( !this.$store.state.splitScreenActiveState ){
        clearTimeout(this.initTimer1)
        clearTimeout(this.initTimer2)
        clearTimeout(this.switchTimer1)
        clearTimeout(this.closeTimer1)

        this.showWelcomeMessage = true


        this.leftIsActive = true
        this.rightIsActive = false
        this.$store.commit('activateSplitscreen')
        this.$store.commit('activateSplitscreenAnimation')
        this.showTextLayer = false
        this.switchTimer1 = setTimeout(()=>{
          this.$store.commit('fromDigitalToIndex')
          setTimeout(()=>{
            this.$store.commit('deactivateSplitscreenAnimation')
            this.$router.push(this.localePath('/'));
          },1)
        },1400)
      }
      if(forceFromRouteChange){
        this.leftIsActive = true
        this.rightIsActive = false
      }
    },
    activateRight(forceFromRouteChange=false) {
      $nuxt.$emit('changeMenuButtonColor', 'digital')
      if( !this.$store.state.splitScreenActiveState  ){
        clearTimeout(this.initTimer1)
        clearTimeout(this.initTimer2)
        clearTimeout(this.switchTimer1)
        clearTimeout(this.closeTimer1)

        this.showWelcomeMessage = true


        this.leftIsActive = false
        this.rightIsActive = true
        this.$store.commit('activateSplitscreen')
        this.$store.commit('activateSplitscreenAnimation')
        this.showTextLayer = false
        this.switchTimer1 = setTimeout(()=>{
          this.$store.commit('fromIndexToDigital')
          setTimeout(()=>{
            this.$store.commit('deactivateSplitscreenAnimation')
            this.$router.push(this.localePath('digital'));
          },1)
        },1400)
      }
      if(forceFromRouteChange){
        this.leftIsActive = false
        this.rightIsActive = true
      }
    },
    closeSplitScreen() {
      if( this.$store.state.splitScreenActiveState ){

        clearTimeout(this.initTimer1)
        clearTimeout(this.initTimer2)
        clearTimeout(this.switchTimer1)
        clearTimeout(this.closeTimer1)

        this.showWelcomeMessage = true
        this.$store.commit('activateSplitscreenAnimation')

        this.leftIsActive = false
        this.rightIsActive = false
        this.$store.commit('deactivateSplitscreen')
        this.showTextLayer = true

        this.closeTimer1 = setTimeout(()=>{
          this.$store.commit('deactivateSplitscreenAnimation')
        },2001)
      }
    }, changeSplitScreenOnRouteChange (to, from) {
      if( ( to == 'index___de' || to == 'index___en' ) && ( from == 'digital___de' || from == 'digital___en' ) ) {
        this.activateLeft(true)
      } else if ( ( to == 'digital___de' || to == 'digital___en' ) && ( from == 'index___de' || from == 'index___en' ) ) {
        this.activateRight(true)
      }
    },
  },
  created() {

    this.$watch(() => this.$route.name, this.changeSplitScreenOnRouteChange, {deep: true});

    this.$nuxt.$on('changeSplitScreen', (type) => {
      if( type == 'index' ) {
        this.activateLeft()
      } else {
        this.activateRight()
      }
    })

    if(this.$store.state.splitScreenFromInfo == 'from-index-to-digital') {
      this.showWelcomeMessage = true
      this.leftIsActive = false
      this.rightIsActive = true
      this.$store.commit('activateSplitscreen')
      this.showTextLayer = false
    } else if (this.$store.state.splitScreenFromInfo == 'from-digital-to-index') {
      this.showWelcomeMessage = true
      this.leftIsActive = true
      this.rightIsActive = false
      this.$store.commit('activateSplitscreen')
      this.showTextLayer = false
    } else {
      this.initTimer1 = setTimeout(()=>{
        this.showWelcomeMessage = true
      }, 1000)
      this.initTimer2 = setTimeout(()=>{
        this.showTextLayer = true
      }, 2000)
    }
  }
}



</script>

<style>

.split-screen-left {
  position: absolute;
  transition: 1.4s;
  width: 100%;
  height: 100%;
  background: black;
  border-width: .5em;
  border-style: solid;
  box-sizing: border-box;
  clip-path: polygon(0 0, 70% 0, 30% 100%, 0% 100%);
}

.split-screen-container > .edge-t,
.split-screen-left > .screen,
.split-screen-right > .screen {
  pointer-events: none;
}

.scroll-down-button-container {
  pointer-events: all;
}

.split-screen-left.is-active   { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important; }
.split-screen-left.is-inactive { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%) !important; }

.split-screen-container.hover-left .split-screen-left  { clip-path: polygon(0 0, 73% 0, 33% 100%, 0% 100%); }
.split-screen-container.hover-right .split-screen-left { clip-path: polygon(0 0, 67% 0, 27% 100%, 0% 100%); }

.split-screen-left-inner {
  position: absolute;
  transition: 1.4s;
  width: 100%;
  height: 100%;
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 30.2% 100%);
  left: -.75em;
}


.split-screen-left.is-active .split-screen-left-inner   { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%) !important; left: 0em; }
.split-screen-left.is-inactive .split-screen-left-inner { clip-path: polygon(0% 0, 100% 0, 100% 100%, 0% 100%) !important; }

.split-screen-container.hover-left .split-screen-left .split-screen-left-inner  { clip-path: polygon(73% 0, 100% 0, 100% 100%, 33.2% 100%); }
.split-screen-container.hover-right .split-screen-left .split-screen-left-inner { clip-path: polygon(67% 0, 100% 0, 100% 100%, 27.2% 100%); }

.split-screen-right {
  position: absolute;
  transition: 1.4s;
  width: 100%;
  height: 100%;
  background: black;
  border-width: .5em;
  border-style: solid;
  box-sizing: border-box;
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 30% 100%);
}

.split-screen-right.is-active   { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important; }
.split-screen-right.is-inactive { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%) !important; }

.split-screen-container.hover-left .split-screen-right  { clip-path: polygon(73% 0, 100% 0, 100% 100%, 33% 100%); }
.split-screen-container.hover-right .split-screen-right { clip-path: polygon(67% 0, 100% 0, 100% 100%, 27% 100%); }


.split-screen-right-inner {
  position: absolute;
  transition: 1.4s;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 69.8% 0, 30% 100%, 0% 100%);
  left: .75em;
}

.split-screen-right.is-active .split-screen-right-inner   { clip-path: polygon(0% 0, 0% 0, 0% 100%, 0% 100%) !important; left: 0; }
.split-screen-right.is-inactive .split-screen-right-inner { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important; }

.split-screen-container.hover-left .split-screen-right .split-screen-right-inner  { clip-path: polygon(0 0, 72.8% 0, 33% 100%, 0% 100%); }
.split-screen-container.hover-right .split-screen-right .split-screen-right-inner { clip-path: polygon(0 0, 66.8% 0, 27% 100%, 0% 100%); }




.split-screen-logo-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.split-screen-logo-container > svg {
  width: 100vw;
}

.splitscreen-logo-glow {
  opacity: .3;
}

@media all and (max-width: 425px) {

  .split-screen-left  { clip-path: polygon(0 0, 100% 0, 100% 20%, 0 80%); }
  .split-screen-right { clip-path: polygon(100% 20%, 100% 100%, 0 100%, 0 80%); }


  .split-screen-left.is-active    { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important; }
  .split-screen-right.is-inactive { clip-path: polygon(100% 100%, 100% 100%, 0 100%, 0 100%) !important; }


  .split-screen-left.is-inactive  { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important; }
  .split-screen-right.is-active   { clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0) !important; }


/*  .split-screen-container.hover-left .split-screen-left   { clip-path: polygon(0 0, 100% 0, 100% 22.5%, 0 82.5%); }
  .split-screen-container.hover-left .split-screen-right  { clip-path: polygon(100% 22.5%, 100% 100%, 0 100%, 0 82.5%) }


  .split-screen-container.hover-right .split-screen-left { clip-path: polygon(0 0, 100% 0, 100% 17.5%, 0 77.5%); }
  .split-screen-container.hover-right .split-screen-right { clip-path: polygon(100% 17.5%, 100% 100%, 0 100%, 0 77.5%); }*/


                            

  .split-screen-left-inner  { clip-path: polygon(100% 20.5%, 100% 100%, 0 100%, 0 80%); left: 0; top: 0; transform: translateY(-1em); }
  .split-screen-right-inner { clip-path: polygon(0 0, 100% 0, 100% 20%, 0 79.5%); left: 0; top: 0; transform: translateY(1em); }


  .split-screen-left.is-active .split-screen-left-inner     { clip-path: polygon(100% 100%, 100% 100%, 0 100%, 0 100%) !important; top: 0; transform: translateY(0); }
  .split-screen-right.is-inactive .split-screen-right-inner { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important; }


  .split-screen-left.is-inactive .split-screen-left-inner { clip-path: polygon(100% 0%, 100% 100%, 0 100%, 0 0%) !important; }
  .split-screen-right.is-active .split-screen-right-inner { clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%) !important; top: 0; transform: translateY(0); }


/*  .split-screen-container.hover-left .split-screen-left .split-screen-left-inner   { clip-path: polygon(0 calc(82.5% - 1.1em), 100% calc(22.5% - .6em), 100% calc(22.5% + .25em), 0 82.5%); }
  .split-screen-container.hover-left .split-screen-right .split-screen-right-inner { clip-path: polygon(100% 22.5%, 100% calc(22.5% + 1.2em), 0 calc(82.5% + .6em), 0 calc(82.5% - .25em)); }

  .split-screen-container.hover-right .split-screen-left .split-screen-left-inner   { clip-path: polygon(0 calc(77.5% - 1.1em), 100% calc(17.5% - .6em), 100% calc(17.5% + .25em), 0 77.5%); }
  .split-screen-container.hover-right .split-screen-right .split-screen-right-inner { clip-path: polygon(100% 17.5%, 100% calc(17.5% + 1.2em), 0 calc(77.5% + .6em), 0 calc(77.5% - .25em)); }*/



  .split-screen-logo-container > svg {
    width: 140vw;
  }

}


</style>