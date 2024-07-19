import Link from "next/link";
import { MountainIcon } from "./Icons";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-muted">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="size-6" />
        <span className="sr-only">Personal Website</span>
      </Link>
      <nav className="flex space-x-4 ml-auto mr-80">
        <Link href="/#projects" className="text-sm font-medium text-primary-foreground hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="text-sm font-medium text-primary-foreground hover:underline">
          Socials
        </Link>
      </nav>
    </header>
  );
}
