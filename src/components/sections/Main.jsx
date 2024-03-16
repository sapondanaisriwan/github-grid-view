import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { RiGitRepositoryFill, RiStarLine } from 'react-icons/ri';
import RepositoriesTab from '../tabs/RepositoriesTab';
import SearchTab from '../tabs/SearchTab';
import StarsTab from '../tabs/StarsTab';

function Main() {
  const [selected, setSelected] = useState('repositories');

  return (
    <div className="flex w-full flex-col-reverse">
      <Tabs
        fullWidth
        size="lg"
        aria-label="Tabs form"
        color="primary"
        radius="none"
        selectedKey={selected}
        onSelectionChange={setSelected}
        classNames={{
          tab: 'h-14',
          tabList: 'p-0 bg-content1 dark:bg-content2',
          panel: 'max-h-[512px] px-4 py-2 overflow-auto bg-content2 dark:bg-background',
        }}
      >
        <Tab
          key="repositories"
          title={
            <div className="flex flex-col items-center">
              <RiGitRepositoryFill size={24} />
              <span className="text-sm">Repositories</span>
            </div>
          }
        >
          <RepositoriesTab />
        </Tab>

        <Tab
          key="stars"
          title={
            <div className="flex flex-col items-center">
              <RiStarLine size={24} />
              <span className="text-sm">Stars</span>
            </div>
          }
        >
          <StarsTab />
        </Tab>

        <Tab
          key="search"
          title={
            <div className="flex flex-col items-center">
              <IoSearch size={24} />
              <span className="text-sm">Search</span>
            </div>
          }
        >
          <SearchTab />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Main;
