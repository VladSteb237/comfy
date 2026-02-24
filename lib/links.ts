type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/ourteam", label: "Our Team" },
];

export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/favorites", label: "Favorites" },
  { href: "/cart", label: "Cart" },
  { href: "/orders", label: "Orders" },
  { href: "/reviews", label: "Reviews" },
  { href: "/admin/sales", label: "Dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "sales" },
  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create product" },
];
