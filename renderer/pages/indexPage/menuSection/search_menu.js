
const path=require('path')
// console.log(path.join(__dirname,'../../shared/apiHelper/getApiHelper.js'))
const getApiCall = require(path.join(__dirname,'../../shared/apiHelper/getApiHelper.js'));


Vue.component('search-component',{
    name:'search-section',
    template:`
    <div  v-show="sectionVisibility" style="z-index:50;" class=" bg-blue " >
 <!--   <loader-component></loader-component>   -->

<div    class="w-full  image-container " >
<image-card-component v-for="(item,index) in imageList" :key="item.id" :imageData="item" :imageIndex="index"  @open-modal-event="handleOpenModalEvent" ></image-card-component>
</div>

<!-- ----------- image details modal ----------    -->
<modal-wrapper-component v-show="isModalVisible && modalImageData" @close-modal-event="isModalVisible=false;modalImageData=null"  >
<image-details-component  :imageDetails="modalImageData" > </image-details-component>
</modal-wrapper-component>

    </div>
    `,
    data(){ 
        return{
            isModalVisible:false, 
            imageList:[],
            modalImageData:null,
trydata:[
    {
        "id": 208326,
        "width": 2048,
        "height": 1360,
        "url": "https://www.pexels.com/photo/gray-dragon-statue-208326/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#58614B",
        "src": {
          "original": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg",
          "large2x": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny": "https://images.pexels.com/photos/208326/pexels-photo-208326.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Decorative dragon sculpture on a traditional roof with a blurred natural background."
      }
]
        }
    },
    computed:{
        sectionVisibility(){ return this.$store.state.visibleSection === "search-section"; }
    },
    methods:{
        async fetchSearchResult(querySearch="cat"){ 
            const result=await getApiCall({
                url:`https://api.pexels.com/v1/search?query=${querySearch}&per_page=15`,
                headers: {
                    Authorization: "eqLtGNKRE2qbMsqETmnrVI5NqRcUIG7bsf6UYUxASOiPNXLSyDLC0pkG"
                }
            }) 
if(result.success){
    // console.log("data fetched successfully")
    this.imageList=result.responseData?.photos
    return
}
console.log("api call not successful",result.errorMessage || "Api call aborted!")

        },
        handleOpenModalEvent(index){
            this.isModalVisible=true
            this.modalImageData=this.imageList[index]
            console.log("the event imageData is",index,this.modalImageData?.src)
        }
    },
    created(){
        this.fetchSearchResult()
    }
})   