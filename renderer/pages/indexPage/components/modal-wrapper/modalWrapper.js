


Vue.component('modal-wrapper-component',{
    name:'modal-wrapper-section',
    template:`
    <div @click="$emit('close-modal-event')" style="z-index:150;" class="h-full  w-full  flex items-center justify-center absolute top-0 left-0 modal-container ">
  

    <div @click.stop class=" w-auto h-auto ">

<slot>
</slot>

</div>


    </div>
    `,
    props:{
       modalVisibility:Boolean 
    },
    data(){
        return{
             isModalVisible:true
        }
    },
    methods:{
closeModal(){
    this.isModal=false
}
    },
    created(){
        // console.log("modal is going to open -- ",this.modalVisibility)
        this.isModal=this.modalVisibility
    }
})