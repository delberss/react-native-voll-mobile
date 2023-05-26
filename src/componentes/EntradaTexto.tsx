import { FormControl, IInputProps, Input } from "native-base";
import { ReactNode } from "react";

interface EntradaTextoProps extends IInputProps{
    placeholder: string
    label: string
}

export function EntradaTexto({placeholder, label}: EntradaTextoProps){
    return(
        <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            
            <Input 
            type='text' 
            size='lg'
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            placeholder={placeholder}
          />
        </FormControl>
        
    )
}