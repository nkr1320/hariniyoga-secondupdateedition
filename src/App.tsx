// ✅ FIXED VERSION OF YOUR MAIN APP FILE
// Ensures client-side routing works in Vercel deployment
// Add "rewrites" in vercel.json for catch-all fallback to index.html

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// All pages
import Index from "./pages/Index";
import Offers from "./pages/Offers";
import Classes from "./pages/Classes";
import Articles from "./pages/Articles";
import Events from "./pages/Events";
import Recordings from "./pages/Recordings";
import About from "./pages/About";
import WhySite from "./pages/WhySite";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Article pages
import YogaPracticePatanjali from "./pages/articles/YogaPracticePatanjali";
import AshtangaFoundation from "./pages/articles/AshtangaFoundation";
import Ashtavanganipart1 from "./pages/articles/Ashtavanganipart1";
import Ashtavanganipart2 from "./pages/articles/Ashtavanganipart2";

import ComingSoon from "./pages/articles/ComingSoon";

// Recording pages
import VinyasaSession from "./pages/recordings/VinyasaSession";
import BhagavadGitaChanting from "./pages/recordings/BhagavadGitaChanting";
import SiddhismeditationPart1 from "./pages/articles/SiddhismeditationPart1";
import YogaSutrasPart1 from "./pages/articles/YogaSutrasPart1";
import SiddhismeditationPart2 from "./pages/articles/SiddhismeditationPart2";
import AshtangaYoga from "./pages/articles/AshtangaYoga";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/events" element={<Events />} />
            <Route path="/recordings" element={<Recordings />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-site" element={<WhySite />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />

            {/* Article subroutes */}
            <Route path="/articles/yoga-practice-patanjali" element={<YogaPracticePatanjali />} />
            <Route path="/articles/ashtanga-foundation" element={<AshtangaFoundation />} />
            <Route path="/articles/Ashtavangani-part1" element={<Ashtavanganipart1 />}/>
            <Route path="/articles/Ashtavangani-part2" element={<Ashtavanganipart2 />}/>
            <Route path="/articles/Siddhis-Meditation-Part1" element={<SiddhismeditationPart1 />}/>
            <Route path="/articles/YogaSutrasPart1" element={<YogaSutrasPart1 />} />
            <Route path="/articles/Siddhis-Meditation-Part1" element={<SiddhismeditationPart1 />}/>
            <Route path="/articles/Siddhis-Meditation-Part2" element={<SiddhismeditationPart2 />}/>
            <Route path="/articles/AshtangaYoga" element={<AshtangaYoga />}/>
            
            
            <Route path="/articles/coming-soon" element={<ComingSoon />} />


            {/* Recording subroutes */}
            <Route path="/recordings/vinyasa-session" element={<VinyasaSession />} />
            <Route path="/recordings/bhagavad-gita-chanting" element={<BhagavadGitaChanting />} />



            {/* Always keep this as the last route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
