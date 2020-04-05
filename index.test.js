const isobjectid = require('./index')

describe('Give string and determine if an object id', () => {
  it('should not pass just numbers as string', () => {
    expect(isobjectid('111111111111111111111111')).toBe(false)
    expect(isobjectid('123123123123213123123123')).toBe(false)
  })
  it('should not pass just numbers as number', () => {
    expect(isobjectid(111111111111111111111111)).toBe(false)
    expect(isobjectid(123123)).toBe(false)
  })
  it('should not pass just letters', () => {
    expect(isobjectid('ABCABCABCABCABCABCABCABC')).toBe(false)
    expect(isobjectid('abcabcabcabcabcabcabcabc')).toBe(false)
  })
  it('should not pass unexpected data types', () => {
    expect(isobjectid({ object: 'it is' })).toBe(false)
    expect(isobjectid(['array', 'it', 'is'])).toBe(false)
    expect(isobjectid(new Set())).toBe(false)
  })
  it('should pass valid objectids', () => {
    expect(isobjectid('45cbc4a0e4123f6920000002')).toBe(true)
    expect(isobjectid('5e53a0261103a8001fe7e7f7')).toBe(true)
    expect(isobjectid('5E53F0261103A8001FE7E7F7')).toBe(false)
    expect(isobjectid('5e4c1aff750dbc001f5b53bd')).toBe(true)
    expect(isobjectid('5e4c5680b57f3a001fa5dcd6')).toBe(true)
  })
})