import { getLocalStorageItem, StorageKey } from './storage';

export const getLikeHistory = () => {
  try {
    return JSON.parse(getLocalStorageItem(StorageKey.Like) || '{}');
  } catch {
    return {};
  }
};
