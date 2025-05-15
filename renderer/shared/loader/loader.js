


Vue.component('loader-component',{
    template:`
    <div class="w-full h-min flex flex-col justify-center items-center gap-20 bg-transparent " > 
        <div class="three-body  ">
<div class="three-body__dot"></div>
<div class="three-body__dot"></div>
<div class="three-body__dot"></div>
</div>
<p class=" text-2xl" >{{message || ''}}</p>

</div>
`,
props:{
    message:String
}
})
