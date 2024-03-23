import {
  KeyRepoGridView,
  KeyRepoHideForked,
  KeyRepoHideHelpWanted,
  KeyRepoHideLicense,
  KeyRepoHideTopics,
  KeyRepoShowNoDesc,
  KeyRepoShowRepoIcon,
  KeyRepoTruncateDesc,
} from '../../storage-keys';
import Container from '../ui/Container';
import ToggleSwitch from '../ui/ToggleSwitch';

function RepositoriesTab() {
  return (
    <Container>
      <ToggleSwitch label="Grid View" storageKey={KeyRepoGridView} />
      <ToggleSwitch
        label="Show Repository Icon"
        storageKey={KeyRepoShowRepoIcon}
      />
      <ToggleSwitch
        label="Truncate Description"
        storageKey={KeyRepoTruncateDesc}
      />
      <ToggleSwitch
        label="No Description Marked"
        storageKey={KeyRepoShowNoDesc}
      />
      <ToggleSwitch label="Hide Forked" storageKey={KeyRepoHideForked} />
      <ToggleSwitch label="Hide Topics" storageKey={KeyRepoHideTopics} />
      <ToggleSwitch label="Hide License" storageKey={KeyRepoHideLicense} />
      <ToggleSwitch
        label="Hide Help Wanted"
        storageKey={KeyRepoHideHelpWanted}
      />
    </Container>
  );
}

export default RepositoriesTab;
