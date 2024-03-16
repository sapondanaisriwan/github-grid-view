import { cn, Switch } from '@nextui-org/react';
import { useStorageState } from '../../hooks/useStorage';

function ToggleSwitch({ label, description, storageKey, color, thumbIconOn, thumbIconOff, onChange }) {
  const [isSelected, setIsSelected, isLoaded] = useStorageState(storageKey);

  return (
    <div>
      {isLoaded && (
        <Switch
          isSelected={isSelected}
          onValueChange={setIsSelected}
          size="sm"
          color={color}
          onChange={onChange}
          thumbIcon={isSelected ? thumbIconOn : thumbIconOff}
          classNames={{
            base: cn(
              'inline-flex flex-row-reverse w-full max-w-md bg-content1 items-center hover:bg-content1/50 dark:hover:bg-content2',
              'justify-between cursor-pointer rounded-lg gap-1 p-3',
            ),
            wrapper: 'mr-0',
          }}
        >
          <div className="flex flex-col gap-1">
            <p className="text-medium">{label}</p>
            {description && <p className="text-tiny text-default-400">{description}</p>}
          </div>
        </Switch>
      )}
    </div>
  );
}

export default ToggleSwitch;
