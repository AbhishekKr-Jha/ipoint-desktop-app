


 
Vue.component('index-component',{
    name:'index-section',
    template:`
    <div  v-show="sectionVisibility" class='w-full h-full flex-1 bg-red '>
   
dfvdxf


    </div>
    ` ,
    computed:{
        sectionVisibility(){ return this.$store.state.visibleSection === "index-section"; }
    }
})