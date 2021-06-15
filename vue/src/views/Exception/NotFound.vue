<template>
  <section class="notFound">
    <a-result
      status="404"
      title="404"
      sub-title="Sorry, the page you visited does not exist."
    >
      <template #extra>
        <a-button type="primary" @click="back">
          Back Home
        </a-button>
      </template>
    </a-result>
  </section>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.back();
    }
  }
};
</script>

<style></style>
