import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 rounded-2xl lg:py-14 dark:bg-trueGray-800">
            <p className="text-lg sm:text-xl lg:text-2xl leading-normal">
              Hashdash Media <Mark>transformed</Mark> our online presence! Their
              marketing strategies skyrocketed our engagement. Highly
              recommended!
            </p>

            <Avatar image={userTwoImg} name="Amit Verma" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 rounded-2xl lg:py-14 dark:bg-trueGray-800">
            <p className="text-lg sm:text-xl lg:text-2xl leading-normal">
              Amazing team! Our brand visibility <Mark>doubled</Mark> within
              months. Professional, creative, and results driven.
            </p>

            <Avatar image={userOneImg} name="Priya Sharma" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 rounded-2xl lg:py-14 dark:bg-trueGray-800">
            <p className="text-lg sm:text-xl lg:text-2xl leading-normal">
              Exceptional service! They know <Mark>exactly</Mark> how to capture
              audience attention. Our ROI has never been better!
            </p>

            <Avatar image={userThreeImg} name="Rahul Mehta" />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title?: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-6 sm:mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 sm:w-14 sm:h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-base sm:text-lg font-medium">{props.name}</div>
        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}