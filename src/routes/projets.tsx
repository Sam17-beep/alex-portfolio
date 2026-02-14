import { createFileRoute } from "@tanstack/react-router";
import { AccordionBanner } from "../components/AccordionBanner";
import { Tag } from "../components/Tag";
import { HeroBannerContainer } from "./HeroBannerContainer";

const Projets = () => {
  return (
    <div>
      <div className="relative h-[600px]">
        <HeroBannerContainer>
          <Tag text="Mes projets" />
          <div className="mt-[60px] w-[850px]">
            Je m'intéresse à l'expérience utilisateur, je suis une vraie geek
            des <span className="italic">design systems</span> bien montés et de
            typo qui prennent de la place.
          </div>
        </HeroBannerContainer>
      </div>
      <div>
        <AccordionBanner
          title="MürMür"
          description="Design d'interface"
          className="bg-beige-moyen"
        >
          <div className="px-[50px] py-[30px]">
            <p>Contenu du projet MürMür</p>
          </div>
        </AccordionBanner>
        <AccordionBanner
          title="Barbie & le féminisme?"
          description="Direction artistique"
          className="bg-beige-moyen"
        >
          <div className="px-[50px] py-[30px]">
            <p>Contenu du projet Barbie & le féminisme?</p>
          </div>
        </AccordionBanner>
        <AccordionBanner
          title="Le parcours du médicament"
          description="Design d'interface"
          className="bg-beige-moyen"
        >
          <div className="px-[50px] py-[30px]">
            <p>Contenu du projet Le parcours du médicament</p>
          </div>
        </AccordionBanner>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/projets")({
  component: Projets,
});
