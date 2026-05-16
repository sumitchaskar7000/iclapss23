const Logo = ({ className = "w-10 h-10", showText = true }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/images/i-logo.svg"
        alt="Clapss logo"
        className={className}
      />

      {showText && (
        <span className="text-2xl text-blue-600 logo-wordmark">
          clapss
        </span>
      )}
    </div>
  );
};

export default Logo;
