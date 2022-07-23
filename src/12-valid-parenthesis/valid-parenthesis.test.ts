import isValid from './valid-parenthesis';

describe('valid parenthesis tests', () => {
  it('return true on ()', () => expect(isValid('()')).toBe(true));

  it('return false on ((', () => expect(isValid('((')).toBe(false));

  it('return true on {}', () => expect(isValid('{}')).toBe(true));

  it('return true on []', () => expect(isValid('[]')).toBe(true));

  it('return false on [[', () => expect(isValid('[[')).toBe(false));

  it('return false on {{', () => expect(isValid('{{')).toBe(false));

  it('return true on ()[]{}', () => expect(isValid('()[]{}')).toBe(true));

  it('return false on (]', () => expect(isValid('(]')).toBe(false));

  it('return valse on (])', () => expect(isValid('(])')).toBe(false));

});
