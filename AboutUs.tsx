import { GraduationCap, Globe, Users, Star } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Quem Somos</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-6">
            A Haneul Trip é uma agência especializada em intercâmbio universitário na Coreia do Sul. 
            Trabalhamos em parceria com as principais universidades coreanas para oferecer programas 
            acadêmicos de excelência, combinando imersão cultural com educação de qualidade internacional.
          </p>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Nossa missão é proporcionar uma experiência completa de intercâmbio, cuidando de cada 
            detalhe - desde o processo de matrícula até a acomodação e suporte durante toda a estadia. 
            Com a Haneul Trip, você não apenas estuda, você vive a cultura coreana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excelência Acadêmica</h3>
            <p className="text-muted-foreground">
              Parcerias com universidades de renome internacional
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Imersão Cultural</h3>
            <p className="text-muted-foreground">
              Experiência autêntica da cultura coreana
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Suporte Total</h3>
            <p className="text-muted-foreground">
              Acompanhamento completo durante toda a jornada
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
            <p className="text-muted-foreground">
              Acomodação e logística de alto padrão
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
