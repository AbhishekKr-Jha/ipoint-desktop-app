
// const baseUrl='http://localhost:5000/api/v1'
const axios=require('axios')

const putApiCall=async(url,data,headers={})=>{
try {
    const response=await axios.put(url,data,{headers})
      console.log(`the put-api-call of '${url}'  is successful`,response?.data) 
  return {
        responseData:response.data,
        success:true
    }

} catch (error) {
     console.log(error)
    return{
        responseData:null,
        errorMessage:error.response?.data?.message || null,
        success:false
    }
}
}


module.exports=putApiCall