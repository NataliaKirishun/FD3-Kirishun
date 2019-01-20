import React from "react";
import styled, {css} from "styled-components";

import Variables from "../Variables/Variables";

const Button = styled.button`    
    border: 0;
    background-color: ${Variables.colors.light_pink};
    color: ${Variables.colors.black};
    padding: 10px;
    min-width: 100px;
    outline: none;
     ${props => props.current && css`
        border: 1px solid ${Variables.colors.dark_pink};
        background-color: ${Variables.colors.pink};   
     `}
     
     ${props => props.rounded && css`
         :first-child {
            border-radius: 10px 0 0 0;
         }
    
        :last-child {
            border-radius:0 10px 0 0;
        }   
     `}    
        
`;

export default Button;