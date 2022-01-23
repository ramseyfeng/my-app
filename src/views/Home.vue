<template>
  <div class="home">
    <div class="font-weight-bold">应用列表 （404500）</div>

    <v-tabs class="my-2 border-bottom">
      <v-tab>已安装（123）</v-tab>
      <v-tab>带安装（234）</v-tab>
      <v-tab>待升级/更新（456）</v-tab>
      <v-tab>全部（7890）</v-tab>
    </v-tabs>
    <v-data-table
        :headers="dessertHeaders"
        :items="desserts"
        show-select
        :expanded.sync="expanded"
        item-key="name"
        show-expand
    >
      <template v-slot:top>

        <v-toolbar flat class="align-center" elevation="0">
          <v-text-field
              outlined
              label="关键字"
              prepend-inner-icon="mdi-magnify"
              dense
              hide-details
              class="mr-3 mw-236"
          ></v-text-field>

          <v-text-field
              outlined
              label="查找日期"
              prepend-inner-icon="mdi-calendar"
              dense
              hide-details
              class="mw-236"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn color="primary" class="rounded-0">添加新应用</v-btn>

        </v-toolbar>

      </template>
      <template v-slot:item.runningStatus="{ item }">
        <v-chip
            :color="getColor(item.runningStatus)"
            dark
          v-text="item.runningStatus < 200 ? 'Active': 'Inactive'"
        >
        </v-chip>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td></td>
        <td></td>
        <td
            class="text-no-wrap expand-name-column"
        >
          <v-list-item three-line>
            <v-list-item-avatar
                tile
                size="80"
                color="grey"
                class="align-self-center"
            ></v-list-item-avatar>
            <v-list-item-content>
              <div class="text-overline mb-2">
                OVERLINE
              </div>

              <v-list-item-subtitle>Greyhound divisely {{item.name}}</v-list-item-subtitle>
              <v-list-item-subtitle>second sample {{headers.length}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </td>
        <td>
          <v-checkbox></v-checkbox>
        </td>
      </template>
    </v-data-table>

  </div>

</template>

<script>
// @ is an alias to /src

import {headers, rowData} from "@/mocks/applications";

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      tab: null,
      items: [
        'web', 'shopping', 'videos', 'images', 'news',
      ],
      expanded: [],
      dessertHeaders: headers,
      desserts: rowData,
    }
  },
  methods: {
    getColor (runningStatus) {
      return runningStatus < 200 ? '#2ECC71': '#BDC3C7';
    },
  },
}
</script>
<style>
.border-bottom {
  border-bottom: 1px solid silver;
}
.mw-236 {
  max-width: 236px;
}
.expand-name-column {
  width: 261px;
}
</style>
