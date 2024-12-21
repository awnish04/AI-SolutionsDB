import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
  textColor: string;

}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
  textColor,
  
}: HeadingProps) => {
  return (
    <div className=" flex items-center gap-x-3">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <h2 className={cn("text-3xl  font-bold ",textColor)}>{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
