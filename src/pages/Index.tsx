export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F1E5] via-[#FFF8E7] to-[#F7F1E5] flex items-center justify-center p-8">
      <div className="w-full max-w-[210mm] aspect-[1/1.414] bg-[#FFCD00] relative overflow-hidden shadow-2xl">
        
        <div className="absolute top-0 left-0 right-0 bg-[#1A1A1A] px-8 py-4 flex justify-between items-center z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFCD00] rounded-full flex items-center justify-center">
              <span className="text-[#1A1A1A] font-black text-lg">A</span>
            </div>
            <div className="text-[#FFCD00] space-y-0 leading-tight">
              <div className="text-xl font-black tracking-tight">ANDY</div>
              <div className="text-xl font-black tracking-tight">.FRUITY</div>
            </div>
          </div>
          <div className="text-[#FFCD00] text-sm font-bold">@andy.fruity</div>
        </div>

        <div className="relative pt-28 pb-16 px-10 h-full flex flex-col">
          
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-8xl md:text-9xl font-black text-[#1A1A1A] leading-none tracking-tighter relative z-10"
                  style={{ 
                    textShadow: '4px 4px 0px rgba(0,0,0,0.1)',
                    fontFamily: 'Impact, "Arial Black", sans-serif'
                  }}>
                PROTEIN
              </h1>
            </div>
            
            <div className="flex items-center gap-4 my-4">
              <div className="h-2 flex-1 bg-[#1A1A1A]" />
              <span className="text-5xl font-black text-[#1A1A1A]">&</span>
              <div className="h-2 flex-1 bg-[#1A1A1A]" />
            </div>
            
            <div className="relative inline-block">
              <h1 className="text-8xl md:text-9xl font-black text-[#1A1A1A] leading-none tracking-tighter relative z-10"
                  style={{ 
                    textShadow: '4px 4px 0px rgba(0,0,0,0.1)',
                    fontFamily: 'Impact, "Arial Black", sans-serif'
                  }}>
                FIBER
              </h1>
            </div>
          </div>

          <div className="bg-[#1A1A1A] px-6 py-3 inline-block mb-8 transform -skew-x-6">
            <div className="transform skew-x-6">
              <span className="text-4xl font-black text-[#FFCD00] tracking-wider">SUPERFOOD</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <div className="bg-[#1A1A1A] px-5 py-2 transform -rotate-1">
              <span className="text-lg font-black text-[#FFCD00] tracking-wide">POWER</span>
            </div>
            <div className="bg-[#1A1A1A] px-5 py-2 transform rotate-1">
              <span className="text-lg font-black text-[#FFCD00] tracking-wide">ENERGY</span>
            </div>
            <div className="bg-[#1A1A1A] px-5 py-2 transform -rotate-1">
              <span className="text-lg font-black text-[#FFCD00] tracking-wide">HEALTHY</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="border-4 border-[#1A1A1A] p-4 bg-white/90">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-sm font-black text-[#1A1A1A] leading-tight">
                  NO ADDED<br/>SUGAR
                </div>
              </div>
            </div>
            
            <div className="border-4 border-[#1A1A1A] p-4 bg-white/90">
              <div className="text-center">
                <div className="text-4xl mb-2">🌿</div>
                <div className="text-sm font-black text-[#1A1A1A] leading-tight">
                  100%<br/>NATURAL
                </div>
              </div>
            </div>
            
            <div className="border-4 border-[#1A1A1A] p-4 bg-white/90">
              <div className="text-center">
                <div className="text-4xl mb-2">🇹🇭</div>
                <div className="text-sm font-black text-[#1A1A1A] leading-tight">
                  MADE IN<br/>THAILAND
                </div>
              </div>
            </div>
            
            <div className="border-4 border-[#1A1A1A] p-4 bg-white/90">
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <div className="text-sm font-black text-[#1A1A1A] leading-tight">
                  RICH IN<br/>VITAMINS
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-[#1A1A1A] px-6 py-3 mb-6 transform -skew-x-3">
              <div className="transform skew-x-3">
                <span className="text-2xl font-black text-[#FFCD00] tracking-widest">
                  NUTRITIOUS • DELICIOUS
                </span>
              </div>
            </div>

            <div className="bg-white border-4 border-[#1A1A1A] p-6 flex items-center gap-6">
              <div className="w-28 h-28 bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                <div className="text-white text-xs font-mono text-center leading-tight">
                  [QR<br/>CODE]
                </div>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#1A1A1A] mb-1">SCAN TO FOLLOW</div>
                <div className="text-2xl font-black text-[#1A1A1A]">@andy.fruity</div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(26,26,26,.2) 35px, rgba(26,26,26,.2) 70px)`,
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#1A1A1A]" />
      </div>
    </div>
  );
}
