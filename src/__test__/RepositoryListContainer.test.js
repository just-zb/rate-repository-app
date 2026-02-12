
import { render, screen, within } from '@testing-library/react-native';
import RepositoryListContainer from '../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor: 'end',
          startCursor: 'start',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl: 'url',
            },
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl: 'url',
            },
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);

      const repositoryItems = screen.getAllByTestId('repositoryItem');

      const [first, second] = repositoryItems;

      // First repository
      expect(within(first).getByText('jaredpalmer/formik')).toBeTruthy();
      expect(within(first).getByText('Build forms in React, without the tears')).toBeTruthy();
      expect(within(first).getByText('TypeScript')).toBeTruthy();
      expect(within(first).getByText('1619')).toBeTruthy();
      expect(within(first).getByText('21856')).toBeTruthy();
      expect(within(first).getByText('88')).toBeTruthy();
      expect(within(first).getByText('3')).toBeTruthy();

      // Second repository
      expect(within(second).getByText('async-library/react-async')).toBeTruthy();
      expect(within(second).getByText('Flexible promise-based React data loader')).toBeTruthy();
      expect(within(second).getByText('JavaScript')).toBeTruthy();
      expect(within(second).getByText('69')).toBeTruthy();
      expect(within(second).getByText('1760')).toBeTruthy();
      expect(within(second).getByText('72')).toBeTruthy();
      expect(within(second).getByText('3')).toBeTruthy();
    });
  });
});
