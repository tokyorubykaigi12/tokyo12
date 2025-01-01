import { useStore } from '@nanostores/preact';
import { selectedTabStore } from './tabStore';

import Talk from "./Talk"
import './Talks.css'
import PrimaryLogoRedImage from "../../imgs/primary_logo_red.png";

export default function Talks() {
  const $tab = useStore(selectedTabStore);
  return $tab === 'sat' ? (<div class="talks">
    <Talk speaker={{
      name: '前田 修吾',
      ImageSrc: 'https://avatars.githubusercontent.com/u/34552',
      XId: 'shugomaeda',
      GitHubId: 'shugo',
    }} session={{
      id: 11,
      title: 'Ruby製テキストエディタでの生活',
      introduction: (<>
        <p>私は2016年から自作のテキストエディタでコードを書いたり、メールやその他の文章を書いたりしています。近年Rubyに静的型の導入を求められることが多くなっていますが、静的型のメリットや関数／メソッドの型から先に考えるプログラミングの気持ちよさも理解しているものの、Rubyの魅力の一つは思いついたコードをすぐに動かして試せることにあると考えています。この発表では、Ruby製テキストエディタ上での生活を通じて、動いているオブジェクトの振る舞いを動的に変えていく楽しさについてお話したいと思います。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'ぺん！',
      GitHubId: 'tompng',
      XId: 'tompng',
      ImageSrc: 'https://avatars.githubusercontent.com/u/1780201'
    }} session={{
      id: 12,
      title: '全てが同期する! Railsとフロントエンドのシームレスな連携の再考',
      introduction: (<>
        <p>チャットなどのように画面に変更をリアルタイムに反映させたい時、どのように作りますか？</p>
        <p>チャット以外のコラボレーションツールを作る場合はどうでしょう。もっと多くのカラムやモデルでも変更をリアルタイムに反映させたいとしたらどのように設計しますか？ 今後さらにカラムやモデルが増えた時、その設計は複雑さが爆発して破綻しませんか？</p>
        <p>実は、このような一見複雑に見えるWebアプリケーションでは、設計を破綻させずにRailsとReactをかなりシンプルに連携できます。このトークでは、どのような設計をすれば良いか複数の方法について解説します。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'ryopeko',
      GitHubId: 'ryopeko',
      XId: 'ryopeko',
      ImageSrc: 'https://avatars.githubusercontent.com/u/192008'
    }} session={{
      id: 13,
      title: 'functionalなアプローチで動的要素を排除する',
      introduction: (<>
        <p>Rubyには動的な処理に必要な機能がたくさん盛り込まれており、しかもそれが他言語にはない魅力であり強力な武器でもあります。しかしデメリットとして可読性の低下や処理の見通しを低下させることになることがあります。Rubyでは強い力には責任が伴うという言葉の元、使う側にも必要な能力を求めている実情もあると思います。</p>
        <p>しかし場合によりRubyで実装する機能に関数型プログラミングのアプローチを取り入れることにより、前述したデメリットを減らせるのではないかと考え実際に機能開発に盛り込んだ経験についてお話しします。</p>
        <p>更にこのセッションでは実例も交えて、動的なアプローチの場合との対比を行い、どのような場面で有効かを考えるきっかけにしたいと思っています。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'tokujiros',
      GitHubId: 'xord',
      XId: 'tokujiros',
      ImageSrc: 'https://pbs.twimg.com/profile_images/1609795760023035904/EwWIRSR3_400x400.jpg'
    }} session={{
      id: 14,
      title: 'ゼロからの、2Dレトロゲームエンジンの作り方',
      introduction: (<>
        <p>現在 Processing をベースとした CRuby 用の 2Dレトロゲームエンジンを作っています。</p>
        <p>本発表では、OpenGL を抽象化した自作描画エンジンと、各 OS のネイティブ API を使って作られた自作 GUI ツールキットを使って、どのようにゲームエンジンを作っているかを紹介いたします。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'yumu',
      XId: 'myumura3',
      ImageSrc: 'https://pbs.twimg.com/profile_images/1655979998120153093/PhhorRRx_400x400.jpg'
    }} session={{
      id: 15,
      title: 'Ruby×AWSで作る動画変換システム',
      introduction: (<>
        <p>動画変換システムというと、既存のSaaSを使うか、低レイヤーな実装に踏み込むかの二択と思われがちです。しかし、RubyのエコシステムとAWSの各種サービスを活用することで、より手軽に独自の動画変換システムを構築できます。</p>
        <p>本セッションでは、ハンドメイドECサービス「minne」における動画変換システムの実装方法をご紹介します。</p>
        <p>動画変換の核となるFFmpegをRubyから扱う方法、変換処理を担うShoryuken workerの実装、そして実運用に耐えうる設計の作り方まで、具体的なコードを交えながら解説します。開発環境はDockerで簡単に構築でき、ローカルでの開発から本番展開まで、スムーズに進められる構成をお見せします。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'moznion',
      GitHubId: 'moznion',
      XId: 'moznion',
      ImageSrc: 'https://avatars.githubusercontent.com/u/1422834'
    }} session={{
      id: 16,
      title: 'simple組み合わせ村から大都会Railsにやってきた俺は',
      introduction: (<>
        <p>Ruby on Railsといえばご存知フルスタックフレームワークであり、昨今ではThe One Person Frameworkでおなじみとなっています。</p>
        <p>発表者が本格的にRailsアプリを触りはじめたのは去年からです。それまではPerlやGoなどの上でミニマルなフレームワークを用いてwebアプリケーションを開発、あるいは各プロジェクトごとにシンプルなコンポーネントを組み合わせることで専用のフレームワークを作ってその上でアプリケーションを開発していました。</p>
        <p>一方Railsはなんでも持っているフルスタックフレームワークであり、いわゆる "easy" 寄りのフレームワークとされている認識です。</p>
        <p>つまりこれは巷でよく対比として用いられる "Simple vs Easy" の構図であると捉えられると思います。もちろんsimpleにもeasyにも双方にpros/consがあり一概にどちらが良いと断じることができるものではありませんが、easy寄りのRailsに触れ親しむことでなんとなくその利点について実感を持てるようになってきました。</p>
        <p>一方、Webアプリ開発はそういったSimpleとEasyのみで二分し判断できるものではないと考えています。本発表では様々な対比観点からフルスタック/ミニマルの双方を検討し、Webアプリケーション開発に及ぼす影響について考察したいと考えています。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'Hiromi Ogawa',
      GitHubId: 'coord-e',
      XId: 'coord_e',
      ImageSrc: 'https://avatars.githubusercontent.com/u/16184855'
    }} session={{
      id: 17,
      title: 'Writing PDFs in Ruby DSL',
      introduction: (<>
        <p>Portable Document Format (PDF) は、広く使われているドキュメント交換のためのファイル形式です。PDF を日常的に利用している人でも、自分で1から PDF を作成したことがある人は少ないのではないでしょうか？</p>
        <p>この発表では、そんな身近でありながら謎めいた PDF を出力する簡単なプログラムを実装する流れを紹介します。レギュレーションは次の通り:</p>
        <ul>
          <li>出力した PDF が Adobe Acrobat Reader で開ける</li>
          <li>消費メモリが書くドキュメントの大きさに依存しない（ストリーミング）</li>
          <li>Ruby DSL を使う</li>
        </ul>
        <p>PDF の構造について簡単に解説しながら、まずは PDF の内部構造を反映した低レベルな DSL を構築します。DSL による適度な抽象化は PDF の構造の理解を助けるでしょう。そして、もちろん Ruby は DSL の構築にぴったりですが、今回のようにデータ形式のストリーミング生成を行う場合は特に相性が良いのです。その後、低レベル DSL の上に抽象度を高めた DSL を構築し、よりわかりやすく使いやすい API を模索します。</p>
        <p>発表を通して、Ruby DSL によるデータ構造を介さない抽象化のたのしみを共有します。きっとあなたも日常の抽象化に Ruby DSL を取り入れたくなるでしょう。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'buty4649',
      GitHubId: 'buty4649',
      XId: 'buty4649',
      ImageSrc: 'https://avatars.githubusercontent.com/u/1275643'
    }} session={{
      id: 18,
      title: 'mrubyでワンバイナリーなテキストフィルタツールを作った',
      introduction: (<>
        <p>mrubyを用いたワンバイナリーアプリケーションの実装手法に焦点を当て、テキスト処理ツールの開発を例に、シンプルなアプリケーションの作成方法について解説します。一般的なRubyアプリケーションはスクリプト言語としての性質からRubyの実行環境が必要ですが、mrubyを活用することで単体で実行できるバイナリ形式のツールを実現できます。</p>
        <p>この発表では、実際に私がOSSとして公開しているテキストフィルタツールを題材に、mrubyによるビルドプロセス、ワンバイナリー化における設計上の工夫や実装手法、クロスプラットフォーム対応や配布手順の最適化について紹介します。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'morihirok',
      GitHubId: 'morihirok',
      XId: '_morihirok',
      ImageSrc: 'https://avatars.githubusercontent.com/u/18398225'
    }} session={{
      id: 19,
      title: '混沌とした例外処理とエラー監視に秩序をもたらす',
      introduction: (<>
        <p>アプリケーション開発において例外処理は重要です。一方で複数人でアプリケーション開発を行う際に、例外処理のコンセンサスが意外と取れておらず、結果としてアプリケーションの監視において苦労することがこれまでの経験上でありました。</p>
        <p>いつの間にか全て握りつぶされた例外処理、誰も監視していないログに密かに送り続けられていたエラーログ、長年そのアプリケーション開発に携わる人のみぞ知る「このエラーは無視して良いエラーです」という伝承された知識。</p>
        <p>誰もが一度はこのような経験をしたことがあるのではないでしょうか？</p>
        <p>この発表では例外処理について整理し、アプリケーション開発において持続的なエラー監視をするための考え方や、混沌としてしまったエラー監視にある程度の秩序をもたらし、楽しくRubyと暮らすべく私が工夫した点についてお話しします。</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'Kasumi Hanazuki',
      GitHubId: 'hanazuki',
      XId: 'k_hanazuki',
      ImageSrc: 'https://avatars.githubusercontent.com/u/1135690'
    }} session={{
      id: 20,
      title: 'Ruby meets secure DNS and modern Internet protocols',
      introduction: (<>
        <p>DNSは1980年代に発明された名前解決システムながら，その通信プロトコルは開発当初とほぼ変わらない形で，今日までインターネットを支えつづけています．一方で，かつて平和だったインターネットには多くのならず者が出没するようになりました．通信の改竄・盗聴，そしてDDoS――DNSはいま脅威に曝されているのです．</p>
        <p>これらの当初は想定されていなかった脅威に対抗すべく，DNSにはさまざまなセキュリティ拡張が提案されてきました．この数年では，伝統的な平文のプロトコルから暗号化に対応した新しいプロトコルへアップグレードをする枠組みもIETFで文書化され，DNSは漸進的に安全なプロトコルへ移行してゆくと期待されています．</p>
        <p>本発表では，DNSのプライバシーを改善する近年のプロトコル拡張について解説します．また，これらの新たなプロトコルをRubyから使えるようにするには，DNSライブラリにどのような拡張が必要であるかを議論します．また，暗号化DNSプロトコルが依拠しているQUICやHTTP/3を扱うRubyライブラリの開発について，発表者の取り組みを紹介します．</p>
      </>)
    }} />
    <Talk speaker={{
      name: 'Regional.rb Organizers',
      ImageSrc: PrimaryLogoRedImage.src,
    }} session={{
      id: 21,
      title: 'Regional.rb and the Tokyo Metropolis',
      introduction: (<>
        東京圏の地域.rbオーガナイザーが集結！
      </>)
    }} />
  </div>) : <></>
}
