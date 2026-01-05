import { Phone, Mail } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 hidden md:block">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+919891740056" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            <span>+91-9891740056</span>
          </a>
          <a href="mailto:enquiry@prolificautomation.in" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span>enquiry@prolificautomation.in</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="animate-blink bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            🎓 Admission Open
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
