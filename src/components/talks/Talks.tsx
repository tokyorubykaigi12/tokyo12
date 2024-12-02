import { useStore } from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

import Talk from "./Talk"
import './Talks.css'

export default function Talks() {
  const $tab = useStore(selectedTabStore);
  return $tab === 'sat' ? (<>
    <Talk speaker={{
      name: 'Shugo Maeda',
      ImageSrc: 'https://avatars.githubusercontent.com/u/34552',
      XId: 'shugomaeda',
      GitHubId: 'shugo',
    }} session={{
      id: 1,
      title: 'Ruby製テキストエディタでの生活',
      introduction: (<>
        <p>私は2016年から自作のテキストエディタでコードを書いたり、メールやその他の文章を書いたりしています。近年Rubyに静的型の導入を求められることが多くなっていますが、静的型のメリットや関数／メソッドの型から先に考えるプログラミングの気持ちよさも理解しているものの、Rubyの魅力の一つは思いついたコードをすぐに動かして試せることにあると考えています。この発表では、Ruby製テキストエディタ上での生活を通じて、動いているオブジェクトの振る舞いを動的に変えていく楽しさについてお話したいと思います。</p>
      </>)
    }} />
  </>) : <></>
}
