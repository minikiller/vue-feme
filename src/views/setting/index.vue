<template>
  <div>
    <crud
      :data="data"
      :form="form"
      :fields="mapItems"
      :labelPosition="labelPosition"
      :actions="actions"
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
import { getList, delData, updateData, newData } from "@/api/setting";
import CRUD from "@/components/Crud";
export default {
  components: {
    crud: CRUD,
  },
  data() {
    return {
      data: [],
      actions: ["update"],

      form: {},
      labelPosition: "top",
      mapItems: {
        name: {
          label: "Name",
          length: 50,
          disabled: true,
          rules: [{ required: true, message: "can not empty" }],
        },

        value: {
          label: "Value",
          length: 11,
          rules: [{ required: true, message: "can not empty" }],
        },

        type: {
          label: "Type",
          disabled: true,
          length: 11,
          rules: [{ required: true, message: "can not empty" }],
        },

        application: {
          label: "Application",
          disabled: true,
          length: 11,
          rules: [{ required: true, message: "can not empty" }],
        },

        comment: {
          label: "Comment",
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
        this.data = data.settings;
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
