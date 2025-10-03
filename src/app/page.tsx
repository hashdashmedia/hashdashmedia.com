import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import Service from "@/components/service";
export default function Home() {
  return (
    <Container>
      <Hero />
      <Service/>
      <SectionTitle preTitle="HASHDASH Benefits" title=""></SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        Don’t have a video yet? No problem. Here’s a quick preview of what your
        project could look like.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        We’ve compiled answers to the most common questions clients ask about
        our services, process, and support. If you don’t find what you’re
        looking for, feel free to reach out to us directly.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
