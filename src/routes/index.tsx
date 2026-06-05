import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K. Ashrith Reddy — Software Engineering Student & Full Stack Developer" },
      { name: "description", content: "Portfolio of K. Ashrith Reddy, Integrated M.Tech Software Engineering student at VIT-AP. Full Stack Developer, Java Enthusiast, Problem Solver." },
      { property: "og:title", content: "K. Ashrith Reddy — Software Engineer Portfolio" },
      { property: "og:description", content: "Building innovative software through code, creativity, and continuous learning." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
