import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { Input } from "../../../../components/ui/form";

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

      <div className="grid grid-cols-1 gap-y-3 mt-6 lg:grid-cols-2">
        <div>
          <h4>Personal Information</h4>
          <p>Use Personal Email Address where you can receive Information.</p>
        </div>
        {/* <form className="grid">
          <div className="flex items-start">
            <img
              className="h-24 w-24 rounded-md bg-gray-50 mr-4"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div>
              <input type="file" />
            </div>
          </div>
          <div className="grid-cols-2">
            <div>
              <Input label="First Name" />
            </div>
            <div>
              <Input label="Last Name" />
            </div>
          </div>
        </form> */}

        <div className="-mx-4 grid grid-cols-2">
          <div className="w-full px-4">
            <div className="mb-12">
              {/* <Input label="Default File Input" type="" /> */}
              <label
                htmlFor=""
                className="mb-[10px] block text-base font-medium text-dark dark:text-white"
              >
                Default file input
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke dark:border-dark-3 font-medium text-body-color dark:text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke dark:file:border-dark-3 file:bg-[#F5F7FD] dark:file:bg-dark-2 file:py-3 file:px-5 file:text-body-color dark:file:text-dark-6 file:hover:bg-primary-foreground file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
          </div>
          <div className="w-full px-4"></div>
          <div className="w-full px-4">
            <div className="mb-12">
              <Input label="First Name" type="text" />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-12">
              <Input label="Last Name" type="text" />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-12">
              <Input label="Email" type="text" />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-12">
              <Input label="Username" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
