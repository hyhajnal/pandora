<template>
  <div class="home" v-if="project">
    <header>
      <head-area :title="project.name" left="H5 Editor"></head-area>
    </header>
    <main>

      <el-row :gutter="20" class="project-list">
        <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="1">
          <page-add @after-add="afterAdd" :page="page"></page-add>
        </el-col>
        <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="1"
          v-for="item in list"
          :key="item.id"
        >
          <page-card :page="item" v-if="item"></page-card>
        </el-col>
      </el-row>

      <el-row type="flex" justify="end" class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :total="total"
          :page-size="11"
          @current-change="getData">
        </el-pagination>
      </el-row>

    </main>
  </div>
</template>

<script>
import HeadArea from '@/modules/head-area'
import EditArea from '@/modules/edit-area'
import ResourceArea from '@/modules/resource-area'
import AttrArea from '@/modules/attr-area'
import ProjectCard from '@/components/ProjectCard'
import PageCard from '@/components/PageCard'
import ModuleCard from '@/components/ModuleCard'
import { PageAdd } from '@/components/add'
import Config from '@/utils/config'

export default {
  name: 'Home',
  data () {
    return {
      search: '',
      list: [],
      total: 1,
      page: 1,
      project: null
    }
  },
  mounted () {
    this.getData()
  },
  components: {
    HeadArea,
    EditArea,
    ResourceArea,
    AttrArea,
    ProjectCard,
    PageAdd,
    PageCard,
    ModuleCard
  },
  methods: {
    getData (page) {
      this.page = page
      this.axios.get(`${Config.URL}/editor/project/detail`, {
        params: {
          id: this.$route.query.id,
          page: page || 1
        }
      }).then(data => {
        this.project = data.project
        this.list = data.list
        this.total = data.total
        localStorage.setItem('project', data.project.name)
      })
    },
    afterAdd ({ list, total }) {
      this.list = list
      this.total = total
    }
  }
}
</script>

<style scoped lang="scss">
  header {
    background: $themeColor;
  }
  .home {
    height: 100vh;
    overflow: auto;
    background: #f2f2f2;
  }
  header {
    height: 60px;
    background: $themeColor;
    transition: all .5s;
  }
  main {
    height: 100%;
    padding-top: 60px;
    margin: 0 auto;
    max-width: 1200px;
  }
  .project-list {
    width: 100%;
    padding: 20px 10px;
    margin: 0 !important;
  }
  .search-input {
    width: 50%;
  }
  .search-box {
    padding: 0 20px;
    margin: 100px 0;
  }
  .type-box {
    /* width: 40%; */
  }
  .pagination {
    margin: 40px 0 100px 0;
  }
</style>

<style lang="scss">
.home {
  .el-col {
    margin-bottom: 20px;
  }
   .el-select .el-input {
    width: 130px;
  }
}
</style>
