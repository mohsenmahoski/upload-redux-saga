const initialState = {
   meta:null,
   progress:0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
       case 'GET_NEWS':
          return { ...state, loading: true };
       case 'NEWS_RECEIVED':
        return { ...state, news: action.json[0], loading: false }
      case 'UPLOAD_PROGRESS':
        return { ...state, meta:action.meta , progress:action.progress }
      case 'UPLOAD_SUCCESS':
        return { ...state, meta:null , progress:0 }
       default:
          return state;
     }
  };
  export default reducer;