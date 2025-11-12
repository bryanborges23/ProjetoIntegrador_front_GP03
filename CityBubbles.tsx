import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import seoulImage from "@/assets/seoul-bubble.jpg";
import busanImage from "@/assets/busan-bubble.jpg";
import incheonImage from "@/assets/incheon-bubble.jpg";

const cities = [
  {
    id: 1,
    name: "Seoul",
    duration: "6 meses",
    price: "R$ 98.000.00",
    image: seoulImage,
    clickable: true,
    description: "Capital vibrante com universidades de renome mundial",
  },
  {
    id: 2,
    name: "Busan",
    duration: "6 meses",
    price: "R$ 60.106.67",
    image: busanImage,
    clickable: false,
    description: "Cidade costeira com excelentes instituições de ensino",
  },
  {
    id: 3,
    name: "Incheon",
    duration: "6 meses",
    price: "R$ 73.500.00",
    image: incheonImage,
    clickable: false,
    description: "Cidade moderna próxima a Seoul",
  },
];

const CityBubbles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<typeof cities[0] | null>(null);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Escolha Seu Destino
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Programas de intercâmbio universitário na Coreia do Sul
        </p>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Pesquisar cidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredCities.map((city) => (
            <Card
              key={city.id}
              className={`relative overflow-hidden group ${
                city.clickable ? "cursor-pointer" : "cursor-not-allowed opacity-75"
              }`}
              onClick={() => city.clickable && setSelectedCity(city)}
            >
              <div className="aspect-square relative">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {city.duration}
                  </p>
                  <p className="text-xl font-bold text-primary">{city.price}</p>
                  {!city.clickable && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Em breve
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCity} onOpenChange={() => setSelectedCity(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Intercâmbio em {selectedCity?.name}</DialogTitle>
            <DialogDescription>
              {selectedCity?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Duração:</p>
              <p className="text-muted-foreground">{selectedCity?.duration}</p>
            </div>
            <div>
              <p className="font-semibold">Investimento:</p>
              <p className="text-2xl font-bold text-primary">
                {selectedCity?.price}
              </p>
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
              Solicitar Informações
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CityBubbles;
