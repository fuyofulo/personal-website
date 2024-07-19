import AboutMe from "./AboutMe";
import Projects from "./Projects";
import SocialCard from "./SocialCard";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "./Socialicons";

export default function MainSection() {
  return (
    <main className="flex-1 space-y-12">
      <AboutMe />
      <Projects />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">Connect with Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-serif">
                You can find me on the following platforms:
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <SocialCard
              href="https://www.instagram.com/yourusername"
              icon={InstagramIcon}
              title="Instagram"
            />
            <SocialCard
              href="https://www.linkedin.com/in/yourusername"
              icon={LinkedInIcon}
              title="LinkedIn"
            />
            <SocialCard
              href="https://twitter.com/yourusername"
              icon={TwitterIcon}
              title="Twitter"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
