import React from "react";

import {
  CloudArrowDownIcon,
  LockClosedIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Fast & Reliable Downloads.",
    description:
      "Experience blazing-fast downloads with support for multiple video formats and qualities. Your favorite content, just a click away.",
    icon: CloudArrowDownIcon,
  },
  {
    name: "Secure and Private.",
    description:
      "All downloads are secure with SSL encryption. We prioritize your privacy and ensure no data is shared.",
    icon: LockClosedIcon,
  },
  {
    name: "All Formats, All Qualities.",
    description:
      "Download videos in MP4, MP3, and more with resolutions from 360p to 4K UHD—tailored for your needs.",
    icon: VideoCameraIcon,
  },
];

function Header() {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  Download Made Simple
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Your Media, Your Quality
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Download videos in any format and quality, effortlessly. Fast, secure, and tailored to your preferences—start downloading now!
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 size-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Media downloader illustration"
              src="https://ideogram.ai/assets/image/lossless/response/Wd-aMvESSTu6x8lNRUEKKA"
              width={1280}
              height={800}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
