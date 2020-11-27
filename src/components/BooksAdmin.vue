<template>
  <section class="container mt-5">
    <div class='row text-center'>
        <div class="col-6">
            <div class="card border-info mb-3" style="max-width: 18rem;">
              <div class="card-header">Books</div>
              <div class="card-body text-info">
                <button type="button" class="btn btn-info btn-lg btn-block" @click="gotoAdminPage('adminBooksEditAndCreate')">➕ Créer</button>
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="gotoAdminPage('adminBooksList')">🖊 Editer</button>
              </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card border-info mb-3" style="max-width: 18rem;">
              <div class="card-header">Genres</div>
              <div class="card-body text-info">
                <button type="button" class="btn btn-info btn-lg btn-block" @click="gotoAdminPage('createBooks')">➕  Créer</button>
                <button type="button" class="btn btn-primary btn-lg btn-block" @click="gotoAdminPage('createBooks')"> 🖊Editer</button>
              </div>
            </div>
        </div>




    </div>






  </section>
</template>

<script>
export default {
  name: 'BooksAdmin',
  methods:{
      gotoAdminPage(routeName){
          this.$router.push({ name:routeName})
      }
  }
}
</script>

<style scoped>

</style>
