const Footer = () => (
  <footer className="py-6 text-center"
    style={{ background: "hsl(153 58% 9%)" }}>
    <p className="font-body text-qs-text-secondary text-xs">
      © {new Date().getFullYear()} QualiSports · Planalto Vinhais, São Luís – MA · Todos os direitos reservados
    </p>
  </footer>
);

export default Footer;
