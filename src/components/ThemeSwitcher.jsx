import ToggleSwitch from './ui/ToggleSwitch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { KeyDarkTheme } from '../storage-keys';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ToggleSwitch
      label="Dark Mode"
      storageKey={KeyDarkTheme}
      color="success"
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      thumbIconOn={
        <span>
          <RiMoonFill />
        </span>
      }
      thumbIconOff={
        <span>
          <RiSunFill className="text-yellow-500" />
        </span>
      }
    />
  );
}
