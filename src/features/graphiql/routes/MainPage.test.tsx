import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { I18NProvider } from '@/providers';
import { EditorMock } from '@/test/components';

import { MainPage } from './MainPage';

vi.mock('../components/Editor', () => ({
  Editor: vi.fn((props) => <EditorMock {...props} />),
}));

describe('MainPage', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should expand Variables tab when it's clicked", async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <MainPage />
      </I18NProvider>,
    );

    const variablesTab = screen.getByText(/variables/i);

    expect(variablesTab).toBeInTheDocument();

    let variablesEditor = screen.queryByPlaceholderText(/variables \(in json format\)/i);

    expect(variablesEditor).not.toBeVisible();

    await user.click(variablesTab);

    variablesEditor = await screen.findByPlaceholderText(/variables \(in json format\)/i);

    expect(variablesEditor).toBeVisible();
  });
});
