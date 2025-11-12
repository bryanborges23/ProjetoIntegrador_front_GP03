import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-background))] text-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HANEUL TRIP
            </h3>
            <p className="text-background/80">
              Realizando sonhos de intercâmbio universitário na Coreia do Sul
              desde 2020.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>haneultrip.oficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 2496-5491</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Guarulhos, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informações</h4>
            <div className="space-y-2">
              <p className="text-background/80">CNPJ: 86.179.200/0001-79</p>
              <p className="text-background/80">
                Cidade Industrial Satélite de São Paulo
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Haneul Trip. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
