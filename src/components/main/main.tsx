import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export default function Main({
  className,
  children,
  ...props
}: ComponentProps<"main">) {
  return (
    <main className={cn("grow")} {...props}>
      {children}
    </main>
  );
}
