export default function WellnessBenefits() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-800 mb-8">Cleaning isn’t just cleaning, it’s wellness</h2>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16 mb-12">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="text-base md:text-lg text-[#454545] mb-2 max-w-lg text-center md:text-left">
              From supplements to meditation, we all invest in feeling better. But one of the simplest ways to improve your life starts at home — with a clean, peaceful space.<br/>
              When a professional cleaner handles it, you don’t just get a spotless home — you get your time back.<br/>
              Time to rest. Time to create. Time to enjoy what really matters.<br/>
              We offer trusted residential and commercial cleaning services that help you feel better, live lighter, and focus on what you love.
            </p>
          </div>
          <div className="flex-1 flex md:items-start justify-center md:justify-end">
            <img
              src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomLtolu5Ux3aBby7k62UgoriN9lVewuj0m4TMh"
              alt="Peaceful, clean living room with mountain view"
              className="rounded-xl w-full max-w-[320px] h-auto shadow-md md:-ml-8"
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F5F7FB] rounded-lg p-8 flex flex-col items-center shadow-sm max-w-[300px] mx-auto">
            <span className="mb-3">
              <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomYVDDnBBH2npg4tmHIBcaZ1G3S7CFEufdUyqR" alt="Mental clarity icon" className="w-14 h-14 object-contain" />
            </span>
            <h3 className="text-lg font-bold text-navy-800 mb-2">Mental Clarity</h3>
            <p className="text-base text-navy-800 text-center">Clutter free spaces reduce cognition load and help you think more clearly and focus better.</p>
          </div>
          <div className="bg-[#F5F7FB] rounded-lg p-8 flex flex-col items-center shadow-sm max-w-[300px] mx-auto">
            <span className="mb-3">
              <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomZq9dUIScL928NU7WORg5Vux30lHqPhzC6TiB" alt="Reduces stress icon" className="w-14 h-14 object-contain" />
            </span>
            <h3 className="text-lg font-bold text-navy-800 mb-2">Reduces Stress</h3>
            <p className="text-base text-navy-800 text-center">Coming home to a clean organized environment reduces cortisol levels and promotes relaxation.</p>
          </div>
          <div className="bg-[#F5F7FB] rounded-lg p-8 flex flex-col items-center shadow-sm max-w-[300px] mx-auto">
            <span className="mb-3">
              <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomhqVEqSpvemGxpEwTUMyYu5sc4j0tqg2836IK" alt="Better sleep icon" className="w-14 h-14 object-contain" />
            </span>
            <h3 className="text-lg font-bold text-navy-800 mb-2">Better Sleep</h3>
            <p className="text-base text-navy-800 text-center">Clean, fresh bedding and a tidy bedroom are scientifically proven to improve sleep quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
