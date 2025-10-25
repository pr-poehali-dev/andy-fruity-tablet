import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F1E5] via-[#FFF8E7] to-[#F7F1E5] flex items-center justify-center p-8">
      <div className="w-full max-w-[210mm] aspect-[1/1.414] bg-[#FFCD00] rounded-2xl shadow-2xl relative overflow-hidden">
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231A1A1A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
          <div className="text-[#1A1A1A] space-y-0">
            <div className="text-2xl font-bold tracking-tight leading-none">ANDY</div>
            <div className="text-2xl font-bold tracking-tight leading-none">.FRUITY</div>
          </div>
          <div className="text-[#1A1A1A] text-xs font-medium">📎 @andy.fruity</div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-12 pt-24 pb-16">
          
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-[#1A1A1A] leading-none tracking-tight">
              PROTEIN
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-12 bg-[#1A1A1A]" />
              <span className="text-3xl font-bold text-[#1A1A1A]">&</span>
              <div className="h-1 w-12 bg-[#1A1A1A]" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#1A1A1A] leading-none tracking-tight">
              FIBER
            </h1>
            <div className="text-3xl font-semibold text-[#1A1A1A] tracking-wide mt-2">
              SUPERFOOD
            </div>
          </div>

          <div className="flex gap-2 mb-12">
            <Badge variant="outline" className="bg-[#1A1A1A] text-[#FFCD00] border-[#1A1A1A] px-4 py-2 text-sm font-bold hover:bg-[#1A1A1A]">
              POWER
            </Badge>
            <Badge variant="outline" className="bg-[#1A1A1A] text-[#FFCD00] border-[#1A1A1A] px-4 py-2 text-sm font-bold hover:bg-[#1A1A1A]">
              ENERGY
            </Badge>
            <Badge variant="outline" className="bg-[#1A1A1A] text-[#FFCD00] border-[#1A1A1A] px-4 py-2 text-sm font-bold hover:bg-[#1A1A1A]">
              HEALTHY
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-12">
            <div className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square">
              <Icon name="Zap" className="text-[#FFCD00]" size={32} />
              <div className="text-[#FFCD00] font-bold text-xs text-center leading-tight">
                NO ADDED<br/>SUGAR
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square">
              <Icon name="Leaf" className="text-[#FFCD00]" size={32} />
              <div className="text-[#FFCD00] font-bold text-xs text-center leading-tight">
                100%<br/>NATURAL
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square">
              <Icon name="MapPin" className="text-[#FFCD00]" size={32} />
              <div className="text-[#FFCD00] font-bold text-xs text-center leading-tight">
                MADE IN<br/>THAILAND
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square">
              <Icon name="Sparkles" className="text-[#FFCD00]" size={32} />
              <div className="text-[#FFCD00] font-bold text-xs text-center leading-tight">
                RICH IN<br/>VITAMINS
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold text-[#1A1A1A] tracking-wider mb-8">
            NUTRITIOUS • DELICIOUS
          </div>

          <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 shadow-lg">
            <div className="w-32 h-32 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
              <div className="text-white text-xs font-mono text-center">
                [QR CODE]
              </div>
            </div>
            <div className="text-[#1A1A1A] font-semibold text-sm text-center">
              SCAN TO FOLLOW<br/>
              <span className="font-bold">@andy.fruity</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A1A1A]" />
      </div>
    </div>
  );
}
