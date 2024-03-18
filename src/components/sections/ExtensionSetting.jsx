import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import React from 'react';
import { LuSettings } from 'react-icons/lu';
import { RiExternalLinkLine } from 'react-icons/ri';
import { KeyExtensionStatus } from '../../../storage-keys';
import { ThemeSwitcher } from '../ThemeSwitcher';
import ToggleSwitch from '../ui/ToggleSwitch';

function ExtensionSetting() {
  return (
    <Popover placement="bottom" offset={8}>
      <PopoverTrigger>
        <div className="cursor-pointer">
          <LuSettings size={24} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <div className="flex w-full flex-col gap-1">
          <ToggleSwitch label="Extension Enabled" storageKey={KeyExtensionStatus} color="success" />
          <ThemeSwitcher />

          <a href="https://chromewebstore.google.com/detail/grid-view-for-github/ecmbjjghcphgnpalajeabaedhfkpghdn" target="_blank" rel="noopener noreferrer">
            <Button fullWidth color="" className="items-center justify-between p-3 hover:bg-content2">
              <span className="text-medium">Rate the extension</span>
              <RiExternalLinkLine size={16} />
            </Button>
          </a>

          <a href="https://github.com/sapondanaisriwan/github-grid-view" target="_blank" rel="noopener noreferrer">
            <Button fullWidth color="" className="items-center justify-between p-3 hover:bg-content2">
              <span className="text-medium">Help & Feedback</span>
              <RiExternalLinkLine size={16} />
            </Button>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ExtensionSetting;
