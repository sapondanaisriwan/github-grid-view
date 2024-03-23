import {
  KeySearchGridView,
  KeySearchHideSponsors,
  KeySearchHideTopics,
  KeySearchTruncateDesc,
} from '../../storage-keys';
import Container from '../ui/Container';
import ToggleSwitch from '../ui/ToggleSwitch';

function SearchTab() {
  return (
    <Container>
      <ToggleSwitch label="Grid View" storageKey={KeySearchGridView} />
      <ToggleSwitch
        label="Truncate Description"
        storageKey={KeySearchTruncateDesc}
      />
      <ToggleSwitch label="Hide Topics" storageKey={KeySearchHideTopics} />
      <ToggleSwitch label="Hide Sponsors" storageKey={KeySearchHideSponsors} />
    </Container>
  );
}

export default SearchTab;
