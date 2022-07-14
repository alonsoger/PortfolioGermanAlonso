
package com.miPortfolio.GermanAlonso.Repository;

import com.miPortfolio.GermanAlonso.Entity.Persona;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface IPersonaRepository extends JpaRepository <Persona,Long> {

    @Override
    public List<Persona> findAll();
    
}
