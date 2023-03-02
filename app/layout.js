import MainNavigation from "../components/ui/MainNavigation";
import "./global.css";

/**
 * @param {children} : children might be current page.js or sub pages/layouts
 * @returns: a navigation bar and children
 */

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="w-screen h-screen">
        <header className="w-full h-[10%] flex flex-col items-center justify-center">
          <MainNavigation />
          <span className="h-1 w-14 bg-black rounded-lg"></span>
        </header>
        <main className="w-full h-[90%]">{children}</main>
      </body>
    </html>
  );
}
