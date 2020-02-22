import getEndpointWithId from '../getEndpointWithId'

describe('getEndpointWithId', () => {
  it('returns endpoint unchanged if an id is not provided', () => {
    const testEndpoint = 'test_endpoint';

    expect(
      getEndpointWithId(testEndpoint)
    ).toEqual(testEndpoint)
  })

  it('appends id to endpoint when both are provided', () => {
    const testEndpoint = 'test_endpoint';
    const id = '1111';

    const expected = 'test_endpoint/1111'

    expect(
      getEndpointWithId(testEndpoint, id)
    ).toEqual(expected)
  })
})