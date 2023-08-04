<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/animais">Animal</router-link>
    <router-link to="/clientes">Cliente</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
