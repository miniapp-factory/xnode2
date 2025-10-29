import { description, title, url } from "@/lib/metadata";
import { Metadata } from "next";
import GradientStyle from "@/components/GradientStyle";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          title: "Launch Mini App",
          action: {
            type: "launch_miniapp",
            name: title,
            url: url,
            splashImageUrl: `${url}/icon.png`,
            iconUrl: `${url}/icon.png`,
            splashBackgroundColor: "#000000",
            description: description,
            primaryCategory: "utility",
            tags: [],
          },
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-12 px-4 py-8 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <GradientStyle />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 animate-gradient">
          XnodeOS
        </h1>
        <p className="text-xl max-w-2xl">
          A NixOS‑based operating system that delivers no‑code deployment with maximum security built in by default.
        </p>
        <img
          src="/hero.png"
          alt="XnodeOS Hero"
          className="w-full max-w-3xl rounded-xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
        />
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600 animate-gradient">
            No‑Code Deployment
          </h2>
          <p>
            Deploy applications with a single click. No scripts, no terminal. Just drag‑and‑drop or click a button and XnodeOS handles the rest.
          </p>
        </div>
        <img
          src="/features.png"
          alt="No‑Code Deployment"
          className="md:w-1/2 rounded-xl shadow-lg transform transition-transform duration-700 hover:scale-105"
        />
      </section>

      {/* Security Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600 animate-gradient">
            Built‑In Security
          </h2>
          <p>
            XnodeOS ships with hardened defaults, automatic updates, and a sandboxed environment that protects your data from the moment you boot.
          </p>
        </div>
        <img
          src="/security.png"
          alt="Built‑In Security"
          className="md:w-1/2 rounded-xl shadow-lg transform transition-transform duration-700 hover:scale-105"
        />
      </section>

      {/* Deployment Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 animate-gradient">
            Secure Deployment
          </h2>
          <p>
            Deploy to any cloud or on‑premise server with zero configuration. XnodeOS packages your app into a reproducible, immutable image that can be rolled back instantly.
          </p>
        </div>
        <img
          src="/deployment.png"
          alt="Secure Deployment"
          className="md:w-1/2 rounded-xl shadow-lg transform transition-transform duration-700 hover:scale-105"
        />
      </section>

      {/* Call‑to‑Action Section */}
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 animate-gradient">
          Ready to try XnodeOS?
        </h2>
        <p className="max-w-xl text-center">
          Join the beta program and experience the future of secure, no‑code operating systems.
        </p>
        <img
          src="/cta.png"
          alt="Call to Action"
          className="w-full max-w-md rounded-xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
        />
      </section>
    </main>
  );
}
