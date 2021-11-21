<template>
  <div id="app">
    <b-container>
      <b-nav>
        <b-nav-item :to="{ name: 'Todos' }"> Listado de TODOS </b-nav-item>
        <b-nav-item :to="{ name: 'TodosCreate' }">Crear TODO</b-nav-item>
      </b-nav>
      
      <router-view/>
    </b-container>
  </div>
</template>