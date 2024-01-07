import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { TestI18NProvider } from '@/test/components';

import { I18NProvider } from './I18NProvider';

describe('I18NProvider', () => {
  it('should use English language by default', () => {
    render(
      <I18NProvider>
        <TestI18NProvider />
      </I18NProvider>,
    );

    const translatedHeading = screen.getByRole('heading', { level: 1 });
    const languageIndicator = screen.getByText(/current language/i);

    expect(translatedHeading).toHaveTextContent(/hello world!/i);
    expect(languageIndicator).toHaveTextContent(/en/i);
  });

  it('should provide ability to switch language on the fly', async () => {
    render(
      <I18NProvider>
        <TestI18NProvider />
      </I18NProvider>,
    );

    let translatedHeading = screen.getByRole('heading', { level: 1 });
    let languageIndicator = screen.getByText(/current language/i);

    expect(translatedHeading).toHaveTextContent(/hello world!/i);
    expect(languageIndicator).toHaveTextContent(/en/i);

    const user = userEvent.setup();
    const switchToRussianButton = screen.getByRole('button', { name: /ru/i });
    await user.click(switchToRussianButton);

    translatedHeading = screen.getByRole('heading', { level: 1 });
    languageIndicator = screen.getByText(/current language/i);

    expect(translatedHeading).toHaveTextContent(/привет, мир!/i);
    expect(languageIndicator).toHaveTextContent(/ru/i);
  });
});
