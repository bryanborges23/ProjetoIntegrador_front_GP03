import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Card } from "@/components/ui/card";
import planeIcon from "@/assets/plane-icon.png";

const PlaneMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showMessage) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-in-right">
      <Card className="p-4 max-w-sm shadow-xl bg-card border-2 border-primary/20">
        <div className="flex items-start gap-3">
          <img
            src={planeIcon}
            alt="Avião"
            className="w-12 h-12 flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="font-semibold mb-1">✈️ Pronto para decolar?</h3>
            <p className="text-sm text-muted-foreground">
              Que tal começar seu intercâmbio na Coreia do Sul? 
              Estamos aqui para ajudar você a realizar esse sonho!
            </p>
          </div>
          <button
            onClick={() => setShowMessage(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default PlaneMessage;
