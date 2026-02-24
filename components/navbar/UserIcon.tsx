"use client";
import { LuUser } from "react-icons/lu";
import profileImageLocal from "../../public/images/log.png";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const UserIcon = () => {
  const { user, isLoaded } = useUser();

  // ⛔ Пока Clerk не загрузился — ничего не рендерим
  if (!isLoaded) {
    return null;
  }

  const profileImage = user?.imageUrl;

  if (!profileImage) {
    return (
      <Image
        width={24}
        height={24}
        alt="Profile Image"
        src={profileImageLocal}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  if (profileImage)
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" />
    );
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
};

export default UserIcon;
