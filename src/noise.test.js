const { Noise } = require('./noise')

describe('Random Walker', () => {
  it('instantiates', () => {
    const noise = new Noise()
    expect(noise).toBeInstanceOf(Noise)
  })
  it('generates perlin noise', () => {
    const noise = new Noise()
    const val1 = noise.noise(1)
    const val2 = noise.noise(2)
    expect(val1).toBeLessThanOrEqual(1)
    expect(val2).toBeLessThanOrEqual(1)
    expect(val1).not.toEqual(val2)
    expect(val1).toEqual(noise.noise(1))
  })
  
})
