import { Role } from "@/interfaces/type";
import { Badge } from "./ui/badge";
import { Code } from "@/lib/icons/code";
import { Sparkles } from "@/lib/icons/sparkles";
import { Palette } from "@/lib/icons/palette";
import { Crown } from "@/lib/icons/crown";
import { Shield } from "@/lib/icons/shield";
import { Banknote } from "@/lib/icons/banknote";
import { Pen } from "@/lib/icons/pen";

const BadgeRole = ({ options: { role } }: { options: { role: Role } }) => {
  return (
    <Badge className="bg-primary-foreground border-primary border p-1">
      {role === "DEVELOPER" ? (
        <Code width={12} height={12} className="text-primary" />
      ) : role === "CONTRIBUTOR" ? (
        <Sparkles width={12} height={12} className="text-primary" />
      ) : role === "DESIGNER" ? (
        <Palette width={12} height={12} className="text-primary" />
      ) : role === "CLASS_PRESIDENT" ? (
        <Crown width={12} height={12} className="text-primary" />
      ) : role === "VICE_PRESIDENT" ? (
        <Shield width={12} height={12} className="text-primary" />
      ) : role === "TREASURER" ? (
        <Banknote width={12} height={12} className="text-primary" />
      ) : (
        <Pen width={12} height={12} className="text-primary" />
      )}
    </Badge>
  );
};

export default BadgeRole;
