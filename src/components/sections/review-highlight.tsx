import Image from "next/image";

interface ReviewHighlightProps {
  location?: string;
}

export default function ReviewHighlight({ location }: ReviewHighlightProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 bg-white px-4">
      {/* Left: Image and rating */}
      <div className="flex flex-col items-center">
        <div className="relative w-[420px] h-[290px]">
          <Image
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomjyyfCNAyYTp8SqzaWwGxQ39EhfU4AniVHOgs"
            alt="Happy customer with dog"
            width={420}
            height={290}
            className="object-contain w-[420px] h-[290px] bg-white rounded-xl"
            priority
          />
          <div className="bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2 w-[210px] absolute right-5 bottom-5 z-20">
            <span className="text-yellow-400 text-base">★★★★★</span>
            <span className="font-semibold text-gray-900 text-sm">4.7/5</span>
<span className="text-gray-500 text-xs ml-2">Based on Verified Customer Reviews</span>
          </div>
        </div>
      </div>
      {/* Right: Reviews */}
      <div className="flex flex-col gap-8 max-w-xl">
        <div className="bg-white rounded-lg shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
          </div>
          <p className="text-gray-800 text-base mb-4">
            Kathy clean does a really nice job. It's a very reliable service. If you don't like something you tell them and they will correct it. They're really easy to work with. We really like the person who cleans for us and Beverly is delightful to work with!!<br />My dad also uses the service and he really likes his person. I don't think you can go wrong with any of the people that work for them!
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Kathy Welsh"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900 leading-tight">Kathy Welsh</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
          </div>
          <p className="text-gray-800 text-base mb-4">
            Kathy Clean is great service at a fair price point. Communication is always timely and easy to move schedules around as needed. If something is ever missed there is always an option for a reclean to make it right which I have only had to ask for one time and it was partially my fault because I didn't realize leaving a door closed was code for skip this area. I highly recommend Kathy Clean!
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomoZ7JiKTl0sjILPxn68hWECOFpHVwb93dNXTU"
              alt="Alysha Deaver"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900 leading-tight">Alysha Deaver</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
