export const getBackendURL = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return 'https://backend.staging.lemonade.social/graphql';
  } else {
    return 'https://backend.staging.lemonade.social/graphql'; // somewhat other url for production-ready backend
  }
};
