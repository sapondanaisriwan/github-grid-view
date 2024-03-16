import {
  KeyRepoGridView,
  KeyRepoHideForked,
  KeyRepoHideHelpWanted,
  KeyRepoHideLicense,
  KeyRepoHideTopics,
  KeyRepoShowNoDesc,
  KeyRepoShowRepoIcon,
  KeyRepoTruncateDesc,
  KeySearchGridView,
  KeySearchHideSponsors,
  KeySearchHideTopics,
  KeySearchTruncateDesc,
  KeyStarGridView,
  KeyStarHideAuthor,
  KeyStarHideSponsors,
  KeyStarShowNoDesc,
  KeyStarShowRepoIcon,
  KeyStarTruncateDesc,
} from '../../../storage-keys';
import repoStyles from '../../styles/repoTabStyles';
import searchStyles from '../../styles/searchTabStyles';
import starStyles from '../../styles/starTabStyles';
import { injectStyle } from '../utils/injectStyle';
import { removeEleById } from '../utils/removeElement';

const optionStyles = {
  [KeyRepoGridView]: repoStyles.gridView,
  [KeyRepoShowRepoIcon]: repoStyles.showRepoIcon,
  [KeyRepoTruncateDesc]: repoStyles.truncateDesc,
  [KeyRepoShowNoDesc]: repoStyles.showNoDesc,
  [KeyRepoHideForked]: repoStyles.hideForked,
  [KeyRepoHideTopics]: repoStyles.hideTopics,
  [KeyRepoHideHelpWanted]: repoStyles.hideHelpWanted,
  [KeyRepoHideLicense]: repoStyles.hideLicense,

  [KeyStarGridView]: starStyles.gridView,
  [KeyStarShowRepoIcon]: starStyles.showRepoIcon,
  [KeyStarTruncateDesc]: starStyles.truncateDesc,
  [KeyStarHideAuthor]: starStyles.hideAuthor,
  [KeyStarHideSponsors]: starStyles.hideSponsors,
  [KeyStarShowNoDesc]: starStyles.showNoDesc,

  [KeySearchGridView]: searchStyles.gridView,
  [KeySearchTruncateDesc]: searchStyles.truncateDesc,
  [KeySearchHideSponsors]: searchStyles.hideSponsors,
  [KeySearchHideTopics]: searchStyles.hideTopics,
};

export const injectAllChanges = (data) => {
  Object.keys(data).forEach((key) => {
    const toggle = data[key];
    const styleId = key;
    const style = optionStyles[key];

    if (!style) {
      return;
    }

    if (!toggle) {
      removeEleById(styleId);
      return;
    }

    injectStyle(styleId, style);
  });
};
