<template>
  <header class="header-desktop3 d-none d-lg-block">
      <div class="section__content section__content--p35">
          <div class="header3-wrap">
              <div class="header__logo">
                  <a href="#">
                      <img src="@/assets/images/icon/logo-white.png" alt="CoolAdmin" />
                  </a>
              </div>
              <div class="header__navbar">
                  <ul class="list-unstyled">

                      <li>

                              <router-link  to="/books">
                                  <i class="fas fa-book"></i>
                                  <span class="bot-line"></span>Livres
                              </router-link>
                      </li>
                      <li>
                           <router-link  to="/genres">
                              <i class="fas fa-copy"></i>
                              <span class="bot-line"></span>Genre
                            </router-link>
                      </li>
                      <li>
                            <router-link  to="/admin">
                              <i class="fas fa-cogs"></i>
                              <span class="bot-line"></span>Admin
                            </router-link>

                      </li>
                  </ul>
              </div>

          </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

</style>
