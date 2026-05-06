// Server Component — compatible Next 16
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { EXPERTISES } from "@/data/novark";
import ExpertiseClient from "./ExpertiseClient";

type ExpertiseParams = { slug: string };
type ExpertisePageProps = { params: Promise<ExpertiseParams> | ExpertiseParams };

// Les slugs sont pré-rendus, mais dynamicParams reste true pour éviter un 404 brutal
// si Vercel reçoit une route au moment d'une nouvelle mise à jour.
export const dynamicParams = true;

export async function generateStaticParams(): Promise<ExpertiseParams[]> {
  return EXPERTISES.map((expertise) => ({ slug: expertise.slug }));
}

async function resolveParams(params: ExpertisePageProps["params"]): Promise<ExpertiseParams> {
  return await params;
}

export async function generateMetadata({ params }: ExpertisePageProps): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const expertise = EXPERTISES.find((item) => item.slug === slug);

  if (!expertise) {
    return {
      title: "Expertises NOVARK",
      description: "Découvrez les expertises NOVARK en intelligence artificielle, robotique, vision par ordinateur et systèmes embarqués.",
    };
  }

  return {
    title: `${expertise.name} | NOVARK`,
    description: expertise.description,
  };
}

export default async function ExpertisePage({ params }: ExpertisePageProps) {
  const { slug } = await resolveParams(params);
  const expertise = EXPERTISES.find((item) => item.slug === slug);

  // Plus de page 404 visible : une route inconnue renvoie vers la liste claire.
  if (!expertise) {
    redirect("/expertises");
  }

  return <ExpertiseClient slug={slug} />;
}
