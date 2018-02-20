<template lang="html">
  <div class="">
      <h1>Categories</h1>
      <table>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Remove</th>
          <th>Edit</th>
        </tr>
        <tr v-for="(category, index) in categories">
          <td>{{ index }}</td>
          <td>{{ category.category }}</td>
          <td><button v-on:click="deleteCategory(category, index)">X</button></td>
          <td><button v-on:click="editCategory(category, index)" v-b-modal.modal1>edit</button></td>
        </tr>
      </table>

      <edit-category v-bind:showEditModal="showEditModal" v-bind:edit_category="edit_category" v-bind:ref_edit_category="ref_edit_category">>

      </edit-category>
  </div>
</template>

<script>

import Create from './NewCategory.vue';
import Edit from './EditCategory.vue';
//const NewCategory = { template: '<div>New</div>' }


export default {
  props:[
    'categories'
  ],
  data : function () {
    return {
      // categories: [
      //   {'id':0, 'category': 'Novaya Epoha'},
      //   {'id':1, 'category': 'Novaya Epoha II'}
      // ],
      edit_category: {'id':'', 'category': ''},
      ref_edit_category: {'id':'', 'category': ''},
      showEditModal: false

    }
  },
  created: function() {

  },
  components: {
    'create-category' : Create,
    'edit-category' : Edit
  },
  methods: {
    deleteCategory: function(category, index){
      this.categories.splice(index, 1)
    },
    editCategory: function(category, index){
      this.edit_category.category = category.category;
      this.ref_edit_category = category;
    }
  }
}
</script>
