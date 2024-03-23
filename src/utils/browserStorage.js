import { defaultSetting } from '../storage-keys';

export const setStorage = (kv) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(kv, () => {
      if (chrome.runtime.lastError) {
        console.warn(chrome.runtime.lastError.message);
        reject(chrome.runtime.lastError.message);
      }
      resolve(kv);
    });
  });
};

export const getStorage = (storageKey) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(storageKey, (data) => {
      if (chrome.runtime.lastError) {
        console.warn(chrome.runtime.lastError.message);
        reject(chrome.runtime.lastError.message);
      }
      resolve(data[storageKey] ?? defaultSetting[storageKey]);
    });
  });
};
