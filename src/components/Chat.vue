<template>
    <div class="chat container">
        <h1 class="center teal-text"> wa7gh chat: {{this.name}}</h1>
        <div class="card">
          <div class="card-content">
            <ul class="messages">
              <li>
                <span class="teal-text">Name</span>
                <span class="gray-text text-darken-3">messages</span>
                <span class="gray-text time">time</span>
              </li>
            </ul>
          </div>
          <div class="card-action">
            <NewMessages :name ="name"/>
           
          </div>
        </div>
    </div>
</template>


<script>
import NewMessages from '@/components/NewMessages'
export default {
  name: 'Chat',
  props: ['name'],
  components: {
  NewMessages
  },
  data () {
    return {
     
    }
  }
  }

</script>

<style >
.chat h2{
font-size: 2.6em;
margin-bottom: 40px;
}
.chat span{
  font-size: 1.4em;
}
.chat .time{
  display: block;
  font-size: 1.2em;
}

</style>