const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-4 mt-auto shadow">
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
