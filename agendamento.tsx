import { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  Clock,
  DollarSign,
  CheckCircle,
  MapPin,
  LogOut,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Dados dos pacotes (pode vir da API depois)
const pacotes = [
  {
    id: 1,
    titulo: "Coreia do Sul - Seul",
    destino: "Seul, Coreia do Sul",
    duracao: "6 meses",
    preco: "R$ 98.000,00",
    vagas: 3,
    idioma: "Inglês",
    inclui: [
      "Curso intensivo",
      "Moradia com família",
      "Seguro saúde",
      "Suporte 24h",
    ],
    imagem:
      "file:///C:/Users/Lab2%20PC%2029/Desktop/ParteFront/ParteFront/src/assets/seoul-bubble.jpg", // Substitua por imagem real
  },
  {
    id: 2,
    titulo: "Coreia do Sul - Busan",
    destino: "Busan, Coreia do Sul",
    duracao: "6 meses",
    preco: "R$ 60.106,67",
    vagas: 1,
    idioma: "Inglês",
    inclui: ["Curso + Trabalho", "Visto incluso", "Acomodação", "Mentoria"],
    imagem:
      "file:///C:/Users/Lab2%20PC%2029/Desktop/ParteFront/ParteFront/src/assets/busan-bubble.jpg",
  },
  {
    id: 3,
    titulo: "Coreia do Sul - Incheon",
    destino: "Incheon, Coreia do Sul",
    duracao: "6 meses",
    preco: "R$ 73.500,00",
    vagas: 5,
    idioma: "Inglês",
    inclui: ["Curso + Trabalho", "Residência", "Visto", "Atividades"],
    imagem:
      "file:///C:/Users/Lab2%20PC%2029/Desktop/ParteFront/ParteFront/src/assets/incheon-bubble.jpg",
  },
];

export default function Agendamento() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPacote, setSelectedPacote] = useState<
    (typeof pacotes)[0] | null
  >(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Verifica login
  useEffect(() => {
    const user = localStorage.getItem("haneul_user");
    if (!user) {
      toast({
        title: "Login necessário",
        description: "Redirecionando para login...",
        variant: "destructive",
      });
      setTimeout(() => navigate("/login"), 1800);
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate, toast]);

  const filteredPacotes = pacotes.filter(
    (p) =>
      p.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.destino.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenDialog = (pacote: (typeof pacotes)[0]) => {
    if (!isLoggedIn) return;
    setSelectedPacote(pacote);
  };

  const handleAgendar = () => {
    toast({
      title: "Agendamento solicitado!",
      description: `Você solicitou o pacote: ${selectedPacote?.titulo}. Entraremos em contato em até 24h.`,
    });
    setSelectedPacote(null);
    // Aqui você enviaria para o backend
  };

  const handleLogout = () => {
    localStorage.removeItem("haneul_user");
    toast({ title: "Deslogado com sucesso" });
    navigate("/login");
  };

  // Tela de carregamento enquanto verifica login
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <Card className="p-8 text-center max-w-md">
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Verificando acesso...
            </h2>
            <p className="text-muted-foreground">
              Você precisa estar logado para agendar
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg">
          <div className="container mx-auto px-4 py-5 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                Haneul Trip
              </h1>
              <p className="text-sm opacity-90">Intercâmbios Internacionais</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white hover:bg-white/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </header>

        {/* Título */}
        <section className="py-16 text-center px-4">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Agende seu Intercâmbio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o pacote perfeito para sua jornada
          </p>
        </section>

        {/* Busca */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500" />
              <Input
                placeholder="Buscar destino ou duração..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 rounded-full border-purple-200 focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Pacotes */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPacotes.map((pacote) => (
              <Card
                key={pacote.id}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-purple-100 bg-white/90 backdrop-blur"
                onClick={() => handleOpenDialog(pacote)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400" />
                  <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white opacity-80" />
                  {pacote.vagas > 0 ? (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                      {pacote.vagas} vaga{pacote.vagas > 1 ? "s" : ""}
                    </Badge>
                  ) : (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      Esgotado
                    </Badge>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-purple-900">
                    {pacote.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {pacote.destino}
                  </p>

                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1 text-purple-600">
                      <Clock className="w-4 h-4" />
                      {pacote.duracao}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-pink-600">
                      <DollarSign className="w-4 h-4" />
                      {pacote.preco}
                    </span>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold h-12 text-lg"
                    disabled={pacote.vagas === 0}
                  >
                    Ver Pacote
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Modal com botão "Solicitar Agendamento" */}
        <Dialog
          open={!!selectedPacote}
          onOpenChange={() => setSelectedPacote(null)}
        >
          <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-lg border-purple-200">
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {selectedPacote?.titulo}
              </DialogTitle>
              <DialogDescription className="text-base">
                {selectedPacote?.destino} • {selectedPacote?.idioma}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-purple-700">Duração</p>
                  <p className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    {selectedPacote?.duracao}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-pink-700">Investimento</p>
                  <p className="text-3xl font-bold text-pink-600">
                    {selectedPacote?.preco}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-purple-700 mb-3">Inclui:</p>
                <ul className="space-y-2">
                  {selectedPacote?.inclui.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={handleAgendar}
                >
                  Solicitar Agendamento
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
