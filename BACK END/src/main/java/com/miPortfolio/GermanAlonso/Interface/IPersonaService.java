package com.miPortfolio.GermanAlonso.Interface;

import com.miPortfolio.GermanAlonso.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer lista de Personas
    public List <Persona> getPersona ();
    
    //Guardar un objeto de tipo persona
    public void savePersona (Persona persona);
    
    //Eliminar un objeto buscado por Id
    public void deletePersona (Long id);
    
    //Buscar una persona por Id
    public Persona findPersona (Long id);
}
