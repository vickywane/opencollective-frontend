import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

/**
 * An helper to work with dynamic paginated lists coming from GraphQL, intended to reduce
 * the load on server by loading a bigger batch at the start and updating the list in cache manually.
 */
export const useLazyGraphQLPaginatedResults = (paginatedResults, limit) => {
  if (!paginatedResults) {
    return {
      nodes: [],
      totalCount: 0,
      offset: 0,
      limit,
    };
  }

  return {
    ...paginatedResults,
    nodes: paginatedResults.nodes.slice(0, limit),
    totalCount: paginatedResults.totalCount,
    limit,
  };
};
