package com.miPortfolio.GermanAlonso.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 30, message = "No cumple con los parametros")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 30, message = "No cumple con los parametros")
    private String apellido;
    

    @Size(min = 1, max = 30, message = "Insertar imagen")
    private String img;
    
}
