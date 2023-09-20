import "./Form.css"
import {useState} from "react";
import DropdownMenu from "../dropdownMenu/DropdownMenu";


function Form() {
    

    return <>
            
            <div className = "body ">
                <div className = "bubbles">
                    <span style = {{"--i":11} as React.CSSProperties}></span>
                    <span style = {{"--i":1} as React.CSSProperties}></span>
                    <span style = {{"--i":20}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":25}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":18}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":2}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":21}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":50}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":23}as React.CSSProperties}></span>
                    <span style = {{"--i":18}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":20}as React.CSSProperties}></span>
                    <span style = {{"--i":13}as React.CSSProperties}></span>
                    <span style = {{"--i":30}as React.CSSProperties}></span>
                    <span style = {{"--i":20}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":50}as React.CSSProperties}></span>
                    <span style = {{"--i":28}as React.CSSProperties}></span>
                    <span style = {{"--i":20}as React.CSSProperties}></span>
                    <span style = {{"--i":15}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":25}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":2}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":21}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":25}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":2}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":21}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":25}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":2}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":21}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":20}as React.CSSProperties}></span>
                    <span style = {{"--i":15}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":25}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":2}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":21}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":25}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":2}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":21}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":11}as React.CSSProperties}></span>
                    <span style = {{"--i":8}as React.CSSProperties}></span>
                    <span style = {{"--i":5}as React.CSSProperties}></span>
                    <span style = {{"--i":25}as React.CSSProperties}></span>
                    <span style = {{"--i":14}as React.CSSProperties}></span>
                    <span style = {{"--i":2}as React.CSSProperties}></span>
                    <span style = {{"--i":6}as React.CSSProperties}></span>
                    <span style = {{"--i":21}as React.CSSProperties}></span>
                
                </div>
                
           <div className = "screen">
            <div className = "info"> 
                <div className = "brand">
                    <div className = "img"> </div>
                    <div className = "pokeroi"> <h1>pokeroi</h1></div>
                </div>
                
            </div>
            <div className = "Bx">
                <div className = "Bx1">
                    <div className = "header">
                        <h1>
                         Provide liquidity or stake <br />
                        in <span>PKR</span>  and  <span>RMAI</span>  to earn <span className = "matic">MATIC</span>
                        
                        </h1>
                    </div>
                </div>
                <div className = "Bx2">
                         
                        <div className = "criptoBX">
                            <div className = "Container">
                            <div className = "selectContainer">
                                <DropdownMenu></DropdownMenu>
                            </div>

                            <form className = "form">
                                <div className = "PKR">
                                    <div className = "inputBx">
                                        <input type="text" required />
                                             <span> PKR </span>      
                                        </div>
                                </div>
                                <div className = "RMAI">
                                    <div className = "inputBx">
                                        <input type="text" required />
                                             <span> RMAI </span>      
                                        </div>
                                </div>
                                <div className = "buttom">
                                    <div className = "submit">
                                        <input type="submit" value = "Submit" />
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                </div>  
            </div>
            <div className = "margin">
            </div>
            <div className = "stats">
                <div className = "statsBx">
                    <div className = "stat"> 
                        <div className = "number">10M</div>
                        <div className = "cont">Total Supply </div>
                    </div>
                    <div className = "stat"> 
                        <div className = "number">8M</div>
                        <div className = "cont">Total Supply</div>
                    </div>
                    <div className = "stat"> 
                        <div className = "number">7M</div>
                        <div className = "cont">Total Supply</div>
                    </div>
                    <div className = "stat"> 
                        <div className = "number">5M</div>
                        <div className = "cont">Total Supply</div>
                    </div>
                </div>
            </div>
       </div>
    </div>
    <div>
    </div>








        
       
    </>
}
export default Form ;