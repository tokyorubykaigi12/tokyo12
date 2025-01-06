import {useStore} from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

import Talk from "./Talk";

import './Schedule.css';

export default function Schedule() {
  const $tab = useStore(selectedTabStore);
  return $tab === 'sat' ? (
    <div class="schedule">
      fuga!
    </div>
  ) : <></>;
}
