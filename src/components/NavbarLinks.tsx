import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/about", text: "About" },
  { id: 4, url: "/contact", text: "Contact" },
];

function NavbarLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.url} className="capitalize">
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavbarLinks;
