import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
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
import YogaPracticePatanjali from "./pages/articles/YogaPracticePatanjali";
import AshtangaFoundation from "./pages/articles/AshtangaFoundation";
import ComingSoon from "./pages/articles/ComingSoon";
import VinyasaSession from "./pages/recordings/VinyasaSession";
import BhagavadGitaChanting from "./pages/recordings/BhagavadGitaChanting";

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
            <Route path="/articles/yoga-practice-patanjali" element={<YogaPracticePatanjali />} />
            <Route path="/articles/ashtanga-foundation" element={<AshtangaFoundation />} />
            <Route path="/articles/coming-soon" element={<ComingSoon />} />
            <Route path="/recordings/vinyasa-session" element={<VinyasaSession />} />
            <Route path="/recordings/bhagavad-gita-chanting" element={<BhagavadGitaChanting />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
