import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers';

import { Footer } from '.';

describe('Footer', () => {
  it('should render', () => {
    render(
      <I18NProvider>
        <Footer />
      </I18NProvider>,
    );

    const sergeyButton = screen.getByText(/sergey/i);
    expect(sergeyButton).toBeInTheDocument();
  });
});
