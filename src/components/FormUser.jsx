import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./context/Context";


const FormUser = ()=> {
const {cuant, setCuant, gender, setGender} = useContext(Context)

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form className="w-50 border p-2 rounded-3">
                <fieldset className="text-center">
                    <legend class="text-center">Creacion de usuarios.</legend>
                    <div class="mb-3">
                    <label class="form-label">Seleccione cuantos usuarios desea crear.</label>
                    <input onChange={ev => setCuant(ev.target.value)} type="text" name="cantidad"  class="form-control" placeholder="Cantidad de amigos" autoComplete="off"/>
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Seleccione el género</label>
                    <select  onClick={(ev) => 
                        {if(ev.target.value === "Femenino"){
                            setGender("female")
                        }else if(ev.target.value === "Masculino"){
                            setGender("male")
                        }else{
                            setGender("")
                        }}} name="genero" class="form-select" autoComplete="off">
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Sin especificar</option>
                    </select>
                    </div>
                    <Link to={"/users"}><button type="submit" class="btn btn-primary">Crear usuario/s</button></Link>
                </fieldset>
        </form>
        </div>
        
    )
}

export default FormUser