import Link from "next/link";
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects"},
  { href: "#skills", label: "Skills" },
];

export function Header() {
  return (
    <header className="p-6 flex items-center justify-between border-b fixed bg-white w-full">
      <div className="text-semibold text-xl">Vinav Singh Sancheti</div>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
