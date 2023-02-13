import {
  isRejectedWithValue,
  isFulfilled,
  MiddlewareAPI,
  Middleware,
} from '@reduxjs/toolkit';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!

    if (isRejectedWithValue(action)) {
      const {
        meta: {
          arg: { endpointName, type, originalArgs },
          baseQueryMeta: {
            request: { url },
          },
        },
        payload,
      } = action;

      console.log(
        `rtkQueryLogger: ERROR
    ${endpointName}`,
        {
          type,
          url,
          payload,
          params: originalArgs,
        }
      );
    }
    if (isFulfilled(action)) {
      const {
        meta: {
          arg: { endpointName, type, originalArgs },
          baseQueryMeta: {
            request: { url },
          },
        },
        payload,
      } = action;
      console.log('rtkQueryLogger: ', endpointName, {
        type,
        url,
        payload,
        params: originalArgs,
      });
    }

    return next(action);
  };
