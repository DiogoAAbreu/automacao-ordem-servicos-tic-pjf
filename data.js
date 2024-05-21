const data = [
    {
        item: "1",
        descricao: "Características complementares comuns a todos",
        valorTotal: 85000.00,
        etapas: [
            { etapa: 1, valor: 4250.00 },
            { etapa: 2, valor: 51000.00 },
            { etapa: 3, valor: 29750.00 }
        ]
    },
    {
        item: "2.1",
        descricao: "Características Gerais",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.2",
        descricao: "Módulo Cadastros Gerais",
        valorTotal: 8000.00,
        etapas: [
            { etapa: 1, valor: 400.00 },
            { etapa: 2, valor: 4800.00 },
            { etapa: 3, valor: 2800.00 }
        ]
    },
    {
        item: "2.2.39",
        descricao: "Submódulo de Gestão de Profissionais",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.2.40",
        descricao: "Submódulo de Gestão de Anamnese",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.2.41",
        descricao: "Submódulo de Gestão de Pacientes",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.3",
        descricao: "Módulo de Comunicação",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.4",
        descricao: "Módulo de Processamento Ambulatorial",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.5",
        descricao: "Módulo de Processamento Hospitalar",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.6",
        descricao: "Módulo Recepção de Pacientes",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.7",
        descricao: "Módulo Acolhimento e classificação de risco",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.8",
        descricao: "Módulo Atendimento",
        valorTotal: 8000.00,
        etapas: [
            { etapa: 1, valor: 400.00 },
            { etapa: 2, valor: 4800.00 },
            { etapa: 3, valor: 2800.00 }
        ]
    },
    {
        item: "2.8.1",
        descricao: "Submódulo Atendimento de Enfermagem",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.8.2",
        descricao: "Submódulo Atendimento Médico",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.8.3",
        descricao: "Submódulo Atendimento Odontológico",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.9",
        descricao: "Módulo Registro de Outros Procedimentos",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.10",
        descricao: "Módulo Prontuário",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.11",
        descricao: "Módulo Agendamentos",
        valorTotal: 8000.00,
        etapas: [
            { etapa: 1, valor: 400.00 },
            { etapa: 2, valor: 4800.00 },
            { etapa: 3, valor: 2800.00 }
        ]
    },
    {
        item: "2.11.1",
        descricao: "Submódulo Agendamento de Consultas",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.11.2",
        descricao: "Submódulo Agendamento de Exames",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.11.3",
        descricao: "Submódulo APAC (Autorização de Procedimento de Alta Complexidade)",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.11.4",
        descricao: "Submódulo Agendamento de Procedimentos",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.12",
        descricao: "Módulo Recepção Resultado de Exames",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.13",
        descricao: "Módulo Controle e Avaliação (Auditoria)",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.14",
        descricao: "Módulo Tratamento fora do Domicílio (TFD)",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.15",
        descricao: "Módulo Vacinas Imunobiológicos",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.16",
        descricao: "Módulo Vigilância em Saúde",
        valorTotal: 17000.00,
        etapas: [
            { etapa: 1, valor: 850.00 },
            { etapa: 2, valor: 10200.00 },
            { etapa: 3, valor: 5950.00 }
        ]
    },
    {
        item: "2.16.1",
        descricao: "Submódulo Cadastro de Entidades",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.2",
        descricao: "Submódulo Cadastros Fiscais",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.3",
        descricao: "Submódulo Roteiros de Inspeção",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.4",
        descricao: "Submódulo Acesso Externo Vigilância - Cidadão",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.5",
        descricao: "Submódulo Vigilância Epidemiológica",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.6",
        descricao: "Submódulo Vigilância Ambiental",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.6.1",
        descricao: "Submódulo Zoonoses",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.7",
        descricao: "Submódulo Controle de Endemias",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.8",
        descricao: "Submódulo Controle de Saneamento",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.9",
        descricao: "Submódulo Vigilância em Saúde do Trabalhador",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.16.10",
        descricao: "Submódulo Vigilância Sanitária",
        valorTotal: 1545.45,
        etapas: [
            { etapa: 1, valor: 77.27 },
            { etapa: 2, valor: 927.27 },
            { etapa: 3, valor: 540.91 }
        ]
    },
    {
        item: "2.17",
        descricao: "Módulo Emissão de Autos e ou Termos",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.17.10",
        descricao: "Submódulo Termo de Intimação",
        valorTotal: 1000.00,
        etapas: [
            { etapa: 1, valor: 50.00 },
            { etapa: 2, valor: 600.00 },
            { etapa: 3, valor: 350.00 }
        ]
    },
    {
        item: "2.17.11",
        descricao: "Submódulo Auto de Infração",
        valorTotal: 1000.00,
        etapas: [
            { etapa: 1, valor: 50.00 },
            { etapa: 2, valor: 600.00 },
            { etapa: 3, valor: 350.00 }
        ]
    },
    {
        item: "2.17.12",
        descricao: "Submódulo Outros Termos",
        valorTotal: 1000.00,
        etapas: [
            { etapa: 1, valor: 50.00 },
            { etapa: 2, valor: 600.00 },
            { etapa: 3, valor: 350.00 }
        ]
    },
    {
        item: "2.17.13",
        descricao: "Submódulo Penalidades",
        valorTotal: 1000.00,
        etapas: [
            { etapa: 1, valor: 50.00 },
            { etapa: 2, valor: 600.00 },
            { etapa: 3, valor: 350.00 }
        ]
    },
    {
        item: "2.18",
        descricao: "Módulo Denúncias",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.19",
        descricao: "Módulo Emissão de Taxas e Multas",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.20",
        descricao: "Módulo Acesso Mobile Offline",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.21",
        descricao: "Módulo Acesso Externo - Validação de Usuário",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.22",
        descricao: "Módulo Acesso Externo - Contabilistas",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.23",
        descricao: "Módulo Acesso Externo - Cidadão",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.24",
        descricao: "Módulo Laboratório",
        valorTotal: 8000.00,
        etapas: [
            { etapa: 1, valor: 400.00 },
            { etapa: 2, valor: 4800.00 },
            { etapa: 3, valor: 2800.00 }
        ]
    },
    {
        item: "2.24.33",
        descricao: "Submódulo Controle de Materiais",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.24.34",
        descricao: "Submódulo Acertos e Inutilização",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.24.35",
        descricao: "Submódulo Interfaceamento",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.24.36",
        descricao: "Submódulo Soroteca",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.25",
        descricao: "Módulo Programa de Saúde",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.26",
        descricao: "Módulo Controle De Estoque e Assistência Farmacêutica",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.26.48",
        descricao: "Submódulo Entradas",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.26.49",
        descricao: "Submódulo Acertos e Inutilização",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.26.50",
        descricao: "Submódulo Assistência Farmacêutica",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.27",
        descricao: "Módulo Requisições e Transferências",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.28",
        descricao: "Módulo Processos Judiciais",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.28.32",
        descricao: "Submódulo Demanda Reprimida",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.28.33",
        descricao: "Submódulo Integrações",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.29",
        descricao: "Módulo Transporte de Paciente",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.30",
        descricao: "Módulo UPA 24 horas",
        valorTotal: 9000.00,
        etapas: [
            { etapa: 1, valor: 450.00 },
            { etapa: 2, valor: 5400.00 },
            { etapa: 3, valor: 3150.00 }
        ]
    },
    {
        item: "2.31",
        descricao: "Módulo Internação hospitalar",
        valorTotal: 9000.00,
        etapas: [
            { etapa: 1, valor: 450.00 },
            { etapa: 2, valor: 5400.00 },
            { etapa: 3, valor: 3150.00 }
        ]
    },
    {
        item: "2.32",
        descricao: "Módulo Autorização de Internação Hospitalar (Estabelecimento)",
        valorTotal: 6000.00,
        etapas: [
            { etapa: 1, valor: 300.00 },
            { etapa: 2, valor: 3600.00 },
            { etapa: 3, valor: 2100.00 }
        ]
    },
    {
        item: "2.33",
        descricao: "Módulo Faturamento",
        valorTotal: 5000.00,
        etapas: [
            { etapa: 1, valor: 250.00 },
            { etapa: 2, valor: 3000.00 },
            { etapa: 3, valor: 1750.00 }
        ]
    },
    {
        item: "2.33.13",
        descricao: "Submódulo Controle das Internações",
        valorTotal: 5000.00,
        etapas: [
            { etapa: 1, valor: 250.00 },
            { etapa: 2, valor: 3000.00 },
            { etapa: 3, valor: 1750.00 }
        ]
    },
    {
        item: "2.34",
        descricao: "Módulo Recepção Internação",
        valorTotal: 4000.00,
        etapas: [
            { etapa: 1, valor: 200.00 },
            { etapa: 2, valor: 2400.00 },
            { etapa: 3, valor: 1400.00 }
        ]
    },
    {
        item: "2.35",
        descricao: "Módulo Painel de Chamadas",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.36",
        descricao: "Módulo Histórico de Atendimentos Médicos Odontológicos Enfermagem",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.37",
        descricao: "Módulo Acesso Cidadão Via Totem Painel",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.38",
        descricao: "Módulo Pesquisas Estratégicas da Saúde via ACS",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.39",
        descricao: "Módulo Serviços de Atenção Domiciliar",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.39.10",
        descricao: "Submódulo Serviço de Arquivo Médico e Estatística (SAME)",
        valorTotal: 2000.00,
        etapas: [
            { etapa: 1, valor: 100.00 },
            { etapa: 2, valor: 1200.00 },
            { etapa: 3, valor: 700.00 }
        ]
    },
    {
        item: "2.40",
        descricao: "Módulo Relatórios",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.41",
        descricao: "Módulo Business Intelligence (BI)",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 0.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
    {
        item: "2.42",
        descricao: "Módulo telemedicina teleconsulta teleinterconsulta",
        valorTotal: 3000.00,
        etapas: [
            { etapa: 1, valor: 150.00 },
            { etapa: 2, valor: 1800.00 },
            { etapa: 3, valor: 1050.00 }
        ]
    },
];
module.exports = data;