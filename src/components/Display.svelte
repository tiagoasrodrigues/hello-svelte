<script lang="ts">
  export let value: string;
</script>

<div class="display">
  <span>
    {value}
  </span>
</div>

<style>
  .display {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 5px;
    margin: 2px 1px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    font-size: 1.7rem;
    background-color: aliceblue;
    overflow: hidden;
  }
</style>
