<template lang="html">
  <div class="">
    <h1>Create category</h1>
    <form class="" action="index.html" method="post">
      <b-form-group id="cat" description="category" label="New category:" label-for="category"
                    :invalid-feedback="invalidFeedback"
                    :valid-feedback="validFeedback"
                    :state="state"
      >
        <b-form-input id="category" :state="state" v-model.trim="category"></b-form-input>
      </b-form-group>
      <b-button  variant="success" :disabled="!state" v-on:click="createCategory()">
          submit
      </b-button>
    </form>
  </div>
</template>

<script>

export default {
  props: [
    'categories'
  ],
  computed: {
    state(){
      return this.category.length >= 4 ? true : false;
    },
    invalidFeedback(){
      if(this.category.length > 4) {
        return ''
      }
      else if(this.category.length > 0) {
        return 'Enter at least 4 characters'
      }
      else {
        return 'Please enter something'
      }
    },
    validFeedback(){
      return this.state === true ? 'Tnank you' : ''
    }
  },
  data(){
    return {
      category: ''
    }
  },
  methods: {
    createCategory: function (event) {
    //  console.log(this.categories);
      this.categories.push({'id':10, 'category': this.category});

    }
  }
}
</script>
