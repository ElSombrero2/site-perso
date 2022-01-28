<template>
    <div id="code">
        <div class="main-container">
            <div id="bg">
                <div class="image"></div>
            </div>
            <div class="div-title">
                <p class="is-size-5" style="text-align: center;">
                <i class="fas fa-campground"></i> &nbsp; Portfolio
                </p>
                <p class="is-size-1" style="margin-top: 50px;text-align: center;">
                    <i class="fab fa-fly"></i> Skill.
                </p>
                <p class="has-text-white" style="text-align: center;">
                    My Skill in Differents Technologies.
                </p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="glass-card">
                            <div ref="glass" class="glass-content">
                                <p :class="{'has-text-grey': true, 'description': true, 'hide': !show}">
                                    <img :src="require('../../assets/' + selected.logo)" style="float: left;width: 100px;margin: 10px;">
                                    <span class="title is-4 has-text-white" style="position: relative; top: 7px;">{{selected.name}}</span>
                                    <br><br>
                                    {{selected.description}}
                                </p>
                                <div>
                                    <a class="has-text-success" @click="toogle()">
                                        {{!show ? 'Read more...' : 'Hide'}}
                                    </a>
                                </div>
                                <div style="position: relative; margin-top: 10px;right: 0;">
                                        <strong class="has-text-white">Skill ({{selected.level}}/5) : </strong>
                                        <span>
                                            <progress style="width: 150px;" class="progress is-primary is-small" :value="(selected.level / 5 )* 100" max="100">
                                            </progress>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 cards">
                        <div class="row">
                            <div @click="changeItem(item)" class="custom-card col-sm-4" v-for="item in [...langage.default, ...langage.main]" :key="item.name">
                                <div class="row">
                                    <div class="col-sm-6 image">
                                        <img :src="require('../../assets/' + item.logo)" />
                                    </div>
                                    <div class="col-sm-6 text">
                                        <strong class="has-text-white">{{item.name}}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="float: right; position: relative; right: 25px;bottom: 45px;">
                    <router-link class="has-text-success" style="margin: 10px;" :to="'/code/' + prevIndex()">Previous</router-link>
                    <router-link class="has-text-success" style="margin: 10px;" :to="'/code/' + nextIndex()">Next</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./code.view.ts" lang="ts"></script>
<style src="./code.view.scss" lang="scss"></style>