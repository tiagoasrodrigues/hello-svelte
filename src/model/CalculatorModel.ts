const NOT_CLEAR_SCREEN = false

export default class CalculatorModel {
  #value: string
  #accumulator: number
  #cleanScreen: boolean
  #operation: string

  constructor(value: string = null, accumulator: number = null, operation: string = null, cleanScreen: boolean = false) {
    this.#value = value
    this.#accumulator = accumulator
    this.#cleanScreen = cleanScreen
    this.#operation = operation
  }

  get value() {
    return this.#value?.replace('.', ',') || '0'
  }

  typedNumber(newValue: string) {
    return new CalculatorModel(
      (this.#cleanScreen || !this.#value) ? newValue : this.#value + newValue,
      this.#accumulator,
      this.#operation,
      NOT_CLEAR_SCREEN
    )
  }

  typedPoint() {
    return new CalculatorModel(
      this.#value?.includes('.') ? this.#value : this.value + '.',
      this.#accumulator,
      this.#operation,
      NOT_CLEAR_SCREEN
    )
  }
}