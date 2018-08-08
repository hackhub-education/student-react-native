import { init } from '@rematch/core';
import { createLogger } from 'redux-logger';
import createPersistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import models from './models';

const reduxLogger = createLogger();

const persistPlugin = createPersistPlugin({
  key: 'root',
  storage,
});

const store = init({
  models,
  redux: {
    middlewares: [reduxLogger]
  },
  plugins: [persistPlugin]
});

export const { dispatch } = store;

export default store;