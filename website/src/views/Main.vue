<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height: 100vh" :default-active="$route.path" router>
        <el-submenu v-for="(item, index) in menu.items"
          :index= "`menu-item-${index}`"
          :key="`menu-item-${index}`">
          <template slot="title">{{item.title}}</template>
          <el-menu-item 
          v-for="(subItem, subIndex) in item.items"
          :key="`menu-item-${index}-${subIndex}`"
            :index="subItem.path">
              {{subItem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
      
    </el-aside>
    <el-container>
      <el-header height="">
        系统后台管理
        <!-- Header content -->
      </el-header>
      <el-main height="">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: '项目管理',
        items: [
          {title:'国际免午',path:'/projects/lfc'},
          {title:'助学金',path:'/projects/list'},
        ]
      },
       {
        title: '账户管理',
        items: [
          {title:'机构用户',path:'/users/list'},
          {title:'其他用户',path:'/users/list'},
        ]
      }
    ]
  }
}
</script>

<style>
body{
  margin: 0;
}
</style>