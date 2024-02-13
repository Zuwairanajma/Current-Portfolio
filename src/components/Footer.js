function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full h-[10vh] text-center py-2 text-yellow-400 font-lobster text-xl">
      <div>
        <p>
          &copy; Zuwaira Sadiq
          {currentYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
