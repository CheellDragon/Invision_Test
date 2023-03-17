/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import Loyalty from './Loyalty';

describe('Loyalty component', () => {
  test('renders the title', () => {
    const { getByText } = render(<Loyalty />);
    const title = getByText('ПРОГРАММЫ ЛОЯЛЬНОСТИ');
    expect(title).toBeInTheDocument();
  });

  test('toggles the loyalty text when clicked', () => {
    const { getByText } = render(<Loyalty />);
    const arrow = getByText('ПРОГРАММЫ ЛОЯЛЬНОСТИ');
    const loyaltyText = getByText('скидки до 100% на подписку к торговому терминалу Letit');

    fireEvent.click(arrow);
    expect(loyaltyText).toBeInTheDocument();
  });

  test('toggles the arrow rotation class when clicked', () => {
    const { getByAltText } = render(<Loyalty />);
    const arrow = getByAltText('arrowDown');

    fireEvent.click(arrow);

    expect(arrow).toHaveClass('rotate');

    fireEvent.click(arrow);

    expect(arrow).not.toHaveClass('rotate');
  });
});
