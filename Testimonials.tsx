import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsImage from "@/assets/testimonials.jpg";

const testimonials = [
  {
    id: 1,
    text: "A escolha da Haneul Trip pela nossa universidade foi, de longe, o ponto de partida para o melhor intercâmbio. Desde o primeiro contato, senti a seriedade da agência em lidar com a parte acadêmica. O cronograma de visitas foi impecável, equilibrando a imersão nos campos de grandes faculdades coreanas com o turismo cultural. Os traslados e a acomodação executiva garantiram que pudéssemos focar 100% nos estudos e nas atividades propostas. Excelente representação para a nossa instituição!",
  },
  {
    id: 2,
    text: "Agradeço demais à Haneul Trip por ter sido a agência escolhida pela minha faculdade! A experiência superou todas as expectativas. Não só visitamos lugares incríveis, como tivemos uma verdadeira imersão na cultura coreana, com o apoio de guias que falavam coreano fluente e que entendiam perfeitamente a rotina de um estudante. Volto cheia de novos conhecimentos, amigos do grupo e uma bagagem cultural que a faculdade jamais conseguiria proporcionar sozinha. Nota 1000!",
  },
  {
    id: 3,
    text: "Quando soubemos que a Haneul Trip faria a viagem de estudo da turma, ficamos muito aliviados. E a organização deles confirmou o porquê da nossa faculdade ter escolhido a agência! Nenhuma preocupação com logística, transporte de primeira e hotéis de alto padrão perto das universidades que visitamos. Foi só arrumar a mala e aproveitar o intercâmbio. Um elogio especial ao acompanhamento: ter um suporte local de qualidade fez toda a diferença para o nosso grupo de alunos.",
  },
];

const Testimonials = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          O Que Nossos Alunos Dizem
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Experiências reais de quem viveu o intercâmbio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
