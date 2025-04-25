import Image from "next/image";
import Link from "next/link";

const menuList = [
  { id: 1, name: "Home", icon: "home.svg", link: "/" },
  { id: 2, name: "Explore", icon: "explore.svg", link: "/explore" },
  {
    id: 3,
    name: "Notifications",
    icon: "notification.svg",
    link: "/notifications",
  },
  { id: 4, name: "Messages", icon: "message.svg", link: "/messages" },
  { id: 5, name: "Bookmarks", icon: "bookmark.svg", link: "/bookmarks" },
  { id: 6, name: "jobs", icon: "job.svg", link: "/jobs" },
  { id: 7, name: "community", icon: "community.svg", link: "/community" },
  { id: 8, name: "Premium", icon: "logo.svg", link: "/premium" },
  { id: 7, name: "Profile", icon: "profile.svg", link: "/profile" },
  { id: 8, name: "More", icon: "more.svg", link: "/more" },
];
const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* logo menu button */}
      <div className="logo">
        {/* LOGO */}
        <Link href="/">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flx items-center gap-4 "
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* USER */}
      <div className="user"></div>
    </div>
  );
};

export default LeftBar;
