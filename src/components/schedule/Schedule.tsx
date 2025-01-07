import type { ComponentChildren, FunctionComponent } from 'preact';
import {useStore} from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

// for astro syntax
type Props = {
  'client:only': boolean;
  main: ComponentChildren;
  zenyasai: ComponentChildren;
}

const Schedule:FunctionComponent<Props> = (props) => {
  const $tab = useStore(selectedTabStore);
  return $tab === 'sat' ? (
    <>{props.main}</>
  ) : (
    <>{props.zenyasai}</>
  );
}

export default Schedule;
