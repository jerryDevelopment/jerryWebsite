<template>
  <div :class="'c-frame' + ( isIndex ? ' bg-yellow footer-index' : ' bg-grey-1 footer-digital')">
    <div class="c-area">
      <div class="col col-unit-12 pad-lr-0-75 align-center pad-resp-4-t-4 pad-b-6">
        <svg v-if="isIndex" class="footer-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 342.81 235.16">
          <g>
            <path class="fill-white" d="M194.4,74.1V66.4H178.2v58.4h17V101.3c0-5.3.6-10.7,4.3-14.4,3.9-4.1,9.5-4.9,16.4-4.1V66.2c-8.1-1.3-16.1,1.2-21.5,7.9" transform="translate(-28.59 17.58)"/>
            <path class="fill-white" d="M238.5,74.1V66.4H222.3v58.4h17V101.3c0-5.3.6-10.7,4.2-14.4,3.9-4.1,9.5-4.9,16.4-4.1V66.2c-8-1.3-16,1.2-21.4,7.9" transform="translate(-28.59 17.58)"/>
            <path class="fill-white" d="M99.1,29.1a14.2,14.2,0,1,0,14.2,14.2h0A14.19,14.19,0,0,0,99.1,29.1" transform="translate(-28.59 17.58)"/>
            <path class="fill-white" d="M325.4,115.6l-.2-49H307.9l.3,30c0,7.4-5.3,13-12.9,13-11.1,0-12.4-9.3-12.4-13l-.2-30h-17l.2,30c0,17.4,10.5,29.1,26.2,29.1a21.71,21.71,0,0,0,16.4-7l.1,16.6c0,6.1-3.7,12.1-12.2,12.1s-12.1-6.1-12.1-12.1v-1.2h-17v.6c0,16.6,11.3,29.3,29.1,29.3s29.3-12.6,29.3-29.3Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-white" d="M154.6,88.5H129.3a4.05,4.05,0,0,1,.5-.9c2.1-5.3,6.6-8.7,12.1-8.7a12.7,12.7,0,0,1,12.5,8.9,2.51,2.51,0,0,0,.4.7h-.2M142.1,64.3c-16.5,0-29.8,13.7-29.8,30.6s13.4,30.6,29.8,30.6a29.92,29.92,0,0,0,28.4-21.2H153c-2.2,4.1-6.5,6-11,6a13,13,0,0,1-12.5-8.8l-.1-.2h0c-.1-.4-.3-.8-.4-1.2h42.5a29.61,29.61,0,0,0,.4-5.2c-.1-16.9-13.4-30.6-29.8-30.6" transform="translate(-28.59 17.58)"/>
            <path class="fill-white" d="M90.4,135.1c0,6-3.7,12.1-12.1,12.1H74.4v16.6h4.3c17.5-.2,28.8-12.8,28.8-29.3V66.3h-17Z" transform="translate(-28.59 17.58)"/>
          </g>
        </svg>
        <svg v-else class="footer-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 342.81 235.16">
          <g>
            <rect class="fill-blue" x="124.41" y="167.28" width="3.9" height="14"/>
            <path class="fill-blue" d="M135.7,160.3a4,4,0,0,1-3.9-4.2V156a4,4,0,0,1,7.9.7,4.08,4.08,0,0,1-4,3.6m3.9-10.5a6.27,6.27,0,0,0-4.5-1.8c-4,0-7.3,3.4-7.3,8s3.3,7.9,7.3,7.9a6.34,6.34,0,0,0,4.7-2v1.6h3.7v-22h-3.9Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-blue" x="214.01" y="159.18" width="3.9" height="22.1"/>
            <path class="fill-blue" d="M229.5,157.7c0,1.9-1.9,2.8-4.2,2.8-1.6,0-2.6-.6-2.6-1.4,0-1.1,1.2-1.5,3.1-1.8a9.25,9.25,0,0,0,3.7-1Zm3.6-4.5c0-1.2-.5-5.2-6.7-5.2-4,0-6.8,2.2-7.2,5.1h3.9c.4-1.3,2-1.9,3.4-1.9,1.8,0,2.8.6,2.8,1.4,0,1.2-1.8,1.5-4.4,1.8-3.4.3-6.3,1.2-6.3,4.6s3,5,6.2,5a6.38,6.38,0,0,0,4.7-1.7,5.73,5.73,0,0,0,.4,1.4h3.6a6.9,6.9,0,0,1-.4-2.5Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-blue" x="162.01" y="167.28" width="3.9" height="14"/>
            <path class="fill-blue" d="M173.4,160.3a4.06,4.06,0,0,1-3.9-4.3h0a3.92,3.92,0,0,1,7.8.8,3.91,3.91,0,0,1-3.9,3.5m4.1-10.3a6.34,6.34,0,0,0-4.7-2c-4,0-7.3,3.4-7.3,8s3.3,7.9,7.3,7.9a6.27,6.27,0,0,0,4.5-1.8v.7c0,2.7-1.2,4.5-4,4.5a3.26,3.26,0,0,1-3.1-1.7h-4.3c.6,3.2,3.8,5.3,7.4,5.3,4.9,0,7.9-3.2,7.9-8.2V148.2h-3.7V150Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M208.3,157.2v-5.4h2.8v-3.5h-2.8v-3.9h-3.9v3.9h-1.8v3.5h1.8v5.4c0,4.2,2.4,6.9,6.9,6.4V160c-2,.2-3-.6-3-2.8" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M154.9,141.4a3,3,0,0,0-3,3,3.08,3.08,0,0,0,3,3,3.18,3.18,0,0,0,2-.8h0a3.26,3.26,0,0,0,1-2.3,3,3,0,0,0-3-2.9" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M192.5,141.4a3,3,0,1,0,3,3,2.95,2.95,0,0,0-3-3h0" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M194.4,74.1V66.4H178.2v58.4h17V101.3c0-5.3.6-10.7,4.3-14.4,3.9-4.1,9.5-4.9,16.4-4.1V66.2c-8.1-1.3-16.1,1.2-21.5,7.9" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M238.5,74.1V66.4H222.3v58.4h17V101.3c0-5.3.6-10.7,4.2-14.4,3.9-4.1,9.5-4.9,16.4-4.1V66.2c-8-1.3-16,1.2-21.4,7.9" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M99.1,29.1a14.2,14.2,0,1,0,14.2,14.2h0A14.19,14.19,0,0,0,99.1,29.1" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M325.4,115.6l-.2-49H307.9l.3,30c0,7.4-5.3,13-12.9,13-11.1,0-12.4-9.3-12.4-13l-.2-30h-17l.2,30c0,17.4,10.5,29.1,26.2,29.1a21.71,21.71,0,0,0,16.4-7l.1,16.6c0,6.1-3.7,12.1-12.2,12.1s-12.1-6.1-12.1-12.1v-1.2h-17v.6c0,16.6,11.3,29.3,29.1,29.3s29.3-12.6,29.3-29.3Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M154.6,88.5H129.3a4.05,4.05,0,0,1,.5-.9c2.1-5.3,6.6-8.7,12.1-8.7a12.7,12.7,0,0,1,12.5,8.9,2.51,2.51,0,0,0,.4.7h-.2M142.1,64.3c-16.5,0-29.8,13.7-29.8,30.6s13.4,30.6,29.8,30.6a29.92,29.92,0,0,0,28.4-21.2H153c-2.2,4.1-6.5,6-11,6a13,13,0,0,1-12.5-8.8l-.1-.2h0c-.1-.4-.3-.8-.4-1.2h42.5a29.61,29.61,0,0,0,.4-5.2c-.1-16.9-13.4-30.6-29.8-30.6" transform="translate(-28.59 17.58)"/>
            <path class="fill-blue" d="M90.4,135.1c0,6-3.7,12.1-12.1,12.1H74.4v16.6h4.3c17.5-.2,28.8-12.8,28.8-29.3V66.3h-17Z" transform="translate(-28.59 17.58)"/>
          </g>
          <g>
            <image class="splitscreen-logo-glow" width="1433" height="983" transform="scale(0.24)" :xlink:href="glowSrc"/>
          </g>
          <g>
            <path class="fill-raw-blue" d="M194.4,74.1a5.24,5.24,0,0,1,1-1.1h-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M173.3,171.1a10.87,10.87,0,0,0,1.8-.1h-3.4C172.2,171,172.7,171.1,173.3,171.1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M167.6,169H179a3.92,3.92,0,0,0,.8-1h-13A8.74,8.74,0,0,1,167.6,169Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M176.5,166h4.3a3.55,3.55,0,0,0,.2-1h-4A9.25,9.25,0,0,1,176.5,166Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M170.2,165.8h-4.3v.2h4.4A.31.31,0,0,1,170.2,165.8Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="124.41" y="179.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M130.3,162a6.42,6.42,0,0,0,1.3,1h7a10.59,10.59,0,0,0,1.2-1v1h3.7v-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="214.01" y="179.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M219.8,162a10.59,10.59,0,0,0,1.2,1h7.6a6.47,6.47,0,0,0,.9-.8c0,.3.1.5.1.8h3.6c-.1-.3-.1-.7-.2-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="162.01" y="179.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M181.2,162H168a6.42,6.42,0,0,0,1.3,1h7.1a3.92,3.92,0,0,0,1-.8v.8h3.9l-.1-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M206,162a6.42,6.42,0,0,0,1.3,1h4v-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M287.4,163H305c1-.3,2-.6,3-1H284.4C285.4,162.3,286.4,162.7,287.4,163Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M74.4,162v1H85.9a33.74,33.74,0,0,0,3.4-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="124.41" y="176.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M138.6,159a3.25,3.25,0,0,1-1.3,1h6.2v-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M132.8,159h-4.5c.1.3.3.7.4,1H134A10.59,10.59,0,0,1,132.8,159Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="214.01" y="176.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M222.6,159h-4a3.4,3.4,0,0,0,.1,1h4.4A1.23,1.23,0,0,1,222.6,159Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M229.1,159a2.94,2.94,0,0,1-1.2,1h5.2v-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="162.01" y="176.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M170.5,159H166c.1.3.3.7.4,1h5.3A5.8,5.8,0,0,1,170.5,159Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M176.2,159a3.25,3.25,0,0,1-1.3,1h6.2v-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M208.7,159h-4.1c.1.3.2.7.3,1H210A2,2,0,0,1,208.7,159Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M280.3,160h31.8a13,13,0,0,0,1.5-1H278.7A8.64,8.64,0,0,1,280.3,160Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M95.2,159H74.4v1H93.7A13,13,0,0,1,95.2,159Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="124.41" y="173.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M131.8,156h0l-3.9-.1v.1a2.77,2.77,0,0,0,.1.9h4A1.34,1.34,0,0,1,131.8,156Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M139.6,156h0a3.08,3.08,0,0,1-.1,1h4v-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="214.01" y="173.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M219.2,157h8.5a4,4,0,0,0,1.8-.7v.7h3.6v-1H219.9A2.55,2.55,0,0,0,219.2,157Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="162.01" y="173.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M177.3,156h0a3.08,3.08,0,0,1-.1,1h4v-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M169.5,156h-4v1h4v-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="175.81" y="173.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M276.3,157h39.9c.4-.3.7-.7,1.1-1h-42Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M98.9,156H74.4v1H97.9Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="124.41" y="170.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M132.9,153h-4.5c-.1.3-.2.7-.3,1h4.2A3.33,3.33,0,0,1,132.9,153Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M143.5,154v-1h-5a2.07,2.07,0,0,1,.6,1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="214.01" y="170.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M227.6,154H233v-1h-3.8C229.1,153.4,228.5,153.7,227.6,154Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M223.2,153h0l-3.9-.1v.1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="162.01" y="170.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M176.2,153a2.07,2.07,0,0,1,.6,1h4.4v-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M166.1,153c-.1.3-.2.7-.3,1H170a8.79,8.79,0,0,1,.6-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="175.81" y="170.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M273.4,154H319c.3-.3.5-.7.8-1H272.6A3.92,3.92,0,0,1,273.4,154Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M101.6,153H74.4v1h26.4A8.74,8.74,0,0,1,101.6,153Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="124.41" y="167.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M143.5,150H130.3a9,9,0,0,0-.9,1h14Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="214.01" y="167.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M220.1,151h12.6a3.59,3.59,0,0,0-.7-1H220.9A2.72,2.72,0,0,0,220.1,151Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="162.01" y="167.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M167.2,151h14.1v-1H168.2A3.18,3.18,0,0,0,167.2,151Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="174.01" y="167.58" width="8.5" height="1"/>
            <path class="fill-raw-blue" d="M271.3,151h49.9c.2-.3.4-.7.6-1h-51A9.29,9.29,0,0,1,271.3,151Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M103.6,150H74.4v1H103A8.79,8.79,0,0,1,103.6,150Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="111.01" y="164.58" width="3.9" height="1"/>
            <rect class="fill-raw-blue" x="214.01" y="164.58" width="3.9" height="1"/>
            <rect class="fill-raw-blue" x="175.81" y="164.58" width="3.9" height="1"/>
            <path class="fill-raw-blue" d="M154.9,147.5a2.77,2.77,0,0,0,1.6-.5h-3.3A5.49,5.49,0,0,0,154.9,147.5Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M192.5,147.5a3.37,3.37,0,0,0,1.7-.5h-3.3A3.77,3.77,0,0,0,192.5,147.5Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M296.2,147.5a17.37,17.37,0,0,1-3.9-.5h-23c.1.3.3.7.4,1h53c.1-.3.3-.7.4-1h-23A16.66,16.66,0,0,1,296.2,147.5Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M105,147H80.8a21.05,21.05,0,0,1-2.5.2H74.4v.8h30.3C104.8,147.6,104.9,147.3,105,147Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="111.01" y="161.58" width="3.9" height="1"/>
            <rect class="fill-raw-blue" x="214.01" y="161.58" width="3.9" height="1"/>
            <rect class="fill-raw-blue" x="175.81" y="162.08" width="3.9" height="0.5"/>
            <path class="fill-raw-blue" d="M152,145h6a4.33,4.33,0,0,1,.1-.5V144h-6v.5C151.9,144.6,151.9,144.8,152,145Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M189.5,145h6a4.33,4.33,0,0,1,.1-.5V144h-6v.5A.75.75,0,0,0,189.5,145Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M268.6,145h19.8a10,10,0,0,1-1.1-1h-19C268.4,144.3,268.5,144.6,268.6,145Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M304.2,145H324l.3-1h-19A5.24,5.24,0,0,0,304.2,145Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M106.1,144H86.9a10.59,10.59,0,0,1-1.2,1h20A6.89,6.89,0,0,0,106.1,144Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="111.01" y="159.18" width="3.9" height="0.4"/>
            <rect class="fill-raw-blue" x="214.01" y="159.18" width="3.9" height="0.4"/>
            <path class="fill-raw-blue" d="M154.9,141.4a2.72,2.72,0,0,0-1.7.6h3.5A2.79,2.79,0,0,0,154.9,141.4Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M192.5,141.4a3.23,3.23,0,0,0-1.8.6h3.5A2.52,2.52,0,0,0,192.5,141.4Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M306.8,142h18c.1-.3.1-.7.2-1H307.3A9.29,9.29,0,0,0,306.8,142Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M267.8,142h18a4.67,4.67,0,0,1-.5-1H267.6C267.6,141.3,267.8,141.6,267.8,142Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M106.9,141H89.1c-.2.3-.4.7-.6,1h18.1C106.7,141.6,106.8,141.3,106.9,141Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M308,139h17.2c0-.3.1-.7.1-1H308.2A4.4,4.4,0,0,1,308,139Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M267.3,139h17.2a3.55,3.55,0,0,1-.2-1H267.2C267.2,138.3,267.3,138.6,267.3,139Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M107.3,138H90.1c-.1.3-.1.7-.2,1h17.3C107.2,138.6,107.3,138.3,107.3,138Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M308.5,135.3v.6h17v-1h-17Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M284.1,136v-1h-17v1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M107.4,135h-17v1h17Z" transform="translate(-28.59 17.58)"/>
            <polygon class="fill-raw-blue" points="279.91 150.58 296.91 150.58 296.91 149.58 279.91 149.58 279.91 150.58"/>
            <rect class="fill-raw-blue" x="61.81" y="149.58" width="17" height="1"/>
            <polygon class="fill-raw-blue" points="279.91 147.58 296.91 147.58 296.91 146.58 279.81 146.58 279.91 147.58"/>
            <rect class="fill-raw-blue" x="61.81" y="146.58" width="17" height="1"/>
            <polygon class="fill-raw-blue" points="279.81 144.58 296.91 144.58 296.91 143.58 279.81 143.58 279.81 144.58"/>
            <rect class="fill-raw-blue" x="61.81" y="143.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="140.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="140.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M282.1,124h19a12.44,12.44,0,0,0,2-1H279.9C280.6,123.3,281.3,123.7,282.1,124Z" transform="translate(-28.59 17.58)"/>
            <polygon class="fill-raw-blue" points="279.81 141.58 296.81 141.58 296.81 140.58 279.81 140.58 279.81 141.58"/>
            <path class="fill-raw-blue" d="M130.2,123a20,20,0,0,0,2.6,1h18.6a27.73,27.73,0,0,0,2.6-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="140.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="137.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="137.58" width="17" height="1"/>
            <polygon class="fill-raw-blue" points="279.81 138.58 296.81 138.58 296.81 137.58 279.81 137.58 279.81 138.58"/>
            <path class="fill-raw-blue" d="M306,121a11,11,0,0,0,1.1-1H275.3c.4.3.8.7,1.2,1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M159.1,120H125c.5.3,1,.7,1.5,1h31.2A12.13,12.13,0,0,1,159.1,120Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="137.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="134.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="134.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M273.3,118h52.1v-1h-53A9,9,0,0,1,273.3,118Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M162.6,117H121.4c.4.3.7.7,1.1,1h39.2A9,9,0,0,1,162.6,117Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="134.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="131.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="131.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M270.9,115h54.5v-1H270.3A8.79,8.79,0,0,1,270.9,115Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M165.4,114H118.8c.3.3.5.7.8,1h45A3.92,3.92,0,0,1,165.4,114Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="131.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="128.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="128.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M269.2,112h56.2v-1H268.7A9.29,9.29,0,0,1,269.2,112Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M167.4,111H116.6c.2.3.4.7.6,1h49.5C167,111.6,167.2,111.3,167.4,111Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="128.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="125.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="125.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M267.6,108c.1.3.2.7.3,1h22.7a14.72,14.72,0,0,1-2.2-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M299.6,109h25.8v-1H301.9A16,16,0,0,1,299.6,109Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M149.7,108a9.5,9.5,0,0,1-1.7,1h20.5c.2-.3.3-.7.5-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M134.3,108H115.1c.2.3.3.7.5,1H136C135.4,108.7,134.8,108.3,134.3,108Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="125.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="122.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="122.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M267,106h19c-.3-.3-.5-.7-.8-1H266.7C266.8,105.3,266.9,105.6,267,106Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M304.5,106h20.9v-1h-20A9,9,0,0,0,304.5,106Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M170.2,105H152.5a6.07,6.07,0,0,1-.7,1h18Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M131.3,105H113.9a4.18,4.18,0,0,0,.4,1h17.8A8.74,8.74,0,0,0,131.3,105Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="122.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="119.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="119.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M306.6,103h18.7v-1H307.1A9.25,9.25,0,0,1,306.6,103Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M266.4,103h17.7c-.1-.3-.3-.7-.4-1H266.2C266.3,102.3,266.3,102.6,266.4,103Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M129.6,102H113a3.55,3.55,0,0,1,.2,1H130A3,3,0,0,0,129.6,102Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="119.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M195.2,99H178.1v1h17A3.75,3.75,0,0,0,195.2,99Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M222.3,100h17V99h-17Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M266,100h17.2c-.1-.4-.1-.7-.2-1H265.9A3.08,3.08,0,0,1,266,100Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M307.8,100h17.6V99H308A3,3,0,0,0,307.8,100Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M171.6,99H112.4c0,.3.1.7.1,1h58.8A2.24,2.24,0,0,0,171.6,99Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="116.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M195.5,96H178.2v1h17.2A3.08,3.08,0,0,1,195.5,96Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M222.3,97h17.2l.1-1H222.3Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M265.9,96.6v.3h17V96h-17Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M308.2,96.6v.3h17.2v-1H308.2Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M171.9,96H112.3a3.4,3.4,0,0,0,.1,1h59.5Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="113.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M196.1,93H178.2v1h17.7A3,3,0,0,1,196.1,93Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M222.3,94H240c.1-.3.1-.7.2-1H222.3Z" transform="translate(-28.59 17.58)"/>
            <polygon class="fill-raw-blue" points="237.21 111.58 254.31 111.58 254.31 110.58 237.21 110.58 237.21 111.58"/>
            <polygon class="fill-raw-blue" points="279.51 111.58 296.71 111.58 296.71 110.58 279.51 110.58 279.51 111.58"/>
            <path class="fill-raw-blue" d="M171.8,93H112.2v1h59.6A1.7,1.7,0,0,0,171.8,93Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="110.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M197.2,90H178.1v1h18.6A9.25,9.25,0,0,0,197.2,90Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M222.3,91h18.6a4.67,4.67,0,0,1,.5-1H222.3Z" transform="translate(-28.59 17.58)"/>
            <polygon class="fill-raw-blue" points="237.21 108.58 254.21 108.58 254.21 107.58 237.21 107.58 237.21 108.58"/>
            <polygon class="fill-raw-blue" points="279.51 108.58 296.71 108.58 296.71 107.58 279.51 107.58 279.51 108.58"/>
            <path class="fill-raw-blue" d="M171.5,90H112.6a3.4,3.4,0,0,0-.1,1h59.1A3.08,3.08,0,0,0,171.5,90Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="107.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M199.3,87H178.1v1h20.3A9,9,0,0,1,199.3,87Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M222.3,88h20.4c.3-.3.5-.7.8-1H222.3Z" transform="translate(-28.59 17.58)"/>
            <polygon class="fill-raw-blue" points="237.21 105.58 254.21 105.58 254.21 104.58 237.21 104.58 237.21 105.58"/>
            <polygon class="fill-raw-blue" points="279.51 105.58 296.71 105.58 296.71 104.58 279.51 104.58 279.51 105.58"/>
            <path class="fill-raw-blue" d="M129.8,87.5a1.42,1.42,0,0,0,.2-.6H113.2a3.55,3.55,0,0,0-.2,1h16.6Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M154.1,87c.1.3.2.5.3.8,0,.1.1.1.1.2h16.6c-.1-.3-.1-.7-.2-1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="104.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M178.1,84v1h23.5a16.18,16.18,0,0,1,1.8-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M222.3,85h23.5a16.18,16.18,0,0,1,1.8-1H222.3Z" transform="translate(-28.59 17.58)"/>
            <polygon class="fill-raw-blue" points="279.51 102.58 296.71 102.58 296.71 101.58 279.51 101.58 279.51 102.58"/>
            <polygon class="fill-raw-blue" points="237.21 102.58 254.21 102.58 254.21 101.58 237.21 101.58 237.21 102.58"/>
            <path class="fill-raw-blue" d="M169.9,84H152.4a8.65,8.65,0,0,1,.7,1h17.1A1.69,1.69,0,0,0,169.9,84Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M131.8,84H114.2a4.18,4.18,0,0,1-.4,1h17.3A3.59,3.59,0,0,1,131.8,84Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="101.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="98.58" width="37.6" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="98.58" width="37.7" height="1"/>
            <polygon class="fill-raw-blue" points="237.11 99.58 254.21 99.58 254.21 98.58 237.11 98.58 237.11 99.58"/>
            <polygon class="fill-raw-blue" points="279.41 99.58 296.71 99.58 296.71 98.58 279.41 98.58 279.41 99.58"/>
            <path class="fill-raw-blue" d="M168.6,81H149.2a6.42,6.42,0,0,1,1.3,1H169A3,3,0,0,0,168.6,81Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M134.9,81H115.5c-.2.3-.3.7-.5,1h18.6A11.32,11.32,0,0,1,134.9,81Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="98.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="95.58" width="37.6" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="95.58" width="37.7" height="1"/>
            <polygon class="fill-raw-blue" points="279.41 96.58 296.71 96.58 296.71 95.58 279.41 95.58 279.41 96.58"/>
            <polygon class="fill-raw-blue" points="237.11 96.58 254.11 96.58 254.11 95.58 237.11 95.58 237.11 96.58"/>
            <rect class="fill-raw-blue" x="61.81" y="95.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="92.58" width="37.6" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="92.58" width="37.7" height="1"/>
            <polygon class="fill-raw-blue" points="237.11 93.58 254.11 93.58 254.11 92.58 237.11 92.58 237.11 93.58"/>
            <polygon class="fill-raw-blue" points="279.41 93.58 296.71 93.58 296.71 92.58 279.41 92.58 279.41 93.58"/>
            <path class="fill-raw-blue" d="M164.6,75H119.4c-.3.3-.5.7-.8,1h46.8A2.54,2.54,0,0,0,164.6,75Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="92.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M215.8,73V72H196.3a9.43,9.43,0,0,0-1,1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="149.51" y="89.58" width="16.2" height="1"/>
            <rect class="fill-raw-blue" x="193.71" y="89.58" width="16.2" height="1"/>
            <path class="fill-raw-blue" d="M259.9,73V72H240.5a9.43,9.43,0,0,0-1,1Z" transform="translate(-28.59 17.58)"/>
            <polygon class="fill-raw-blue" points="279.41 90.58 296.71 90.58 296.71 89.58 279.41 89.58 279.41 90.58"/>
            <polygon class="fill-raw-blue" points="237.11 90.58 254.11 90.58 254.11 89.58 237.11 89.58 237.11 90.58"/>
            <path class="fill-raw-blue" d="M161.8,72H122.4a9.43,9.43,0,0,0-1,1h41.5C162.5,72.6,162.1,72.3,161.8,72Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="89.58" width="17" height="1"/>
            <rect class="fill-raw-blue" x="149.51" y="86.58" width="16.2" height="1"/>
            <path class="fill-raw-blue" d="M215.8,70V69H200.3a13,13,0,0,0-1.5,1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M259.9,70V69H244.4a13,13,0,0,0-1.5,1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="193.71" y="86.58" width="16.2" height="1"/>
            <polygon class="fill-raw-blue" points="279.31 87.58 296.61 87.58 296.61 86.58 279.31 86.58 279.31 87.58"/>
            <polygon class="fill-raw-blue" points="254.11 87.58 254.11 86.58 237.01 86.58 237.01 87.58 254.11 87.58"/>
            <path class="fill-raw-blue" d="M157.9,69H126.3a13,13,0,0,0-1.5,1h34.5A7.1,7.1,0,0,0,157.9,69Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="86.58" width="17" height="1"/>
            <path class="fill-raw-blue" d="M215.8,67v-.8a17.85,17.85,0,0,0-2.3-.2h-3.7a23,23,0,0,0-5.1,1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="149.51" y="83.98" width="16.2" height="0.6"/>
            <path class="fill-raw-blue" d="M259.9,67v-.8a17.85,17.85,0,0,0-2.3-.2H254a23,23,0,0,0-5.1,1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="193.71" y="83.98" width="16.2" height="0.6"/>
            <polygon class="fill-raw-blue" points="254.01 84.28 237.01 84.28 237.01 84.58 254.01 84.58 254.01 84.28"/>
            <polygon class="fill-raw-blue" points="296.31 84.28 279.61 84.28 279.31 84.28 279.31 84.58 296.61 84.58 296.61 84.28 296.31 84.28"/>
            <path class="fill-raw-blue" d="M154.2,67a18.61,18.61,0,0,0-2.5-1H132.3a26,26,0,0,0-2.5,1Z" transform="translate(-28.59 17.58)"/>
            <rect class="fill-raw-blue" x="61.81" y="83.98" width="17" height="0.6"/>
            <path class="fill-raw-blue" d="M99.1,57.3a13.17,13.17,0,0,0,3.4-.4H95.7A13.17,13.17,0,0,0,99.1,57.3Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M91.2,55h15.9a11.32,11.32,0,0,0,1.3-1H89.9C90.3,54.3,90.7,54.6,91.2,55Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M88,52h22.3a6.07,6.07,0,0,0,.7-1H87.3C87.5,51.3,87.7,51.6,88,52Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M86.2,49h25.9c.1-.3.3-.7.4-1H85.8A6.89,6.89,0,0,0,86.2,49Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M85.2,46H113a3.4,3.4,0,0,0,.1-1h-28C85.1,45.3,85.2,45.6,85.2,46Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M85,43h28.3a3.4,3.4,0,0,0-.1-1H85Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M85.4,40h27.5c-.1-.3-.2-.7-.3-1h-27A3,3,0,0,0,85.4,40Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M86.5,37h25.4c-.2-.3-.4-.7-.6-1H87A3.13,3.13,0,0,0,86.5,37Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M88.5,33.9h21.4a9.43,9.43,0,0,0-1-1H89.4A9,9,0,0,1,88.5,33.9Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M94.3,29.9a21.4,21.4,0,0,0-2.2,1h14.1a14.72,14.72,0,0,0-2.2-1Z" transform="translate(-28.59 17.58)"/>
            <path class="fill-raw-blue" d="M166.9,78H117.2c-.2.3-.4.7-.6,1h23.9a7.57,7.57,0,0,1,1.5-.1,9.15,9.15,0,0,1,1.6.1h24Z" transform="translate(-28.59 17.58)"/>
          </g>
        </svg>
        <div class="col col-unit-12 pad-lr-0-75 mar-b-3">
          <p class="text-s c-white mar-b-1" v-html="currentContact.companyName"></p>
          <p class="text-s c-white" v-html="currentContact.address.street + ' · ' + currentContact.address.city"></p>
          <p class="text-s c-white mar-b-1"><span v-if="currentContact.address.phone != ''">T <a :href="'tel:' + currentContact.address.phone" v-html="currentContact.address.phone"></a><span v-html=" isResp4 ? ' ' : ' · '"></span></span><a :href="'mailto:' + currentContact.address.email" v-html="currentContact.address.email"></a></p>
          <a :href="currentContact.address.gmapLink"><p :class="'text-s c-white mar-b-1 ' + textColorClass3"><svg style="height: .75em;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.42 10.98"><polygon class="fill-white" points="7.93 0 6.62 1.32 9.86 4.56 0 4.56 0 6.42 9.86 6.42 6.62 9.66 7.93 10.98 13.42 5.49 7.93 0"/></svg> Google Maps</p></a>
          <p :class="'text-s c-white mar-b-1 ' + textColorClass3" v-html="contactCurrentLanguage.followUsText"></p>
          <a :href="navigation.socialLinks.facebook"><svg class="social-icon pad-tb-1 mar-r-1 mar-resp-2-lr-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path class="fill-white" d="M27.78,0H2.21A2.19,2.19,0,0,0,0,2.16V27.84A2.19,2.19,0,0,0,2.21,30H16.08V18.43H12.19V13.91h3.89V10.58c0-3.86,2.35-6,5.79-6a30.37,30.37,0,0,1,3.48.18v4H23c-1.87,0-2.24.89-2.24,2.2v2.88h4.48l-.58,4.52h-3.9V30h7A2.19,2.19,0,0,0,30,27.84V2.16A2.19,2.19,0,0,0,27.78,0Z"/>
          </svg></a>
          <a :href="navigation.socialLinks.instagram"><svg class="social-icon pad-tb-1 mar-r-1 mar-resp-2-lr-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path class="fill-white" d="M27.34,21.72a5.62,5.62,0,0,1-5.62,5.62H8.28a5.62,5.62,0,0,1-5.62-5.62V8.28A5.62,5.62,0,0,1,8.28,2.66H21.72a5.62,5.62,0,0,1,5.62,5.62ZM21.72,0H8.28A8.28,8.28,0,0,0,0,8.28V21.72A8.28,8.28,0,0,0,8.28,30H21.72A8.29,8.29,0,0,0,30,21.72V8.28A8.28,8.28,0,0,0,21.72,0"/>
            <path class="fill-white" d="M15,20.07A5.07,5.07,0,1,1,20.07,15,5.08,5.08,0,0,1,15,20.07m0-12.8A7.73,7.73,0,1,0,22.73,15,7.74,7.74,0,0,0,15,7.27"/>
            <path class="fill-white" d="M23.06,5a2,2,0,1,0,1.37.57A2,2,0,0,0,23.06,5"/>
          </svg></a>
          <a :href="navigation.socialLinks.linkedIn"><svg class="social-icon pad-tb-1 mar-r-1 mar-resp-2-lr-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path class="fill-white" d="M25.56,25.56H21.12v-7c0-1.66,0-3.8-2.32-3.8s-2.66,1.81-2.66,3.68v7.08H11.69V11.25H16V13.2H16a4.68,4.68,0,0,1,4.21-2.31c4.5,0,5.33,3,5.33,6.82ZM6.67,9.29A2.58,2.58,0,1,1,9.25,6.71,2.59,2.59,0,0,1,6.67,9.29h0M8.9,25.56H4.45V11.25H8.9ZM27.78,0H2.21A2.19,2.19,0,0,0,0,2.16V27.84A2.19,2.19,0,0,0,2.21,30H27.78A2.19,2.19,0,0,0,30,27.84V2.16A2.19,2.19,0,0,0,27.78,0"/>
          </svg></a>
        
        
        
        
        </div>
        <div class="col col-unit-12 pad-lr-0-75">
          <p class="text-s c-white"><nuxt-link class="legal-link" :to="localePath( isIndex ? 'imprint' : 'imprint-jerry-digital' )" v-html="navigationCurrentLanguage.imprintLinkText"></nuxt-link> | <nuxt-link class="legal-link" :to="localePath(isIndex ? 'privacy-policy' : 'privacy-policy-jerry-digital')" v-html="navigationCurrentLanguage.privacyPolicyLinkText"></nuxt-link><br><span class="legal-link pointer" @click="$cookies.modal = true" v-html="navigationCurrentLanguage.cookiesButtonText"></span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase
    }
  },
  computed: {
    isIndex: function(){
      return this.$route.name == 'index___de' || this.$route.name == 'index___en'
    },
    currentContact: function (){
      return this.isIndex ? this.contact : this.contactJerryDigital
    },
    textColorClass3: function(){
      return this.isIndex ? 'c-grey-3' : 'c-grey-4'
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
        return this.staticMediaSrcBase + 'images/jerry-digital-split-screen-glow-1024.png'
      }
    }
  }
}

</script>

<style>

</style>