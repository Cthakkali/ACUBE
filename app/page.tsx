import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impacts from "./components/Impacts";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-(--color-background) font-sans text-gray-900 w-full">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <Impacts />
        <Services />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
