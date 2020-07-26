<template>
<div>
   <h3>国际免午项目</h3>
  <avue-crud :data="data.data" 
  :option= "option"
  @row-save= "create"
  @row-update= "update"
  @row-del = "remove"
  ></avue-crud>
</div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class LFC extends Vue{
  data={};
  
  option = {
    column: [
      {prop:"stuName", label: "姓名"},
      {prop:"stuAge", label: "年龄"},
      {prop:"stuClass", label: "班级"}
    ]
  }

    async create (row,done,loading ){
    await this.$http.post('stuinfo', row)
    this.$message.success("创建成功")
    this.fetch()
    done()
    loading()
  }

  async update (row,index,done,loading){
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`stuinfo/${row._id}`,data)
    this.$message.success("更新成功")
    this.fetch()
    done()
    loading()
  }

  async remove(row){
    // await this.$confirm("是否确认删除？")
    try {
      await this.$confirm("是否确认删除？")
    }catch (e) {
      return
    }
    await this.$http.delete(`stuinfo/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }

  async fetch(){
    const res = await this.$http.get('stuinfo')
    this.data = res.data
  }

  created(){
    this.fetch()
  }
}
</script>

<style>

</style>