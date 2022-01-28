<template>
    <div id="loader">
        <lottie-animation
            ref="anim"
            :loop="true"
            :autoPlay="true"
            style="width: 380px;"
            :animationData="require('@/assets/loading-2.json')"
            />
    </div>
</template>
<script src="./loader.component.ts" lang="ts"></script>
<style src="./loader.component.scss" lang="scss"></style>