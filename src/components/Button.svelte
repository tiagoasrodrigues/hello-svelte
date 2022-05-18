<script lang="ts">
  export let text: string;
  export let triple: boolean = false;
  export let double: boolean = false;
</script>

<button class="button" class:triple class:double>
  {text}
</button>

<style>
  .button {
    flex-basis: 25%;
  }

  .double {
    flex-basis: 50%;
  }

  .triple {
    flex-basis: 75%;
  }
</style>
