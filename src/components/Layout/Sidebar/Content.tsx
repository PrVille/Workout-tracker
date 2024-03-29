import { Link, NavLink } from "react-router-dom"
import { GiWeightLiftingUp } from "react-icons/gi"
import { MdHome, MdHistory, MdPerson2 } from "react-icons/md"
import { HiChartBar, HiOutlineCalculator } from "react-icons/hi"
import { IconType } from "react-icons"

import { classNames } from "../../../utils/fn"
import LinkButton from "../../LinkButton"
import { GlobeAltIcon, PlusIcon } from "@heroicons/react/24/outline"

export interface NavItem {
  title: string
  Icon: IconType
  href: string
}

const mainPaths: NavItem[] = [
  {
    title: "Dashboard",
    Icon: MdHome,
    href: "dashboard",
  },
  {
    title: "Analytics",
    Icon: HiChartBar,
    href: "analytics",
  },
  {
    title: "Exercises",
    Icon: GiWeightLiftingUp,
    href: "exercises",
  },

  {
    title: "Workouts",
    Icon: MdHistory,
    href: "workouts",
  },
  {
    title: "Calculators",
    Icon: HiOutlineCalculator,
    href: "calculators",
  },
  {
    title: "Account",
    Icon: MdPerson2,
    href: "account",
  },
]

const Content = () => {
  return (
    <div className="h-full flex flex-col">
      <header className="h-header flex items-center text-lg font-semibold mx-4 py-4">
        <Link to="/app/dashboard" className="flex gap-4 items-center px-4">
          <img src="/logo.png" className="h-6 w-6" />
          <h1>Workout Tracker</h1>
        </Link>
      </header>

      <div className="mt-4 flex items-center justify-center mx-4">
        <LinkButton
          className="flex items-center justify-center w-full"
          variant="success"
          to="/app/workouts/new"
        >
          <div className="flex gap-2 items-center">
            <PlusIcon className="h6 w-6" />
            <h3>Add workout</h3>
          </div>
        </LinkButton>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <nav className="mt-4">
          {mainPaths.map(({ title, Icon, href }, i) => (
            <NavLink
              key={i}
              to={href}
              className={({ isActive }) =>
                classNames(
                  isActive ? "bg-gray-50" : "bg-white",
                  "px-4 mx-4 py-2 flex gap-4 items-center rounded-lg"
                )
              }
            >
              {({ isActive }) => (
                <div className="flex gap-4 items-center">
                  <Icon
                    className={classNames(
                      isActive ? "text-indigo-600" : "text-gray-500",
                      "h-6 w-6"
                    )}
                  />
                  <p
                    className={classNames(
                      isActive ? "text-black" : "text-gray-500"
                    )}
                  >
                    {title}
                  </p>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="mx-4 py-4 flex flex-col justify-between gap-2 px-4 mt-10 border-t items-center">
          <div className="flex gap-4">
            <Link
              to="https://villeprami.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlobeAltIcon className="h-6 w-6 text-zinc-500 transition hover:text-zinc-600" />
            </Link>
            <Link
              to="https://github.com/PrVille"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
            </Link>
            <Link
              to="https://www.linkedin.com/in/ville-prami/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-600"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </Link>
          </div>
          <h3 className="text-sm text-zinc-600">© 2023 Ville Prami</h3>
        </footer>
      </div>
    </div>
  )
}

export default Content
