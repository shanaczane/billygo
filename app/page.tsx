import {
  TopBar, Header, Hero, TrustStrip, Services, Steps, Reviews, Offer, Faq, Closing, Footer,
} from "@/components/sections";

// Reorder or delete sections here. Empty content in site.config.ts hides a section too.
export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Steps />
        <Reviews />
        <Offer />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
