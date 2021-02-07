import TestimonialsContainer from "../components/TestimonialsContainer";
import Testimonial from "../components/Testimonial";

export default function About() {
  return (
    <main style={{ paddingTop: "100px" }}>
      <TestimonialsContainer
        title="Customer Reviews"
        subtite="Lorem Ipsum is simply dummy text of the printing and typesetting"
      >
        <Testimonial
          customerName="Paul Mitchel"
          customerTitle="Web Developer"
          testimonialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus
        dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque
        non non purus. Suspendisse varius nibh non aliquet."
          isActive={true}
        />

        <Testimonial
          customerName="Steve Fonsi"
          customerTitle="Web Designer"
          testimonialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus
        dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque
        non non purus. Suspendisse varius nibh non aliquet."
        />

        <Testimonial
          customerName="Daniel Vebar"
          customerTitle="SEO Analyst"
          testimonialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus
        dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque
        non non purus. Suspendisse varius nibh non aliquet."
        />
      </TestimonialsContainer>
    </main>
  );
}
