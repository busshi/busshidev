import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { LegalLayout, Section } from "../components/LegalLayout";
import { EMAIL } from "../lib/constants";

const MentionsLegales: NextPage = () => {
  const { locale } = useRouter();
  const isEn = locale === "en";

  return (
    <>
      <Head>
        <title>
          {isEn ? "Legal Notice - BusshiDev" : "Mentions légales - BusshiDev"}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      <LegalLayout
        title={isEn ? "Legal Notice" : "Mentions légales"}
        updatedAt={
          isEn
            ? "Last updated: August 22, 2026"
            : "Dernière mise à jour : 22 août 2026"
        }
      >
        {isEn ? (
          <>
            <Section title="1. Site Publisher">
              <p>
                This site, busshidev.fr (hereafter &quot;the Site&quot;), is
                published by:
              </p>
              <ul>
                <li>Name: Alexandre Dubar, trading as BusshiDev</li>
                <li>
                  Legal status: Sole proprietorship (French &quot;entreprise
                  individuelle&quot;)
                </li>
                <li>SIREN number: 911 127 835</li>
                <li>Intra-community VAT number: FR 5091112783</li>
                <li>
                  Email: <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
                </li>
                <li>Publication director: Alexandre Dubar</li>
              </ul>
            </Section>

            <Section title="2. Hosting">
              <p>The Site is hosted by:</p>
              <ul>
                <li>Company name: Vercel Inc.</li>
                <li>
                  Address: 440 N Barranca Avenue #4133, Covina, CA 91723, United
                  States
                </li>
                <li>
                  Contact:{" "}
                  <Link href="mailto:privacy@vercel.com">
                    privacy@vercel.com
                  </Link>
                </li>
              </ul>
            </Section>

            <Section title="3. Intellectual Property">
              <p>
                All content on the Site (text, images, logos, graphics, layout,
                source code) is, unless stated otherwise, the exclusive property
                of BusshiDev or of the clients referenced for portfolio
                purposes, and is protected under French intellectual property
                law. Any reproduction, representation, modification or use of
                this content, in whole or in part, by any means whatsoever,
                without prior written authorization, is prohibited.
              </p>
              <p>
                The company and organization logos shown in the &quot;Trusted
                by&quot; and &quot;Testimonials&quot; sections are the property
                of their respective owners and are used for reference purposes,
                with the agreement of the parties concerned, to illustrate work
                actually carried out.
              </p>
            </Section>

            <Section title="4. Hyperlinks">
              <p>
                The Site may contain links to third-party sites (LinkedIn
                profiles, Malt, Calendly...). BusshiDev has no control over
                these sites and disclaims any responsibility for their content
                or privacy practices.
              </p>
            </Section>

            <Section title="5. Cookies and Trackers">
              <p>
                The Site uses the following third-party services, which may
                place cookies or trackers on your browser:
              </p>
              <ul>
                <li>
                  <strong>Vercel Analytics</strong>, for anonymized audience
                  measurement of the Site.
                </li>
                <li>
                  <strong>Crisp</strong>, for live chat, when you voluntarily
                  enable it.
                </li>
                <li>
                  <strong>Calendly</strong>, for online scheduling, when you
                  access the booking module.
                </li>
              </ul>
              <p>
                You can configure your browser at any time to refuse cookies.
                See the &quot;Cookies&quot; section of our{" "}
                <Link href="/cgu">Terms of Use</Link> for more details.
              </p>
            </Section>

            <Section title="6. Governing Law">
              <p>
                This legal notice is governed by French law. In the event of a
                dispute, and failing an amicable settlement, the French courts
                shall have sole jurisdiction.
              </p>
            </Section>
          </>
        ) : (
          <>
            <Section title="1. Éditeur du site">
              <p>
                Le présent site busshidev.fr (ci-après « le Site ») est édité
                par :
              </p>
              <ul>
                <li>
                  Nom et prénom : Alexandre Dubar, exerçant sous le nom
                  commercial BusshiDev
                </li>
                <li>Statut juridique : Entreprise individuelle</li>
                <li>Numéro SIREN : 911 127 835</li>
                <li>Numéro de TVA intracommunautaire : FR 5091112783</li>
                <li>
                  Email : <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
                </li>
                <li>Directeur de la publication : Alexandre Dubar</li>
              </ul>
            </Section>

            <Section title="2. Hébergement">
              <p>Le Site est hébergé par :</p>
              <ul>
                <li>Raison sociale : Vercel Inc.</li>
                <li>
                  Adresse : 440 N Barranca Avenue #4133, Covina, CA 91723,
                  États-Unis
                </li>
                <li>
                  Contact :{" "}
                  <Link href="mailto:privacy@vercel.com">
                    privacy@vercel.com
                  </Link>
                </li>
              </ul>
            </Section>

            <Section title="3. Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur le Site (textes,
                images, logos, graphismes, mise en page, code source) est, sauf
                mention contraire, la propriété exclusive de BusshiDev ou de ses
                clients cités à titre de référence, et est protégé par le Code
                de la propriété intellectuelle. Toute reproduction,
                représentation, modification ou exploitation, totale ou
                partielle, de ces contenus, par quelque procédé que ce soit,
                sans autorisation écrite préalable, est interdite.
              </p>
              <p>
                Les logos des entreprises et organisations présentés dans les
                sections « Ils me font confiance » et « Avis clients » sont la
                propriété de leurs détenteurs respectifs et sont utilisés à
                titre de référence, avec l&apos;accord des personnes concernées,
                pour illustrer des missions réellement réalisées.
              </p>
            </Section>

            <Section title="4. Liens hypertextes">
              <p>
                Le Site peut contenir des liens vers des sites tiers (profils
                LinkedIn, Malt, Calendly...). BusshiDev n&apos;exerce aucun
                contrôle sur ces sites et décline toute responsabilité quant à
                leur contenu ou leur politique de confidentialité.
              </p>
            </Section>

            <Section title="5. Cookies et traceurs">
              <p>
                Le Site utilise les services tiers suivants, susceptibles de
                déposer des cookies ou traceurs sur votre navigateur :
              </p>
              <ul>
                <li>
                  <strong>Vercel Analytics</strong>, pour une mesure
                  d&apos;audience anonymisée du Site.
                </li>
                <li>
                  <strong>Crisp</strong>, pour le chat en ligne, lorsque vous
                  l&apos;activez volontairement.
                </li>
                <li>
                  <strong>Calendly</strong>, pour la prise de rendez-vous en
                  ligne, lorsque vous accédez au module de réservation.
                </li>
              </ul>
              <p>
                Vous pouvez à tout moment configurer votre navigateur pour
                refuser les cookies. Voir la section « Cookies » de nos{" "}
                <Link href="/cgu">Conditions Générales d&apos;Utilisation</Link>{" "}
                pour plus de détails.
              </p>
            </Section>

            <Section title="6. Droit applicable">
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige et à défaut d&apos;accord amiable, les
                tribunaux français seront seuls compétents.
              </p>
            </Section>
          </>
        )}
      </LegalLayout>
    </>
  );
};

export default MentionsLegales;
