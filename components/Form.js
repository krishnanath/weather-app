import React from "react";
import { format } from "url";

const Form = props => (
    <form onSubmit={props.getWeather}>
               <input type="text" name="city" placeholder="City.."/>

               <input type="text" name="country" placeholder="country.."/>
               <button>Get Weather</button>
               </form>
);

export default Form;