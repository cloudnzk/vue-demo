<template>
  <div>
    {{result}}
  </div>
</template>

<script>
import { request } from "./network/request";
export default {
  name: "App",
  data() {
    return {
      result: "",
    };
  },
  created() {
    request({
      url: "/home/multidata",
    })
      .then((res) => {
        this.result = res;
      })
  },
};
</script>

<style>
</style>
