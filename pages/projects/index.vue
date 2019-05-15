<template>
  <section>
    <v-layout row>
      <v-flex xs12 md12>
        <v-toolbar>
          <v-text-field v-model="searchTerm" label="Search" @change="search"></v-text-field>
        </v-toolbar>
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