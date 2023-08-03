import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { navigation, socials } from "~/content/layoutElements";
import { classNames } from "~/helpers/common";

export default function SidebarStatic() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <Image
          src="./placeholder-logo.svg"
          alt="Your logo"
          width="24"
          height="24"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white",
                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
              Settings
            </a>
            <div className="mt-2 flex gap-2">
              {socials.map((item) => (
                <a key={item.name} href={item.href} className="h-6 w-6">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width="24"
                    height="24"
                    className="invert-[.80] hover:invert"
                  />
                </a>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
