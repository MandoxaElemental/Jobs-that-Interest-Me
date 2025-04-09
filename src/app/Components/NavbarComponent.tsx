
import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jobs that Interest you</span>
      </NavbarBrand>
      <NavbarToggle />
    </Navbar>
  );
}
