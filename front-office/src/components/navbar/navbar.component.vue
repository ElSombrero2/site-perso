<template>
  <div id="navbar">
    <div>
      <i class="fab fa-fly"></i>
    </div>
    <div class="separator"></div>
    <div class="menu" ref="menu">
      <div class="cursor" ref="cursor"></div>
      <div class="items" ref="items">
        <div class="item" @click="slide(1, '/')">
          <i class="fas fa-swatchbook"></i>
        </div>
        <div class="item" @click="slide(2, '/project')">
          <i class="fas fa-project-diagram"></i>
        </div>
        <div class="item" @click="slide(3, '/code/0')">
          <i class="fas fa-code"></i>
        </div>
        <div class="item" @click="slide(4, '/email', )">
          <i class="fas fa-envelope"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./navbar.component.ts"></script>
<style src="./navbar.component.scss" lang="scss"></style>