import { reducerCases } from "./Constants";

export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  tracks: [],
  artists: [],
  featuredplaylists: [],
  recentlyPlayed: [],
  currentlyPlaying: null,
  playerState: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case reducerCases.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      }
    case reducerCases.SET_USER:
        return {
          ...state,
          userInfo: action.userInfo,
        }
    case reducerCases.SET_TRACKS:
        return {
          ...state,
          tracks: action.tracks,
        }
    case reducerCases.SET_ARTISTS:
        return {
          ...state,
          artists: action.artists,
        }
    case reducerCases.SET_FEATUREDPLAYLISTS:
      return {
        ...state,
        featuredplaylists: action.featuredplaylists,
      }
    case reducerCases.SET_RECENTLYPLAYED:
      return {
        ...state,
        recentlyPlayed: action.recentlyPlayed,
      }
    case reducerCases.SET_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying,
      }
    case reducerCases.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      }
    default:
      return state;
  }
};

export default reducer;
