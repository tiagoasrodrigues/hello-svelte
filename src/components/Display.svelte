<script lang="ts">
  export let value: string;

  $: fontSize = value.length > 20 ? "small" : `s-${value.length}`;
</script>

<div class={`display ${fontSize}`}>
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

  .s-10 {
    font-size: 1.62rem;
  }

  .s-11 {
    font-size: 1.46rem;
  }

  .s-12 {
    font-size: 1.35rem;
  }

  .small {
    font-size: 0.6rem;
  }
</style>
