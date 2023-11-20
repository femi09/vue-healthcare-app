<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/"
          >Healthcare Application</RouterLink
        >
        <div class="" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="navbar-brand" to="/patients">Patients</RouterLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
  <RouterView />
</template>
