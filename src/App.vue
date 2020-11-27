<template>
  <div id="app">

    <div class="page-wrapper">
        <NavBar />
        <!-- END HEADER DESKTOP-->

        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">

            <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">Titre de la section
                            </h1>
                            <hr class="line-seprate">
                        </div>
                    </div>
                </div>
            </section>
            <!-- END WELCOME-->


            <!-- Content -->
            <section class="container">

                 <router-view></router-view>

            </section>
            <!-- END STATISTIC CHART-->


        </div>

    </div>




  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
      NavBar
  }
}
</script>

<style>

</style>
