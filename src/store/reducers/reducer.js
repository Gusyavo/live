
const initialState = {
  showChat: true,
  promotions: [],
  showPromotions: true,
  live: undefined,
  isMuted: true
}

export const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'toggleChat':
      return { ...state, showChat: !state.showChat }
    case 'togglePromotions':
      return { ...state, showPromotions: !state.showPromotions }
    case 'setPromotions':
      return { ...state, promotions: action.promotions }
    case 'setLive':
      return { ...state, live: action.live }
    case 'toggleVolume':
      return { ...state, isMuted: !state.isMuted }
    default:
      return state
  }
}