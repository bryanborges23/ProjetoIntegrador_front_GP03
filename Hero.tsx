import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fundo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Realize Seu Sonho
          </span>
          <br />
          <span className="text-foreground">de Estudar na Coreia</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Intercâmbio universitário com total suporte acadêmico e cultural
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg"
        >
          Comece Sua Jornada
        </Button>
      </div>
    </section>
  );
};

export default Hero;
