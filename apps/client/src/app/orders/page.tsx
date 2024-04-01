import { HeroBanner } from "~/components/hero-banner/hero-banner";
import { Navbar } from "~/components/navbar/navbar";

export default async function OrdersPage(): Promise<JSX.Element> {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        <HeroBanner />
      </div>
    </>
  );
}
