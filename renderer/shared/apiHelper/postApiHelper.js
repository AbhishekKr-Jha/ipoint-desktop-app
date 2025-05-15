

const axios=require('axios')

const baseUrl='http://localhost:3000/api/v1'

const postApiCall=async(url,data,headers={})=>{
try {
const mainUrl=baseUrl+url
  const response=await axios.post(mainUrl,data,{headers})
  console.log(`the post-api-call of '${url}'  is successful`,response?.data) 
    return {
        responseData:response?.data,
        success:true
    }

} catch (error) {
    console.log(error)
    return{
        responseData:null,
        errorMessage:error.response?.data.message || null,
        success:false
    }
}
}


module.exports=postApiCall