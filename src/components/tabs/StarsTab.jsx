import {
  KeyStarGridView,
  KeyStarHideAuthor,
  KeyStarHideSponsors,
  KeyStarShowNoDesc,
  KeyStarShowRepoIcon,
  KeyStarTruncateDesc,
} from '../../../storage-keys';
import Container from '../ui/Container';
import ToggleSwitch from '../ui/ToggleSwitch';

function StarsTab() {
  return (
    <Container>
      <ToggleSwitch label="Grid View" storageKey={KeyStarGridView} />
      <ToggleSwitch label="Show Repository Icon" storageKey={KeyStarShowRepoIcon} />
      <ToggleSwitch label="Truncate Description" storageKey={KeyStarTruncateDesc} />
      <ToggleSwitch label="No Description Marked" storageKey={KeyStarShowNoDesc} />
      <ToggleSwitch label="Hide Author" storageKey={KeyStarHideAuthor} />
      <ToggleSwitch label="Hide Sponsors" storageKey={KeyStarHideSponsors} />
    </Container>
  );
}

export default StarsTab;
