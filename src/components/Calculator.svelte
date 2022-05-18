<script lang="ts">
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Row from "./Row.svelte";
</script>

<div class="calculator">
  <Display value="123456789102123456789102" />
  <Row>
    <Button detach triple text="AC" />
    <Button operation text="/" />
  </Row>
  <Row>
    <Button text="7" />
    <Button text="8" />
    <Button text="9" />
    <Button operation text="*" />
  </Row>
  <Row>
    <Button text="4" />
    <Button text="5" />
    <Button text="6" />
    <Button operation text="+" />
  </Row>
  <Row>
    <Button text="1" />
    <Button text="2" />
    <Button text="3" />
    <Button operation text="-" />
  </Row>
  <Row>
    <Button double text="0" />
    <Button text="," />
    <Button detach text="=" />
  </Row>
</div>

<style>
  .calculator {
    background-color: var(--background);
    height: 220px;
    width: 150px;
    padding: 10px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
  }
</style>
