
// const path=require('path')
const postApiCall = require(path.join(__dirname,'../..','shared/apiHelper/postApiHelper.js')) 
const putApiCall = require(path.join(__dirname,'../..','shared/apiHelper/putApiHelper.js')) 
// console.log("---->>>",postApiCall)

Vue.component('upload-component',{
    name:'upload-section',
    template:`
    <div  style="z-index:50;" class="w-full  " >

    <loader-component v-show="isLoader" message="Uploading file..."  ></loader-component>

<div v-show="!isLoader" class="w-full  flex  flex-col gap-30  items-center" >
    <h2  class=" mt-120 text-5xl  ">Upload the file </h2>

    <input ref="file_upload" @change="handleFileUploadInput" type="file" class="hidden">

<div class="w-full flex flex-col items-center justify-center gap-10 " >
<div @click="getUploadFile" class="rounded-lg pointer rounded-full flex items-center justify-center upload-icon" >
 <svg viewBox="0 0 640 512" fill="white" height="100px" xmlns="http://www.w3.org/2000/svg"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg>
</div>
<p style="width:400px;" class="text-lg text-center ellipsis " >{{fileName}}</p>
</div>

<button v-show="fileData" type="button" class="button" @click="handleFileUpload" > Upload </button>

</div>


    </div>
    `,
  data(){
    return{
      fileData:null,
isLoader:false,
fileName:''
    } 
  },
    computed:{
isUserVerified(){ return this.$store.state.isUserVerified }
    },
   methods:{
  getUploadFile(){
    this.$refs.file_upload.click()
    // console.log("the ref value is ",this.$refs.file_upload.click())
  },
  handleFileUploadInput(e){
    this.fileData=e.target.files[0]
    this.fileName=e.target.files[0].name
// console.log("the file value is",)
  },
  async preSignedUrlUpload(apiUrl){
const result=await putApiCall(apiUrl,this.fileData)
if(result.success){
  this.isLoader=false
  this.fileName=null
  this.fileData=null
  console.log("file upload was successful")
  return
}
  this.isLoader=false
console.log("presigned url upload was not successful")
  },
 async handleFileUpload(){
    this.isLoader=true
  if(!this.isUserVerified){
    this.$store.commit('change_section_visibility','verification-section')
    return
  }

const result=await postApiCall('/upload_url',{userEmail:this.$store.state.userEmail,fileName:this.fileData.name,fileType:this.fileData.type.split('/')[0],contentType:this.fileData.type})
if(result.success){ 
  
  console.log("the presiged url is",result.responseData)
await this.preSignedUrlUpload(result.responseData.presigned_url)
  return
}  
  this.isLoader=false
console.log("error occured in post-api-call-upload due to",response.errorMessage || "File upload error!")
}

   }, 
    created(){
        console.log("the upload-section is in the active view state")
       
    }
})   