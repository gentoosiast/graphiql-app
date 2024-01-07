import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import type { GraphQLResponse } from '../types';

type ApiResponse = { data: GraphQLResponse } | { error: FetchBaseQueryError | SerializedError };

type ProcessedResponse =
  | {
      data: unknown;
      errorMessage: null;
      isSuccess: true;
    }
  | { data: unknown; errorMessage: string; isSuccess: false };

export const processApiResponse = (response: ApiResponse): ProcessedResponse => {
  if ('data' in response) {
    return { data: response.data, errorMessage: null, isSuccess: true };
  } else if ('status' in response.error) {
    const errorMessage =
      typeof response.error.status === 'number'
        ? `HTTP Error, status code: ${response.error.status}`
        : response.error.error;

    return {
      data: response.error.data,
      errorMessage,
      isSuccess: false,
    };
  } else {
    return {
      data: null,
      errorMessage: response.error.message ?? 'Unknown API error',
      isSuccess: false,
    };
  }
};
