export default function maskPII(s: string): string {
  if (isEmail(s)) {
    return maskEmail(s);
  }

  return maskPhoneNumber(s);
}

export const maskEmail = (email: string): string => {
  const [name, domain] = email.toLocaleLowerCase().split('@');
  const splittedName = name.split('');
  return `${splittedName[0]}*****${
    splittedName[splittedName.length - 1]
  }@${domain}`;
};

export const maskPhoneNumber = (phone: string): string => {
  const separatorRemovedPhoneNumber = removePhoneNumberSeparators(phone);
  const [countryCode, localNumber] =
    splitPhoneNumberToCountryCodeAndLocalNumber(separatorRemovedPhoneNumber);

  const lastFourDigitOfLocalNumber = localNumber.slice(6);
  const maskedCountryCode = maskCountryCode(countryCode);

  return `${maskedCountryCode}${
    maskedCountryCode.length ? '-' : ''
  }***-***-${lastFourDigitOfLocalNumber}`;
};

export const removePhoneNumberSeparators = (phone: string): string =>
  phone.replace(/[- | \( | \) | \+]/g, '').replace(' ', '');

export const splitPhoneNumberToCountryCodeAndLocalNumber = (
  phone: string,
  localNumberLength: number = 10,
): [countryCode: string, localNumber: string] => {
  const countryCodeLength = phone.length - localNumberLength;
  return [phone.slice(0, countryCodeLength), phone.slice(countryCodeLength)];
};

export const maskCountryCode = (countryCode: string): string => {
  if (countryCode.length === 0) {
    return '';
  }

  return `+${'*'.repeat(countryCode.length)}`;
};

export const isEmail = (str: string): boolean =>
  /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(str);
