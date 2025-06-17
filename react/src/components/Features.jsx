import ScalableImage from "../assets/scalable.png";
import AgileImage from "../assets/agile.png";
import FeedbackImage from "../assets/feedback.png";

function Features() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-25">
      <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div class="lg:col-span-7">
          <div class="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
            <div class="col-span-4">
              <img
                class="rounded-xl"
                src={ScalableImage}
                alt="Features Image"
              />
            </div>

            <div class="col-span-3">
              <img class="rounded-xl" src={AgileImage} alt="Features Image" />
            </div>

            <div class="col-span-5">
              <img
                class="rounded-xl"
                src={FeedbackImage}
                alt="Features Image"
              />
            </div>
          </div>
        </div>

        <div class="mt-9 sm:mt-10 lg:col-span-5">
          <div class="space-y-6 sm:space-y-8">
            <div class="space-y-2 md:space-y-4">
              <h2 class="font-bold text-3xl lg:text-4xl text-gray-800">
                Build your dedicated augmented team to scale up with confidence
                💯
              </h2>
              <p class="text-gray-500">
                As ideas evolve and customer expectations increase post-MVP, we
                provide a specialized team focused on rapidly scaling and
                enhancing your product to meet those changing needs.
              </p>
            </div>

            <ul class="space-y-2 sm:space-y-4">
              <li class="flex gap-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    class="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div class="grow">
                  <span class="text-sm sm:text-base text-gray-500">
                    <span class="font-bold">
                      Scalable technology foundation
                    </span>
                  </span>
                </div>
              </li>

              <li class="flex gap-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    class="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div class="grow">
                  <span class="text-sm sm:text-base text-gray-500 font-bold">
                    Agile and flexible team structure
                  </span>
                </div>
              </li>

              <li class="flex gap-x-3">
                <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    class="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div class="grow">
                  <span class="text-sm sm:text-base text-gray-500 font-bold">
                    Continuous feedback integration
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
