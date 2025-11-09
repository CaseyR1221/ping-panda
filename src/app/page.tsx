import { MaxWidthWrapper } from "@/app/components/max-width-wrapper"
import { Heading } from "./components/heading"
import { Check } from "lucide-react"

const Homepage = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative flex flex-col items-center text-center mx-auto gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent directly to your discord.
            </p>

            <ul className="flex flex-col items-center sm:items-start space-y-2 text-base/7 text-gray-600">
              {["Real-time Discord Alerts for critical moments", "Buy once, use forever", "Track sales, signups, and more"].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>2</section>
      <section>3</section>
      <section>4</section>
      <section>5</section>
    </>
  )
}

export default Homepage
