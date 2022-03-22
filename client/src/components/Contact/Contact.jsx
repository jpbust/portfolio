import React from "react";

export default function Contact() {
  return (
    <div className="section-teal">
      <section id="contact">
        <h2> Contact Me </h2>

        <p>
          {" "}
          I'm Always interested to new oportunities in tech, finance,
          logistics and supply chain. Please feel welcomed to reach me through
          here or Linkedin anytime. I will do my best effort to respond as
          quickly as possible
        </p>

        <p>
          <a
            className="button"
            href="mailto:cuchobustamante@gmail.com"
            target="_blank"
          >
            Email me
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/jpbust/" target="_blank">
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
}
