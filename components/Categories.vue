<template lang="html">
  <div class="">
      <create-category v-bind:categories="categories">

      </create-category>
      <list-categories v-bind:categories="categories"></list-categories>



  </div>
</template>

<script>

import ListCategories from './ListCategories.vue';
import Create from './NewCategory.vue';
import Edit from './EditCategory.vue';
//const NewCategory = { template: '<div>New</div>' }


export default {
  data : function () {
    return {
      categories: [
        {'id':0, 'category': 'Novaya Epoha'},
        {'id':1, 'category': 'Novaya Epoha II'}
      ],

    }
  },
  created: function() {

  },
  components: {
    'list-categories' : ListCategories,
    'create-category' : Create,
    'edit-category' : Edit
  }//,
  // methods: {
  //   deleteCategory: function(category, index){
  //     this.categories.splice(index, 1)
  //   },
  //   editCategory: function(category, index){
  //     this.edit_category.category = category.category;
  //     this.ref_edit_category = category;
  //   }
  // }
}
</script>
