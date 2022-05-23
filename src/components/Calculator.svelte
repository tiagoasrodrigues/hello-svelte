<script lang="ts">
  import CalculatorModel from "../model/CalculatorModel";
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Row from "./Row.svelte";

  let calc = new CalculatorModel();

  const typedNumber = (num: string) => (calc = calc.typedNumber(num));
  const typedPoint = () => (calc = calc.typedPoint());
  const clean = () => (calc = calc.clean());
</script>

<div class="calculator">
  <Display value={calc.value} />
  <Row>
    <Button detach triple text="AC" onClick={clean} />
    <Button operation text="/" />
  </Row>
  <Row>
    <Button text="7" onClick={typedNumber} />
    <Button text="8" onClick={typedNumber} />
    <Button text="9" onClick={typedNumber} />
    <Button operation text="*" />
  </Row>
  <Row>
    <Button text="4" onClick={typedNumber} />
    <Button text="5" onClick={typedNumber} />
    <Button text="6" onClick={typedNumber} />
    <Button operation text="+" />
  </Row>
  <Row>
    <Button text="1" onClick={typedNumber} />
    <Button text="2" onClick={typedNumber} />
    <Button text="3" onClick={typedNumber} />
    <Button operation text="-" />
  </Row>
  <Row>
    <Button double text="0" onClick={typedNumber} />
    <Button text="," onClick={typedPoint} />
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
