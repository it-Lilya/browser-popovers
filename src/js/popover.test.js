/**
 * @jest-environment jsdom
 */
import { Popover } from './Popover';

test('test', () => {
  const tooltipFactory = new Popover();
  expect(typeof tooltipFactory).toBe('object');
});
