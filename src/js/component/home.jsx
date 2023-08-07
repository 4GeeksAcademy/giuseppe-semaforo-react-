import React,{useState}from "react";




const Home = () => {
	const [selectedColor, setSelectColor] = useState();
	return (
	  <div className="semaforo" >

          <div onClick={()=> setSelectColor("rojo")}
		   className={"luz rojo"+(selectedColor === "rojo" ? "brillo":"")}>
		  </div>

		  <div onClick={()=> setSelectColor("amarillo")}
			className={"luz amarillo"+ (selectedColor === "amarillo" ? "brillo" :"")}>
		 </div>

		  <div onClick={()=> setSelectColor("verde")}
		  className={"luz verde" + (selectedColor === "verde" ? "brillo" : "")}>
			</div>
	 </div>
	  
    );

};
export default Home;
