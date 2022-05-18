<script lang="ts">
  export let text: string;
  export let triple: boolean = false;
  export let double: boolean = false;
  export let operation: boolean = false;
  export let detach: boolean = false;
</script>

<button class="button" class:triple class:double class:operation class:detach>
  {text}
</button>

<style>
  .button {
    margin: 0;
    border: 1px solid var(--background);
    flex-basis: 25%;
  }

  .double {
    flex-basis: 50%;
  }

  .triple {
    flex-basis: 75%;
  }

  .operation {
    background-color: orange;
    color: white;
  }

  .detach {
    background-color: red;
    color: white;
  }
</style>
