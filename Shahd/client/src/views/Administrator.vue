<template>
  <div class="administrator">
    <Form @nextPage="nextPage" />
  </div>
</template>

<script>
import Form from '../components/AdminForm-Table.vue'
//import Table from '../components/AdminTable.vue'
import store from '@/store'

export default {
  name: 'AdminForm',
  components: {
    //Table,
    Form
  },
  methods: {
    nextPage(id, role, name) {
      if (role === 'giver' || role === 'كفيل') {
        this.$router.push({ name: 'Giver', params: { name } })
        store.state.giverId = id
        console.log(id)

      }
      else if (role === 'طالب علم' || role === 'طالب ذو احتياجات خاصة' || role === 'فقير' || role === 'يتيم') {
        this.$router.push({ name: 'Receiver', params: { name } })
        store.state.receiverId = id
        console.log(role)
        store.state.role = role
      }
    }
  },
}
</script>


<style>

</style>
