import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Estudiante:Jorge Mario Echeverri Yepes/i);
  expect(linkElement).toBeInTheDocument();
});
