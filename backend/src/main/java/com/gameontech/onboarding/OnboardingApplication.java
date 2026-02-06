package com.gameontech.onboarding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Classe principal da aplicação Spring Boot
 * 
 * ANOTAÇÕES:
 * @SpringBootApplication - Combina três anotações:
 *   1. @Configuration: Classe como fonte de configurações
 *   2. @EnableAutoConfiguration: Auto-configuração do Spring Boot
 *   3. @ComponentScan: Escaneia pacotes em busca de componentes
 * 
 * Esta é a classe de entrada da aplicação (main method)
 */
@SpringBootApplication
public class OnboardingApplication {

    /**
     * Método main - Ponto de entrada da aplicação
     * 
     * @param args Argumentos da linha de comando
     */
    public static void main(String[] args) {
        // Inicia a aplicação Spring Boot
        SpringApplication.run(OnboardingApplication.class, args);
        
        System.out.println("\n=========================================");
        System.out.println("   🚀 Server rodando em: http://localhost:8080");
        System.out.println("   📚 H2 Console: http://localhost:8080/h2-console");
        System.out.println("   📖 API Docs: http://localhost:8080/api");
        System.out.println("=========================================\n");
    }
}
