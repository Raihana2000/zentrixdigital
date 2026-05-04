const WA_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "31683284995";

const WA_MESSAGES: Record<string, string> = {
  nl: "Goedendag, ik heb interesse in jullie diensten. Kunnen jullie mij verder helpen?",
  en: "Hello, I\u2019m interested in your services. Could you help me further?",
};

export function buildWhatsAppUrl(language: string): string {
  const msg = WA_MESSAGES[language] ?? WA_MESSAGES.nl;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
