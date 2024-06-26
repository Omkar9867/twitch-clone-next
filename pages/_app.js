import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar";
import "../public/globals.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ session, Component, pageProps }) {
  return (
    <>
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
