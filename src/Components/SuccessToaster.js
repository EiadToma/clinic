
const SuccessToaster = ({title}) => {

  return (
    <div className={`fixed top-1/2 left-1/2 ${title==='Processing...'?' bg-yellow-100 border border-yellow-500 text-yellow-800':' bg-green-100 border border-green-500 text-green-800'} transform -translate-x-1/2 -translate-y-1/2 px-4 py-3 rounded-lg shadow-lg" role="alert`}>
    <div className="flex items-center">
      <div className="w-8 h-8 mr-2">
        {/* <svg className={ `w-full h-full  text-green-500`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18.707 2.293a1 1 0 0 1 0 1.414L9.414 13.707a1 1 0 0 1-1.414 0L1.293 9.707a1 1 0 0 1 1.414-1.414L9 11.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
        </svg> */}
        <svg  viewBox="0 0 200 200"><rect fill="#E4B155" stroke="#E4B155" stroke-width="8" width="30" height="30" x="25" y="50">
          <animate attributeName="y" calcMode="spline" dur="1" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></rect>
          <rect fill="#E4B155" stroke="#E4B155" stroke-width="8" width="30" height="30" x="85" y="50">
          <animate attributeName="y" calcMode="spline" dur="1" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></rect>
          <rect fill="#E4B155" stroke="#E4B155" stroke-width="8" width="30" height="30" x="145" y="50">
          <animate attributeName="y" calcMode="spline" dur="1" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></rect>
        </svg>
      </div>
      <p className="text-sm">{title}</p>
    </div>
  </div>
//     <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
//     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
//         <svg className="w-5 h-5" aria-hidden="true"  fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
//         </svg>
//         <span className="sr-only">Check icon</span>
//     </div>
//     <div className="ms-3 text-sm font-normal">{title}</div>
//     <button type="button"
//     className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close">
//         <span className="sr-only">Close</span>
//         <svg className="w-3 h-3" aria-hidden="true"  fill="none" viewBox="0 0 14 14">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//         </svg>
//     </button>
// </div> 
 )
}

export default SuccessToaster