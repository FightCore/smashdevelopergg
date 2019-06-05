<template>
  <v-layout row>
    <v-flex xs12 md12>
      <div class="container">
        <div class="display-3">APIs</div>
        <v-data-table :headers="headers" :items="desserts" class="elevation-1">
          <template v-slot:items="props">
            <td>
              <div class="title font-weight-black">{{ props.item.name }}</div>
            </td>
            <td>
              <div class="subheading">
              {{ props.item.maintainer }}
              </div>
              </td>
            <td>{{ props.item.game }}</td>
            <td>{{ props.item.description }}</td>
            <td>
              <v-btn
                class="source-button"
                v-bind:href="props.item.sourceLink"
                v-if="props.item.openSource"
                color="info"
              >
                <fa class="source-button-icon" :icon="['fab', 'github']"/>Source code
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script src="./index.ts" lang="ts"/>
<style src="./index.scss" lang="scss" scoped/>