import Link from "next/link";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="w-full max-w-md">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold font-serif">{title}</h3>
        <p className="text-muted-foreground font-serif">{description}</p>
        <Link
          href={link}
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
