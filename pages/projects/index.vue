<template>
  <section>
    <v-layout class="info-row" row wrap>
      <v-flex xs12 md5>
        <v-alert :value="true" type="info">
          All projects on this website have been approved by their respective creators.
        </v-alert>
      </v-flex>
      <v-flex xs12 md1></v-flex>
      <v-flex xs12 md6>
          <v-text-field v-model="searchTerm" label="Search" @change="search"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout class="project-row" row wrap>
      <v-flex v-for="project in displayData" :key="project.id" class="project-item" xs12 md4>
        <project-display :project="project"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script src="./index.ts" lang="ts"/>
<style src="./index.scss" lang="scss" scoped/>