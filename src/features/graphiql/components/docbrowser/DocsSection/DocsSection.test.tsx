import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
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
          args: [{ description: null, name: 'arg', type: { name: 'String' } }],
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
      <MemoryRouter>
        <I18NProvider>
          <DocsSection
            isOpen={true}
            onClose={() => {}}
            schema={schema}
            searchParams={new URLSearchParams('')}
          />
        </I18NProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText('Type1')).toBeInTheDocument();
    expect(screen.getByText('Type2')).toBeInTheDocument();
  });

  it('should display type details when getting search params with type name', () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <DocsSection
            isOpen={true}
            onClose={() => {}}
            schema={schema}
            searchParams={new URLSearchParams('?type=Type1')}
          />
        </I18NProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Type1' })).toBeInTheDocument();
    expect(screen.getByText('Type1 description')).toBeInTheDocument();
    expect(screen.getByText('field1')).toBeInTheDocument();
  });

  it('should display field details when getting search params with type and field', () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <DocsSection
            isOpen={true}
            onClose={() => {}}
            schema={schema}
            searchParams={new URLSearchParams('?type=Type1&field=field1')}
          />
        </I18NProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'field1' })).toBeInTheDocument();
    expect(screen.getByText('field1 description')).toBeInTheDocument();
    expect(screen.getByText('field1Type')).toBeInTheDocument();
  });
});
