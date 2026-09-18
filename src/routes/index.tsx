import Main from "@/components/main/main";
import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/main/home/home";

export const Route = createFileRoute("/")({
  component: RouteComponent,

  head: () => {
    const title = "Sanjib Academy";
    const description = "SR Loan Service | Simple & Flexible Loan Solutions";
    return {
      meta: [
        { title: title },
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        { property: "og:image", content: "/logo512.png" },
      ],
    };
  },
});

function RouteComponent() {
  return (
    <Main>
      <Home />
    </Main>
  );
}
