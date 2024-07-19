/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cwnko4bdF6w
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="size-6" />
          <span className="sr-only">Personal Website</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-start space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-serif">
                  Zaid Khan
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-serif">
                  An engineering student majoring in computer science. Currently my life revolves around solving
                  leetcode, and learning web dev & artificial intelligence.
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-serif">Some things I believe in</h3>
                  <ul className="space-y-2 text-muted-foreground font-serif">
                    <li>
                      While the saying 'comparison is the thief of joy' often holds true, it does not universally apply.
                      When employed judiciously, comparison can yield profound and valuable insights.
                    </li>
                    <li>
                      Compounding over an extended period of time produces substantial result. However the joy and
                      fulfilment derived from such achievements surpasses the satisfaction of quick outcomes.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full max-w-md">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <img
                      src="/placeholder.svg"
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-serif">
                  Here are some of the projects I've been working on. From web development to artificial intelligence,
                  I'm always exploring new technologies and ideas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card className="w-full max-w-md">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Project Image"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold font-serif">Personal Website</h3>
                  <p className="text-muted-foreground font-serif">Lorem ipsum</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </div>
              </Card>
              <Card className="w-full max-w-md">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Project Image"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold font-serif">Leetcode Solver</h3>
                  <p className="text-muted-foreground font-serif">
                    A web application that helps me practice and solve Leetcode problems more efficiently.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </div>
              </Card>
              <Card className="w-full max-w-md">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Project Image"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold font-serif">AI Chatbot</h3>
                  <p className="text-muted-foreground font-serif">
                    A conversational AI chatbot that I'm developing to assist with various tasks and queries.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground font-serif">&copy; 2024 Personal Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}