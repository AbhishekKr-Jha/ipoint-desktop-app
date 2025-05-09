Vue.component('image-card-component',{
    name:'image-card',
    template:`
    <div @click="$emit('open-modal-event',imageIndex )"  style="margin:5px 0;" class=" w-full pointer relative rounded-lg overflow-hidden  image-card" >
<img  :src="imageData && imageData?.src?.original" class="w-full h-full object-fit-contain " alt="loading..." >




<!--  --------------- buttons --------------- -->
<div style="z-Index:25;"  class=" w-full absolute left-0 bottom-0" >
<p class="text-lg ellipsis-class hidden" >Adorable tabby kitten with orange fur curiously looking outside through the window</p>
</div>




    </div>
    `,
    props:{
        imageData:Object,
        imageIndex:Number
    },
    created(){
        // console.log("the item is",this.imageData)    
    }
})