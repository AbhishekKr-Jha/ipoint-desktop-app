

Vue.component('share-component',{
    name:'share-section',
    template:`
        <div style="padding:15px ;" class="w-screen-80 h-80 bg-red  flex gap-20 items-center justify-center rounded-lg overflow-hidden inner-modal-component "  >


<div class="w-full flex flex-col items-center  justify-center gap-20" >

<input type="text" :value="userEmail" class="input " placeholder="Your Email"  >
<input type="text" v-model="receiverEmail" class="input " placeholder="Share to ..."  >
<input type="text"  v-model="title" class="input " placeholder="Title"  >
<input type="text" v-model="message" class="input " placeholder="Add a note"  >


<!-- files section  -->
<div class="w-90" >
<p class="font-medium text-lg">Files: </p>

<!-- ----------- preview files container ------------ -->
<div class="w-90 mt-20 flex justify-start gap-20 relative" >
 
<div class="flex " >
<div style="background-color:white;" v-for="(file,index) in fileList" :key="file.name" class="relative rounded-lg share-file-box-preview" :class="file.type.split('/')[0]!=='image' && 'border' " > 
<p  v-if="file.type.split('/')[0]!=='image' "  class="text " > .{{file.name.split('.')[1]}} </p>
<img v-if="file.type.split('/')[0]==='image' " class="w-full h-full rounded-lg object-fit-contain "  :src="file?.preview"  alt="load...">
<span @click="handleUnselectFile(index)" style="top:-10px;left:-10px;width:25px;height:25px;" class="absolute pointer bg-white rounded-full flex items-center justify-center" > <i class="fa-solid fa-xmark text-lg text-primary"></i> </span>
</div>

</div>

<input type="file" ref="inputFile"  @change="handleFileInput" class="hidden" >


<!--  ----------add files button --------------- -->
<div @click="$refs.inputFile.click()" class="pointer share-file-box-preview" > 
<i style="font-size:30px;" class=" fa-solid fa-plus text-white "></i>
</div>

<!-- ------------------share files button ----------------- -->
<div @click="handleFileShare" style="width:35px;height:35px;" class="absolute top-50 right-0 pointer bg-white rounded-full flex items-center justify-center ">
<i class="fa-solid fa-paper-plane text-primary text-3xl "></i>
</div>


</div>

</div>

    </div>
        </div>
    `,
    data(){
       return{
        //  userEmail:null,
        // receiverEmail:'abhishekhp935@gmail.com',
        // receiverEmail:'fidekim530@daupload.com',
        receiverEmail:'japexe5958@daupload.com',
        title:"hello", 
        message:null,
        fileList:[],
    verificationToken:null,
    testFile:[],
    testPreviewUrl:null
       }
    },
    computed:{
userEmail(){ return this.$store.state.userEmail },
userVerificationToken(){ return this.$store.state.userVerificationToken }
    },
    methods:{
handleFileInput(e){
    console.log("helo---------- ",typeof e.target.files[0])
    // let selectedFile={...e.target.files[0] ,preview:URL.createObjectURL(e.target.files[0])}
    let selectedFile=e.target.files[0] 
    selectedFile.preview=URL.createObjectURL(e.target.files[0])
    console.log("the value is",selectedFile.type)
    this.fileList.push(selectedFile)
e.target.files=null
},
handleUnselectFile(fileIndex){
    this.fileList=this.fileList.filter((item,index)=>index!==fileIndex) || []
},
async handleFileShare(){
    const formData=new FormData()
formData.append('token', this.userVerificationToken);    
formData.append('userEmail', this.userEmail); 
formData.append('receiverEmail', this.receiverEmail);
formData.append('title', this.title); 
formData.append('message', this.message);
this.fileList.forEach(item=>formData.append('sharedFile',item))
    const result=await postApiCall('/send_file_input',formData,headers={'Content-Type': 'multipart/form-data'})
    if(result.success){
console.log("the successful result",result.responseData.message)
        return
    }
    console.log("the error is",result.errorMessage || "Server is facing some issues! Try after some time.")
}

    },
    created() {
        // const userData=JSON.parse(localStorage.getItem('userData'))
        // this.userEmail=userData?.userEmail  || null
        // this.verificationToken=userData?.userVerificationToken  || null 
    },
})