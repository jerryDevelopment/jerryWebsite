export const state = () => ({
  splitScreenFromInfo: '',
  splitScreenActiveState: false,
  splitScreenAnimationState: false,
  mainMenuActiveState: false
})

export const mutations = {
  fromIndexToDigital (state) {
    state.splitScreenFromInfo = 'from-index-to-digital'
  },
  fromDigitalToIndex (state) {
    state.splitScreenFromInfo = 'from-digital-to-index'
  },
  activateSplitscreen (state) {
    state.splitScreenActiveState = true
  },
  deactivateSplitscreen (state) {
    state.splitScreenActiveState = false
  },
  activateSplitscreenAnimation (state) {
    state.splitScreenAnimationState = true
  },
  deactivateSplitscreenAnimation (state) {
    state.splitScreenAnimationState = false
  },
  activateMainMenu (state) {
    state.mainMenuActiveState = true
  },
  deactivateMainMenu (state) {
    state.mainMenuActiveState = false
  }
}