import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <MainSection />
      <Footer />
    </div>
  );
}
