import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers';

import { DocsSection } from './DocsSection';

const schema = {
  directives: [],
  mutationType: null,
  queryType: { kind: 'OBJECT' as const, name: 'Query' },
  subscriptionType: null,
  types: [
    {
      description: 'Type1 description',
      fields: [
        {
          args: [],
          description: 'field1 description',
          name: 'field1',
          type: {
            kind: 'SCALAR' as const,
            name: 'field1Type',
            ofType: null,
          },
        },
      ],
      kind: 'SCALAR' as const,
      name: 'Type1',
      possibleTypes: [],
    },
    { kind: 'SCALAR' as const, name: 'Type2', possibleTypes: [] },
  ],
};

describe('DocsSection', () => {
  it('should display all provided types', () => {
    const schema = {
      directives: [],
      mutationType: null,
      queryType: { kind: 'OBJECT' as const, name: 'Query' },
      subscriptionType: null,
      types: [
        { kind: 'SCALAR' as const, name: 'Type1', possibleTypes: [] },
        { kind: 'SCALAR' as const, name: 'Type2', possibleTypes: [] },
      ],
    };

    render(
      <I18NProvider>
        <DocsSection isOpen={true} onClose={() => {}} schema={schema} />
      </I18NProvider>,
    );

    expect(screen.getByText('Type1')).toBeInTheDocument();
    expect(screen.getByText('Type2')).toBeInTheDocument();
  });

  it('should display type details after clicking on type name', async () => {
    const user = userEvent.setup();
    const schema = {
      directives: [],
      mutationType: null,
      queryType: { kind: 'OBJECT' as const, name: 'Query' },
      subscriptionType: null,
      types: [
        {
          description: 'Type1 description',
          fields: [
            {
              args: [],
              name: 'field1',
              type: {
                kind: 'SCALAR' as const,
                name: 'Type2',
                ofType: null,
              },
            },
          ],
          kind: 'SCALAR' as const,
          name: 'Type1',
          possibleTypes: [],
        },
        { kind: 'SCALAR' as const, name: 'Type2', possibleTypes: [] },
      ],
    };

    render(
      <I18NProvider>
        <DocsSection isOpen={true} onClose={() => {}} schema={schema} />
      </I18NProvider>,
    );

    await user.click(screen.getByText('Type1'));

    expect(screen.getByRole('heading', { name: 'Type1' })).toBeInTheDocument();
    expect(screen.getByText('Type1 description')).toBeInTheDocument();
    expect(screen.getByText('field1')).toBeInTheDocument();
  });

  it('should display field details after clicking on field name', async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <DocsSection isOpen={true} onClose={() => {}} schema={schema} />
      </I18NProvider>,
    );

    await user.click(screen.getByText('Type1'));
    await user.click(screen.getByText('field1'));

    expect(screen.getByRole('heading', { name: 'field1' })).toBeInTheDocument();
    expect(screen.getByText('field1 description')).toBeInTheDocument();
    expect(screen.getByText('field1Type')).toBeInTheDocument();
  });

  it('should go back to type list after clicking on back button', async () => {
    const user = userEvent.setup();

    render(
      <I18NProvider>
        <DocsSection isOpen={true} onClose={() => {}} schema={schema} />
      </I18NProvider>,
    );

    await user.click(screen.getByText('Type1'));
    await user.click(screen.getByText('Docs'));

    expect(screen.getByRole('heading', { name: /all schema types/i })).toBeInTheDocument();
    expect(screen.getByText('Type1')).toBeInTheDocument();
    expect(screen.getByText('Type2')).toBeInTheDocument();
  });
});
