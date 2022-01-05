import Image from "next/image";
import {
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  BadgeCheckIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        alt="logo image"
        className="logoImage"
        src="http://links.papareact.com/ua6"
        width={130}
        height={70}
      />
    </header>
  );
}

export default Header;
