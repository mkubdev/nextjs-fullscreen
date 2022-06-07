import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
    {
      href: '/graph100',
      title: 'Graph 100%',
    },
    {
      href: '/graph',
      title: 'Graph calc()',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-emerald-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        💎 Next.js Fullscreen
      </header>
      <div className="flex md:flex-row flex-1">
        <aside className="hidden md:block bg-emerald-100 w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-emerald-200 rounded hover:bg-emerald-400 cursor-pointer ${
                        router.asPath === href && 'bg-emerald-600 text-white'
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
}
