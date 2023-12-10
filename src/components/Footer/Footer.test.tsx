import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from '../Footer';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);

    const firstMemberButton = screen.getByText('Sergey');
    const secondMemberButton = screen.getByText('Irina');
    const thirdMemberButton = screen.getByText('Kate');

    expect(firstMemberButton).toBeInTheDocument();
    expect(secondMemberButton).toBeInTheDocument();
    expect(thirdMemberButton).toBeInTheDocument();
  });
});
