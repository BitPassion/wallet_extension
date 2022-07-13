import { render, screen } from '@testing-library/react';
import AppEX from './AppEX';

test('renders learn react link', () => {
  render(<AppEX />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
