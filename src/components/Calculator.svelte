<script lang="ts">
  import Button from "./Button.svelte";
</script>

<div class="calculator">
  <Button text="25" />
  <Button text="05" />
  <Button text="105" />
</div>

<style>
  .calculator {
    background-color: var(--background);
    height: 220px;
    width: 150px;

    display: flex;
    flex-direction: column;
  }
</style>
