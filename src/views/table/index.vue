<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Symbol">
        <template slot-scope="scope">
          {{ scope.row.attributes.symbol }}
        </template>
      </el-table-column>
      
      <el-table-column label="SecurityID" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.securityID }}</span>
        </template>
      </el-table-column>

      <el-table-column label="StrikePrice" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.strikePrice }}</span>
        </template>
      </el-table-column>

      <el-table-column label="LowLimitPrice" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.lowLimitPrice }}</span>
        </template>
      </el-table-column>

      <el-table-column label="HighLimitPrice" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.highLimitPrice }}</span>
        </template>
      </el-table-column>

      <el-table-column label="TradingReferencePrice" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.tradingReferencePrice }}</span>
        </template>
      </el-table-column>

      

      <el-table-column label="CFICode" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.cfiCode }}</span>
        </template>
      </el-table-column>

      <el-table-column label="ActivationDate" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.activationDate }}</span>
        </template>
      </el-table-column>

      <el-table-column label="LastEligibleTradeDate" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.attributes.lastEligibleTradeDate }}</span>
        </template>
      </el-table-column>
       
      
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      list: null,
      listLoading: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response;
        this.listLoading = false;
      });
    },
  },
};
</script>
