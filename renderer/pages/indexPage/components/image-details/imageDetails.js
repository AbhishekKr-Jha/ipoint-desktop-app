const { ipcRenderer } = require("electron")


Vue.component('image-details-component',{
    name:'image-details',
    template:`
    <div style="padding:15px ;max-height:750px;max-width:1200px" class="w-screen-80 h-80  flex gap-20 items-center justify-center rounded-lg overflow-hidden image-details-container inner-modal-component "  >



    <div style="padding:15px; " class="w-half h-full flex flex-col gap-20 " >

<div style="height:400px;" class=" rounded-lg overflow-hidden " >
<img :src="imageDetails?.src?.original"   class="w-full  h-full object-fit-contain rounded-lg overflow-hidden"  alt="load..." >
</div>

<div  style="border:1px solid blue;padding:15px 0;"  class="w-full flex justify-center gap-20  rounded-lg " >


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


<div v-if="imageDetails"  style="border:1px solid blue;padding:15px;"  class="flex-1  flex flex-col gap-20 h-full rounded-lg " >

<p class="text-xl font-medium " > Photographer :  <span class=" text-xl "> {{imageDetails.photographer}} </span> 

<p class="text-xl font-medium " > About :  <span class=" text-xl " > {{imageDetails.alt}} </span>  </p>

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
        // console.log("the imaged data passed as prop in imageDetails is ",this.imageDetails)
    },
    updated(){
        console.log(this.imageDetails)
    }
})