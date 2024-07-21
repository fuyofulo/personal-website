import SocialCard from "./SocialCard";

export default function Socials() {
  const socialLinks = [
    { platform: "Instagram", url: "https://www.instagram.com/fuyofulo", imageSrc: "/instagram.svg" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/fuyofulo", imageSrc: "/linkedin.svg" },
    { platform: "X", url: "https://www.x.com/fuyofulo", imageSrc: "/x.svg" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif mb-8">Socials</h2>
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((link, index) => (
            <SocialCard
              key={index}
              platform={link.platform}
              url={link.url}
              imageSrc={link.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
