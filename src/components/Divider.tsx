
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn("py-2 flex justify-center", className)}>
      <div className="w-24 h-1 rounded-full bg-khum-primary/30"></div>
    </div>
  );
};

export default Divider;
