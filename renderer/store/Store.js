const Vuex = require('vuex');
const persistedStorage = require('vuex-persistedstate');

const store = new Vuex.Store({
  state: {
    isUserOnline: null,
    previousPage:null,
    visibleSection: 'search-section',
    userEmail:null,
    userVerificationToken:null,
    isUserVerified:false, 
    isShareModalActive:true,
    searchQuery:null
  }, 
  mutations: {
updatePreviousPage(state,payload){
state.previousPage=payload
},
    changeUserOnlineStatus(state,payload){
   state.isUserOnline=payload
    },
    change_section_visibility(state, payload) { 
      state.visibleSection = payload;
    },
    changeUserVerificationStatus(state,payload){
      state.isUserVerified=payload.user || false
      state.userEmail=payload.email
      state.userVerificationToken=payload.token
    },
    changeShareModalStatus(state,payload){
      state.isShareModalActive=!state.isShareModalActive
    },
    changeSerachQuery(state,payload){
      state.searchQuery=payload
    }
  },
  plugins: [persistedStorage()]  
}); 


module.exports=store