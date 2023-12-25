import { render, screen, within } from '@testing-library/react';
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

  it("should expand Headers tab when it's clicked", async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <MainPage />
      </I18NProvider>,
    );

    const headersTab = screen.getByText(/headers/i);

    expect(headersTab).toBeInTheDocument();

    let headersEditor = screen.queryByPlaceholderText(/headers \(in json format\)/i);

    expect(headersEditor).not.toBeVisible();

    await user.click(headersTab);

    headersEditor = await screen.findByPlaceholderText(/headers \(in json format\)/i);

    expect(headersEditor).toBeVisible();
  });

  it('should toggle tabbar when toggle button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <MainPage />
      </I18NProvider>,
    );

    let tabPanels = screen.queryAllByRole('tabpanel');
    expect(tabPanels).toHaveLength(0);

    const tabbarButton = screen.getByRole('button', { name: /expand tabs/i });
    expect(tabbarButton).toBeInTheDocument();

    await user.click(tabbarButton);

    expect(tabbarButton).toHaveAccessibleName(/collapse tabs/i);
    tabPanels = screen.getAllByRole('tabpanel');
    expect(tabPanels).toHaveLength(1);

    await user.click(tabbarButton);

    expect(tabbarButton).toHaveAccessibleName(/expand tabs/i);
    tabPanels = screen.queryAllByRole('tabpanel');
    expect(tabPanels).toHaveLength(0);
  });

  it('should allow user to send GraphQL requests', async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <MainPage />
      </I18NProvider>,
    );

    const graphQLQueryEditor = screen.getByPlaceholderText(/graphql query/i);
    const responseViewer = screen.getByPlaceholderText(/graphql api response/i);
    const graphQLButton = screen.getByRole('button', { name: /send request/i });

    expect(responseViewer).toHaveValue('');

    await user.click(graphQLQueryEditor);
    await user.clear(graphQLQueryEditor);
    await user.keyboard(
      'query CharacterQuery {{[Enter]character (id: 42) {{[Enter]name[Enter]}[Enter]}[Enter]',
    );
    await user.click(graphQLButton);

    const responseText = await within(responseViewer).findByText(/big head morty/i);
    expect(responseText).toBeInTheDocument();
  }, 10000);

  it('should allow user to send GraphQL requests and provide Variables', async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <MainPage />
      </I18NProvider>,
    );

    const graphQLQueryEditor = screen.getByPlaceholderText(/graphql query/i);
    const graphQLButton = screen.getByRole('button', { name: /send request/i });
    const variablesTab = screen.getByText(/variables/i);

    const responseViewer = screen.getByPlaceholderText(/graphql api response/i);
    expect(responseViewer).toHaveValue('');

    await user.click(variablesTab);
    const variablesEditor = screen.getByPlaceholderText(/variables \(in json format\)/i);

    await user.click(graphQLQueryEditor);
    await user.clear(graphQLQueryEditor);
    await user.keyboard(
      'query CharacterQuery($id: ID!) {{[Enter]character(id: $id) {{[Enter]name[Enter]}[Enter]}[Enter]',
    );
    await user.click(variablesEditor);
    await user.clear(variablesEditor);
    await user.keyboard('{{"id": 42}');
    await user.click(graphQLButton);

    const responseText = await within(responseViewer).findByText(/big head morty/i);
    expect(responseText).toBeInTheDocument();
  }, 10000);

  it('should allow user to send GraphQL requests and provide Headers', async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <MainPage />
      </I18NProvider>,
    );

    const graphQLQueryEditor = screen.getByPlaceholderText(/graphql query/i);
    const graphQLButton = screen.getByRole('button', { name: /send request/i });
    const headersTab = screen.getByText(/headers/i);

    const responseViewer = screen.getByPlaceholderText(/graphql api response/i);
    expect(responseViewer).toHaveValue('');

    await user.click(headersTab);
    const headersEditor = screen.getByPlaceholderText(/headers \(in json format\)/i);

    await user.click(graphQLQueryEditor);
    await user.clear(graphQLQueryEditor);
    await user.keyboard(
      'query CharacterQuery {{[Enter]character (id: 42) {{[Enter]name[Enter]}[Enter]}[Enter]',
    );
    await user.click(headersEditor);
    await user.clear(headersEditor);
    await user.keyboard('{{"Authorization": "Bearer SUPERUSER"}');
    await user.click(graphQLButton);

    const responseText = await within(responseViewer).findByText(/supermegagigauser/i);
    expect(responseText).toBeInTheDocument();
  });
}, 10000);
