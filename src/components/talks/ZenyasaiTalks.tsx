import { useStore } from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

import Talk from "./Talk"
import './Talks.css'

import OkuramasafumiImage from "../staff/pics/okuramasafumi.jpg";

export default function ZenyasaiTalks() {
  const $tab = useStore(selectedTabStore);
  return $tab === 'fri' ? (
    <>
      <div class="talks">
        <Talk speaker={{
          name: 'おおくらまさふみ',
          GitHubId: 'okuramasafumi',
          XId: 'okuramasafumi',
          ImageSrc: OkuramasafumiImage.src,
        }} session={{
          id: 1,
          title: "Alba: Why, How and What's So Interesting",
          introduction: (<p>
          AlbaというJSONシリアライザのgemを作成・保守しています。Rubyで開発をしているとユーザーの使い勝手について考えることが多くなりますね。ここでの使い勝手というのは例えばブロックを使うことで柔軟になるAPIなどを含みますが、全体的な「良さ」、使っていて何か気持ちが良い、という感覚も含んだものです。
          AlbaはRubyプログラマにとってなるべく使いやすく直感的であるように設計されており、そのための工夫を多数含んでいます。この発表ではAlbaが生まれた経緯を振り返りつつ、Rubyistにとって興味深いであろう実装上のおもしろポイントをご紹介します。また、自作のライブラリを広く使ってもらうために行ったことなどもご紹介できればと思います。</p>)
        }} />
        <Talk speaker={{
          name: 'S.H.',
          GitHubId: 'S-H-GAMELINKS',
          ImageSrc: 'https://avatars.githubusercontent.com/u/26062441'
        }} session={{
          id: 2,
          title: 'ゆるゆるMastodon 鯖缶生活',
          introduction: (<>
            <p>2017年からRubyとMasotodonとともに暮らしている一人の鯖缶(Mastodonのサーバー管理者)の暮らしぶりをお話しします。</p>
            <p>Railsを触りはじめたばかりの頃に登場したMasotodonを軽率にはじめ、運用していく中でRubyやRailsを学び、やらかしに対応し、Rubyの開発版(masterブランチ)とMastodonの開発版(mainブランチ)でMasotodonを運用するに至ったり、いかにしてRubyやMastodon にパッチを投げるようになったのかの歴史をお話ししたいと思います。</p>
            <p>またゆるゆると鯖缶業を続けていくなかでどうスキルアップしていったのかや、エンジニアとして新しい技術を素振りできる砂場を持つことの楽しさについてもお話しします。</p>
            </>)
        }} />
        <Talk speaker={{
          name: 'Uchio Kondo',
          ImageSrc: 'https://avatars.githubusercontent.com/u/91011',
          XId: 'udzura',
          GitHubId: 'udzura',
        }} session={{
          id: 3,
          title: '超入門WebAssembly ~Rubyのコードを眺めて完全に理解しよう~',
          introduction: (<>
            <p>WebAssemblyはブラウザを飛び越えた大きな可能性を持つ技術で、Rubyをはじめ様々な言語でWebAssemblyバイナリを出力可能にする対応が進んでいます。その一方、WebAssemblyを動かすランタイム自体も様々なものがあり、Goのwazero、SwiftのWasmKitといった純粋に特定の言語で実装されたものも増えてきました。</p>
            <p>ところで、筆者は"Wardite"という名前の、Rubyに組み込み可能なWebAssemblyのランタイムを作っています。Warditeは以下のコンセプトで絶賛開発中です。</p>
            <ul>
              <li>Pure Rubyで、外部GemやC拡張の依存なしで実装</li>
              <li>Fully RBS Annotated</li>
              <li>WASI preview 1 対応</li>
              <li>利用上十分なパフォーマンス</li>
            </ul>
            <p>このトークでは、Warditeの内部のRubyのコードを通して、WebAssembly Coreにはどのような仕様があるのか、WASI（WebAssembly System Interface）とは何であるのかについて理解が深まる話をします。そして言語ランタイム、具体的にはWebAssemblyのVMを作るためにどのような実装を行ってきたかを解説します。</p>
            <p>また、Warditeの現在の開発状況や課題、将来のゴールなどを、デモも交えながらお話しします。</p>
          </>)
        }} />
        <Talk speaker={{
          name: 'わこー',
          GitHubId: 'funwarioisii',
          XId: 'funwarioisii',
          ImageSrc: 'https://avatars.githubusercontent.com/u/20943066'
        }} session={{
          id: 4,
          title: 'Discord bot ふ〇っしーとの出会いと別れ',
          introduction: (<>
            <p>2010年代前半はChatOps全盛期でした。いまでもチャットボットは開発されていますか？</p>
            <p>10年前に比べて私たちが働く環境は大きく変わりました。チャットツールでのやり取りがメインになり、リモートワークで働く人が増え、エンジニア以外も複数のSaaSを利用するようになりました。この変化を組織の成長に変えるため、2024年に新たにチャットボットのフレームワークを開発しました。</p>
            <p>本セッションでは discordrb というgemをベースにしたチャットボットフレームワークの作成時に考慮したこととその設計を紹介します。そして使っているうちに生まれた設計の歪みと新しい設計への移行、そして使われなくなっていった機能を紹介します。</p>
          </>)
        }} />
        <Talk speaker={{
          name: 'Masato Ohba',
          GitHubId: 'ohbarye',
          XId: 'ohbarye',
          ImageSrc: 'https://avatars.githubusercontent.com/u/1811616'
        }} session={{
          id: 5,
          title: 'Git scrapingで始める継続的なデータ追跡',
          introduction: (<>
            <p>Webサイトから得られる情報はアクセス時点のスナップショットに過ぎませんが、時間とともに変化する情報を継続的に追跡したり、新たな情報を検知して認知したいシーンがあります。</p>
            <p>時間とともに変化するそのようなデータを追跡するための効果的なアプローチとしてSimon Willison氏が2020年に提案したのがGit scrapingと呼ばれるスクレイピング手法です。定期的なWebスクレイピングにより収集した情報をGitによるバージョン管理することで、時系列に沿ってデータを簡易に記録できるようになります。また、GitHub ActionsなどのCI/CDシステムを組み合わせることで定期実行も行えるうえ、ATOMでのRSS配信を行うこともできます。</p>
            <p>本セッションではこのシンプルな手法を通じて、Rubyで生活を便利にする第一歩を提案します。</p>
          </>)
        }} />
        <Talk speaker={{
          name: 'ryosk7',
          GitHubId: 'ryosk7',
          XId: 'ryosk7',
          ImageSrc: 'https://avatars.githubusercontent.com/u/17314812'
        }} session={{
          id: 6,
          title: 'PicoRubyと暮らす、シェアハウスハック',
          introduction: (<p>2024年8月にWiFi対応を果たしたPicoRubyを活用し、シェアハウスの生活を便利にするIoTデバイスを開発しました。スマートロック、洗濯機・乾燥機の稼働チェッカー、トイレットペーパー購入ボタンなど、日常の小さな不便を解消するアイデアとその実装方法を紹介します。PicoRubyと共に、シェアハウス生活をより快適にするハックをお届けします。</p>)
        }} />
        <Talk speaker={{
          name: 'Yusuke Endoh',
          GitHubId: 'mame',
          XId: 'mametter',
          ImageSrc: 'https://avatars.githubusercontent.com/u/21557'
        }} session={{
          id: 7,
          title: 'An OptCarrot Retrospective',
          introduction: (
            <p>東京Ruby会議11で発表されたRubyのベンチマークプログラムOptCarrotを振り返ります。OptCarrotは、Rubyを高速化する開発者を駆り立てるためのエサとして作られ、狙い通りに多くのプログラム最適化マニアに愛され、Rubyの最適化を牽引しました。OptCarrotに釣られてできた成果を駆け足で紹介し、OptCarrotの評価・功罪を議論します。</p>
          )
        }} />
        <Talk speaker={{
          name: 'Yudai Takada (ydah)',
          GitHubId: 'ydah',
          XId: 'ydah_',
          ImageSrc: 'https://avatars.githubusercontent.com/u/13041216'
        }} session={{
          id: 8,
          title: 'Rubyでつくるパケットキャプチャツール',
          introduction: (<>
            <p>皆さんは、日々のシステム開発の中で「ソケットを扱う」ということを意識したことがあるでしょうか？</p>
            <p>ネットワークプログラミングやソケットプログラミングは、ネットワークの基礎を理解する上で重要な要素です。</p>
            <p>このセッションでは、Rubyを使ってネットワークパケットキャプチャツールを自作する過程をご紹介します。</p>
            <p>libpcapなどの既存ライブラリには頼らず、純粋にRubyのみでパケットキャプチャツールを実装することで、ネットワークデータの流れを低レベルから体感できるようなお話をしたいと思います。</p>
            <p>「Working with TCP Sockets」の翻訳版である「なるほどTCPソケット Rubyで学ぶソケットプログラミングの基礎」が今年9月に公開され、ソケットプログラミングやネットワークプログラミングに興味を持たれた方も多いのではないでしょうか。</p>
            <p>このセッションを通じて、ソケットプログラミングやネットワークプログラミングの基礎を学び、Web技術を支える要素技術への理解を深める一助になれば幸いです。</p>
          </>)
        }} />
        <Talk speaker={{
          name: 'makicamel',
          GitHubId: 'makicamel',
          XId: 'makicamel',
          ImageSrc: 'https://avatars.githubusercontent.com/u/30112374'
        }} session={{
          id: 9,
          title: 'Thinking about a map for Rails applications',
          introduction: (<>
            <p>Rails アプリケーションではモデルで概念を表します。この概念はいくつくらいあるのでしょうか。</p>
            <p>話者が勤務する会社の rails stats ではモデルは 1,345 クラスあります（2024 年 11 月現在）。人間が全てを理解するにはつらい数ですが、全てのモデルを理解してから開発を始めるという人は多くないでしょう。</p>
            <p>わたしたちはまずアプリケーションの中心となる重要な概念を理解し、そうでない概念は後追いで理解していくからです。</p>
            <p>ところで、日本には多くの市があります。政府統計によると 2024 年時点で 792 の市があります<sup><a href='#maki-fn1' id="maki-ref1">1</a></sup>。</p>
            <p>ここで Google マップを開いてみましょう。数度ズームアウトすると日本の全体像が現れます。「東京」「大阪」「札幌」という都市が表示され、これらが重要な都市として扱われていることがわかります。ズームインすると次に重要な都市と幹線道路が現れます。</p>
            <p>Google マップのようにズームイン・ズームアウトで重要なモデルとリレーション（つまり ER 図ですね）を見られるとそれは Rails アプリケーションの「地図」になるのではないでしょうか。そんな Gem を作っている話をします。</p>
            <p id="maki-fn1"><a href="#maki-ref1">[1]</a>: <a href="https://www.e-stat.go.jp/municipalities/number-of-municipalities">https://www.e-stat.go.jp/municipalities/number-of-municipalities</a></p>
          </>)
        }} />
        <Talk speaker={{
          name: 'alpaca-tc',
          GitHubId: 'alpaca-tc',
          XId: 'alpaca_tc',
          ImageSrc: 'https://avatars.githubusercontent.com/u/1688137'
        }} session={{
          id: 10,
          title: "Rubyと暮らし、OSSに貢献し、登壇する ── 半年間続けた「OSSやっていきの集い」の成果と学び",
          introduction: (
            <>
              <p>あなたの所属するエンジニア組織では、日々のOSS活動が賞賛され、外部登壇やプロポーザル提出に対して先輩登壇者やプロの編集者からサポートを受けられるような環境は整っていますか？</p>
              <p>SmartHRでは、Rubyの会社として長年Rubyコミュニティへのスポンサー活動やOSSへの貢献を行ってきましたが、これまでは会社全体で活動をサポートする環境は十分に整備されておらず、各エンジニアの自主的な努力に委ねられていました。</p>
              <p>そこで、約半年前に有志のプロジェクト「OSSやっていきの集い」が立ち上がり、社内のエンジニアがOSS貢献をより積極的に行い、社外への発信をサポートする仕組みが生まれました。</p>
              <p>このトークでは、「OSSやっていきの集い」の立ち上げから半年間で得られた成果や学びについてお話しします。</p>
            </>
          )
        }} />
      </div>
    </>
  ) : <></>
}
