import { Button } from "../button";

import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
export const Post = () => {
  return (
    <div className="w-full border border-grey-light cursor-pointer rounded-md hover:bg-gray-50  lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="">
        <div className="flex items-center mb-3">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://tailwindcss.com/img/card-left.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-black leading-none  font-semibold">
              Jonathan Reinink
            </p>
            <p className="text-grey-dark text-xs">Aug 18</p>
          </div>
        </div>
        <div className="text-black font-bold text-xl">
          Can coffee make you a better developer?
        </div>
        <p
          className="text-grey-darker text-base overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          distinctio, culpa perspiciatis magni odit sit impedit optio
          voluptates, earum praesentium ullam pariatur consequuntur rerum, minus
          repellat sed. Nostrum, repellendus reprehenderit.
        </p>

        <div className="mt-3">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="mr-3 "
            icon={
              <HandThumbUpIcon className="text-gray-400 h-5 w-5 shrink-0" />
            }
          >
            10
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            icon={
              <ChatBubbleBottomCenterTextIcon className="text-gray-400 h-5 w-5 shrink-0" />
            }
          >
            16
          </Button>
        </div>
      </div>
    </div>
  );
};
