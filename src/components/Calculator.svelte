<script lang="ts">
  import Button from "./Button.svelte";
  import Row from "./Row.svelte";
</script>

<div class="calculator">
  <Row>
    <Button triple text="AC" />
    <Button text="/" />
  </Row>
  <Row>
    <Button text="7" />
    <Button text="8" />
    <Button text="9" />
    <Button text="*" />
  </Row>
  <Row>
    <Button text="4" />
    <Button text="5" />
    <Button text="6" />
    <Button text="+" />
  </Row>
  <Row>
    <Button text="1" />
    <Button text="2" />
    <Button text="3" />
    <Button text="-" />
  </Row>
  <Row>
    <Button double text="0" />
    <Button text="," />
    <Button text="=" />
  </Row>
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
