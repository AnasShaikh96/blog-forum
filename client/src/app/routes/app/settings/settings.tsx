import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import clsx from "clsx";

export const Settings = () => {
  return (
    <>
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
    </>
  );
};
