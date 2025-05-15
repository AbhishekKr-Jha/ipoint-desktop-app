
const path=require('path')

Vue.component('header-component',{
    name:'header-section',
    template:  `

    <div  class="relative flex flex-col gap-30 justify-start items-start  nav-container"  > 

    <div style="height:60px;width:60px;" class="   " > <img src="../../asset/icon01.png" class="w-full h-full" alt="load..." > </div>

    



<div v-for="item in sideBarMenuList" :key="item.title"  @click="handle_changeSection(item.section)"   :style="{ gap: '2px', width: isSideBarOpen ? '250px' : '50px', backgroundColor:currentSVisibleSection ==item.section ? '#5C31FF':'#272727'  }" class=" text-white rounded-lg flex justify-start items-center  pointer text-lg nav-item"  >
<div style="width:50px;flex-shrink:0;" class="h-full flex items-center justify-center  "  > 
<span class="fa-icon text-2xl text-white" v-html="item.unicode" ></span>
</div>
{{item.title}}
</div>

<span @click="isSideBarOpen=!isSideBarOpen" style="right:-15px;z-index:30;"  class="pointer absolute top-50  flex items-center justify-center toggle-arrow" > <i class="text-white text-lg  fa-solid "  :class="isSideBarOpen?'fa-solid fa-angle-left': ' fa-solid fa-angle-right' " ></i> </span>


</div> 


 
    `,
    data(){
        return{ 
            isSideBarOpen:false,
            sideBarMenuList:[
                // {
                //     icon:'fa-solid fa-house',
                //     unicode: '&#xf015;' ,
                //     title:'Home',
                //     section:'home-section'
                // },
                {
                    icon:'fa-solid fa-magnifying-glass ',
         unicode: ' &#xf002 ' ,
                    title:'Search ',
                    section:'search-section'
                },
                
                {
                    icon:' fa-solid fa-upload',
                     unicode: '&#xf093  ' ,
                    title:' Upload',
                    section:'upload-section'
                },
                {
                    icon:'fa-solid fa-share ',
                     unicode: '&#xf064  ' ,
                    title:' Share ',
                    section:'share-section'
                },
                  {
                    icon:'fa-solid fa-check ',
                     unicode: '&#xf00c  ' ,
                    title:' Verify ',
                    section:'verification-section'
                },
                {
                    icon:' fa-solid fa-gamepad ',
                     unicode: '&#xf302  ' ,
                    title:'View ',
                    section:'view-section'
                },
                {
                    icon:' fa-solid fa-gamepad ',
                     unicode: '&#xf11b  ' ,
                    title:'Game ',
                    section:'game-section'
                },
            ]

        }
    }, 
    computed:{
currentSVisibleSection() { return this.$store.state.visibleSection }
    },
    methods:{
      handle_changeSection(sectionName){ this.$store.commit('change_section_visibility',sectionName)}
    }
})