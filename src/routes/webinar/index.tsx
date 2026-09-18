import { Webinar } from "@/components/main/webinar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/webinar/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Webinar />
    </>
  );
}
