<template lang="html">
  <div class="">

    <!-- Modal Component -->
    <b-modal id="modal1" title="Bootstrap-Vue" @ok="handleOk">
      <p class="my-4">Edit category!</p>
      <form class="" action="index.html" method="post">
        <b-form-group id="cat" description="category" label="New category:" label-for="category"
                      :invalid-feedback="invalidFeedback"
                      :valid-feedback="validFeedback"
                      :state="state"
        >
          <b-form-input id="category" :state="state" v-model.trim="edit_category.category"></b-form-input>
        </b-form-group>
        <!-- <b-button  variant="success" :disabled="!state" v-on:click="updateCategory()">
            update
        </b-button> -->
      </form>
    </b-modal>
  </div>


</template>

<script>
export default {
  props: [
    'showEditModal',
    'edit_category',
    'ref_edit_category'
  ],
  computed: {
    state(){
      return this.edit_category.category.length >= 4 ? true : false;
    },
    invalidFeedback(){
      if(this.edit_category.category.length > 4) {
        return ''
      }
      else if(this.edit_category.category.length > 0) {
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
    handleOk (evt) {
      // Prevent modal from closing

      this.ref_edit_category.category = this.edit_category.category

    },
    updateCategory(){
      console.log("update");
    }
  }

}
</script>

<style lang="css">
</style>
