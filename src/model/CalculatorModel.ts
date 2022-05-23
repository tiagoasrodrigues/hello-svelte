const NOT_CLEAR_SCREEN = false
const CLEAR_SCREEN = true

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

  clean() {
    return new CalculatorModel()
  }

  typedOperation(nextOperation: string) {
    return this.calculate(nextOperation)
  }

  calculate(nextOperation: string = null) {
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`)
    const value = !this.#operation ? this.value : `${accumulator}`

    return new CalculatorModel(
      value,
      accumulator,
      nextOperation,
      nextOperation ? CLEAR_SCREEN : NOT_CLEAR_SCREEN
    )
  }
}