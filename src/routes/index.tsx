import { createFileRoute } from "@tanstack/react-router";
import { NavigationBanner } from "../components/NavigationBanner";
import { Tag } from "../components/Tag";
import { HeroBannerContainer } from "./HeroBannerContainer";

const Index = () => {
  return (
    <div>
      <div className="relative h-[600px]">
        <HeroBannerContainer>
          <Tag text="Salut!" />
          <h1>
            moi, c'est <span className="font-editorial italic">Alexane</span>,
            <br />
            je suis designer
          </h1>
          <h2>
            et je travaille dans heureux mélange de
            <br />
            design d'interaction & design graphique.
          </h2>
        </HeroBannerContainer>
      </div>
      <div>
        <NavigationBanner
          title="Mes projets"
          redirectPath="/projets"
          className="bg-pomme"
        />
        <NavigationBanner
          title="Mon curriculum"
          redirectPath="/curriculum"
          className="bg-fleur"
        />
        <NavigationBanner
          title="On reste en contact ?"
          redirectPath="/contact"
          className="bg-indigo"
        />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
