package com.gameontech.onboarding.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

/**
 * Entidade Colaborador (Employee)
 * Representa um colaborador no sistema de onboarding
 * 
 * ANOTAÇÕES JPA:
 * @Entity - Marca a classe como uma entidade JPA (tabela no banco)
 * @Table - Define o nome da tabela no banco de dados
 * @Id - Marca o campo como chave primária
 * @GeneratedValue - Define estratégia de geração automática do ID
 * @Column - Customiza as propriedades da coluna no banco
 * 
 * ANOTAÇÕES LOMBOK:
 * @Data - Gera getters, setters, toString, equals, hashCode
 * @NoArgsConstructor - Gera construtor sem argumentos
 * @AllArgsConstructor - Gera construtor com todos os argumentos
 * 
 * ANOTAÇÕES DE VALIDAÇÃO:
 * @NotNull, @NotBlank - Validação de campos obrigatórios
 * @Email - Valida formato de e-mail
 * @Min, @Max - Validação de valores numéricos
 */
@Entity
@Table(name = "colaboradores")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Colaborador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório")
    @Column(nullable = false, length = 100)
    private String nome;

    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email deve ser válido")
    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @NotBlank(message = "Cargo é obrigatório")
    @Column(nullable = false, length = 50)
    private String cargo;

    @NotBlank(message = "Departamento é obrigatório")
    @Column(nullable = false, length = 50)
    private String departamento;

    @Column(name = "data_admissao", nullable = false)
    private LocalDateTime dataAdmissao;

    @Min(value = 0, message = "Progresso deve ser no mínimo 0")
    @Max(value = 100, message = "Progresso deve ser no máximo 100")
    @Column(name = "progresso_onboarding")
    private Integer progressoOnboarding = 0;

    @Column(nullable = false)
    private Boolean ativo = true;

    @Column(name = "criado_em", nullable = false, updatable = false)
    private LocalDateTime criadoEm;

    @Column(name = "atualizado_em")
    private LocalDateTime atualizadoEm;

    /**
     * Método executado antes de persistir a entidade
     */
    @PrePersist
    protected void onCreate() {
        this.criadoEm = LocalDateTime.now();
        this.atualizadoEm = LocalDateTime.now();
        if (this.dataAdmissao == null) {
            this.dataAdmissao = LocalDateTime.now();
        }
    }

    /**
     * Método executado antes de atualizar a entidade
     */
    @PreUpdate
    protected void onUpdate() {
        this.atualizadoEm = LocalDateTime.now();
    }
}
