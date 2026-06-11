import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import marbleFront from "../assets/bleuvein-marble-front.jpeg";
import marbleBack from "../assets/bleuvein-marble-back.jpeg";
import blackFront from "../assets/bleuvein-black-front.jpeg";
import blackBack from "../assets/bleuvein-black-back.jpeg";
import butterflyBack from "../assets/bleuvein-butterfly-back.jpeg";
import butterflyFront from "../assets/bleuvein-butterfly-front.jpeg";
import cloudBack from "../assets/bleuvein-cloud-back.jpeg";
import cloudFront from "../assets/bleuvein-cloud-front.jpeg";
import fragmentFront from "../assets/bleuvein-fragment-front.jpeg";
import fragmentBack from "../assets/bleuvein-fragment-back.jpeg";
import heartBack from "../assets/bleuvein-heart-back.jpeg";
import heartFront from "../assets/bleuvein-heart-front.jpeg";
import logoBlack from "../assets/bleuvein-logo-black.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLEUVEIN Luxury Streetwear T-Shirts" },
      {
        name: "description",
        content:
          "Premium cinematic streetwear T-shirts engineered for expression, movement, and limited drops.",
      },
      { property: "og:title", content: "BLEUVEIN Luxury Streetwear" },
      {
        property: "og:description",
        content:
          "Shop BLEUVEIN premium T-shirts with cinematic graphics, limited drops, and engineered expression.",
      },
      { property: "og:image", content: fragmentBack },
      { name: "twitter:image", content: fragmentBack },
    ],
  }),
  component: BleuveinHome,
});

const products = [
  {
    name: "Control the Chaos Tee",
    price: "₹3,999",
    front: blackFront,
    back: blackBack,
    tone: "Electric vein graphic / washed black",
  },
  {
    name: "Fragment Identity Tee",
    price: "₹4,499",
    front: fragmentFront,
    back: fragmentBack,
    tone: "Shattered figure artwork / midnight wash",
  },
  {
    name: "Silent Motion Tee",
    price: "₹3,299",
    front: marbleFront,
    back: marbleBack,
    tone: "Panther story print / mineral cream",
  },
  {
    name: "Out of State Tee",
    price: "₹2,999",
    front: cloudFront,
    back: cloudBack,
    tone: "Cloud wash graphic / sky blue",
  },
  {
    name: "Feel Everything Tee",
    price: "₹3,799",
    front: heartFront,
    back: heartBack,
    tone: "Ruby shattered hearts / washed black",
  },
  {
    name: "Control Butterfly Tee",
    price: "₹4,999",
    front: butterflyFront,
    back: butterflyBack,
    tone: "Electric butterfly chaos / blackout cotton",
  },
];

const features = [
  "Premium Fabric",
  "Limited Drops",
  "Designed for Movement",
  "Global Streetwear Identity",
];

function AnimatedCenterPhoto() {
  const [index, setIndex] = useState(1); // Start with Fragment Identity Tee
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % products.length);
        setAnimate(true);
      }, 500); // matches transition fade duration
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[index];

  return (
    <div className="perspective-1000 float-film pointer-events-auto cursor-pointer aspect-[3/4] w-[70vw] md:w-[30vw] max-w-[340px] md:max-w-[420px] shadow-cinematic group">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">
        {/* Front Side (Back of Tee) */}
        <div className={`absolute inset-0 w-full h-full backface-hidden transition-all duration-500 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src={currentProduct.back}
            alt={`${currentProduct.name} back view`}
            className="w-full h-full object-cover border border-border"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border/40 p-3 text-left transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground">Story Graphic</p>
            <p className="font-display text-sm font-bold uppercase text-foreground">{currentProduct.name}</p>
          </div>
        </div>

        {/* Back Side (Front of Tee) */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 transition-all duration-500 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src={currentProduct.front}
            alt={`${currentProduct.name} front view`}
            className="w-full h-full object-cover border border-border"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border/40 p-3 text-left">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground">Front Details</p>
            <p className="font-display text-sm font-bold uppercase text-foreground">{currentProduct.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BleuveinHome() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="cinematic-bg relative flex min-h-screen overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-35" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-44 bg-gradient-to-r from-transparent via-silver/25 to-transparent blur-xl light-sweep" />
        <header className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <span className="font-display text-sm uppercase text-foreground">BLEUVEIN</span>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex">
            <a href="#collection" className="transition-colors hover:text-foreground">
              Collection
            </a>
            <a href="#story" className="transition-colors hover:text-foreground">
              Story
            </a>
            <a href="#drop" className="transition-colors hover:text-foreground">
              Drop
            </a>
          </nav>
          <span className="text-xs uppercase tracking-[0.22em] text-silver">SS26</span>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between pt-32 pb-12 px-4 text-center">
          {/* Top Hero text */}
          <div className="flex flex-col items-center max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.38em] text-electric">
              Wear the Movement
            </p>
            <img
              src={logoBlack}
              alt="BLEUVEIN logo"
              className="hero-title logo-mark w-full max-w-[620px] object-contain"
            />
          </div>

          {/* Three T-shirt Showcase */}
          <div className="relative w-full flex items-center justify-center gap-6 my-8 md:my-12">
            <img
              src={blackBack}
              alt="BLEUVEIN black T-shirt back design"
              className="float-film mt-12 aspect-[3/4] w-[22vw] max-w-72 -rotate-6 border border-border object-cover shadow-cinematic hidden md:block opacity-60 hover:opacity-100 transition duration-500"
            />
            <AnimatedCenterPhoto />
            <img
              src={butterflyBack}
              alt="BLEUVEIN butterfly T-shirt back design"
              className="float-film mt-12 aspect-[3/4] w-[22vw] max-w-72 rotate-6 border border-border object-cover shadow-cinematic hidden md:block opacity-60 hover:opacity-100 transition duration-500"
            />
          </div>

          {/* Bottom Hero text & button */}
          <div className="flex flex-col items-center max-w-xl">
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Engineered for Expression. Back-design storytelling, cinematic streetwear, and limited
              pieces built to move.
            </p>
            <a
              href="#collection"
              className="mt-6 inline-flex items-center justify-center border border-electric/45 bg-surface px-7 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-foreground shadow-electric transition hover:-translate-y-1 hover:border-electric hover:bg-surface-strong focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </section>

      <section id="collection" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-electric">New Drop</p>
              <h2 className="mt-3 font-display text-4xl font-black uppercase sm:text-5xl">
                Collection
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Back graphics lead the visual story. Hover each product to reveal the front side.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group border border-border bg-card shadow-cinematic"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={product.back}
                    alt={`${product.name} back view`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
                  />
                  <img
                    src={product.front}
                    alt={`${product.name} front view`}
                    className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase text-foreground">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {product.tone}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-silver">{product.price}</span>
                  </div>
                  <button className="w-full border border-border bg-background/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground transition hover:border-electric hover:text-electric focus:outline-none focus:ring-2 focus:ring-ring">
                    Quick Add
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="story"
        className="border-y border-border bg-secondary/45 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-border shadow-cinematic lg:aspect-[5/4]">
            <img
              src={marbleBack}
              alt="BLEUVEIN panther artwork T-shirt back"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/10" />
          </div>
          <div className="lg:pl-12">
            <p className="text-xs uppercase tracking-[0.34em] text-electric">Brand Story</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-6xl">
              Motion. Identity. Expression.
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-foreground">
              BLEUVEIN is not just clothing.
              <br />
              It’s motion, identity, and engineered expression.
            </p>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
              Each piece is treated like a frame from a fashion film: controlled darkness, electric
              detail, and graphics that feel alive after the lights cut out.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-electric/60 hover:bg-surface-strong"
            >
              <span className="text-xs text-electric">0{index + 1}</span>
              <h3 className="mt-8 font-display text-xl font-bold uppercase">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer id="drop" className="border-t border-border px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-black uppercase">Join the Drop</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Early access, limited releases, no noise.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              aria-label="Email address"
              placeholder="EMAIL ADDRESS"
              className="min-w-0 flex-1 border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="border border-electric/60 bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition hover:shadow-electric focus:outline-none focus:ring-2 focus:ring-ring">
              Submit
            </button>
          </form>
          <a
            href="https://instagram.com"
            className="text-xs uppercase tracking-[0.24em] text-silver transition hover:text-electric"
          >
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
