import { Fragment } from "react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const Comment = () => {
  return (
    <>
      {/*  for child comment add mb-3 ml-6 lg:ml-12 and for new parent comments add bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900 */}
      <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              Michael Gough
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                Feb. 8, 2022
              </time>
            </p>
          </div>
          <Menu as={"div"} className={"relative"}>
            <MenuButton
              children={
                <Button
                  icon={
                    <EllipsisHorizontalIcon className="text-gray-400 h-5 w-5 shrink-0" />
                  }
                  variant={"ghost"}
                  size={"sm"}
                ></Button>
              }
            ></MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-1 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <MenuItem>
                  <a
                    href="#"
                    className="block text-sm py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block text-sm py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block text-sm py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <Button
            icon={
              <ChatBubbleBottomCenterTextIcon className="text-gray-400 h-5 w-5 shrink-0" />
            }
            variant={"ghost"}
            size={"sm"}
          >
            Reply
          </Button>
        </div>
      </article>
    </>
  );
};

const CommentBox = () => {
  return (
    <form className="mb-6">
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <Button variant={"default"} size={"sm"} type="submit">
        Post Comment
      </Button>
    </form>
  );
};

export { Comment, CommentBox };
