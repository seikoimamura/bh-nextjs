import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-24 pb-8">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Bible Help へようこそ！</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
      このサイトでは、ジャック・チックが描いたコミック小冊子を紹介しています。
        </div>
        <br />
        <span className={subtitle()}>ジャック・チックはイエスの福音を多くの方に伝えたいという思いから数々のコミックを描いています。</span>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/tracks"}
        >
          ジャック・チックのコミック小冊子
        </Link>
      </div>
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={subtitle()}>私たちは当サイトに立ち寄られた方は神様のお導きによるものと信じています。</span>
        <span className={subtitle()}>お立ち寄り頂きありがとうございます。</span>
      </div>
    </section>
  );
}
