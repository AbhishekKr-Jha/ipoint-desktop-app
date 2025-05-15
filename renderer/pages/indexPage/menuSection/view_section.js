

Vue.component('view-component',{
    name:'view-section',
    template:`
   
       <div  class="w-full flex flex-col items-center " >

<loader-component v-show="isLoader" message="Fetching your uploads..." ></loader-component>

<div v-show="!isLoader" class="flex flex-col items-center ">

<div v-show="imageList.length>0" class="w-full flex flex-col gap-10 " >
<p class="text-center text-2xl " > Images </p>
       <div style="padding:12px 20px;" class="w-full flex flex-wrap gap-20 justify-center items-center">
       <div  v-for="item in imageList" :key="item.key"  style="padding:10px;width:160px;gap:5px;" class="relative flex flex-col  rounded-lg border-primary " >
<img style="height:110px;" class="w-full rounded-lg " :src="item?.view_url"  alt="load..." >
<p class="w-full ellipsis" > {{item?.key?.split('/')[2]}} </p>
<span @click="downloadFile(item.view_url)" class=" image-download-icon " > <i class="fa-solid fa-arrow-down text-xl text-white "></i> </span>
</div>
</div>
</div>


<div  v-show="documentList.length>0" style="margin:30px 0;" class="w-full flex flex-col gap-10 " >
<p class="text-center text-2xl " > PDFs </p>
  <div style="padding:12px 30px;" class="w-full flex flex-wrap gap-20 justify-center items-center">
<div v-for="item in documentList" :key="item.key"  style="padding:10px;width:160px;gap:5px;" class="flex flex-col  rounded-lg relative border-primary" >
<p class="w-full ellipsis" > {{item?.key?.split('/')[2]}} </p>
<span @click="downloadFile(item.view_url)" class=" image-download-icon  " > <i class="fa-solid fa-arrow-down text-xl text-white "></i> </span>
</div>
</div>
</div>

   
<div  v-show="others.length>0" style="margin:30px 0;" class="w-full flex flex-col gap-10 " >
<p class="text-center text-2xl " > Others </p>
  <div style="padding:12px 30px;" class="w-full flex flex-wrap gap-20 justify-center items-center">
<div v-for="item in others" :key="item.key"  style="padding:10px;width:160px;gap:5px;" class="flex flex-col  rounded-lg relative border-primary" >
<p class="w-full ellipsis" > {{item?.key?.split('/')[2]}} </p>
<span @click="downloadFile(item.view_url)" class=" image-download-icon  " > <i class="fa-solid fa-arrow-down text-xl text-white "></i> </span>
</div>
</div>
</div>


</div>

       </div>
    `,
    data(){
        return{
isLoader:false,
uploadList:[],
imageList:[],
documentList:[],
others:[],
        }
    },
     computed: {
isUserVerified() {  return this.$store.state.isUserVerified }
  },
    methods:{
async getUploadList(){
this.isLoader=true
     if(!this.isUserVerified){
    setTimeout(()=>{
        this.isLoader=false
this.$store.commit('change_section_visibility','verification-section')
    },3000)
    return
  }
    const result=await postApiCall('/upload_list',{userEmail:this.$store.state.userEmail,token:this.$store.state.userVerificationToken})

console.log("the result is",result)
    if(result.success){
    console.log("get upload list call was successful")
    this.fileList=result.responseData.url_list
    this.fileList.forEach(item=>{
const fileType=item.key.split('/')[1]  
console.log("the file type is",fileType)  
if(fileType=="image"){ this.imageList.push(item) }
else if(fileType=="application"){this.documentList.push(item)}
else{this.others.push(item)} 
   })
   this.isLoader=false
    return 
}
this.isLoader=false
console.log(" get api call was not successful! ")

},
 downloadFile(fileurl) {
      const url = fileurl 
      const a = document.createElement('a');
      a.href = url;
      a.download = ''; 
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    },
    created(){
        this.getUploadList()
        
    }


})