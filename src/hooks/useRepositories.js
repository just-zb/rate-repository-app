import { useQuery, gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
        }
      }
    }
  }
`;

const useRepositories = ({ orderBy, orderDirection, searchKeyword } = {}) => {
  const variables = {
    orderBy: orderBy ?? 'CREATED_AT',
    orderDirection: orderDirection ?? 'DESC',
    searchKeyword: searchKeyword ?? '',
  };

  const { data, loading, fetchMore, refetch } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data?.repositories,
    loading,
    fetchMore,
    refetch,
  };
};

export default useRepositories;
