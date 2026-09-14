import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  FiArrowUpRight,
  FiChevronDown,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiCpu,
  FiDroplet,
  FiActivity,
  FiDatabase,
  FiGlobe,
  FiZap,
  FiBriefcase,
  FiMap,
} from "react-icons/fi";

import { useTheme } from "../hooks/useTheme";
import { assetPath } from "../utils/assetPath";

/* ================================================================
   DROPDOWN DATA
================================================================ */

const ecosystemItems = [
  {
    name: "Dairy & Foods",
    path: "/dairy-foods",
    icon: FiDroplet,
  },
  {
    name: "Nutrition",
    path: "/nutrition",
    icon: FiActivity,
  },
  {
    name: "Genetics",
    path: "/genetics",
    icon: FiDatabase,
  },
  {
    name: "Agriculture",
    path: "/agriculture",
    icon: FiGlobe,
  },
  {
    name: "Sustainability",
    path: "/sustainability",
    icon: FiZap,
  },
  {
    name: "Innovation",
    path: "/innovation",
    icon: FiCpu,
  },
];

const companyItems = [
  {
    name: "Business",
    path: "/business",
    icon: FiBriefcase,
  },
  {
    name: "Campus",
    path: "/campus",
    icon: FiMap,
  },
];

/* ================================================================
   COMPONENT
================================================================ */

function PremiumHeader() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [previousPath, setPreviousPath] = useState(location.pathname);

  const { theme, setTheme } = useTheme();

  /* ================================================================
     CLOSE ON ROUTE CHANGE
  ================================================================= */

  if (previousPath !== location.pathname) {
    setPreviousPath(location.pathname);
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  /* ================================================================
     ESCAPE
  ================================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* ================================================================
     CLICK OUTSIDE
  ================================================================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("[data-tejays-header]")) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /* ================================================================
     HELPERS
  ================================================================= */

  const toggleMenu = (menu) => {
    setOpenMenu((current) =>
      current === menu ? null : menu
    );
  };

  const toggleMobileSection = (section) => {
    setMobileSection((current) =>
      current === section ? null : section
    );
  };

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const directNavClass = ({ isActive }) => `
    group
    relative
    inline-flex
    items-center
    gap-1
    whitespace-nowrap
    px-1
    py-2
    text-[10px]
    font-bold
    uppercase
    tracking-[0.16em]
    transition-all
    duration-300
    ${isActive
      ? "text-brand"
      : "text-ink/65 hover:text-brand"
    }
  `;

  return (
    <>
      {/* ==============================================================
          DESKTOP / MAIN HEADER
      ============================================================== */}

      <header
        data-tejays-header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          w-full
        "
      >
        <div
          className="
            relative
            w-full
            rounded-b-[18px]
            border-x
            border-b
            border-line/10
            bg-pageBg
            shadow-[0_16px_55px_rgb(var(--shadow-ink)/0.10)]
          "
        >
          {/* ==========================================================
              TOP BRAND / NAV BAR
          =========================================================== */}

          <div
            className="
              mx-auto
              flex
              h-[76px]
              w-full
              items-center
              justify-between
              gap-6
              px-5
              sm:px-8
              lg:px-10
              xl:px-14
            "
          >
            {/* ========================================================
                LOGO
            ========================================================= */}

            <Link
              to="/"
              onClick={() => setOpenMenu(null)}
              className="
                group
                flex
                shrink-0
                items-center
              
              "
            >
              <img
                src={assetPath(
                  "/logo/Tejays_logo.png"
                )}
                alt="TEJAYS AGRI"
                className="
                  w-[122px]
                  object-contain
                  sm:w-[136px]
                  lg:w-[148px]
                "
              />
            </Link>

            {/* ========================================================
                DESKTOP NAVIGATION
            ========================================================= */}

            <nav
              className="
                hidden
                flex-1
                items-center
                justify-center
                gap-6
                xl:flex
                2xl:gap-8
              "
            >
              {/* ------------------------------------------------------
                  1. HOME
              ------------------------------------------------------- */}

              <NavLink
                to="/"
                className={directNavClass}
              >
                Home
              </NavLink>

              {/* ------------------------------------------------------
                  2. ABOUT
              ------------------------------------------------------- */}

              <NavLink
                to="/about"
                className={directNavClass}
              >
                About
              </NavLink>

              {/* ------------------------------------------------------
                  3. SMART DAIRY
              ------------------------------------------------------- */}

              <NavLink
                to="/smart-dairy"
                className={directNavClass}
              >
                Smart Dairy
              </NavLink>

              {/* ------------------------------------------------------
                  4. TECHNOLOGY
              ------------------------------------------------------- */}

              <NavLink
                to="/technology"
                className={directNavClass}
              >
                Technology
              </NavLink>

              {/* ------------------------------------------------------
                  ECOSYSTEM DROPDOWN
              ------------------------------------------------------- */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setOpenMenu("ecosystem")
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    toggleMenu("ecosystem")
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    whitespace-nowrap
                    px-1
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-ink/65
                    transition-all
                    duration-300
                    hover:text-brand
                  "
                >
                  Ecosystem

                  <FiChevronDown
                    className={`
                      text-[12px]
                      transition-transform
                      duration-300
                      ${openMenu === "ecosystem"
                        ? "rotate-180"
                        : ""
                      }
                    `}
                  />
                </button>

                {/* ====================================================
                    ECOSYSTEM DROPDOWN
                ===================================================== */}

                <div
                  className={`
                    absolute
                    left-1/2
                    top-full
                    z-[150]
                    w-[760px]
                    -translate-x-1/2
                    pt-3
                    transition-all
                    duration-300
                    ${openMenu === "ecosystem"
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      rounded-b-[22px]
                      rounded-t-[18px]
                      border
                      border-white/10
                      bg-surface
                      p-5
                      shadow-[0_28px_75px_rgba(0,0,0,0.25)]
                    "
                  >
                    {/* TITLE */}

                    <div
                      className="
                        mb-4
                        flex
                        items-center
                        justify-between
                        border-b
                        border-leaf
                        pb-3
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#72B943]" />

                        <span
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.28em]
                            text-[#72B943]
                          "
                        >
                          Explore Ecosystem
                        </span>
                      </div>

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.22em]
                          text-[#72B943]
                        "
                      >
                        TEJAYS AGRI●
                      </span>
                    </div>

                    {/* INLINE LINKS */}

                    <div className="flex flex-wrap items-center">
                      {ecosystemItems.map(
                        (item, index) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.name}
                              className="flex items-center"
                            >
                              <Link
                                to={item.path}
                                onClick={() =>
                                  setOpenMenu(null)
                                }
                                className="
                                  group
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-full
                                  border
                                  border-transparent
                                  px-3
                                  py-2.5
                                  text-[10px]
                                  font-bold
                                  uppercase
                                  tracking-[0.09em]
                                  text-ink
                                  transition-all
                                  duration-300
                                  hover:border-[#72B943]/30
                                  hover:bg-[#72B943]/10
                                  hover:text-[#72B943]
                                "
                              >
                                <Icon
                                  className="
                                    text-[13px]
                                    text-[#72B943]
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#72B943]
                                  "
                                />

                                <span>
                                  {item.name}
                                </span>

                                <FiArrowUpRight
                                  className="
                                    text-[13px]
                                    text-[#72B943]
                                    transition-all
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    group-hover:text-[#72B943]
                                  "
                                />
                              </Link>

                              {index !==
                                ecosystemItems.length -
                                1 && (
                                  <span className="px-1 text-[#72B943]">
                                    →
                                  </span>
                                )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------
                  COMPANY DROPDOWN
              ------------------------------------------------------- */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setOpenMenu("company")
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    toggleMenu("company")
                  }
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    whitespace-nowrap
                    px-1
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-ink/65
                    transition-all
                    duration-300
                    hover:text-brand
                  "
                >
                  Company

                  <FiChevronDown
                    className={`
                      text-[12px]
                      transition-transform
                      duration-300
                      ${openMenu === "company"
                        ? "rotate-180"
                        : ""
                      }
                    `}
                  />
                </button>

                {/* ====================================================
                    COMPANY DROPDOWN
                ===================================================== */}

                <div
                  className={`
                    absolute
                    left-1/2
                    top-full
                    z-[150]
                    w-[510px]
                    -translate-x-1/2
                    pt-3
                    transition-all
                    duration-300
                    ${openMenu === "company"
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <div
                    className="
                      rounded-b-[22px]
                      rounded-t-[18px]
                      border
                      border-white/10
                      bg-pageBg
                      p-5
                      shadow-[0_28px_75px_rgba(0,0,0,0.25)]
                    "
                  >
                    {/* TITLE */}

                    <div
                      className="
                        mb-4
                        flex
                        items-center
                        justify-between
                        border-b
                        border-leaf
                        pb-3
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#72B943]" />

                        <span
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.28em]
                            text-[#72B943]
                          "
                        >
                          Company
                        </span>
                      </div>

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.22em]
                          text-[#72B943]
                        "
                      >
                        TEJAYS AGRI●
                      </span>
                    </div>

                    {/* INLINE LINKS */}

                    <div className="flex flex-wrap items-center">
                      {companyItems.map(
                        (item, index) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.name}
                              className="flex items-center"
                            >
                              <Link
                                to={item.path}
                                onClick={() =>
                                  setOpenMenu(null)
                                }
                                className="
                                  group
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-full
                                  border
                                  border-transparent
                                  px-4
                                  py-2.5
                                  text-[10px]
                                  font-bold
                                  uppercase
                                  tracking-[0.1em]
                                  text-ink/85
                                  transition-all
                                  duration-300
                                  hover:border-[#72B943]/30
                                  hover:bg-[#72B943]/10
                                  hover:text-[#72B943]
                                "
                              >
                                <Icon
                                  className="
                                    text-[13px]
                                    text-[#72B943]
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#72B943]
                                  "
                                />

                                <span>
                                  {item.name}
                                </span>

                                <FiArrowUpRight
                                  className="
                                    text-[13px]
                                    text-[#72B943]
                                    transition-all
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    group-hover:text-[#72B943]
                                  "
                                />
                              </Link>

                              {index !==
                                companyItems.length -
                                1 && (
                                  <span className="px-1  text-[#72B943]">
                                    →
                                  </span>
                                )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------
                  5. CONTACT
              ------------------------------------------------------- */}

              <NavLink
                to="/contact"
                className={directNavClass}
              >
                Contact
              </NavLink>
            </nav>

            {/* ========================================================
                RIGHT SIDE
            ========================================================= */}

            <div className="flex shrink-0 items-center gap-2">
              {/* ======================================================
                  LIGHT + DARK ICONS
              ======================================================= */}

              <div
                className="
                  hidden
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-line/10
                  bg-surface/70
                  p-1
                  sm:flex
                "
              >
                {/* LIGHT */}

                <button
                  type="button"
                  title="Light mode"
                  aria-label="Switch to light mode"
                  aria-pressed={theme === "light"}
                  onClick={() =>
                    changeTheme("light")
                  }
                  className={`
                    group
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    ${theme === "light"
                      ? "bg-brandFill text-white"
                      : "text-ink/50 hover:bg-brand/10 hover:text-brand"
                    }
                  `}
                >
                  <FiSun
                    className="
                      text-[15px]
                      transition-transform
                      duration-500
                      group-hover:rotate-45
                    "
                  />
                </button>

                {/* DARK */}

                <button
                  type="button"
                  title="Dark mode"
                  aria-label="Switch to dark mode"
                  aria-pressed={theme === "dark"}
                  onClick={() =>
                    changeTheme("dark")
                  }
                  className={`
                    group
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    ${theme === "dark"
                      ? "bg-[#07100D] text-accent"
                      : "text-ink/50 hover:bg-[#07100D]/10 hover:text-[#07100D]"
                    }
                  `}
                >
                  <FiMoon
                    className="
                      text-[15px]
                      transition-transform
                      duration-500
                      group-hover:-rotate-12
                    "
                  />
                </button>
              </div>

              {/* CTA */}

              <Link
                to="/contact"
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  bg-[#075b3a]
                  px-5
                  py-3
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#72B943]
                  hover:text-[#07100D]
                  lg:flex
                "
              >
                Start a Conversation

                <FiArrowUpRight
                  className="
                    text-[13px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* MOBILE */}

              <button
                type="button"
                aria-label={
                  mobileOpen
                    ? "Close menu"
                    : "Open menu"
                }
                onClick={() =>
                  setMobileOpen((value) => !value)
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-line/10
                  text-ink
                  transition-all
                  duration-300
                  hover:border-brand
                  hover:text-brand
                  xl:hidden
                "
              >
                {mobileOpen ? (
                  <FiX className="text-[18px]" />
                ) : (
                  <FiMenu className="text-[18px]" />
                )}
              </button>
            </div>
          </div>

          {/* ==========================================================
              MOBILE MENU
          =========================================================== */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-500
              xl:hidden
              ${mobileOpen
                ? "max-h-[900px] opacity-100"
                : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                border-t
                border-line/10
                px-5
                pb-6
                pt-3
              "
            >
              {/* HOME */}

              <Link
                to="/"
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-line/10
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-ink
                "
              >
                Home
                <FiArrowUpRight className="text-[#72B943]" />
              </Link>

              {/* ABOUT */}

              <Link
                to="/about"
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-line/10
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-ink
                "
              >
                About
                <FiArrowUpRight className="text-[#72B943]" />
              </Link>

              {/* SMART DAIRY */}

              <Link
                to="/smart-dairy"
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-line/10
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-ink
                "
              >
                Smart Dairy
                <FiArrowUpRight className="text-[#72B943]" />
              </Link>

              {/* TECHNOLOGY */}

              <Link
                to="/technology"
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-line/10
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-ink
                "
              >
                Technology
                <FiArrowUpRight className="text-[#72B943]" />
              </Link>

              {/* ====================================================
                  MOBILE ECOSYSTEM
              ===================================================== */}

              <div
                className="
                  border-b
                  border-line/10
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    toggleMobileSection(
                      "ecosystem"
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-4
                    text-left
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-ink
                  "
                >
                  Ecosystem

                  <FiChevronDown
                    className={`
                      transition-transform
                      duration-300
                      ${mobileSection ===
                        "ecosystem"
                        ? "rotate-180"
                        : ""
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${mobileSection ===
                      "ecosystem"
                      ? "max-h-[450px] pb-4"
                      : "max-h-0"
                    }
                  `}
                >
                  <div className="flex flex-wrap gap-2">
                    {ecosystemItems.map(
                      (item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-line/10
                              bg-surface/60
                              px-3
                              py-2.5
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.08em]
                              text-ink/65
                              transition-all
                              hover:border-[#72B943]
                              hover:text-brand
                            "
                          >
                            <Icon className="text-[#72B943]" />
                            {item.name}
                          </Link>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              {/* ====================================================
                  MOBILE COMPANY
              ===================================================== */}

              <div
                className="
                  border-b
                  border-line/10
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    toggleMobileSection(
                      "company"
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-4
                    text-left
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-ink
                  "
                >
                  Company

                  <FiChevronDown
                    className={`
                      transition-transform
                      duration-300
                      ${mobileSection === "company"
                        ? "rotate-180"
                        : ""
                      }
                    `}
                  />
                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${mobileSection === "company"
                      ? "max-h-[250px] pb-4"
                      : "max-h-0"
                    }
                  `}
                >
                  <div className="flex flex-wrap gap-2">
                    {companyItems.map(
                      (item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-line/10
                              bg-surface/60
                              px-3
                              py-2.5
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.08em]
                              text-ink/65
                              transition-all
                              hover:border-[#72B943]
                              hover:text-brand
                            "
                          >
                            <Icon className="text-[#72B943]" />
                            {item.name}
                          </Link>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              {/* CONTACT */}

              <Link
                to="/contact"
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-line/10
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-ink
                "
              >
                Contact
                <FiArrowUpRight className="text-[#72B943]" />
              </Link>

              {/* ====================================================
                  MOBILE THEME
              ===================================================== */}

              <div className="mt-5">
                <p
                  className="
                    mb-3
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-ink/40
                  "
                >
                  Appearance
                </p>

                <div className="flex gap-2">
                  {/* LIGHT */}

                  <button
                    type="button"
                    aria-label="Switch to light mode"
                    aria-pressed={theme === "light"}
                    onClick={() =>
                      changeTheme("light")
                    }
                    className={`
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      px-4
                      py-3
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      transition-all
                      duration-300
                      ${theme === "light"
                        ? "border-brandFill bg-brandFill text-white"
                        : "border-line/10 text-ink/60 hover:border-brand/60 hover:text-brand"
                      }
                    `}
                  >
                    <FiSun />
                    Light
                  </button>

                  {/* DARK */}

                  <button
                    type="button"
                    aria-label="Switch to dark mode"
                    aria-pressed={theme === "dark"}
                    onClick={() =>
                      changeTheme("dark")
                    }
                    className={`
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      px-4
                      py-3
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      transition-all
                      duration-300
                      ${theme === "dark"
                        ? "border-[#07100D] bg-[#07100D] text-accent"
                        : "border-line/10 text-ink/60 hover:border-brand/60 hover:text-brand"
                      }
                    `}
                  >
                    <FiMoon />
                    Dark
                  </button>
                </div>
              </div>

              {/* CTA */}

              <Link
                to="/contact"
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#075b3a]
                  px-5
                  py-3.5
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#72B943]
                  hover:text-[#07100D]
                "
              >
                Start a Conversation
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default PremiumHeader;