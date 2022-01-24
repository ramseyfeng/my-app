<template>
  <v-app>
    <SideBar></SideBar>
<!--    <v-navigation-drawer-->
<!--        temporary-->
<!--        v-model="drawer"-->
<!--        :mini-variant="mini"-->
<!--        permanent-->
<!--        app-->
<!--        hide-overlay-->
<!--    >-->
<!--      <v-list-item class="px-2">-->
<!--        <v-btn icon @click.stop="mini = !mini">-->
<!--          <v-icon color="blue">{{ mini ? 'mdi-menu' : 'mdi-close' }}</v-icon>-->
<!--        </v-btn>-->
<!--        <v-list-item-title class="px-2 text-center blue&#45;&#45;text font-weight-bold">某市地方医院</v-list-item-title>-->
<!--      </v-list-item>-->

<!--      <v-list dense>-->
<!--        <v-list-item-->
<!--            v-for="item in items"-->
<!--            :key="item.title"-->
<!--            link-->
<!--        >-->
<!--          <v-list-item-icon>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-icon>-->

<!--          <v-list-item-content>-->
<!--            <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

    <v-main class="white">
      <div class="wrapper flex-column">
        <v-app-bar elevation="0" color="white" class="px-3 font-weight-bold py-2 flex-grow-0">

          <v-toolbar-title class="blue--text">本地控制台</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon color="blue">mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon class="mr-2">
            <v-icon color="blue">mdi-bell-outline</v-icon>
          </v-btn>
          <v-avatar
              color="primary"
              size="36"
          >SW</v-avatar>
        </v-app-bar>
        <!-- If using vue-router -->
        <router-view class="px-6 py-6"></router-view>
      </div>

      <!-- Provides the application the proper gutter -->
      <!--      <v-container></v-container>-->
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar";
export default {
  components: {SideBar},
  data() {
    // return {
    //   drawer: true,
    //   items: [
    //     {title: 'Home', icon: 'mdi-home-city'},
    //     {title: 'My Account', icon: 'mdi-account'},
    //     {title: 'Users', icon: 'mdi-account-group-outline'},
    //   ],
    //   mini: true,
    // }
  },
}
</script>

<style lang="scss">
.wrapper {
  padding-left: 66px;
}
</style>
