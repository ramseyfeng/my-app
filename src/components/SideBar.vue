<template>
  <v-navigation-drawer
      temporary
      v-model="drawer"
      app
      :mini-variant="mini"
      permanent
      hide-overlay>
    <v-list-item class="px-2">
      <v-btn icon @click.stop="mini = !mini">
        <v-icon color="blue">{{ mini ? 'mdi-menu' : 'mdi-close' }}</v-icon>
      </v-btn>
      <v-list-item-title class="px-2 text-center blue&#45;&#45;text font-weight-bold">某市地方医院</v-list-item-title>
    </v-list-item>
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <v-list-group
          prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
            no-action
            sub-group
        >
          <template v-slot:activator>
            <v-list-item-title>Admin</v-list-item-title>
          </template>

          <v-list-item
              link
          >
            <v-list-item-title v-text="'Management'"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="'mdi-account-multiple-outline'"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <!-- <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant="mini"
      permanent
      app
      hide-overlay
  >

    <v-list-item class="px-2">
      <v-btn icon @click.stop="mini = !mini">
        <v-icon color="blue">{{ mini ? 'mdi-menu' : 'mdi-close' }}</v-icon>
      </v-btn>
      <v-list-item-title class="px-2 text-center blue&#45;&#45;text font-weight-bold">某市地方医院</v-list-item-title>
    </v-list-item>

    <v-list dense>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> -->
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      drawer: true,
      items: [
        {title: 'Home', icon: 'mdi-home-city'},
        {title: 'My Account', icon: 'mdi-account'},
        {title: 'Users', icon: 'mdi-account-group-outline'},
      ],
      mini: true,
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }
  }
}
</script>
<style scoped>

</style>