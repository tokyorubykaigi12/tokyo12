import {useStore} from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

import Talk from "./Talk";

import './Schedule.css';

export default function Schedule() {
  const $tab = useStore(selectedTabStore);
  return $tab === 'sat' ? (
    <div class="schedule">
    <div class="timetable">
      <table>
        <thead>
          <tr>
            <th class="tt-time" />
            <th class="tt-4">4F Hall</th>
            <th class="tt-3">3F Gallery</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td class="tt-time">10:30</td>
          <td class="tt-event">Door Open / 受付開始</td>
          <td class="tt-no-left-line"/>
        </tr>
        <tr>
          <td class="tt-timerange">
            <p>11:10</p>
            <p>-</p>
            <p>11:45</p>
          </td>
          <td class="tt-talk">
            <Talk speaker={{
              name: '前田 修吾',
              ImageSrc: 'https://avatars.githubusercontent.com/u/34552',
              XId: 'shugomaeda',
              GitHubId: 'shugo',
            }} session={{
              keynote: true,
              id: 11,
              title: 'Ruby製テキストエディタでの生活',
            }} />
          </td>
          <td class="tt-talk">
            <Talk speaker={{
              name: 'ぺん！',
              GitHubId: 'tompng',
              XId: 'tompng',
              ImageSrc: 'https://avatars.githubusercontent.com/u/1780201'
            }} session={{
              id: 12,
              title: '全てが同期する! Railsとフロントエンドのシームレスな連携の再考',
            }} />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>
  ) : <></>;
}
