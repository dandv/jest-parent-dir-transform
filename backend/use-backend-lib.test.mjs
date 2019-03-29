// Works fine

import { backend } from './lib/backend-lib';

test('test using backend library', () => {
  expect(backend()).toBeTruthy();
});
