<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="Name" width="180"> </el-table-column>
    <el-table-column prop="status" label="Status"> </el-table-column>
    <el-table-column label="Action">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="startService(scope.$index, scope.row)"
          v-if="scope.row.status == 'stopped'"
          >Start</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="stopService(scope.$index, scope.row)"
          v-if="scope.row.status == 'started'"
          >Stop</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getList, start, stop } from "@/api/monitor";

export default {
  methods: {
    startService(index, row) {
      start(index).then((data) => {
        this.$report(data, "start", this.loadData);
      });
    },
    stopService(index, row) {
      stop(index).then((data) => {
        this.$report(data, "stop", this.loadData);
      });
    },

    loadData() {
      this.tableData = [];
      getList().then((data) => {
        this.data = data;
        if (data.ME == 0) {
          var me = {
            name: "FEME",
            status: "stopped",
          };
        } else {
          var me = {
            name: "FEME",
            status: "started",
          };
        }
        this.tableData.push(me);
        if (data.MD == 0) {
          var md = {
            name: "FEMD",
            status: "stopped",
          };
        } else {
          var md = {
            name: "FEMD",
            status: "started",
          };
        }
        this.tableData.push(md);
      });
    },
  },
  created() {
    this.loadData();
  },
  data() {
    return {
      tableData: [],
    };
  },
};
</script>
