

Vue.component('image-details-component',{
    name:'image-details',
    template:`
    <div class="w-screen-80 h-70 bg-blue flex flex-col gap-20 items-center justify-center image-details-container "  >



    <div class="w-half flex flex-col gap-20" >

<div class="w-full rounded-lg overflow-hidden" >
<img :src="imageDetails?.src?.original"   class="w-full"  alt="load..." >
</div>

<div class="w-full rounded-lg" >

</div>

    </div>


<div class="flex-1 rounded-lg" >

</div>


    </div>
    `,
    props:{
        imageDetails:Object
    },
    created(){
        console.log("the imaged data passed as prop in imageDetails is ",this.imageDetails)
    },
    updated(){
        console.log(this.imageDetails)
    }
})