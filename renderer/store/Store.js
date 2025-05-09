const Vuex = require('vuex');
const persistedStorage = require('vuex-persistedstate');

const store = new Vuex.Store({
  state: {
    visibleSection: 'search-section',
  }, 
  mutations: {
    change_section_visibility(state, payload) { 
      state.visibleSection = payload;
    }
  },
  plugins: [persistedStorage()]  
}); 


module.exports=store