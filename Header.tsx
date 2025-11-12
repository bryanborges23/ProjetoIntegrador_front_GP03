import { useState } from "react";
import { Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <Button
                  variant="ghost"
                  className="justify-start text-lg"
                  onClick={() => scrollToSection("quem-somos")}
                >
                  Quem Somos
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-lg"
                  onClick={() => scrollToSection("trabalhe-conosco")}
                >
                  Faça Parte do Nosso Time
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-lg"
                  onClick={() => scrollToSection("avaliacoes")}
                >
                  Avaliações
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            HANEUL TRIP
          </h1>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/login")}
          className="hover:bg-accent"
        >
          <User className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
