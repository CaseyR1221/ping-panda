import  {MaxWidthWrapper } from "@/app/components/max-width-wrapper"
import { Heading } from "./components/heading"

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
                <span>Delivered to Your Discord</span>
              </Heading>
            </div>
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