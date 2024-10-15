import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-[#18191E] border-t border-t-[#33353F] text-white w-full fixed bottom-0 left-0">
      <div className="container p-12 flex justify-between">
        <span className="text-slate-600">LOGO</span>
        <p className="text-slate-600">© 2024 Precious. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
