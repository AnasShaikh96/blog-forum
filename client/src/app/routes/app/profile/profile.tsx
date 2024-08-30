import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Button } from "../../../../components/ui/button";
import { Post } from "../../../../components/ui/post";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import clsx from "clsx";

export const Profile = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <Button
          icon={<ArrowLeftIcon className="text-gray-400 h-5 w-5 shrink-0" />}
          className="rounded-full"
          variant={"secondary"}
        ></Button>
      </div>

      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-stone-50 bg-clip-border rounded-2xl  bg-light/30 draggable">
        <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
          <div className="flex flex-wrap xl:flex-nowrap">
            <div className="mb-5 mr-5">
              <div className="relative inline-block shrink-0 rounded-2xl">
                <img
                  className="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                  alt="image"
                />
                {/* <div className="group/tooltip relative">
                  <span className="w-[15px] h-[15px] absolute bg-success rounded-full bottom-0 end-0 -mb-1 -mr-2  border border-white"></span>
                  <span className="text-xs absolute z-10 transition-opacity duration-300 ease-in-out px-3 py-2 whitespace-nowrap text-center transform bg-white rounded-2xl shadow-sm bottom-0 -mb-2 start-full ml-4 font-medium text-secondary-inverse group-hover/tooltip:opacity-100 opacity-0 block">
                    Status: Active
                  </span>
                </div> */}
              </div>
            </div>
            <div className="grow">
              <div className="flex flex-wrap items-start justify-between mb-2">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <a
                      className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                      href="javascript:void(0)"
                    >
                      Alec Jhonson
                    </a>
                  </div>
                  <div className="flex flex-wrap pr-2 mb-4 font-medium text-gray-500">
                    <a
                      className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                      href="javascript:void(0)"
                    >
                      User Id
                    </a>
                    <a
                      className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                      href="javascript:void(0)"
                    >
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      Joined Aug 2020
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap my-auto">
                  <Button variant={"default"} size={"lg"}>
                    Follow
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <a
                    href="javascript:void(0)"
                    className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    320 Posts
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    2.5k Followers
                  </a>
                </div>
              </div>
            </div>
          </div>

          <TabGroup
            className={
              "text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
            }
          >
            <TabList className={"flex flex-wrap"}>
              <Tab as={Fragment}>
                {({ hover, selected }) => (
                  <button
                    className={
                      "me-2 pointer inline-block p-4 border-transparent outline-none  rounded-t-lg " +
                      clsx(
                        !selected && hover && " border-gray-300 ",
                        selected && "text-blue-600 border-b-2 border-blue-600 "
                      )
                    }
                  >
                    Profile
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ hover, selected }) => (
                  <button
                    className={
                      "me-2 pointer inline-block p-4 border-transparent outline-none  rounded-t-lg " +
                      clsx(
                        !selected && hover && " border-gray-300 ",
                        selected && "text-blue-600 border-b-2 border-blue-600 "
                      )
                    }
                  >
                    Dashboard
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ hover, selected }) => (
                  <button
                    className={
                      "me-2 pointer inline-block p-4 border-transparent outline-none  rounded-t-lg " +
                      clsx(
                        !selected && hover && " border-gray-300 ",
                        selected && "text-blue-600 border-b-2 border-blue-600 "
                      )
                    }
                  >
                    Settings
                  </button>
                )}
              </Tab>
            </TabList>
          </TabGroup>
        </div>
      </div>

      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
