<template>
  <div id="mail">
    <div class="main-container">
      <div id="bg">
        <div class="image"></div>
      </div>
      <div class="div-title">
        <p class="is-size-5" style="text-align: center;">
        <i class="fas fa-campground"></i> &nbsp; Portfolio
        </p>
        <p class="is-size-1" style="margin-top: 100px;text-align: center;">
          <i class="fas fa-envelope"></i> Contact Me.
        </p>
        <p class="has-text-white" style="text-align: center;">
          You can write me an email directlty here.
        </p>
      </div>

      <div class="sender-item container">
        <form>
        <div class="field">
            <label class="title is-4 has-text-white" for="address">
              &nbsp; Who are you ?
            </label>
            <br><br>
            <input class="input has-text-white" placeholder="example@test.com" type="email" style="margin-left: 5px;">
          </div>
          <div class="field">
            <label class="title is-4 has-text-white" for="content">
              &nbsp; Write your mail Object.
            </label>
            <br><br>
            <input class="input has-text-white" placeholder="Object." type="text" style="margin-left: 5px;">
          </div>
          <div class="field">
            <label class="title is-4 has-text-white" for="content">
              &nbsp; Type your content here.
            </label>
            <br><br>
            <div id="content">
              <ckeditor :editor="editor" :config="config"></ckeditor>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./mail.view.ts"></script>
<style src="./mail.view.scss" lang="scss"></style>