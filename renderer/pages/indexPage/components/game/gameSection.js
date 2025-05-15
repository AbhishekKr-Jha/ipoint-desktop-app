

Vue.component('game-component',{
    name:'game',
    template:`
    <div class="w-full " >

<iframe
  src="https://contact0-v1.netlify.app/"
  width="100%"
  height="500px"
  frameborder="2"
  allowfullscreen
  loading="lazy"
></iframe>

<connection-status-component v-show="isUserOnline" :visibility="true" ></connection-status-component>
    </div>
    `,
    computed:{
        isUserOnline(){ return this.$store.state.isUserOnline  }
    }
})