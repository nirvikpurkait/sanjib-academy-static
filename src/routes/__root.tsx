import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { DevTool } from "@/integrations/tanstack/devtools";
import appCss from "@/styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { Header } from "@/components/header/header";
import { NotFound } from "@/components/main/not-found";
import { cn } from "@/lib/utils/cn";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Sanjib Academy",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
  shellComponent: RootDocument,

  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(`dark`)} >
      <head>
        <HeadContent />
      </head>
      <body
        className={cn(
          `bg-background text-foreground flex min-h-svh flex-col`,
        )}
      >
        <Header />
        {children}
        {/* <Footer /> */}
        <DevTool />
        <Scripts />
      </body>
    </html>
  );
}
