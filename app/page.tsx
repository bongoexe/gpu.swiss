import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-16 bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="w-full flex items-center py-4 px-4">
          <Image src="/logo.svg" alt="gpu.swiss Logo" width={180} height={180} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-red-600">100% Swiss-hosted GPU servers</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Ultra-fast, secure, bare-metal and fully compliant with the Swiss Federal Act on Data Protection (nFADP).
        </p>
      </section>

      {/* Privacy Emphasis */}
      <section className="max-w-4xl w-full text-center text-gray-800 font-medium space-y-2">
        <p className="text-2xl font-semibold">Privacy-focused Infrastructure</p>
        <p className="text-lg text-gray-700">
          Your data stays in Switzerland—no compromise.
        </p>
      </section>

      {/* Sustainability Note */}
      <section className="max-w-4xl w-full text-center text-black font-medium space-y-2">
        <p className="text-2xl font-semibold">Powered by solar energy</p>
        <p className="text-lg text-gray-700">
          Our infrastructure is optimized for low environmental impact while maintaining top performance.
        </p>
      </section>

      {/* Infrastructure Ownership */}
      <section className="max-w-4xl w-full text-center text-gray-800 font-medium space-y-2">
        <p className="text-2xl font-semibold">Fully-owned Infrastructure</p>
        <p className="text-lg text-gray-700">
          We operate our own datacenter and hardware. No third-party cloud providers involved.
        </p>
      </section>

      <hr className="w-full border-t border-gray-200 mx-0" />

      {/* GPU Models */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="text-center">
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold mb-2">RTX 5090</h2>
            <p className="text-gray-600">32GB VRAM</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold mb-2">RTX 4090</h2>
            <p className="text-gray-600">24GB VRAM</p>
          </CardContent>
        </Card>
      </section>

      {/* GPU Features */}
      <section className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-center font-medium">
        <div className="py-3 border border-gray-200 rounded-md">Scalable NVMe-based storage</div>
        <div className="py-3 border border-gray-200 rounded-md">Bare-metal server access</div>
        <div className="py-3 border border-gray-200 rounded-md">Virtual Machines (VMs) available</div>
        <div className="py-3 border border-gray-200 rounded-md">99.9%+ uptime standard</div>
        <div className="py-3 border border-gray-200 rounded-md col-span-full sm:col-span-2">10Gbps network connectivity</div>
      </section>

      <hr className="w-full border-t border-gray-200 mx-0" />

      {/* Contact Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Contact Sales</h2>
        <p>Get in touch for pricing and availability.</p>
        <Button asChild>
          <a href="mailto:sales@gpu.swiss" className="flex items-center gap-2">
            <Mail size={18} /> sales@gpu.swiss
          </a>
        </Button>
      </section>

      {/* Partner Logos */}
      <section className="w-full pt-12 border-t border-gray-200 mx-0">
        <h3 className="text-center text-gray-500 mb-4">Powered by</h3>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <Image src="/logos/nvidia.svg" alt="NVIDIA" width={140} height={70} />
          <Image src="/logos/swisscom.svg" alt="Swisscom" width={140} height={70} />
          <Image src="/logos/minergie.svg" alt="Minergie" width={140} height={70} />
          <Image src="/logos/lugano.svg" alt="City of Lugano" width={140} height={70} />
          <Image src="/logos/zurich.svg" alt="City of Zürich" width={140} height={70} />
          <Image src="/logos/swissgrid.svg" alt="Swissgrid" width={140} height={70} />
          {/* Add more logos as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-sm text-gray-500 pt-12 pb-4 space-y-2">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <p>Zürich & Lugano, Switzerland</p>
          <p><a href="mailto:sales@gpu.swiss" className="underline">sales@gpu.swiss</a></p>
        </div>
        <p>&copy; 2025 gpu.swiss</p>
      </footer>
    </main>
  );
}
