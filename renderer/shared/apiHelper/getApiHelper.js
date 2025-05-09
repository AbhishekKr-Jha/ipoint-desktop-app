
const axios=require('axios')


const getApiCall=async({url,baseUrl=null,headers={}})=>{
try {
const mainUrl=baseUrl?`${baseUrl}${url}`:url
    const response=await axios.get(mainUrl,{headers})
// console.log("the get api call is successful",response?.data)
    return {
        responseData:response.data,
        success:true
    }

} catch (error) {
    console.log("somethging went wrong inn get api call",error)
    return{
        responseData:null,
        errorMessage:error.response?.data.message || null,
        success:false
    }
}


}


module.exports=getApiCall