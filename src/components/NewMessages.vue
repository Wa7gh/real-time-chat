<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to Add)</label>
            <input type="text" name="new-message" v-model="newMessage">
        </form>

        </div>
</template>

<script>
import NewMessages from '@/components/NewMessages'
export default {
  name: 'NewMessages',
  props: ['name'],
 
  data () {
    return {
     newMessage: null
    }
  }, 
  methods:{
      addMessage(){
          console.log(this.newMessage, this.name, Date.now());
          
      }
  }
  }

</script>