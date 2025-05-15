const Vuex = require('vuex');
const persistedStorage = require('vuex-persistedstate');

const store = new Vuex.Store({
  state: {
    visibleSection: 'search-section',
    userEmail:null,
    userVerificationToken:null,
    isUserVerified:true,
    isShareModalActive:true,
    searchQuery:null
  }, 
  mutations: {
    change_section_visibility(state, payload) { 
      state.visibleSection = payload;
    },
    changeUserVerificationStatus(state,payload){
      state.isUserVerified=payload.user
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