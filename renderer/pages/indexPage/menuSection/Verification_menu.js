// const path=require('path')
// console.log(path.join(__dirname,'../../shared/apiHelper/getApiHelper.js'))
// const getApiCall = require(path.join(__dirname,'../../shared/apiHelper/getApiHelper.js'));


// const postApiCall = require("../../../shared/apiHelper/postApiHelper");

// const getApiCall = require("../../../shared/apiHelper/getApiHelper")

Vue.component("verification-component", {
  name: "verification-section",
  template: `
    <div   style="z-index:50;" class="w-full relative  flex  flex-col gap-30  items-center " >

    <loader-component v-show="isLoader" :message="message" ></loader-component>


    <h2 v-show="!isLoader"  class=" mt-120 text-5xl  ">User Verification </h2>

<div v-show="!isLoader && !isOtpInputVisible" class="w-full flex flex-col items-center gap-30 " >
<input type="text" v-model="email" class="input "  :style="isUserVerified && {backgroundColor:'rgba(181, 178, 178,0.5)'} " placeholder="Your Email" :disabled="isUserVerified" >
    <button type="button" v-show="!isUserVerified " @click="requestOtpHandler" class=" button" >Continue </button>
  <button type="button" v-show="isUserVerified " @click="changeUser" class=" button" >Change Email </button>

</div>


  <!-- ----- otp input section ---- -->
<div v-show="!isLoader && isOtpInputVisible" class="w-full flex flex-col items-center gap-30 " >
<input type="text" v-model="otp" class="input " placeholder=" Enter 6 digit OTP"  >
    <button type="button" @click="verifyOtpHandler" class=" button" >Verify OTP </button>
</div>

<p  style="color:red;display:none;" class="text-base" >Please enter the 6 digit otp</p>



    </div>
    `,
  data() {
    return {
      changeUserEmail:null,
      isOtpInputVisible: false,
      email: 'akjha4127@gmail.com',
      otp: null,
      isLoader: false,
      token:null,
      message:"Requesting otp..."
    };
  },
  computed: {
isUserVerified() {  return this.$store.state.isUserVerified }
  },
  methods: {
    async requestOtpHandler() {
      this.isLoader=true
      const result=await postApiCall('/request_otp',{userEmail:this.email})
      this.isLoader=false
      if(result.success){
this.isOtpInputVisible=true 
this.otp=result.responseData.otp
this.token=result.responseData.token
this.message="Verifying otp..."
        return
      }
      console.log("the error in request otp is",result.errorMessage)
    },
    
    async verifyOtpHandler() {
      this.isLoader=true
      const result=await postApiCall('/verify_otp',{otp:this.otp,token:this.token,userEmail:this.email})
   this.isLoader=false
      if(result.success){
        console.log("the api call is successful",this.email)
        this.otp=null
        this.token=null
        this.$store.commit('changeUserVerificationStatus',{email:this.email,token:result.responseData.verification_token,user:true})
    this.$store.commit('change_section_visibility','search-section')
        this.isOtpInputVisible=false
        return 
    }
    console.log("the error in verify otp is",result.errorMessage || "Can not be verified!")
    },
    changeUser(){
this.$store.commit('changeUserVerificationStatus',{email:null,token:null,user:false})
    }
  },

  created() {
    this.changeUserEmail= !this.isUserVerified
    console.log("the verificatuon section is opend now");
  }
});
