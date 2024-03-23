import { injectAllChanges } from './modules/options/optionChanges';
import { getAllStorage, getStorage } from './modules/utils/storage';
import { KeyExtensionStatus, settingKeys } from '../storage-keys';

chrome.storage.onChanged.addListener(async (changes) => {
  if (changes[KeyExtensionStatus]) {
    window.location.reload();
    return;
  }

  const extensionStatus = await getStorage(KeyExtensionStatus);

  // will return if the extension is disabled
  if (!extensionStatus) {
    return;
  }

  for (let [key, { newValue }] of Object.entries(changes)) {
    injectAllChanges({ [key]: newValue });
  }
});

const run = async () => {
  const extensionStatus = await getStorage(KeyExtensionStatus);
  // will return if the extension is disabled
  if (!extensionStatus) {
    return;
  }

  const allData = await getAllStorage(settingKeys);
  injectAllChanges(allData);
};

run();
