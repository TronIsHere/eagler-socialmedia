import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "@headlessui/react";
import { FC } from "react";
import { ForyouPage } from "./foryou";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
export const ExplorePage: FC = () => {
  return (
    <>
      <div className="w-full bg-primary h-14 flex p-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faSearch}
          className={"text-accent"}
          size={"lg"}
        ></FontAwesomeIcon>
        <input
          type="text"
          className="ml-3 h-14 -mt-4 focus:outline-none bg-primary text-accent"
          placeholder="search here..."
        />
      </div>
      <div className="text-white">
        <Tab.Group>
          <Tab.List className={"mb-5"}>
            <Tab
              className={({ selected }) => {
                console.log(selected, 1);
                return classNames(
                  "p-2 ml-5 mt-5  rounded-lg hover:opacity-50 focus:outline-none",
                  selected ? "bg-red-600" : "bg-slightGray"
                );
              }}
            >
              For you
            </Tab>
            <Tab
              className={({ selected }) => {
                console.log(selected, 1);
                return classNames(
                  "p-2 ml-5 mt-5  rounded-lg hover:opacity-50 focus:outline-none",
                  selected ? "bg-red-600" : "bg-slightGray"
                );
              }}
            >
              Trending
            </Tab>
            <Tab
              className={({ selected }) => {
                console.log(selected, 1);
                return classNames(
                  "p-2 ml-5 mt-5  rounded-lg hover:opacity-50 focus:outline-none",
                  selected ? "bg-red-600" : "bg-slightGray"
                );
              }}
            >
              Popular
            </Tab>
          </Tab.List>
          <Tab.Panels className={"p-5 w-full border-t-2 border-slightGray"}>
            <Tab.Panel>
              <ForyouPage></ForyouPage>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};
