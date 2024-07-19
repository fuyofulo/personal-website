import Name from "./Name";
import Description from "./Description";
import Beliefs from "./Beliefs";

export default function AboutMe() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start space-y-4">
            <Name />
            <Description />
            <Beliefs />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-md">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src="/lorenzofortnite.png"
                  alt="Zaid Khan"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
