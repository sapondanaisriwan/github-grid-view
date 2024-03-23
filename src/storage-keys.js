// Popover
export const KeyExtensionStatus = 'extensionStatus';
export const KeyDarkTheme = 'darkTheme';

// Repositories Tab
export const KeyRepoGridView = 'repoGridView';
export const KeyRepoShowRepoIcon = 'repoShowRepoIcon';
export const KeyRepoTruncateDesc = 'repoTruncateDesc';
export const KeyRepoShowNoDesc = 'repoShowNoDesc';
export const KeyRepoHideForked = 'repoHideForked';
export const KeyRepoHideTopics = 'repoHideTopics';
export const KeyRepoHideHelpWanted = 'repoHideHelpWanted';
export const KeyRepoHideLicense = 'repoHideLicense';

// Star Tab
export const KeyStarGridView = 'starGridView';
export const KeyStarTruncateDesc = 'starTruncateDesc';
export const KeyStarShowRepoIcon = 'starShowRepoIcon';
export const KeyStarShowNoDesc = 'starShowNoDesc';
export const KeyStarHideSponsors = 'starHideSponsors';
export const KeyStarHideAuthor = 'starHideAuthor';

// Search Tab
export const KeySearchGridView = 'searchGridView';
export const KeySearchHideSponsors = 'searchHideSponsors';
export const KeySearchHideTopics = 'searchHideTopics';
export const KeySearchTruncateDesc = 'searchTruncateDesc';

export const settingKeys = [
  KeyExtensionStatus,
  KeyDarkTheme,

  KeyRepoGridView,
  KeyRepoShowRepoIcon,
  KeyRepoTruncateDesc,
  KeyRepoShowNoDesc,
  KeyRepoHideForked,
  KeyRepoHideTopics,
  KeyRepoHideHelpWanted,
  KeyRepoHideLicense,

  KeyStarGridView,
  KeyStarShowRepoIcon,
  KeyStarTruncateDesc,
  KeyStarShowNoDesc,
  KeyStarHideSponsors,
  KeyStarHideAuthor,

  KeySearchGridView,
  KeySearchHideSponsors,
  KeySearchHideTopics,
  KeySearchTruncateDesc,
];

export const defaultSetting = {
  [KeyExtensionStatus]: true,
  [KeyDarkTheme]: true,

  // Repository tab
  [KeyRepoGridView]: true,
  [KeyRepoShowRepoIcon]: true,
  [KeyRepoTruncateDesc]: true,
  [KeyRepoShowNoDesc]: true,
  [KeyRepoHideForked]: false,
  [KeyRepoHideTopics]: true,
  [KeyRepoHideHelpWanted]: true,
  [KeyRepoHideLicense]: true,

  // Star Tab
  [KeyStarGridView]: true,
  [KeyStarShowRepoIcon]: true,
  [KeyStarTruncateDesc]: true,
  [KeyStarShowNoDesc]: true,
  [KeyStarHideSponsors]: true,
  [KeyStarHideAuthor]: true,

  // Search Tab
  [KeySearchGridView]: true,
  [KeySearchHideSponsors]: true,
  [KeySearchHideTopics]: true,
  [KeySearchTruncateDesc]: true,
};
