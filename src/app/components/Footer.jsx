import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-[#18191E] border-t border-t-[#33353F] text-white w-full fixed bottom-0 left-0">
      <div className="container p-6 flex justify-between items-center">
        
        <span className="text-slate-600 text-sm">LOGO</span>
        <p className="text-slate-600 text-sm">© 2024 Precious. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
