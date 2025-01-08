import XformerlyTwitter from "@/public/Icons/XIcon";
import Github from "@/public/Icons/GithubIcon";
import NavLinks from "../Navigation/NavigationLinks";

const social = [
  {
    url: "https://github.com/benbugraer",
    icon: <Github className="w-4 h-4" />,
  },
  {
    url: "https://x.com/benbugraer",
    icon: <XformerlyTwitter className="w-4 h-4" />,
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/docs/introduction", prefetch: true },
  { label: "Blocks", href: "/blocks", prefetch: true },
];

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-tertiary mt-40 border-t border-primary">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-center space-x-8 mb-8">
          <ul className="flex gap-1 items-center justify-center text-center">
            {navItems.map((items) => (
              <li key={items.href}>
                <NavLinks href={items.href}>{items.label}</NavLinks>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {social.map((social) => (
            <a
              target="_blank"
              key={social.url}
              href={social.url}
              className="inline-flex text-primary items-center justify-center  text-sm font-medium transition-colors  rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary duration-500 hover:duration-500 hover:text-accent-foreground h-10 w-10"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-tertiary">
          <p>© 2024 Your Company, Inc. All rights reserved by Bugra Er</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
