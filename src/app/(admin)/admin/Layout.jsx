import vazirFont from "@/constants/localFonts";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../../Providers";
import Sidebar from "./Sidebar";
import NavbarPanel from "@/components/panel/NavbarPanel";

export const metadata = {
  title: "صفحه ادمین",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Providers>
          <Toaster />
          <section className="flex container mx-auto">
            <Sidebar />
            <div className="flex-1 p-5">
              <NavbarPanel />
              {children}
            </div>
          </section>
        </Providers>
      </body>
    </html>
  );
}