import accountsMerge, {
  removeDuplicateEmails,
  sortEmailsByName,
  sortListsByLength,
} from './accounts-merge';

const commonInput = [
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com'],
];

test('Removed duplicate array size should be less than or equal to the input array', () => {
  expect(
    removeDuplicateEmails(['a', 'b', 'c', 'd']).length,
  ).toBeLessThanOrEqual(4);
});

test('Should remove one duplicate element', () => {
  expect(removeDuplicateEmails(['a', 'b', 'b', 'c']).length).toBe(3);
});

test('Should remove two duplicates', () => {
  expect(removeDuplicateEmails(['a', 'a', 'b', 'b', 'c', 'd']).length).toBe(4);
});

test('Should sort by alphabetic order', () => {
  expect(sortEmailsByName(['d', 'c', 'b', 'a', 'f'])).toEqual([
    'a',
    'b',
    'c',
    'd',
    'f',
  ]);
});

test('Should sort emails by alphabetic order', () => {
  expect(
    sortEmailsByName(['b@gmail', 'a@gmail', 'c@gmail', 'e@gmail', 'd@gmail']),
  ).toEqual(['a@gmail', 'b@gmail', 'c@gmail', 'd@gmail', 'e@gmail']);
});

test('No sorting needed on sorted lists', () => {
  expect(sortListsByLength(['a', 'b', 'c'], ['a', 'b', 'c', 'd'])).toEqual([
    ['a', 'b', 'c'],
    ['a', 'b', 'c', 'd'],
  ]);
});

test('Should sort the lists by their lengths', () => {
  expect(sortListsByLength(['a', 'b', 'c', 'd'], ['a', 'b'])).toEqual([
    ['a', 'b'],
    ['a', 'b', 'c', 'd'],
  ]);
});

// test('Should return false on empty lists', () => {
//   expect(haveCommonEmails([], [])).toBe(false);
// });

// test('Should return false with lists without any common elements', () => {
//   expect(haveCommonEmails(['a', 'b', 'c'], ['d', 'e', 'f'])).toBe(false);
// });

// test('Should return true on lists with one common element', () => {
//   expect(haveCommonEmails(['a', 'b', 'c'], ['c', 'e', 'f'])).toBe(true);
// });

// test('Should return true on lists with two common element', () => {
//   expect(haveCommonEmails(['a', 'b', 'c'], ['d', 'b', 'a'])).toBe(true);
// });

// test('Output size should be equal or less than the input size', () => {
//   expect(accountsMerge(commonInput).length).toBeLessThanOrEqual(
//     commonInput.length,
//   );
// });

// test('Common input test', () => {
//   expect(accountsMerge(commonInput)).toEqual([
//     ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
//     ['Mary', 'mary@mail.com'],
//     ['John', 'johnnybravo@mail.com'],
//   ]);
// });

// test('Second test case', () => {
//   expect(
//     accountsMerge([
//       ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
//       ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
//       ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
//       ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
//       ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
//     ]),
//   ).toEqual([
//     ['Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co'],
//     ['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
//     ['Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co'],
//     ['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co'],
//     ['Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co'],
//   ]);
// });

// test('Second test case', () => {
//   expect(
//     accountsMerge([
//       ['Alex', 'Alex5@m.co', 'Alex4@m.co', 'Alex0@m.co'],
//       ['Ethan', 'Ethan3@m.co', 'Ethan3@m.co', 'Ethan0@m.co'],
//       ['Kevin', 'Kevin4@m.co', 'Kevin2@m.co', 'Kevin2@m.co'],
//       ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe2@m.co'],
//       ['Gabe', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe2@m.co'],
//     ]),
//   ).toEqual([
//     ['Alex', 'Alex0@m.co', 'Alex4@m.co', 'Alex5@m.co'],
//     ['Ethan', 'Ethan0@m.co', 'Ethan3@m.co'],
//     ['Gabe', 'Gabe0@m.co', 'Gabe2@m.co', 'Gabe3@m.co', 'Gabe4@m.co'],
//     ['Kevin', 'Kevin2@m.co', 'Kevin4@m.co'],
//   ]);
// });

test('Second test case', () => {
  expect(
    accountsMerge([
      ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
      ['John', 'johnsmith@mail.com', 'john00@mail.com'],
      ['Mary', 'mary@mail.com'],
      ['John', 'johnnybravo@mail.com'],
    ]),
  ).toEqual([
    ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com'],
  ]);
});

test('Second test case', () => {
  expect(
    accountsMerge([
      ['David', 'David0@m.co', 'David1@m.co'],
      ['David', 'David3@m.co', 'David4@m.co'],
      ['David', 'David4@m.co', 'David5@m.co'],
      ['David', 'David2@m.co', 'David3@m.co'],
      ['David', 'David1@m.co', 'David2@m.co'],
    ]),
  ).toEqual([
    [
      'David',
      'David0@m.co',
      'David1@m.co',
      'David2@m.co',
      'David3@m.co',
      'David4@m.co',
      'David5@m.co',
    ],
  ]);
});
