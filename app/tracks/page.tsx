import { title, subtitle } from "@/components/primitives";
import { tracksConfig } from "@/config/tracks";
import { Image } from '@nextui-org/image';
import { Link } from "@nextui-org/link";

export default function TracksPage() {
  return (
    <div>
      <div className={"pb-8"}>
      <h1 className={title()}>チックのコミック小冊子</h1>
      </div>
      <div className={"grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4"}>

      {tracksConfig.items.map((item, index) => (
        <div key={index} className={"grayscale hover:grayscale-0"}>
          <Link key={index} isExternal href={item.href}>
          <Image
            alt={item.title}
            src={"https://biblehelp.jp/" + item.img}
            width={333}
          />
          </Link>
        </div>
      ))}

      </div>
    </div>
  );
}
