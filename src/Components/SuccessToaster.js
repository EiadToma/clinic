import Loading from './Loading';

const SuccessToaster = ({ title, color }) => {
  // Define styles for different colors
  const yellow = 'bg-yellow-50 border border-yellow-400 text-yellow-800';
  const green = 'bg-green-50 border border-green-400 text-green-800';
  const red = 'bg-red-50 border border-red-400 text-red-800';

  // Assign correct color class
  const colorClass =
    color === 'red' ? red : color === 'yellow' ? yellow : green;

  // Render the appropriate icon
  const renderIcon = () => {
    if (color === 'red') {
      return (
        <svg
          className="w-6 h-6 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 10-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else if (color === 'yellow') {
      return <Loading />;
    } else if (color === 'green') {
      return (
        <svg
          className="w-6 h-6 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 ${colorClass} transform -translate-x-1/2 -translate-y-1/2 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-sm animate-fadeIn z-50`}
      role="alert"
    >
      <div>{renderIcon()}</div>
      <p className="text-base font-medium">{title}</p>
    </div>
  );
};

export default SuccessToaster;
