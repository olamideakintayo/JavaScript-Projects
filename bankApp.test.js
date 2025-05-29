

const {
  accounts,
  createAccount,
  deposit,
  withdraw,
  getAllAccounts,
  findAccountByPhone
} = require('./bankApp');

beforeEach(() => {
  accounts.length = 0;
});

test('creates a single account', () => {
  createAccount('Olamide', '09032592825', '5000');
  expect(accounts.length).toBe(1);
  expect(accounts[0].name).toBe('Olamide');
  expect(accounts[0].phone).toBe('09032592825');
  expect(accounts[0].balance).toBe(5000);
});

test('creates multiple accounts', () => {
  createAccount('Olamide', '09032592825', '5000');
  createAccount('Mide', '08123456789', '7500');
  createAccount('Kash', '09032456789', '100000');
  expect(accounts.length).toBe(3);
  expect(accounts[1].name).toBe('Mide');
  expect(accounts[1].balance).toBe(7500);
  expect(accounts[2].balance).toBe(100000);
});

test('confirms balance is a number', () => {
  createAccount('Ola', '000', '1234.56');
  expect(typeof accounts[0].balance).toBe('number');
});

test('allows empty name and phone with zero balance', () => {
  createAccount('', '', '0');
  expect(accounts[0].name).toBe('');
  expect(accounts[0].phone).toBe('');
  expect(accounts[0].balance).toBe(0);
});

test('throws error if name is empty', () => {
  expect(() => createAccount('', '12345', '100')).toThrow("Name cannot be empty.");
});


test('raises error for negative balance', () => {
  expect(() => createAccount('Olamide', '09032592825', '-100')).toThrow();
});

test('raises error for non-numeric balance', () => {
  expect(() => createAccount('Olamide', '09032592825', 'ola')).toThrow();
});

test('deposit increases the balance', () => {
  createAccount('Olamide', '09032592825', '1000');
  const newBalance = deposit('09032592825', '500');
  expect(newBalance).toBe(1500);
  expect(accounts[0].balance).toBe(1500);
});

test('deposit with negative amount raises error', () => {
  createAccount('Olamide', '09032592825', '1000');
  expect(() => deposit('09032592825', '-500')).toThrow();
});

test('deposit with zero amount raises error', () => {
  createAccount('Olamide', '09032592825', '1000');
  expect(() => deposit('09032592825', '0')).toThrow();
});

test('deposit to nonexistent account raises error', () => {
  createAccount('Olamide', '09032592825', '1000');
  expect(() => deposit('00000000000', '100')).toThrow();
});

test('withdraw is successful', () => {
  createAccount('Olamide', '09032592825', '1000');
  const newBalance = withdraw('09032592825', '300');
  expect(newBalance).toBe(700);
});

test('withdrawal of exact balance is successful', () => {
  createAccount('Olamide', '09032592825', '500');
  const newBalance = withdraw('09032592825', '500');
  expect(newBalance).toBe(0);
});

test('withdrawal of negative amount raises error', () => {
  createAccount('Olamide', '09032592825', '500');
  expect(() => withdraw('09032592825', '-100')).toThrow();
});

test('withdrawal of non-numeric amount raises error', () => {
  createAccount('Olamide', '09032592825', '500');
  expect(() => withdraw('09032592825', 'abc')).toThrow();
});

test('withdrawal of more than balance raises error', () => {
  createAccount('Olamide', '09032592825', '400');
  expect(() => withdraw('09032592825', '1000')).toThrow();
});

test('withdrawal with invalid phone number raises error', () => {
  createAccount('Olamide', '09032592825', '500');
  expect(() => withdraw('08100000000', '100')).toThrow();
});

test('getAllAccounts returns all accounts', () => {
  createAccount('Jenny', '08123456789', '1000');
  createAccount('Esther', '09011112222', '500');
  const allAccounts = getAllAccounts();
  expect(allAccounts.length).toBe(2);
  expect(allAccounts[0].name).toBe('Jenny');
  expect(allAccounts[1].phone).toBe('09011112222');
});

test('getAllAccounts returns empty list when no accounts', () => {
  expect(getAllAccounts()).toEqual([]);
});

test('findAccountByPhone returns correct account', () => {
  createAccount('Lazo', '08000000000', '700');
  const result = findAccountByPhone('08000000000');
  expect(result.name).toBe('Lazo');
  expect(result.balance).toBe(700);
});

test('findAccountByPhone raises error if not found', () => {
  createAccount('Ngozi', '08000000000', '700');
  expect(() => findAccountByPhone('08111111111')).toThrow();
});
