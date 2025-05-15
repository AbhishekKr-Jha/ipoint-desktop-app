
Vue.component('header-component',{
    name:'header-section',
    template:  `

    <div  class="relative flex flex-col gap-30 justify-start items-start  nav-container"  > 

    <div style="height:60px;width:60px;" class="   " > <img src="../../asset/icon01.png" class="w-full h-full" alt="load..." > </div>

<div v-for="item in sideBarMenuList" :key="item.title"  @click="handle_changeSection(item.section)"   :style="{ gap: '2px', width: isSideBarOpen ? '250px' : '50px', backgroundColor:currentSVisibleSection ==item.section ? '#5C31FF':'#272727'  }" class=" text-white rounded-lg flex justify-start items-center  pointer text-lg nav-item"  >
<span style="width:50px;flex-shrink:0;" class="h-full  "  ><i class=" text-2xl text-white flex justify-center items-center "  :class="item.icon"  ></i></span> {{item.title}}
</div>

<span @click="isSideBarOpen=!isSideBarOpen" style="right:-15px;z-index:30;"  class="pointer absolute top-50  flex items-center justify-center toggle-arrow" > <i class="text-white text-lg  fa-solid "  :class="isSideBarOpen?'fa-solid fa-angle-left': ' fa-solid fa-angle-right' " ></i> </span>


</div> 


 
    `,
    data(){
        return{ 
            isSideBarOpen:false,
            sideBarMenuList:[
                {
                    icon:'fa-solid fa-house',
                    title:'Home',
                    section:'index-section'
                },
                {
                    icon:'fa-solid fa-magnifying-glass ',
                    title:'Search ',
                    section:'search-section'
                },
                // {
                //     icon:' fa-solid fa-download ',
                //     title:'Saved ',
                //     section:'download-section'
                // },
                {
                    icon:' fa-solid fa-upload',
                    title:' Upload',
                    section:'upload-section'
                },
                {
                    icon:'fa-solid fa-share ',
                    title:' Share ',
                    section:'share-section'
                },
                  {
                    icon:'fa-solid fa-check ',
                    title:' Verify ',
                    section:'verification-section'
                }
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