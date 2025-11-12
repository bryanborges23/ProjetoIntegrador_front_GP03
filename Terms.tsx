import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/login")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Termos de Uso e Privacidade - LGPD
          </h1>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">
              Política de Privacidade e Proteção de Dados Pessoais
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Lei Geral de Proteção de Dados Pessoais</h2>
              <p className="text-muted-foreground">
                Esta Política de Privacidade tem por objetivo principal garantir a transparência 
                e o compromisso da HANEUL TRIP - AGÊNCIA DE INTERCÂMBIO com a proteção dos dados 
                pessoais de seus Parceiros Acadêmicos e dos Titulares de Dados (alunos de intercâmbio), 
                em estrita conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Identificação e Contato</h2>
              <div className="bg-accent/20 p-4 rounded-lg space-y-2">
                <p><strong>Razão Social:</strong> HANEUL TRIP - AGÊNCIA DE INTERCÂMBIO</p>
                <p><strong>CNPJ:</strong> 86.179.200/0001-79</p>
                <p><strong>Endereço:</strong> Cidade Industrial Satélite de São Paulo, Guarulhos, SP</p>
                <p><strong>Telefone:</strong> (11) 2496-5491</p>
                <p><strong>E-mail:</strong> haneultrip.oficial@gmail.com</p>
                <p><strong>Encarregado de Dados (DPO):</strong> Isabelle dos Santos Freire</p>
                <p><strong>E-mail DPO:</strong> dpo.haneultrip@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Dados Coletados e Finalidades</h2>
              <p className="text-muted-foreground mb-4">
                A coleta e o tratamento se limitam aos dados estritamente necessários para a 
                viabilização da parceria e do intercâmbio, conforme o princípio da necessidade.
              </p>
              
              <div className="space-y-4">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Dados de Contato B2B Acadêmico</h3>
                  <p className="text-sm text-muted-foreground">
                    Nome, E-mail Institucional, Cargo - para Gestão da Parceria, Comunicação, 
                    Coordenação de Programas e Envio de Informações sobre Mobilidade.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Base Legal:</strong> Interesse Legítimo do Controlador e Consentimento 
                    (para Marketing)
                  </p>
                </div>

                <div className="bg-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Dados dos Alunos</h3>
                  <p className="text-sm text-muted-foreground">
                    Nome, Passaporte, Dados Acadêmicos - para Execução do Programa de Mobilidade, 
                    Matrícula, Processamento de Visto, Seguro-Viagem e Acomodação no Exterior.
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Base Legal:</strong> Execução de Contrato (Convênio) e Cumprimento de 
                    Obrigação Legal/Regulatória
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Dados Sensíveis</h2>
              <p className="text-muted-foreground">
                Dados Pessoais Sensíveis (ex: informações de saúde para seguro-viagem) são coletados 
                apenas se forem estritamente necessários para atender a requisitos específicos do 
                programa de intercâmbio.
              </p>
              <p className="text-muted-foreground mt-2">
                O tratamento desses dados será justificado por Consentimento Específico e Destacado 
                ou Cumprimento de Obrigação Legal/Regulatória.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground">
                Os dados poderão ser compartilhados com:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Universidades Parceiras no Exterior (para fins de matrícula e acompanhamento acadêmico)</li>
                <li>Prestadores de Serviços de Acomodação e Transporte</li>
                <li>Seguradoras (para emissão de seguro-viagem)</li>
                <li>Autoridades Consulares (para processamento de visto)</li>
                <li>Autoridades Reguladoras (quando exigido por lei)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Direitos dos Titulares</h2>
              <p className="text-muted-foreground mb-2">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento</li>
                <li>Obter informações sobre compartilhamento de dados</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Para exercer seus direitos, entre em contato com nosso DPO através do e-mail: 
                dpo.haneultrip@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Segurança dos Dados</h2>
              <p className="text-muted-foreground">
                A Haneul Trip adota medidas técnicas e organizacionais apropriadas para proteger 
                os dados pessoais contra acesso não autorizado, destruição, perda, alteração, 
                comunicação ou qualquer forma de tratamento inadequado ou ilícito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Retenção de Dados</h2>
              <p className="text-muted-foreground">
                Os dados pessoais serão mantidos pelo período necessário para o cumprimento das 
                finalidades para as quais foram coletados, respeitando os prazos legais de retenção 
                e as obrigações contratuais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Alterações na Política</h2>
              <p className="text-muted-foreground">
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que 
                você revise este documento regularmente. A versão mais recente estará sempre 
                disponível em nosso site.
              </p>
            </section>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Última atualização:</strong> Novembro de 2024
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Terms;
