
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jobs that Interest Me</span>
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink href="/Jobs">
          Jobs
        </NavbarLink>
      </NavbarCollapse>
      <NavbarToggle />
    </Navbar>
  );
}
