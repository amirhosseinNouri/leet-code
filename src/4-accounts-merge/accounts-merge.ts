type Account = {
  name: string;
  emails: string[];
  isMerged: boolean;
};

interface IteratorInterface<T> {
  hasNext: () => boolean;
  next: () => T | undefined;
}

export default function accountsMerge(accounts: string[][]): string[][] {
  const normalizedAccounts = toAccountArray(accounts);
  const seen: boolean[] = new Array(accounts.length).fill(false);

  for (let i = 0; i < normalizedAccounts.length - 1; i++) {
    const account = normalizedAccounts[i];

    if (seen[i] === true) {
      continue;
    }

    console.log('New Round');
    console.log({ account });

    const emailIterator = createIterator<string>(account.emails);

    while (emailIterator.hasNext()) {
      const currentEmail = emailIterator.next()!;
      console.log({ currentEmail });

      for (let j = i + 1; j < normalizedAccounts.length; j++) {
        const otherAccount = normalizedAccounts[j];

        if (seen[j] === true) {
          continue;
        }

        console.log({ otherAccount });

        if (otherAccount.emails.includes(currentEmail)) {
          console.log('COMMON');
          account.emails.push(...otherAccount.emails);
          seen[j] = true;
          console.log({ account, otherAccount, seen });
        }
      }
    }
  }

  return toStringArray(
    normalizedAccounts.filter((_, index) => seen[index] === false),
  );
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

export function toAccountArray(accounts: string[][]): Account[] {
  return accounts.map(([name, ...emails]) => ({
    name,
    emails: removeDuplicateEmails(emails),
    isMerged: false,
  }));
}

export function toStringArray(accounts: Account[]): string[][] {
  return accounts.map(({ name, emails }) => [
    name,
    ...sortEmailsByName(removeDuplicateEmails(emails)),
  ]);
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
