<template lang="html">
  <div class="">
    <table>
      <tr>
        <th>name</th>
        <th>email</th>
        <th>website</th>
        <th>phone</th>
        <th>profile</th>
      </tr>
      <tr v-for="(user, index) in users">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.website }}</td>
        <td><router-link :to="{name: 'profile', params:{'name':user.name}}">profile</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: function(){
    return {
      users: [
        {'name': 'Igor', 'email': 'igor@mail.ru', 'phone': '89059414141', 'website': 'http://ya.ru'},
        {'name': 'Sergey', 'email': 'igor@mail.ru', 'phone': '89059414141'},
        {'name': 'Eduard', 'email': 'igor@mail.ru', 'phone': '89059414141'},
        {'name': 'Tom', 'email': 'Tom@mail.ru', 'phone': '89059414141'},
      ],

    }
  },
  mounted() {
    // console.log('mounted')
    // var self = this
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //      .then(({ data })=> {
    //       	console.log(data);
    // });
  }
}
</script>

<style lang="css">
</style>
