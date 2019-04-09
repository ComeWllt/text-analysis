<template>
  <v-app>
    <TheNavBar class="d-inline-block elevation-12"/>
    <v-content>
      <keep-alive :include="['HomeView', 'PatchNotesView']">
        <router-view/>
      </keep-alive>
    </v-content>
    <TheFooter/>
    <ErrorSnackBar/>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TheNavBar from '@/components/TheNavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
import ErrorSnackBar from '@/components/ErrorSnackBar.vue';

@Component({
  components: {
    TheNavBar,
    TheFooter,
    ErrorSnackBar,
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica Neue, sans-serif;
  background-color: #f5f6f8;
}
</style>
