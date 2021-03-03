<template>
  <div>
    <crud
      :data="data"
      :form="form"
      :fields="mapItems"
      :labelPosition="labelPosition"
      @create="handleCreate"
      @update="handleUpdate"
      @destroy="handleDestroy"
      @submit="handleSubmit"
    >
      <template slot="prepend">
        <el-table-column type="index"></el-table-column>
      </template>
    </crud>
  </div>
</template>

<script>
import { Customer as api } from "./xhr";
import { getList, delData, updateData, newData } from "@/api/trade";
import CRUD from "@/components/Crud";
export default {
  components: {
    crud: CRUD,
  },
  data() {
    return {
      data: [],

      form: {},
      labelPosition: "top",
      mapItems: {
        symbol: {
          label: "Symbol",
          length: 50,
          rules: [{ required: true, message: "can not empty" }],
        },

        strikePrice: {
          label: "Strike Price",
          length: 11,
          type: "float",
          rules: [{ required: true, message: "can not empty" }],
        },

        lowLimitPrice: {
          label: "Low Limit Price",
          length: 11,
          type: "float",
          rules: [{ required: true, message: "can not empty" }],
        },

        highLimitPrice: {
          label: "High Limit Price",
          length: 11,
          type: "float",
          rules: [{ required: true, message: "can not empty" }],
        },

        tradingReferencePrice: {
          label: "Trading Reference Price",
          length: 11,
          type: "float",
          rules: [{ required: true, message: "can not empty" }],
        },

        securityID: {
          label: "Security ID",
          length: 11,
          rules: [{ required: true, message: "can not empty" }],
        },

        cfiCode: {
          label: "CFI Code",
          length: 11,
          rules: [{ required: true, message: "can not empty" }],
        },

        activationDate: {
          label: "Activation Date",
          length: 11,
          rules: [{ required: true, message: "can not empty" }],
        },
        lastEligibleTradeDate: {
          label: "Last Eligible Trade Date",
          length: 11,
          rules: [{ required: true, message: "can not empty" }],
        },
      },
    };
  },
  computed: {
    model() {
      let model = {};
      let mapItems = this.mapItems;
      for (let k in mapItems) {
        model[k] = null;
      }
      return model;
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      getList().then((data) => {
        this.data = data.trades;
      });
    },
    handleCreate() {
      this.form = { ...this.model };
    },
    handleUpdate(row, index) {
      this.form = { ...row };
    },
    handleDestroy(row, index) {
      delData(row.id).then((data) => {
        this.$report(data, "destroy", this.deleteSuccess);
      });
    },
    handleSubmit(status, closeDialog) {
      this.closeDialog = closeDialog;

      if (status === 0) {
        newData(this.form).then((data) => {
          this.$report(data, "create", this.submitSuccess);
        });
      } else {
        updateData(this.form).then((data) => {
          this.$report(data, "update", this.submitSuccess);
        });
      }
    },
    submitSuccess(data) {
      this.loadData();
      this.closeDialog();
    },
    deleteSuccess(data) {
      this.loadData();
    },
  },
};
</script>
