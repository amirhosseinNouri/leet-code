import maskPII, {
  isEmail,
  maskEmail,
  maskPhoneNumber,
  removePhoneNumberSeparators,
  splitPhoneNumberToCountryCodeAndLocalNumber,
  maskCountryCode,
} from './masking-personal-information';

// test('Output length should be greater or equal to the input length', () => {
//   expect(maskPII('amir@gmail.com').length).toBeGreaterThanOrEqual(
//     'amir@gmail.com'.length,
//   );
// });

describe('isEmails tests', () => {
  test('valid all lower cased email', () => {
    expect(isEmail('amir@gmail.com')).toBe(true);
  });

  test('valid all upper cased email', () => {
    expect(isEmail('AMIR@GMAIL.COM')).toBe(true);
  });

  test('valid email with both lower and upper cases', () => {
    expect(isEmail('amIR@GmaIl.cOm')).toBe(true);
  });

  test('invalid all lower cased email', () => {
    expect(isEmail('amir')).toBe(false);
  });

  test('invalid all upper cased email', () => {
    expect(isEmail('AMIR')).toBe(false);
  });

  test('invalid email lower and upper case letters', () => {
    expect(isEmail('aMIr')).toBe(false);
  });

  test('invalid email with dot at the beginning', () => {
    expect(isEmail('.amir@gmail.com')).toBe(false);
  });

  test('invalid email without @', () => {
    expect(isEmail('amirgamil.com'));
  });

  test('invalid email with dot at the end', () => {
    expect(isEmail('amirgmailcom.')).toBe(false);
  });

  test('invalid email with dot at the beginning of the domain', () => {
    expect(isEmail('amir@.gmail')).toBe(false);
  });
});

describe('maskEmail tests', () => {
  test('first test case', () => {
    expect(maskEmail('LeetCode@LeetCode.com')).toBe('l*****e@leetcode.com');
  });

  test('second test case', () => {
    expect(maskEmail('AB@qq.com')).toBe('a*****b@qq.com');
  });
});

describe('removePhoneNumberSeparators test', () => {
  test('remove - from phone number', () => {
    expect(removePhoneNumberSeparators('11-111111-1111')).toEqual(
      '111111111111',
    );
  });

  test('remove ( and ) from phone number', () => {
    expect(removePhoneNumberSeparators('(11)1111111111')).toEqual(
      '111111111111',
    );
  });

  test('remove ( and ) and - from phone number', () => {
    expect(removePhoneNumberSeparators('11-(11)11111111')).toEqual(
      '111111111111',
    );
  });

  test('remove + from phone number', () => {
    expect(removePhoneNumberSeparators('+11-(11)11111111')).toEqual(
      '111111111111',
    );
  });
});

describe('splitPhoneNumberToCountryCodeAndLocalNumber tests', () => {
  test('phone number with no country code', () => {
    expect(splitPhoneNumberToCountryCodeAndLocalNumber('1111111111')).toEqual([
      '',
      '1111111111',
    ]);
  });

  test('phone number with one digit country code', () => {
    expect(splitPhoneNumberToCountryCodeAndLocalNumber('01111111111')).toEqual([
      '0',
      '1111111111',
    ]);
  });

  test('phone number with two digit country code', () => {
    expect(splitPhoneNumberToCountryCodeAndLocalNumber('001111111111')).toEqual(
      ['00', '1111111111'],
    );
  });
});

describe('maskCountryCode tests', () => {
  test('mask empty country code', () => {
    expect(maskCountryCode('')).toBe('');
  });

  test('mask one digit country code', () => {
    expect(maskCountryCode('1')).toBe('+*');
  });

  test('mask two digit country code', () => {
    expect(maskCountryCode('11')).toBe('+**');
  });

  test('mask three digit country code', () => {
    expect(maskCountryCode('111')).toBe('+***');
  });
});

describe('maskPhoneNumber tests', () => {
  test('first test case', () => {
    expect(maskPhoneNumber('1(234)567-890')).toBe('***-***-7890');
  });

  test('second test case', () => {
    expect(maskPhoneNumber('86-(10)12345678')).toBe('+**-***-***-5678');
  });
});
