

Vue.component('secondary-header-component',{
    name:'secondary-header',
    template:`
    <div style="padding:0 30px;height:70px; background-color:#131313;" class="w-full bg-red flex items-center justify-end gap-60 ">


<div  v-show="currentVisibleSection =='search-section' " class="w-auto rounded-lg flex items-center gap-10 search-container" >
<input v-model="searchValue"   type="text" style="max-width:400px;padding:5px 12px;" class="input" placeholder="Your Search Query" >   
<span @click="handleSearch" class="pointer" ><i style="color:#5C31FF;" class="fa-solid fa-magnifying-glass text-2xl "></i></span>
</div>


    <div class=" flex gap-30 items-center  text-base">
    <div class="flex items-center gap-10 " >
    <div style="" class="pulse-ball" :class="isUserOnline ? 'pulse-ball-active' : ' pulse-ball-inactive' "  ></div>
     <p  class="text-white" >{{isUserOnline? "Online" : "Offline" }}</p>
    </div>

    <div class="flex items-center gap-10" >
    <div style="" class="pulse-ball" :class="isUserVerified ? 'pulse-ball-active' : ' pulse-ball-inactive' "  ></div>
     <p  class="text-white" >{{isUserVerified? "User Verified" : "Unverified User" }}</p>
    </div>

</div>

    </div>
    `,
    data(){
        return{
searchValue:null
        }
    },
    computed:{
        isUserVerified(){ return this.$store.state.isUserVerified },
        currentVisibleSection(){  return this.$store.state.visibleSection },
                isUserOnline(){ return  this.$store.state.isUserOnline }

    },
    methods:{
        handleSearch(){
            this.$store.commit('changeSerachQuery',this.searchValue)
        }
    }
})