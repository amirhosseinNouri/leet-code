interface IteratorInterface<T> {
  hasNext: () => boolean;
  next: () => T | undefined;
}

export default function accountsMerge(accounts: string[][]): string[][] {
  const merged: boolean[] = new Array(accounts.length).fill(false);

  for (let i = 0; i < accounts.length - 1; i++) {
    const [name, ...emails] = accounts[i];

    if (merged[i] === true) {
      continue;
    }

    console.log('New Round');
    console.log({ name, emails });

    const emailIterator = createIterator<string>(emails);

    const checkedEmails = new Set<string>();

    while (emailIterator.hasNext()) {
      const currentEmail = emailIterator.next()!;

      if (checkedEmails.has(currentEmail)) {
        continue;
      }

      checkedEmails.add(currentEmail);
      console.log({ currentEmail });

      for (let j = i + 1; j < accounts.length; j++) {
        const [otherName, ...otherEmails] = accounts[j];

        if (merged[j] === true) {
          continue;
        }

        console.log({ otherName, otherEmails });

        if (otherEmails.includes(currentEmail)) {
          console.log('COMMON');
          console.log({ push: otherEmails });
          emails.push(...otherEmails);
          merged[j] = true;
          console.log({ emails, otherEmails, merged });
        }
      }

      accounts[i] = [name, ...emails];
    }
  }

  console.log(accounts);

  return accounts
    .filter((_, index) => merged[index] === false)
    .map(([name, ...emails]) => [
      name,
      ...sortEmailsByName(removeDuplicateEmails(emails)),
    ]);
}

export function sortListsByLength(
  a: string[],
  b: string[],
): [string[], string[]] {
  if (a.length > b.length) {
    return [b, a];
  }

  return [a, b];
}

export function sortEmailsByName(arr: string[]): string[] {
  return arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });
}

export function removeDuplicateEmails(emails: string[]): string[] {
  return Array.from(new Set<string>(emails));
}

function createIterator<T>(arr: T[]): IteratorInterface<T> {
  let i = 0;
  return {
    hasNext(): boolean {
      return i < arr.length;
    },

    next(): T {
      return arr[i++];
    },
  };
}
