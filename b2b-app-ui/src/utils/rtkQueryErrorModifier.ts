import { SerializedError } from '@reduxjs/toolkit';
import { RequestError } from '../interfaces/globalInterfaces';

export const rtkQueryErrorHandler = (error: RequestError | undefined) => {
  if (!error) {
    return {};
  }
  if ('data' in error) {
    // TypeScript will handle it as `FetchBaseQueryError` from now on.
    return {
      status: error.status,
      message: error.data.message || 'Something went wrong',
    };
  }
};
