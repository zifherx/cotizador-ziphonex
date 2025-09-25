"use client";

import Image from "next/image";

export function RightPanel() {
  return (
    <div className="hidden md:flex flex-1 bg-gradient-to-br from-[#21d4fd] to-[#2152ff] rounded-xl items-center justify-center relative overflow-hidden">
      <div className="flex p-4">
        <div className="bg-[url(/shapes/pattern-lines.svg)] w-full h-full">
          <div className="flex justify-center mb-3">
            <Image
              src="/images/chat.png"
              alt="Login Shape"
              width={350}
              height={350}
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white space-y-8">
            <div className="max-w-lg mx-auto">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Ziphonex Tech
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Soluciones inteligentes, resultados extraordinarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
