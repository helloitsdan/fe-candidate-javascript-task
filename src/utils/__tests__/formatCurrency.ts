import formatCurrency from '../formatCurrency'

describe('formatCurrency', () => {
  it('returns a string representation of a currency amount', () => {
    expect(formatCurrency(23.03)).toEqual("£23.03")
  })

  it('pads amounts to two decimal places', () => {
    expect(formatCurrency(23)).toEqual("£23.00")
  })
})