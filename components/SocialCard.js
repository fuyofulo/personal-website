import Link from "next/link";

export default function SocialCard({ href, icon: Icon, title }) {
  return (
    <Link href={href} prefetch={false}>
      <div className="flex items-center space-x-2 p-4 border border-muted rounded-lg hover:bg-muted transition-colors">
        <Icon className="w-6 h-6" />
        <span className="text-sm font-medium">{title}</span>
      </div>
    </Link>
  );
}
