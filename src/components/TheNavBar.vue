<template>
  <div>
    <v-navigation-drawer v-model="drawer" :style="{'backgroundColor': '#050f31'}" dark absolute temporary>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              text-analysis &nbsp;
              <span class="caption">{{ version }}</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider/>
        <v-list-tile @click="onRouteClick('')">
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"/>
      <v-toolbar-title>
        <span :style="{'cursor':'pointer'}" @click="onRouteClick('')">text-analysis</span>
        &nbsp;
        <span class="caption">{{ version }}</span>
      </v-toolbar-title>
      <v-spacer/>
      <a href="https://github.com/ComeWllt/text-analysis" target="_blank">
        <v-avatar class="hidden-xs-only" :style="{'cursor':'pointer'}" size="30" flat>
          <img :src="githubLogo" alt="logo">
        </v-avatar>
      </a>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import pkg from '../../package.json';

@Component
export default class TheNavBar extends Vue {
  private githubLogo = require('@/assets/github-logo.png');
  private drawer: boolean = false;

  private onRouteClick(route: string): void {
    this.$router.push(`/${route}`);
  }
  get version(): string {
    return pkg.version;
  }
}
</script>

<style scoped>
</style>
