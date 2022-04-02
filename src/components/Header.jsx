import { useState, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import tw, { styled } from "twin.macro"
import { RiMenu2Line, RiSearchLine } from "react-icons/ri"
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai"
import useOutsideClick from "@rooks/use-outside-click"
import { Link, NavLink } from "react-router-dom"

const StyledHeader = styled.header`
  ${tw`h-20 relative`};

  svg {
    cursor: pointer;
  }
  #menu {
    background-color: var(--surface-1);
    box-shadow: var(--shadow-2);
    overflow-y: scroll;
    scrollbar-width: none;
  }
  #burgerBtn {
    transition: 200ms ease-in-out;
    &:hover {
      background-color: var(--surface-2);
    }
  }
  .overlay-enter {
    opacity: 0;
  }
  .overlay-enter-active {
    opacity: 0.5;
    transition: all 300ms ease-in;
  }
  .overlay-exit {
    opacity: 0.5;
  }
  .overlay-exit-active {
    opacity: 0;
    transition: all 350ms ease-in;
  }
  .menu-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .menu-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: 500ms ease-in-out;
  }
  .menu-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .menu-exit-active {
    opacity: 0.1;
    transform: translateY(-10px);
    transition: 300ms ease-in-out;
  }
  .menuLink {
    cursor: pointer;
    color: var(--text-2);
    transition: all 300ms ease-in-out;
    a:visited {
      color: var(--gray-6);
    }
    &:hover {
      background-color: var(--surface-2);
    }
  }

  .active {
    background-color: var(--surface-3);
    color: var(--brand) !important;
    opacity: 1;
    ${tw`font-medium`};
  }
  #signIn {
    box-shadow: var(--shadow-4);
    transition: all 300ms ease-in-out;
    &:hover {
      box-shadow: var(--shadow-1);
    }
  }
  #register {
    box-shadow: var(--shadow-4);
    transition: all 300ms ease-in-out;
    &:hover {
      box-shadow: var(--shadow-1);
    }
  }
`
const Container = tw.div`flex h-full items-center justify-between pl-3`

export const Logo = () => (
  <Link to="/" className="relative z-40">
    <h1 className="text-[27px] font-semibold">
      Splendifi
      <span className="text-brand">
        k<span className="italic">i</span>ss
      </span>
    </h1>
    <h1 className="absolute left-1 font-medium -bottom-2">Foundation</h1>
  </Link>
)

const Burger = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const handleOpen = () => {
    setOpen(!open)
    document.body.classList.toggle("no-flow")
  }
  const handleClose = () => {
    setOpen(false)
    document.body.classList.remove("no-flow")
  }
  const links1 = [
    { title: "home", href: "/" },
    {
      title: "studios",
      href: "https://splendifikissfoundation.org/splendifikiss-studios",
      external: true,
    },
    { title: "airwaves", href: "/airwaves" },
    { title: "events", href: "/events" },
    { title: "onlyFans", href: "/onlyfans" },
    { title: "merch", href: "/merch" },
    { title: "festivals", href: "/festival" },
    { title: "bookings", href: "/bookings" },
    { title: "orders", href: "/orders" },
  ]
  const LinkLayer = ({ title, href, external }) => {
    return (
      <div>
        {external ? (
          <a
            className="menuLink h-[53px] flex items-center capitalize text-[15px] px-2 w-full"
            href={href}
          >
            {title}
          </a>
        ) : (
          <NavLink
            to={href}
            className=" h-[53px] flex items-center capitalize text-[15px] px-2 w-full"
          >
            {title}
          </NavLink>
        )}
      </div>
    )
  }
  const Search = () => (
    <div className=" pt-3 mb-2 relative flex items-center justify-center px-3">
      <input
        type="search"
        className="w-full rounded px-3 py-3 cursor-text text-[15px]"
        placeholder="Search"
      />
      <RiSearchLine
        size={23}
        className="ml-2 mr-4 absolute right-3 opacity-80 z-10"
      />
    </div>
  )
  const Menu = () => {
    return (
      <div
        id="menu"
        className="absolute top-[70px]  right-6  rounded z-50 min-h-[200px] "
      >
        <div>
          <Search />
          <div className="grid grid-cols-2 gap-2 m-3 mt-2 h-[48px] rounded">
            <Link
              id="signIn"
              to="/sign-in"
              className="menuLink  rounded flex gap-1 items-center justify-center w-full h-full px-4"
            >
              <AiOutlineUser size={22} />
              <p className="text-[15px]">Sign In</p>
            </Link>
            <Link
              id="register"
              to="/register"
              className="menuLink  rounded flex gap-1 items-center justify-center w-full h-full px-4"
            >
              <AiOutlineUserAdd size={22} />
              <p className="text-[15px]">Register</p>
            </Link>
          </div>
          <ul className="flex flex-col gap-2">
            {links1.map((link, i) => (
              <li key={i} className="menuLink mx-3 rounded overflow-hidden">
                <LinkLayer
                  title={link.title}
                  href={link.href}
                  external={link.external}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  const Overlay = () => {
    return (
      <div
        className="fixed top-0 left-0 right-0 h-screen bg-black opacity-50 z-10"
        onClick={handleClose}
      ></div>
    )
  }
  useOutsideClick(ref, handleClose)
  return (
    <div ref={ref}>
      <button
        id="burgerBtn"
        type="button"
        onClick={handleOpen}
        className="w-[48px] h-[48px] mr-3 rounded items-center flex justify-center py-1 relative z-20"
      >
        <RiMenu2Line size={26} />
      </button>
      <CSSTransition
        in={open}
        unmountOnExit
        timeout={{ enter: 500, exit: 300 }}
        classNames="menu"
      >
        <Menu />
      </CSSTransition>
      <CSSTransition
        in={open}
        unmountOnExit
        timeout={{ enter: 300, exit: 350 }}
        classNames="overlay"
      >
        <Overlay />
      </CSSTransition>
    </div>
  )
}

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Burger />
      </Container>
    </StyledHeader>
  )
}
export default Header
