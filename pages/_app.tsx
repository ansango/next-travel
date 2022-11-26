import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { Layout } from "components/common";
import { SessionProvider, useSession } from "next-auth/react";
import { type ReactNode } from "react";
import { type Session } from "next-auth";
import { type NextComponentType } from "next";

type CustomAppProps = AppProps<{ session: Session }> & {
  Component: NextComponentType & { auth?: boolean };
};

function Auth({ children }: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <></>;
  }

  return <>{children}</>;
}


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Layout>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
