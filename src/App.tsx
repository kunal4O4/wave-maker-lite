import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SearchPage from "./pages/SearchPage";
import Gallery from "./pages/Gallery";
import GoldenMoments from "./pages/GoldenMoments";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import Events from "./pages/Events";
import SingleImage from "./pages/SingleImage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/memory/:memoryId" element={<Index />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:imageId" element={<SingleImage />} />
          <Route path="/golden-moments" element={<GoldenMoments />} />
          <Route path="/golden-moment/:momentId" element={<GoldenMoments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/events" element={<Events />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
