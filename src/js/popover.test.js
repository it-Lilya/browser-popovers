/**
 * @jest-environment jsdom
 */
import { Popover } from './Popover';

const tooltipFactory = new Popover();
const header = 'Popover title';
const text = "And here's some amazing content. It's very engaging. Right?";
tooltipFactory.show(header, text);

test('test', () => {
  expect(tooltipFactory._popover).toBe(Object);
});
