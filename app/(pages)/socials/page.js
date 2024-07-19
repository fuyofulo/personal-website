import SocialCard from "./SocialCard";

export default function Socials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif mb-8">Socials</h2>
        <div className="flex justify-center items-center gap-4">
          <SocialCard platform="Instagram" url="https://www.instagram.com/fuyofulo" />
          <SocialCard platform="LinkedIn" url="https://www.linkedin.com/in/fuyofulo" />
          <SocialCard platform="X" url="https://www.X.com/fuyofulo" />
        </div>
      </div>
    </section>
  );
}
