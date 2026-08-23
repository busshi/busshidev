import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { LegalLayout, Section } from "../components/LegalLayout";
import { EMAIL } from "../lib/constants";

const CGU: NextPage = () => {
  const { locale } = useRouter();
  const isEn = locale === "en";

  return (
    <>
      <Head>
        <title>
          {isEn
            ? "Terms of Use - BusshiDev"
            : "Conditions Générales d'Utilisation - BusshiDev"}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      <LegalLayout
        title={isEn ? "Terms of Use" : "Conditions Générales d'Utilisation"}
        updatedAt={
          isEn
            ? "Last updated: August 22, 2026"
            : "Dernière mise à jour : 22 août 2026"
        }
      >
        {isEn ? (
          <>
            <Section title="1. Purpose">
              <p>
                These Terms of Use govern access to and use of the site
                busshidev.fr (hereafter &quot;the Site&quot;), published by
                BusshiDev. The Site presents the services offered by
                BusshiDev — website creation, custom application development
                and AI automation — as well as ways to get in touch. Access
                to the Site implies full acceptance of these Terms of Use.
              </p>
            </Section>

            <Section title="2. Site Access">
              <p>
                The Site is freely accessible to any user with an internet
                connection. All costs related to accessing the Site
                (hardware, connection, etc.) are the user&apos;s
                responsibility. BusshiDev uses reasonable means available to
                it to ensure continuous access to the Site, without any
                obligation of result, and cannot be held liable for any
                interruption, outage or unavailability, in particular for
                maintenance operations.
              </p>
            </Section>

            <Section title="3. Services Offered">
              <p>
                The Site is intended for commercial presentation purposes.
                Any engagement (site creation, application development, AI
                agent...) is preceded by an initial discussion, followed by
                a commercial proposal and, where applicable, a separate
                contract or quote specifying the scope, timeline and
                pricing terms. These Terms of Use do not constitute a
                contractual offer of services.
              </p>
            </Section>

            <Section title="4. Intellectual Property">
              <p>
                All elements of the Site (text, visuals, code, visual
                identity) are protected under intellectual property law. Any
                unauthorized reproduction or use is prohibited. See the{" "}
                <Link href="/mentions-legales">legal notice</Link> for
                details.
              </p>
            </Section>

            <Section title="5. Personal Data">
              <p>
                BusshiDev, as data controller, collects personal data via
                the Site in the following cases:
              </p>
              <ul>
                <li>
                  <strong>Getting in touch</strong>: when you send an email,
                  use the live chat (Crisp) or book a call via Calendly, the
                  information you provide (name, email, content of the
                  exchange) is used exclusively to respond to your request.
                </li>
                <li>
                  <strong>Audience measurement</strong>: the Site uses
                  Vercel Analytics, an anonymized audience measurement tool
                  that does not place a nominative tracking cookie.
                </li>
              </ul>
              <p>
                These processing activities are based on your consent (for
                chat and scheduling) or on BusshiDev&apos;s legitimate
                interest in responding to contact requests. Data is kept for
                as long as necessary to process your request and is not
                shared with any third party beyond the technical processors
                mentioned above (Crisp, Calendly, Vercel), each subject to
                its own privacy terms.
              </p>
              <p>
                In accordance with the General Data Protection Regulation
                (GDPR) and French data protection law, you have the right to
                access, rectify, erase and port your data, as well as the
                right to object to its processing. You may exercise these
                rights by writing to{" "}
                <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>. You also have
                the right to lodge a complaint with the{" "}
                <Link
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  CNIL
                </Link>{" "}
                (the French data protection authority).
              </p>
              <p>
                Data controller: Alexandre Dubar, trading as BusshiDev (Sole
                proprietorship, SIREN 911 127 835) — see the{" "}
                <Link href="/mentions-legales">legal notice</Link> for
                details.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>
                The Site places technical cookies necessary for its
                operation, as well as third-party cookies related to Vercel
                Analytics, Crisp and Calendly when these services are used.
                You can configure your browser to refuse or delete these
                cookies at any time; some features (chat, scheduling) may
                then become unavailable.
              </p>
            </Section>

            <Section title="7. Liability">
              <p>
                BusshiDev strives to ensure the accuracy of the information
                published on the Site, without guaranteeing the absence of
                errors or omissions. BusshiDev cannot be held liable for
                direct or indirect damages resulting from the use of the
                Site or the inability to access it.
              </p>
            </Section>

            <Section title="8. Changes to these Terms">
              <p>
                BusshiDev reserves the right to modify these Terms of Use at
                any time. The applicable Terms are those in effect on the
                date the Site is accessed, as indicated at the top of this
                page.
              </p>
            </Section>

            <Section title="9. Governing Law">
              <p>
                These Terms of Use are governed by French law. Any dispute
                relating to their interpretation or performance shall, in
                the absence of an amicable resolution, fall under the
                jurisdiction of the French courts.
              </p>
            </Section>
          </>
        ) : (
          <>
            <Section title="1. Objet">
              <p>
                Les présentes Conditions Générales d&apos;Utilisation (CGU)
                encadrent l&apos;accès et l&apos;utilisation du site
                busshidev.fr (ci-après « le Site »), édité par BusshiDev. Le
                Site présente les services proposés par BusshiDev — création
                de sites web, développement d&apos;applications sur mesure
                et d&apos;automatisations IA — ainsi que les moyens de le
                contacter. L&apos;accès au Site implique l&apos;acceptation
                pleine et entière des présentes CGU.
              </p>
            </Section>

            <Section title="2. Accès au site">
              <p>
                Le Site est accessible gratuitement à tout utilisateur
                disposant d&apos;un accès à Internet. Tous les frais liés à
                l&apos;accès au Site (matériel, connexion, etc.) sont à la
                charge de l&apos;utilisateur. BusshiDev met en œuvre les
                moyens raisonnables à sa disposition pour assurer un accès
                continu au Site, sans obligation de résultat, et ne saurait
                être tenu responsable de toute interruption, panne ou
                indisponibilité, notamment pour des opérations de
                maintenance.
              </p>
            </Section>

            <Section title="3. Services proposés">
              <p>
                Le Site a une vocation de présentation commerciale. Toute
                mission (création de site, développement d&apos;application,
                agent IA...) fait l&apos;objet d&apos;un échange préalable
                puis d&apos;une proposition commerciale et, le cas échéant,
                d&apos;un contrat ou devis distinct précisant le périmètre,
                le calendrier et les conditions tarifaires. Les présentes
                CGU ne constituent pas une offre contractuelle de prestation
                de services.
              </p>
            </Section>

            <Section title="4. Propriété intellectuelle">
              <p>
                L&apos;ensemble des éléments du Site (textes, visuels, code,
                identité graphique) est protégé par le droit de la propriété
                intellectuelle. Toute reproduction ou exploitation non
                autorisée est interdite. Voir les{" "}
                <Link href="/mentions-legales">mentions légales</Link> pour
                le détail.
              </p>
            </Section>

            <Section title="5. Données personnelles">
              <p>
                BusshiDev, en qualité de responsable de traitement, collecte
                des données personnelles via le Site dans les cas suivants :
              </p>
              <ul>
                <li>
                  <strong>Prise de contact</strong> : lorsque vous envoyez
                  un email, utilisez le chat en ligne (Crisp) ou réservez un
                  appel via Calendly, les informations que vous transmettez
                  (nom, email, contenu de l&apos;échange) sont utilisées
                  exclusivement pour répondre à votre demande.
                </li>
                <li>
                  <strong>Mesure d&apos;audience</strong> : le Site utilise
                  Vercel Analytics, un outil de mesure d&apos;audience
                  anonymisé, qui ne dépose pas de cookie traceur nominatif.
                </li>
              </ul>
              <p>
                Ces traitements reposent sur votre consentement (pour le
                chat et la prise de rendez-vous) ou sur l&apos;intérêt
                légitime de BusshiDev à répondre aux demandes de contact.
                Les données sont conservées le temps nécessaire au
                traitement de votre demande et ne sont transmises à aucun
                tiers en dehors des sous-traitants techniques mentionnés
                ci-dessus (Crisp, Calendly, Vercel), chacun soumis à ses
                propres conditions de confidentialité.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des
                Données (RGPD) et à la loi Informatique et Libertés, vous
                disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement et de portabilité de vos données, ainsi
                que du droit de vous opposer à leur traitement. Vous pouvez
                exercer ces droits en écrivant à{" "}
                <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>. Vous disposez
                également du droit d&apos;introduire une réclamation auprès
                de la{" "}
                <Link
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  CNIL
                </Link>
                .
              </p>
              <p>
                Responsable du traitement : Alexandre Dubar, exerçant sous
                le nom commercial BusshiDev (Entreprise individuelle, SIREN
                911 127 835) — voir les{" "}
                <Link href="/mentions-legales">mentions légales</Link> pour
                le détail.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>
                Le Site dépose des cookies techniques nécessaires à son
                fonctionnement, ainsi que des cookies tiers liés à Vercel
                Analytics, Crisp et Calendly lorsque ces services sont
                utilisés. Vous pouvez configurer votre navigateur pour
                refuser ou supprimer ces cookies à tout moment ; certaines
                fonctionnalités (chat, prise de rendez-vous) pourraient
                alors ne plus être disponibles.
              </p>
            </Section>

            <Section title="7. Responsabilité">
              <p>
                BusshiDev s&apos;efforce d&apos;assurer l&apos;exactitude
                des informations diffusées sur le Site, sans garantir
                l&apos;absence d&apos;erreur ou d&apos;omission. BusshiDev
                ne saurait être tenu responsable des dommages directs ou
                indirects résultant de l&apos;utilisation du Site ou de
                l&apos;impossibilité d&apos;y accéder.
              </p>
            </Section>

            <Section title="8. Modification des CGU">
              <p>
                BusshiDev se réserve le droit de modifier les présentes CGU
                à tout moment. Les CGU applicables sont celles en vigueur à
                la date de consultation du Site, indiquée en haut de cette
                page.
              </p>
            </Section>

            <Section title="9. Droit applicable">
              <p>
                Les présentes CGU sont soumises au droit français. Tout
                litige relatif à leur interprétation ou leur exécution
                relève, à défaut de résolution amiable, de la compétence
                des tribunaux français.
              </p>
            </Section>
          </>
        )}
      </LegalLayout>
    </>
  );
};

export default CGU;
