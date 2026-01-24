import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface NextNavButtonProps {
  to: string;
  label: string;
}

export const NextNavButton = ({ to, label }: NextNavButtonProps) => {
  return (
    <div className="w-full flex justify-center py-20 relative z-[9999] pointer-events-auto">
      <Link
        to={to}
        className="flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-bold text-lg 
                   hover:bg-zinc-200 transition-all shadow-xl 
                   cursor-pointer pointer-events-auto relative z-[9999]"
      >
        <span>{label}</span>
        <ArrowRight size={22} />
      </Link>
    </div>
  );
};

