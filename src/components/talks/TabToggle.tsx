import {useStore} from '@nanostores/preact';
import {selectedTabStore, type Tab} from './tabStore';
import './TabToggle.css';

export default function Tabs() {
  const $tab = useStore(selectedTabStore);

  const isSelected = (tabName: Tab) => {
    return $tab === tabName;
  }

  const handleClick = (tabName: Tab) => {
    selectedTabStore.set(tabName);
  }

  return (
    <>
      <div class="tabs">
        <button
          type="button"
          onClick={() => handleClick('fri')}
          className={isSelected('fri') ? 'selected' : 'default'}
        >
          前夜祭 2025/1/17 (Fri.)
        </button>
        <button
          type="button"
          onClick={() => handleClick('sat')}
          className={isSelected('sat') ? 'selected' : 'default'}
        >
          2025/1/18 (Sat.)
        </button>
      </div>
    </>
  );
}
