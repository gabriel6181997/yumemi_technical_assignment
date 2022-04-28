## 主な使用技術/ライブラリー

- Next.js
- TypeScript
- SCSS
- ESLint
- Prettier
- chart.js
- react-chartjs-2

## 工夫したところ

### 1. 人口構成 API との連携
  人口構成 API は設計上、クエリで一気に複数の町の人口データを取得することはできないため、複数の町の人口データの取得に苦労しました。試行錯誤を重ねた結果、map でチェック付きの町の番号を回し、町ごとに人口データを取得し、その後 Promise.all()でデータを組み合わせることにしました。
### 2. カスタムフックの活用
  index.page のコード量を減らし、ビューとロジックをしっかりと切り分けるために、カスタムフックで API を叩く関数と関連のフックやステートを切り出しました。

## 今後の課題

### 1. リアルタイムでデータを取得できるようにすること
  現在高速に多くのチェックを入れたり、外したりすると、処理が追いつかず、タイムラグが発生することがあります。そのため、今後 SWR を導入し、キャッシュを効かせることでタイムラグを減らすつもりです。
### 2. テストコードの導入
  時間不足のため、今回テストコードを書かず、手動でテストを行いました。テストの効率化を向上させるため、今後 Jest と react-testing-library でテストコードを書き、テストを自動化するつもりです。
### 3. 軸名の追加
  公式ドキュメントの不備により、最新のバージョンで軸に名前をつけることはできません。ネットで他の情報を収集し、試行錯誤を繰り返したところで、軸名を表示することはできません。そのため、今後ドキュメントが整備されたら、軸を追加するつもりです。

## 課題の取り組み開始から完了までに要した時間

30 時間ほど

## これまでの総合的なプログラミング歴＋これまでの Web フロントエンドプログラミング歴

合計 2 年間ほど  
2020/05 プログラミング（Web 制作）の勉強を開始       
2020/09 ~ 2020/12 Web 制作の仕事（業務委託）  
2020/12 Web フロントエンドの勉強を開始  
2021/08 ~ 2022/03 Web アプリのフロントエンド開発の長期インターン  

- これまでコードレビューをもらったことはあまりないため、フロントエンド歴 1 年ぐらいあるとはいえ、コードにまだ荒いところがあります。今後の改善のために、もしよろしければ、コードレビューをいただけますと大変嬉しく思います。
- 私の経歴は自己紹介サイトの About ページにまとめているため、もしご興味がございましたら、[こちら](https://gabutech.vercel.app/about)をご確認ください。
