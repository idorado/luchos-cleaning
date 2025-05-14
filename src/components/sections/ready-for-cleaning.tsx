import RequestQuoteButton from "@/components/sections/RequestQuoteButton";

interface ReadyForCleaningProps {
  location?: string;
}

export default function ReadyForCleaning({ location }: ReadyForCleaningProps) {
  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto rounded-3xl bg-[#17224D] px-6 py-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready For a Cleaning?</h2>
        <p className="text-base md:text-lg text-white mb-8">
          Get your time back with professional house cleaning you can trust. Our {location ? `${location}-based` : "Denver-based"} team keeps your home consistently clean, so you can focus on what matters most.
        </p>
        <RequestQuoteButton />
      </div>
    </section>
  );
}
