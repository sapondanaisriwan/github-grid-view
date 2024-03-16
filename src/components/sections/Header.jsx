import ExtensionSetting from './ExtensionSetting';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import LogoIcon from '../icons/LogoIcon';

function Header() {
  return (
    <Navbar className="dark:bg-content2">
      <NavbarBrand className="gap-2">
        <span>
          <LogoIcon />
        </span>
        <p className="select-none text-lg font-semibold">Grid View</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <ExtensionSetting />
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
