<template>
  <section class="container page-index">
    <div class="c-frame bg-white" id="who">
      <div class="c-area">
        <div class="col col-100">
          <div class="media-container media-container-css-height media-container-css-height-index-partner w-per-100">
            <picture class="obj-fit-cover">
              <source media="(min-width: 1441px)" :data-srcset="frontPage.imgPartner.mw1441">
              <source media="(min-width: 1025px)" :data-srcset="frontPage.imgPartner.mw1025">
              <source media="(min-width: 769px)" :data-srcset="frontPage.imgPartner.mw769">
              <source media="(min-width: 426px)" :data-srcset="frontPage.imgPartner.mw426">
              <source media="(min-width: 0px)" :data-srcset="frontPage.imgPartner.mw0">
              <img class="obj-fit-cover lazyload" :data-src="frontPage.imgPartner.default">
            </picture>
          </div>
        </div>
      </div>
      <div class="c-area c-area-m">
        <div class="col col-100 pad-t-5 pad-resp-4-t-3 pad-b-7">
          <div class="col col-unit-4 col-resp-2-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-2-5 pad-resp-2-b-4 float-left" :style="!isResp2 && !isResp3 && !isResp4 ? 'position: sticky; top: 7em;' : ''">
            <h1 class="text-xxl c-grey-1">
              Karsten &<br>
              Thomas &<br>
              Dieter =<br>
              <span class="c-yellow">Jerry</span>
            </h1>
          </div>
          <div class="col col-unit-8 col-resp-2-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-2-5 pad-t-0-25 float-left">
            <div class="col col-unit-12 mar-b-2 mar-resp-4-b-3" v-for="(partner, index) in frontPageCurrentLanguage.partners.list" :key="index">
              <h4 class="text-m text-resp-4-m c-grey-1 mar-b-1" v-html="partner.name"></h4>
              <ul class="pad-l-1" style="list-style: disc; list-style-position: outside;">
                <li class="text-s c-grey-3" v-for="(listEntry, index2) in partner.list" :key="index2" v-html="listEntry"></li>
              </ul>
              <div :class="isResp4 ? 'col col-unit-12 mar-t-2' : 'cor-tr'">
                <span v-scroll-to="'#contact'" class="text-s c-yellow partner-contact-link pointer" v-html="frontPageCurrentLanguage.partners.contactLinkText"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-frame bg-black" id="why" :style="!isResp4 && !isResp3 ? 'margin-bottom: 37.5em;' : ''">
      <div class="c-area c-area-m bg-black" style="z-index: 1;">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-6-5 pad-b-3 align-center">
          <h2 class="text-xxl mar-b-0-33 mar-resp-4-b-1 c-white" v-html="frontPageCurrentLanguage.whyJerry.sectionIntro.headline"></h2>
          <p class="text-l c-white mar-b-0-66" v-for="(paragraph, index) in frontPageCurrentLanguage.whyJerry.sectionIntro.text" :key="index" v-html="paragraph"></p>
        </div>
      </div>
      <div v-if="isResp4 || isResp3" v-parallax="0.1" class="c-area" :style="'z-index: 0;' + ( isResp4 ? 'height: 20em;' : 'height: 30em;' )">
        <div class="bg-white" style="position: absolute; width: 100%; height: 110%; top: -5%; left: 0;">
          <picture class="obj-fit-cover">
            <source media="(min-width: 426px)" :data-srcset="frontPage.imgWhyJerry.mw426">
            <source media="(min-width: 0px)" :data-srcset="frontPage.imgWhyJerry.mw0">
            <img class="obj-fit-cover lazyload" :data-src="staticMediaSrcBase + 'images/' + frontPage.imgWhyJerry.default">
          </picture>
        </div>
      </div>
    </div>
    <div class="c-frame bg-black" ref="bachgroundImageChangePoint">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-2 pad-t-6 pad-b-15 align-center">
          <h3 class="text-m c-white mar-b-0-66" v-html="frontPageCurrentLanguage.whyJerry.sectionTrueStory.headline"></h3>
          <p class="text-m c-grey-3 mar-b-0-66" v-html="frontPageCurrentLanguage.whyJerry.sectionTrueStory.text"></p>
        </div>
      </div>
      <div class="c-area c-area-m bg-black">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-b-5 align-center">
          <h2 class="text-l c-yellow mar-b-0-66" v-html="frontPageCurrentLanguage.whyJerry.sectionAssets.headline"></h2>
        </div>
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-b-11 align-center">
          <ul>
            <li class="pad-b-4 pad-resp-4-b-6" v-for="(listEntry, index) in frontPageCurrentLanguage.whyJerry.sectionAssets.list" :key="index">
              <div class="media-container mar-b-3">
                <img class="asset-picto lazyload" :data-src="staticMediaSrcBase + 'images/pictograms/' + listEntry.img">
              </div>
              <p class="text-l c-white" v-interpolation v-html="listEntry.text"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="c-frame" id="how">
      <div class="c-area bg-grey-5">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-6-5 align-center">
          <h2 class="text-xxl mar-b-0-33 mar-resp-4-b-1 c-grey-1" v-html="frontPageCurrentLanguage.howJerry.headline"></h2>
          <p class="text-l c-grey-1" v-html="frontPageCurrentLanguage.howJerry.subline"></p>
        </div>
      </div>
    </div>
    <div v-for="(listEntry, index) in frontPageCurrentLanguage.howJerry.list" :key="index">
      <div class="c-frame bg-grey-5" style="z-index: 1;">
        <div class="c-area c-area-m bg-grey-5" :style="(index + 1) % 2 == 0 ? 'padding-bottom: 3em;' : (index + 2) % 2 == 0 ? 'padding-top: 8em;' : ''">
          <div class="col col-unit-8 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-b-4-5 align-center">
            <span class="text-numbers c-yellow" v-html="'0' + (index + 1)"></span><br>
            <div class="deco-line bg-black"></div>
            <h3 class="text-l c-grey-1 mar-t-0-5 mar-b-0-66" v-html="listEntry.headline"></h3>
            <p class="text-m c-grey-3" v-html="listEntry.text"></p>
          </div>
        </div>   
      </div>
      <div v-if="(index + 1) % 2 == 0" v-parallax="0.1" class="c-frame" :style="'z-index: 0;' + ( isResp4 ? 'height: 20em;' : 'height: 30em;' )">
        <div class="bg-white" style="position: absolute; width: 100%; height: 110%; top: -5%; left: 0;">
          <picture v-if="index == 1" class="obj-fit-cover">
            <source media="(min-width: 1441px)" :data-srcset="frontPage.imgHowJerry1.mw1441">
            <source media="(min-width: 1025px)" :data-srcset="frontPage.imgHowJerry1.mw1025">
            <source media="(min-width: 769px)" :data-srcset="frontPage.imgHowJerry1.mw769">
            <source media="(min-width: 426px)" :data-srcset="frontPage.imgHowJerry1.mw426">
            <source media="(min-width: 0px)" :data-srcset="frontPage.imgHowJerry1.mw0">
            <img class="obj-fit-cover lazyload" :data-src="frontPage.imgHowJerry1.default">
          </picture>
          <picture v-if="index == 3" class="obj-fit-cover">
            <source media="(min-width: 1441px)" :data-srcset="frontPage.imgHowJerry2.mw1441">
            <source media="(min-width: 1025px)" :data-srcset="frontPage.imgHowJerry2.mw1025">
            <source media="(min-width: 769px)" :data-srcset="frontPage.imgHowJerry2.mw769">
            <source media="(min-width: 426px)" :data-srcset="frontPage.imgHowJerry2.mw426">
            <source media="(min-width: 0px)" :data-srcset="frontPage.imgHowJerry2.mw0">
            <img class="obj-fit-cover lazyload" :data-src="frontPage.imgHowJerry2.default">
          </picture>
          <picture v-if="index == 5" class="obj-fit-cover">
            <source media="(min-width: 1441px)" :data-srcset="frontPage.imgHowJerry3.mw1441">
            <source media="(min-width: 1025px)" :data-srcset="frontPage.imgHowJerry3.mw1025">
            <source media="(min-width: 769px)" :data-srcset="frontPage.imgHowJerry3.mw769">
            <source media="(min-width: 426px)" :data-srcset="frontPage.imgHowJerry3.mw426">
            <source media="(min-width: 0px)" :data-srcset="frontPage.imgHowJerry3.mw0">
            <img class="obj-fit-cover lazyload" :data-src="frontPage.imgHowJerry3.default">
          </picture>
        </div>
      </div>
    </div>
    <div class="c-frame bg-grey-5">
      <div class="c-area c-area-m">
        <div class="col col-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-1 pad-b-13 pad-resp-4-b-6 align-center">
          <div class="media-container media-container-css-height media-container-css-height-index-how w-per-100">
            <img class="obj-fit-cover lazyload" :data-src="staticMediaSrcBase + 'images/pictograms/' + frontPage.pictogramHowJerry">
          </div>
        </div>
      </div>
    </div>
    <div class="c-frame bg-white" id="what" :style="!isResp4 && !isResp3 ? 'margin-bottom: 37.5em;' : ''">
      <div class="c-area c-area-m bg-white" style="z-index: 1;">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-6-5 pad-b-3 align-center">
          <h2 class="text-xxl mar-b-0-33 mar-resp-4-b-1 c-grey-1" v-html="frontPageCurrentLanguage.whatJerry.sectionIntro.headline"></h2>
          <p class="text-l c-grey-1 mar-b-0-66" v-for="(paragraph, index) in frontPageCurrentLanguage.whatJerry.sectionIntro.text1" :key="index" v-html="paragraph"></p>
        </div>
      </div>
      <div v-if="isResp4 || isResp3" v-parallax="0.1" class="c-area" :style="'z-index: 0;' + ( isResp4 ? 'height: 20em;' : 'height: 30em;' )">
        <div class="bg-white" style="position: absolute; width: 100%; height: 110%; top: -5%; left: 0;">
          <picture class="obj-fit-cover">
            <source media="(min-width: 426px)" :data-srcset="frontPage.imgWhatJerry.mw426">
            <source media="(min-width: 0px)" :data-srcset="frontPage.imgWhatJerry.mw0">
            <img class="obj-fit-cover lazyload" :data-src="staticMediaSrcBase + 'images/' + frontPage.imgWhatJerry.default">
          </picture>
        </div>
      </div>
    </div>
    <div class="c-frame bg-white">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-6 pad-b-15 align-center">
          <p class="text-l c-grey-1 mar-b-0-66" v-for="(paragraph, index) in frontPageCurrentLanguage.whatJerry.sectionIntro.text2" :key="index" v-html="paragraph"></p>
        </div>
      </div>
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-b-5 align-center">
          <h3 class="text-l c-grey-1" v-html="frontPageCurrentLanguage.whatJerry.sectionResults.headline"></h3>
        </div>
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-1 pad-b-7-5 align-center">
          <div class="col col-unit-4 col-resp-2-unit-6 col-resp-4-unit-10 pad-lr-1 mar-b-4 align-center inline-block v-top pointer result-container" v-for="(listEntry, index) in frontPageCurrentLanguage.whatJerry.sectionResults.list" :key="index" @click="openPopUp(listEntry)">
            <div class="cor-tr mar-r-3-5">
              <button type="button">
                <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <circle class="fill-yellow" cx="10" cy="10" r="10"/>
                  <rect class="fill-black" x="9.07" y="8.38" width="1.89" height="6.75"/>
                  <path class="fill-black" d="M10,4.37a1.47,1.47,0,1,0,1,2.57h0a1.46,1.46,0,0,0-1-2.56Z"/>
                </svg>
              </button>
            </div>
            <div class="media-container media-container-css-height media-container-css-height-index-4 w-per-50">
              <img class="obj-fit-cover lazyload" :data-src="staticMediaSrcBase + 'images/pictograms/' + listEntry.img">
            </div>
            <p class="text-xs c-grey-3" v-html="listEntry.title"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="c-frame bg-grey-5">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-10 pad-resp-4-b-6 pad-b-12-5">
          <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-resp-4-b-4 float-left">
            <div class="media-container media-container-css-height media-container-css-height-index-report w-per-100">
              <picture class="obj-fit-cover">
                <source media="(min-width: 1441px)" :data-srcset="frontPage.imgWhatReport.mw1441">
                <source media="(min-width: 1025px)" :data-srcset="frontPage.imgWhatReport.mw1025">
                <source media="(min-width: 769px)" :data-srcset="frontPage.imgWhatReport.mw1025">
                <source media="(min-width: 426px)" :data-srcset="frontPage.imgWhatReport.mw426">
                <source media="(min-width: 0px)" :data-srcset="frontPage.imgWhatReport.mw0">
                <img class="obj-fit-cover lazyload" :data-src="frontPage.imgWhatReport.default">
              </picture>
            </div>
          </div>
          <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-l-2 float-left resp-4-align-center">
            <h3 class="text-m text-resp-4-m c-grey-1 mar-b-0-66" v-html="frontPageCurrentLanguage.whatJerry.sectionReport.headline"></h3>
            <p class="text-s c-grey-3 mar-b-0-66" v-for="(paragraph, index) in frontPageCurrentLanguage.whatJerry.sectionReport.text" :key="index" v-html="paragraph"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="c-frame bg-white" id="jerry-digital" ref="switchVisibleArea">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-10 pad-resp-4-t-7 pad-b-12-5 pad-resp-4-b-35">
          <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 float-left resp-4-align-center">
            <h3 class="text-m text-resp-4-m c-grey-1 mar-b-0-66" v-html="frontPageCurrentLanguage.whatJerry.sectionDigital.headline"></h3>
            <p class="text-s c-grey-3 mar-b-0-66" v-for="(paragraph, index) in frontPageCurrentLanguage.whatJerry.sectionDigital.text" :key="index" v-interpolation v-html="paragraph"></p>
          </div>
        </div>
      </div>
      <picture class="obj-fit-cover">
        <source media="(min-width: 1441px)" :data-srcset="frontPage.imgWhatDigital.mw1441">
        <source media="(min-width: 1025px)" :data-srcset="frontPage.imgWhatDigital.mw1025">
        <source media="(min-width: 769px)" :data-srcset="frontPage.imgWhatDigital.mw769">
        <source media="(min-width: 426px)" :data-srcset="frontPage.imgWhatDigital.mw426">
        <source media="(min-width: 0px)" :data-srcset="frontPage.imgWhatDigital.mw0">
        <img class="obj-fit-cover lazyload" :data-src="frontPage.imgWhatDigital.default">
      </picture>
    </div>
    <div class="c-frame bg-black" id="references" ref="switchVisibleAreaEnd">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-6-5 pad-b-3 align-center">
          <h2 class="text-xxl c-white mar-b-0-33 mar-resp-4-b-1" v-html="frontPageCurrentLanguage.references.sectionIntro.headline"></h2>
          <p class="text-l c-white mar-b-0-66" v-for="(paragraph, index) in frontPageCurrentLanguage.references.sectionIntro.text" :key="index" v-html="paragraph"></p>
        </div>
        <div class="col col-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-1 pad-b-4 align-center">
          <div class="col col-20 col-resp-4-unit-6 pad-lr-1 pad-b-4 inline-block v-center" v-for="(logo, index) in frontPage.referencesLogos" :key="index">
            <div class="media-container media-container-css-height media-container-css-height-index-ref-logos w-per-100">
              <img class="obj-fit-cover lazyload" :data-src="staticMediaSrcBase + 'images/references/' + logo">
            </div>
          </div>
        </div>
        <div class="col col-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-1 pad-b-4 align-center">
          <div class="col col-20 col-resp-4-unit-6 pad-lr-1 pad-b-4 inline-block v-center">
            <div class="media-container media-container-css-height media-container-css-height-index-ref-logos w-per-100">
              <a href="https://www.esb-online.com/"><img class="obj-fit-cover lazyload" style="z-index: 1;" :data-src="staticMediaSrcBase + 'images/references/' + frontPage.referencesLogoEsb"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <contact></contact>
    <main-footer></main-footer>

    <picture v-if="scrollPositionY < backgroundImageChangePosition && !isResp4" class="para-pic-1 obj-fit-cover fixed" style="z-index: -1;">
      <source media="(min-width: 1441px)" :data-srcset="frontPage.imgWhyJerry.mw1441">
      <source media="(min-width: 1025px)" :data-srcset="frontPage.imgWhyJerry.mw1025">
      <source media="(min-width: 769px)" :data-srcset="frontPage.imgWhyJerry.mw769">
      <source media="(min-width: 426px)" :data-srcset="frontPage.imgWhyJerry.mw426">
      <source media="(min-width: 0px)" :data-srcset="frontPage.imgWhyJerry.mw0">
      <img v-if="scrollPositionY < backgroundImageChangePosition && !isResp4" class="para-pic-1 obj-fit-cover fixed lazyload" style="z-index: -1;  " :data-src="frontPage.imgWhyJerry.default">
    </picture>
    <picture v-if="scrollPositionY >= backgroundImageChangePosition && !isResp4" class="para-pic-2 obj-fit-cover fixed" style="z-index: -1;">
      <source media="(min-width: 1441px)" :data-srcset="frontPage.imgWhatJerry.mw1441">
      <source media="(min-width: 1025px)" :data-srcset="frontPage.imgWhatJerry.mw1025">
      <source media="(min-width: 769px)" :data-srcset="frontPage.imgWhatJerry.mw769">
      <source media="(min-width: 426px)" :data-srcset="frontPage.imgWhatJerry.mw426">
      <source media="(min-width: 0px)" :data-srcset="frontPage.imgWhatJerry.mw0">
      <img v-if="scrollPositionY >= backgroundImageChangePosition && !isResp4" class="para-pic-2 obj-fit-cover fixed lazyload" style="z-index: -1;  " :data-src="frontPage.imgWhatJerry.default">
    </picture>

  </section>
</template>

<script>

import Contact from '@/components/contact'
import MainFooter from '@/components/main-footer'

export default {
  components: { Contact, MainFooter },
  head() {
    return {
      bodyAttrs: {
        class: (!this.$store.state.splitScreenActiveState || this.$store.state.splitScreenAnimationState) && !this.isReload ? 'of-hidden' : ''
      },
      title: this.frontPageCurrentLanguage.meta.title,
      meta: [
        { name: 'description', content: this.frontPageCurrentLanguage.meta.description },
        { name: "application-name", content: "Jerry" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-title", content: "Jerry" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#ffffff" },
        { name: "msapplication-TileImage", content: "mstile-150x150.png?v=200714114610" },
        { name: "msapplication-square70x70logo", content: "mstile-70x70.png?v=200714114610" },
        { name: "msapplication-square150x150logo", content: "mstile-150x150.png?v=200714114610" },
        { name: "msapplication-wide310x150logo", content: "mstile-310x150.png?v=200714114610" },
        { name: "msapplication-square310x310logo", content: "mstile-310x310.png?v=200714114610" },
        { name: "msapplication-config", content: "browserconfig.xml?v=200714114610" },
      ],
      link: [
        { rel: "apple-touch-icon", sizes:"57x57", href: "favicon/jerry/apple-touch-icon-57x57.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"60x60", href: "favicon/jerry/apple-touch-icon-60x60.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"72x72", href: "favicon/jerry/apple-touch-icon-72x72.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"76x76", href: "favicon/jerry/apple-touch-icon-76x76.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"114x114", href: "favicon/jerry/apple-touch-icon-114x114.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"120x120", href: "favicon/jerry/apple-touch-icon-120x120.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"144x144", href: "favicon/jerry/apple-touch-icon-144x144.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"152x152", href: "favicon/jerry/apple-touch-icon-152x152.png?v=200714114610" },
        { rel: "apple-touch-icon", sizes:"180x180", href: "favicon/jerry/apple-touch-icon-180x180.png?v=200714114610" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-36x36.png?v=200714114610", sizes:"36x36" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-48x48.png?v=200714114610", sizes:"48x48" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-72x72.png?v=200714114610", sizes:"72x72" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-96x96.png?v=200714114610", sizes:"96x96" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-144x144.png?v=200714114610", sizes:"144x144" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-192x192.png?v=200714114610", sizes:"192x192" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-16x16.png?v=200714114610", sizes:"16x16" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-32x32.png?v=200714114610", sizes:"32x32" },
        { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-96x96.png?v=200714114610", sizes:"96x96" },
        { rel: "shortcut icon", type: "image/x-icon", href: "favicon/jerry/favicon.ico?v=200714114610" },
        { rel: "manifest", href: "favicon/jerry/manifest.json?v=200714114610" },
        { href: "favicon/jerry/apple-touch-startup-image-320x460.png?v=200714114610", media: "(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-640x920.png?v=200714114610", media: "(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-640x1096.png?v=200714114610", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-748x1024.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: landscape)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-750x1024.png?v=200714114610", media: "", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-750x1294.png?v=200714114610", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-768x1004.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: portrait)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-1182x2208.png?v=200714114610", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-1242x2148.png?v=200714114610", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-1496x2048.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)", rel: "apple-touch-startup-image" },
        { href: "favicon/jerry/apple-touch-startup-image-1536x2008.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image" }
      ]
    }
  },
  data() {
    return {
      isMounted: false,
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      selectedResult: {},
      popUpIsActive: false,
      backgroundImageChangePosition: 0,
      isReload: false
    }
  },
  methods: {
    openPopUp(result) {
      $nuxt.$emit('openPopUp', result)
    },
    closePopUp(result) {
      this.popUpIsActive = false
    },
    getbackgroundImageChangePosition() {
      if(this.$refs.bachgroundImageChangePoint) {
        this.backgroundImageChangePosition = this.$refs.bachgroundImageChangePoint.offsetTop
      }
    },
    setSwitchState: function(){
      if( this.$refs.switchVisibleArea && this.scrollPositionY + this.windowHeight > this.$refs.switchVisibleArea.offsetTop && this.scrollPositionY + this.windowHeight < this.$refs.switchVisibleAreaEnd.offsetTop ) {
        $nuxt.$emit('setSwitchState', true)
      } else {
        $nuxt.$emit('setSwitchState', false)
      }
    }
  },
  created(){
    if (process.browser) { 
      window.addEventListener('scroll', ()=>{
        this.getbackgroundImageChangePosition()
        this.setSwitchState()
      })
    }
  },
  mounted() {

    if (performance.navigation.type == 1 && this.scrollPositionY != 0) {
      this.isReload = true
      $nuxt.$emit('changeSplitScreen', 'index')
    }

    window.addEventListener('resize', ()=>{
      this.getbackgroundImageChangePosition()
      this.setSwitchState()
    })
    this.getbackgroundImageChangePosition()
    this.setSwitchState()
  },
  destroyed () {
    if (process.browser) { 
      window.removeEventListener('scroll', this.getbackgroundImageChangePosition, false);
      window.removeEventListener('scroll', this.setSwitchState, false);
      window.removeEventListener('resize', this.getbackgroundImageChangePosition, false);
      window.removeEventListener('resize', this.setSwitchState, false);
    }
  }
}

</script>

<style>

</style>
