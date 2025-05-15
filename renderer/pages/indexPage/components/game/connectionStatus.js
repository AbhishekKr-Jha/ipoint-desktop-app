
Vue.component('connection-status-component',{
    template:`
    <div class="w-full flex flex-col items-center gap-20" >



<div  v-show="isOnline " class="flex items-center gap-10" >
<p class="text-xl" >It looks like you are back Online! </p>
 <button type="button" @click="handleOnlineButton"  class="connection-button bg-green pointer" >Go back </button>

</div>

<div v-show="!isOnline " class="flex flex-col gap-20" >
<p class="text-xl" >It looks like you are Offline! Restart your connection! </p>
<div class="text-lg">Until then want to play a game? <button type="button" @click="handleOfflineButton"  class="connection-button bg-red pointer " >Launch game </button> </div>
</div>


    </div>
    `,
    props:{
 visibiliy:{
     type:Boolean,
    default:false,
 }
    },
    computed:{
isOnline(){
    return this.$store.state.isUserOnline
},
    },
methods:{
    handleOnlineButton(){
        this.$store.commit('change_section_visibility',this.$store.state.previousPage)
        this.$store.commit('updatePreviousPage','share-section')

    },
    handleOfflineButton(){
this.$store.commit('updatePreviousPage',this.$store.state.visibleSection)     
   this.$store.commit('change_section_visibility','game-section')
    }
}
    
})