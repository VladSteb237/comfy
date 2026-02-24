"use client";
import { Button } from "@/components/ui/button";
import { adminLinks } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarPage = () => {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link, index) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";
        return (
          <Button
            key={index}
            asChild
            variant={variant}
            className="w-full mb-2 capitalize font-normal justify-start">
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default SidebarPage;
