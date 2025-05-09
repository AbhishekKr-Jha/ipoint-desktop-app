const { ipcRenderer } = require("electron")


Vue.component('image-details-component',{
    name:'image-details',
    template:`
    <div style="padding:15px ;" class="w-screen-80 h-80  flex gap-20 items-center justify-center rounded-lg overflow-hidden image-details-container "  >



    <div style="padding:15px 0; " class="w-half flex flex-col gap-20" >

<div style="height:400" class="w-full rounded-lg overflow-hidden" >
<img :src="imageDetails?.src?.original"   class="w-full h-full object-fit-contain"  alt="load..." >
</div>

<div  style="border:1px solid white;padding:15px 0;"  class="w-full flex justify-center gap-20  rounded-lg " >


<!--  --------------share------------        -->
<div   class="flex items-center justify-center pointer rounded-lg image-details-icon-container" >
<i class=" text-2xl text-white fa-solid fa-share " ></i>
</div>

<!--   -------------download------------       -->
<div   class="flex items-center justify-center pointer rounded-lg image-details-icon-container" >
<i class=" text-2xl text-white fa-solid fa-download " ></i>
</div>

<!--  --------zoom in----------------        -->
<div  @click="openZoomWindow"  class="flex items-center justify-center pointer rounded-lg image-details-icon-container" >
<i class=" text-2xl text-white fa-solid fa-magnifying-glass-plus " ></i>
</div>

</div>

    </div>


<div v-if="imageDetails"  style="border:1px solid white;padding:15px;"  class="flex-1 flex flex-col gap-20 h-full rounded-lg " >

<p class="text-xl font-medium text-white" > Photographer :  <span class="text-white text-xl "> {{imageDetails.photographer}} </span> 

<p class="text-xl font-medium text-white" > About :  <span class="text-white text-xl " > {{imageDetails.alt}} </span>  </p>

</div>


    </div>
    `,
    props:{
        imageDetails:Object
    },
    data(){
       return{
         imageIconList:[
            {
                icon:" fa-solid fa-share",
                title: "share icon"
            },
             {
                icon:" fa-solid fa-download",
                title: " download icon"
            },
             {
                icon:" fa-solid fa-magnifying-glass-plus",
                title: "Zoom icon "
            }
        ]
       }
    }, 
    methods:{
            openZoomWindow(){
                ipcRenderer.send('open-zoom-window',{imageUrl:this.imageDetails?.src?.original})
            }
    },
    created(){
        console.log("the imaged data passed as prop in imageDetails is ",this.imageDetails)
    },
    updated(){
        console.log(this.imageDetails)
    }
})