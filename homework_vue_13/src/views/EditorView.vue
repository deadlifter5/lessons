<template>
  <header-comp />
  <section class="editor">
    <label>
      Назва товару
      <input type="title" />
    </label>
    <label>
      Ціна товару
      <input type="price" />
    </label>
    <label>
      Завантажте фото
      <input type="file" />
    </label>
    <button class="form-btn">Додати новий товар</button>
  </section>
</template>

<script>
export default {
  name: "EditorView",
}
</script>

<style lang="scss" scoped></style>
