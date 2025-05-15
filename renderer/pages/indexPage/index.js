


 
Vue.component('index-component',{
    name:'index-section',
    template:`
  <div style="padding: 10px;" class="w-full h-screen overflow-hidden overflow-y-auto " >


<home-component v-show="sectionVisibility=='home-section'" > </home-component>
<search-component v-if="sectionVisibility=='search-section'"  ></search-component> 
<verification-component  v-if="sectionVisibility=='verification-section'"  ></verification-component>
<upload-component v-if="sectionVisibility=='upload-section'" ></upload-component>
<share-component v-if="sectionVisibility=='share-section'" ></share-component>
<modal-wrapper-component v-show="isModalVisible"  @close-modal-event="handleCloseModal" >
<share-component></share-component>
</modal-wrapper-component>
<view-component v-if="sectionVisibility=='view-section'" ></view-component>
<game-component v-if="sectionVisibility=='game-section'" > </game-component>

</div>
    ` ,
    data(){
        return{
// isOnline:navigator.onLine
        }
    },
    computed:{ 
                sectionVisibility(){ return this.$store.state.visibleSection  },
        isUserVerified(){ return this.$store.state.isUserVerified },
        isModalVisible(){ return this.$store.state.isShareModalActive  },
        isUserOnline(){ return  this.$store.state.isUserOnline }
    },
    methods:{
handleCloseModal(){
    this.$store.commit('changeShareModalStatus')
},

    },
    created(){
        setInterval(()=>{
            let connection=navigator.onLine 
            this.$store.commit('changeUserOnlineStatus',connection)    
        },5000)
        // console.log('the status opf tye isuserVerified is -- ',this.$store.state.isUserVerified)
    }
})