import { createFileRoute } from "@tanstack/react-router";
import { NavigationBanner } from "../components/NavigationBanner";
import { Tag } from "../components/Tag";
import { HeroBannerContainer } from "./HeroBannerContainer";

const Projets = () => {
  return (
    <div>
      <div className="relative h-[600px]">
        <HeroBannerContainer>
          <Tag text="Mes projets" />
          <div className="mt-[60px] w-[850px]">
            Je m’intéresse à l’expérience utilisateur, je suis une vraie geek
            des <span className="italic">design systems</span> bien montés et de
            typo qui prennent de la place.
          </div>
        </HeroBannerContainer>
      </div>
      <div>
        <NavigationBanner
          title="MürMür"
          redirectPath="/murmur"
          className="bg-beige-moyen"
        />
        <NavigationBanner
          title="Barbie & le féminisme?"
          redirectPath="/barbieetlefeminisme"
          className="bg-beige-moyen"
        />
        <NavigationBanner
          title="Le parcours du médicament"
          redirectPath="/leparcoursdumedicament"
          className="bg-beige-moyen"
        />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/projets")({
  component: Projets,
});
