<template>
  <div id="home">
    <div class="main-container">
      <div id="bg">
        <div class="image"></div>
      </div>
      <div class="div-title">
        <p class="is-size-5" style="text-align: center;">
        <i class="fas fa-campground"></i> &nbsp; Portfolio
        </p>
        <p class="is-size-1" style="margin-top: 100px;text-align: center;">
          <i class="fas fa-swatchbook"></i> About Me.
        </p>
        <p class="has-text-white" style="text-align: center;">
          Who am I and what am I doing ?
        </p>
      </div>
      <Profile />
      <Graduation/>
    </div>
  </div>
</template>
<script lang="ts" src="./home.view.ts"></script>
<style src="./home.view.scss" lang="scss"></style>