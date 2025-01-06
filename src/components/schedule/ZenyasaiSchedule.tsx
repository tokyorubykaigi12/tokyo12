import {useStore} from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

import MiniPanel from './MiniPanel';
import Talk from "./Talk";

import ArrowUpRightFromSquare from '../icons/arrow-up-right-from-square.svg';
import OkuramasafumiImage from "../staff/pics/okuramasafumi.jpg";

import './Schedule.css';

export default function ZenyasaiSchedule() {
  const $tab = useStore(selectedTabStore);
  return $tab === 'fri' ? (
    <div class="schedule">
      <div class="ann">
        <MiniPanel>
          <div>
            <div class="ann-title">
              <h3>東京Ruby会議12 前夜祭</h3>
            </div>
            <div class="ann-body">
              <p>
                前夜祭には当日チケットを購入した方のみご参加いただけます。詳細は connpass をご確認ください。
              </p>
              <div class="ann-detail">
                <div class="ann-button">
                  <a
                    href="https://connpass.com/event/339170/"
                    target="_blank"
                    rel="noreferrer"
                  >詳細を確認する</a>
                  <img src={ArrowUpRightFromSquare.src} alt="link icon"/>
                </div>
              </div>
            </div>
          </div>
        </MiniPanel>
      </div>
      <div class="timetable">
        <table>
          <tbody>
            <tr>
              <td class="tt-time">10:30</td>
              <td class="tt-event">Door Open / 受付開始</td>
            </tr>
            <tr>
              <td class="tt-timerange">
                <p>11:10</p>
                <p>-</p>
                <p>11:45</p>
              </td>
              <td class="tt-talk">
                <Talk speaker={{
                  name: 'おおくらまさふみ',
                  GitHubId: 'okuramasafumi',
                  XId: 'okuramasafumi',
                  ImageSrc: OkuramasafumiImage.src,
                }} session={{
                  keynote: true,
                  id: 1,
                  title: "Alba: Why, How and What's So Interesting",
                }}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : <></>;
}
