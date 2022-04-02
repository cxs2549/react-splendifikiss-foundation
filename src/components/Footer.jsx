import { BsFacebook, BsInstagram, BsSpotify, BsTwitter } from "react-icons/bs"
import tw, { styled } from "twin.macro"
import { Logo } from "./Header"

const StyledFooter = styled.footer`
  ${tw`flex flex-col gap-8 py-6 px-4 relative`};
  background-color: var(--surface-2);
`

const Footer = () => {
  const links1 = [
    { title: "studios", href: "/studios" },
    { title: "airwaves", href: "/airwaves" },
    { title: "events", href: "/events" },
    { title: "members", href: "/members" },
    { title: "merch", href: "/merch" },
    { title: "festival", href: "/festival" },
  ]
  const Socials = () => (
    <div className="absolute right-5 text-2xl top-8 flex flex-col justify-center gap-5">
      <BsSpotify />
      <BsFacebook />
      <BsInstagram />
      <BsTwitter />
    </div>
  )
  return (
    <StyledFooter>
      <Logo />
      <Socials />
      <ul className="grid grid-cols-2 gap-1 text-sm">
        {links1.map((link, i) => (
          <li key={i} className="capitalize hover:underline cursor-pointer">{link.title}</li>
        ))}
      </ul>
      {/* <div className="text-sm gap-1 flex flex-col px-3">
        <h1>Splendifikiss Foundation</h1>
        <h1>(323) 380-0944</h1>
      </div> */}
      <p className="text-xs mt-4">
        &copy; 2022 R1 WebWorks for Splendifikiss Foundation <br /> All Rights
        Reserved.
      </p>
    </StyledFooter>
  )
}
export default Footer
