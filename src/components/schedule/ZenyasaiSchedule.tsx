import {useStore} from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

import Talk from "./Talk";

import './Schedule.css';

export default function ZenyasaiSchedule() {
  const $tab = useStore(selectedTabStore);
  return $tab === 'fri' ? (
    <div class="schedule">
      hoge!
    </div>
  ) : <></>;
}