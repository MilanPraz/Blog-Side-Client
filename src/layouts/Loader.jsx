import "./loader.css";
function Loader() {
  return (
    <div className="absolute bg-slate-200/20  inset-0 backdrop-blur-sm flex items-center justify-center">
      <div className="lds-facebook ">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
