import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Image } from '@nextui-org/image';
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div>
      <div className="pb-8">
      <h1 className={title()}>ジャック・チック</h1>
      </div>
      <Image src={"https://biblehelp.jp/index_htm_files/346@2x.jpg"} width={300} />
      <p className="pt-8">ジャック・チックとは誰でしょう？</p>
      <p className="pt-4">
      ジャック・チックは1924年4月13日にカリフォルニア州のボイル・ハイツで生まれました。
    ジャックの両親はトーマスとポーリーン、そして妹はドリスです。
    ジャックは不自由のない子供時代を過ごしましたが、家族で特に教会通ったりしたことはなく、キリスト教とは無縁の生活を過ごしました。
      </p>
      <p className="pt-4">小さいころからジャックは絵を描くことに興味を示し、1年生の頃から飛行機の戦闘シーンを書いていたほどです。</p>
      <p className="pt-4">
      ジャックは第二次世界大戦の最中に陸軍に召集され、終戦後の1948年にパサデナ劇場で出会った敬虔なクリスチャンであるカナダ移民のロラ・プリドルと結婚し、ハネムーンの夜にクリスチャンとなりました。
    </p>
    <p className="pt-4">
    彼は、1960年に「なぜ信仰復興がないのか」、1962年に「悪魔の悪夢」を自費出版、そして1970年にチック出版社を設立しました。
    チック出版社のコミックはオカルトや聖書の中の預言書などのキリスト教を土台にしています。
    また、チックのコミック小冊子の中で一番人気のある「これがあなたの生涯でした！」は100言語以上に翻訳されました。
    チックのコミック小冊子は、現在までに3千5百万ものが世界60か国の福音宣教に使われています。
    </p>
      <p className="pt-4">ジャックは2016年10月23日に自宅で安らかに主に召されました。</p>
      <p className="pt-4">
        <Link isExternal href={siteConfig.links.chick}>
      チックのコミック小冊子は著作権で守られているので、無断転載は禁じられております。
      ご使用を希望する方はチック出版社からの許可が必要です。
        </Link>
      </p>
    </div>
  );
}
