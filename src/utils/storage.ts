export const StorageKey = {
  Like: 'book:like',
  SearchHistory: 'book:search-history',
};

export const getLocalStorageItem = (key: string) => window.localStorage.getItem(key);

export const setLocalStorageItem = (key: string, value: string) => window.localStorage.setItem(key, value);

export const removeLocalStorageItem = (key: string) => window.localStorage.removeItem(key);

export const clearLocalStorageItems = () => window.localStorage.clear();
