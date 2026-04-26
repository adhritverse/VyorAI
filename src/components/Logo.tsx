export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img src="/logo.webp" alt="Vyor AI Logo" className={`w-15 h-25   object-contain ${className}`} />
  );
}
