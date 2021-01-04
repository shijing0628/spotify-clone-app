export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: 'BQAFT0hbeb9mtl08AjA4WqiZH2X3osI9PlKqddvtZ8ZdRqfJzrxLt3EifTYSI3T27mxBANvOaWVdCQfj9wXBCKcHo-PAtjd8Cy8nJOJi-0CyDM6DKB4q6LEbLfwyOk3kaotPPSHK58Pzhlm0I0YBPzrW3N1-dr9efvSJDZ9cYv2xltpZ'
}

const reducer = (state, action) => {
  console.log(action)

  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }


    default:
      return state;
  }
}

export default reducer

