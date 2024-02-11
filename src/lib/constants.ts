export const WIDE_SCREEN_SIZE = 1279;
export const DESKTOP_SCREEN_SIZE = 1023;
export const TABLET_SCREEN_SIZE = 768;

enum NavbarMenuTitle {
	HOME = "Home",
	HOW_IT_WORKS = "How it Works",
	ROADMAP = "Roadmap",
	FAQ = "FAQ",
}

interface NavBarMenuProps {
	title: NavbarMenuTitle;
	href: string;
}

export const navBarMenu: NavBarMenuProps[] = [
	{ title: NavbarMenuTitle.HOME, href: "/" },
	{ title: NavbarMenuTitle.HOW_IT_WORKS, href: "/" },
	{ title: NavbarMenuTitle.ROADMAP, href: "/" },
	{ title: NavbarMenuTitle.FAQ, href: "/" },
];
