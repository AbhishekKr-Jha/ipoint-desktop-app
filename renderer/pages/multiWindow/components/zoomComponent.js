const { ipcRenderer } = require("electron")


Vue.component('zoom-component-section',{
    name:'zoom-section',
    template:`
    <div style="background-color:gray;" class="w-full h-full overflow-auto ">

<img ref="zoomImg" :src="zoomImageUrl"  class="w-full h-full object-fit-contain" alt="loading..."   >


<div class="absolute left-50 top-80 translate-center flex justify-center items-center gap-30" >
<!-- -----zoom in--------- -->
<button @click="zoom_in_func" style="width:45px;height:45px;    background-color: blue;" class="rounded-lg bg-red border-none  zoom-button" >
<i class=" text-xl text-white   fa-solid fa-plus"></i>
</button>

<!-- ---- zoom out ----- -->
<button  @click="zoom_out_func" style="width:45px;height:45px;    background-color: blue;" class="rounded-lg bg-red border-none  zoom-button" >
<i class=" text-xl text-white   fa-solid fa-minus"></i>
</button>

</div>
    </div>
    `,
    data(){
        return{
imageScaleValue:1,
zoomImageUrl:null 
        }
    },
    methods:{ 
zoom_in_func(){
    console.log("ok zooming")
    if(this.imageScaleValue >= 3)  return
    this.imageScaleValue=this.imageScaleValue+0.2
this.$refs.zoomImg.style.transform=`scale(${this.imageScaleValue})`
},
zoom_out_func(){   
    console.log("ok zooming out")
        if(this.imageScaleValue <=0.6)  return
        this.imageScaleValue=this.imageScaleValue-0.2
this.$refs.zoomImg.style.transform=`scale(${this.imageScaleValue})`
}
    },
    created(){
        ipcRenderer.on('get-zoom-image-data',(event,data)=>{
            console.log("zoom image event fired in zoom-compoenet and data url is",data)
            this.zoomImageUrl=data.imageUrl
        })
    }
})