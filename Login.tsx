import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, User, Building2 } from "lucide-react";

type PersonType = "fisica" | "juridica" | null;

const Login = () => {
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [activePersonType, setActivePersonType] = useState<PersonType>(null);

  // Login com telefone
  const [loginData, setLoginData] = useState({ phone: "", password: "" });

  // Dados do cadastro
  const [registerData, setRegisterData] = useState({
    nameOrCompany: "",
    cpfOrCnpj: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.phone || !loginData.password) {
      toast.error("Preencha telefone e senha.");
      return;
    }
    toast.success("Login realizado com sucesso!");
    navigate("/dashboard");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      toast.error("Você precisa aceitar os termos de uso e privacidade.");
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }
    if (!registerData.nameOrCompany || !registerData.cpfOrCnpj || !registerData.phone || !registerData.email) {
      toast.error("Preencha todos os campos.");
      return;
    }
    toast.success("Cadastro realizado com sucesso!");
    navigate("/dashboard");
  };

  const resetRegisterForm = () => {
    setRegisterData({
      nameOrCompany: "",
      cpfOrCnpj: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HANEUL TRIP
            </CardTitle>
            <CardDescription>Acesse sua conta ou cadastre-se</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Cadastro</TabsTrigger>
              </TabsList>

              {/* ===== LOGIN ===== */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-phone">Telefone</Label>
                    <Input
                      id="login-phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={loginData.phone}
                      onChange={(e) => setLoginData({ ...loginData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Senha</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    Entrar
                  </Button>
                </form>
              </TabsContent>

              {/* ===== CADASTRO ===== */}
              <TabsContent value="register">
                {!activePersonType ? (
                  // Tela de escolha: PF ou PJ
                  <div className="space-y-6 py-4">
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-semibold">Tipo de Cadastro</h3>
                      <p className="text-sm text-muted-foreground">Escolha o tipo de conta</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <Button
                        variant="outline"
                        className="h-24 flex flex-col gap-2 border-2"
                        onClick={() => {
                          setActivePersonType("fisica");
                          resetRegisterForm();
                        }}
                      >
                        <User className="w-8 h-8" />
                        <span className="font-medium">Pessoa Física</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="h-24 flex flex-col gap-2 border-2"
                        onClick={() => {
                          setActivePersonType("juridica");
                          resetRegisterForm();
                        }}
                      >
                        <Building2 className="w-8 h-8" />
                        <span className="font-medium">Pessoa Jurídica</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Formulário de cadastro (PF ou PJ)
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setActivePersonType(null)}
                      >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Voltar
                      </Button>
                      <span className="text-sm font-medium text-primary">
                        {activePersonType === "fisica" ? "Pessoa Física" : "Pessoa Jurídica"}
                      </span>
                      <div className="w-16" />
                    </div>

                    {/* Nome / Razão Social */}
                    <div className="space-y-2">
                      <Label htmlFor="register-name">
                        {activePersonType === "fisica" ? "Nome Completo" : "Razão Social"}
                      </Label>
                      <Input
                        id="register-name"
                        value={registerData.nameOrCompany}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, nameOrCompany: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* CPF / CNPJ */}
                    <div className="space-y-2">
                      <Label htmlFor="register-doc">
                        {activePersonType === "fisica" ? "CPF" : "CNPJ"}
                      </Label>
                      <Input
                        id="register-doc"
                        placeholder={activePersonType === "fisica" ? "000.000.000-00" : "00.000.000/0001-00"}
                        value={registerData.cpfOrCnpj}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, cpfOrCnpj: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* Telefone */}
                    <div className="space-y-2">
                      <Label htmlFor="register-phone">Telefone</Label>
                      <Input
                        id="register-phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={registerData.phone}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, phone: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* E-mail */}
                    <div className="space-y-2">
                      <Label htmlFor="register-email">E-mail</Label>
                      <Input
                        id="register-email"
                        type="email"
                        value={registerData.email}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* Senha */}
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Senha</Label>
                      <Input
                        id="register-password"
                        type="password"
                        value={registerData.password}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, password: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* Confirmar Senha */}
                    <div className="space-y-2">
                      <Label htmlFor="register-confirm">Confirmar Senha</Label>
                      <Input
                        id="register-confirm"
                        type="password"
                        value={registerData.confirmPassword}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, confirmPassword: e.target.value })
                        }
                        required
                      />
                    </div>

                    {/* Termos */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={acceptedTerms}
                        onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Aceito os{" "}
                        <button
                          type="button"
                          onClick={() => navigate("/termos")}
                          className="text-primary underline hover:text-primary/80"
                        >
                          termos de uso e política de privacidade (LGPD)
                        </button>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      Cadastrar
                    </Button>
                  </form>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;