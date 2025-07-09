const promptsData = {
    "phases": [
        {
            "id": "strategy",
            "name": "Strategy",
            "description": "Establish vision, set objectives, and align with organisational goals",
            "color": "#b794f6",
            "icon": '<i data-feather="target" style="color: #ff0000; stroke-width: 1.5px;"></i>',
            "prompts": [
                {
                    "id": "okr-development",
                    "title": "OKR Development Assistant",
                    "description": "Create quarterly OKRs aligned with your Hub objectives and mission",
                    "complexity": "medium",
                    "timeEstimate": "15-30 mins",
                    "roles": [
                        "Squad Lead",
                        "Product Manager",
                        "Hub Lead"
                    ],
                    "purpose": ['Alignment & Strategy', 'Futures & Foresight', 'Opportunity Assessment'],
                    "prompt": "Help me develop quarterly OKRs for our Squad quest that align with {{Hub_Objectives}}. For each proposed objective, suggest 3-4 key results that are: measurable within our quarterly timeframe, directly influenced by our squad's capabilities, and clearly connected to customer value. Include potential leading indicators we can track weekly. Our Squad quest is to\: {{Squad_Quest}}",
                    "variables": [
                        "Squad_Quest",
                        "Hub_Objectives"
                    ],
                    "rating": 4.8,
                    "usageCount": 156
                },
                {
                    "id": "vision-alignment",
                    "title": "Opportunity Alignment Analyser",
                    "description": "Check whether your opportunity ladders up to your objective and ultimately our mission.",
                    "complexity": "low",
                    "timeEstimate": "10-15 mins",
                    "roles": [
                        "Squad Lead",
                        "Product Manager"
                    ],
                    "purpose": ['Alignment & Strategy', 'Opportunity Assessment', 'Critique & Review', 'Futures & Foresight'],
                    "prompt": "We have identified an opportunity to \"{{Opportunity_Description}}\". Analyse how this opportunity supports the hub objective \"{{Hub_Objective}}\". Identify direct contributions, second-order effects, and any gaps that might weaken alignment to our mission of 'Better health for all Australians'.",
                    "variables": [
                        "Opportunity_Description",
                        "Hub_Objective"
                    ],
                    "rating": 4.6,
                    "usageCount": 89
                },
                {
                    "id": "pre-mortem-risk-assessment",
                    "title": "Pre-mortem Risk Assessment",
                    "description": "Use this prompt during the strategy or shaping phase to critically identify potential failure points for an initiative",
                    "complexity": "high",
                    "timeEstimate": "30-45 mins",
                    "roles": [
                        "Squad Lead",
                        "Engineering Lead"
                    ],
                    "purpose": ['Alignment & Strategy', 'Opportunity Assessment', 'Risk Management'],
                    "prompt": "Let's conduct a pre-mortem for {{Initiative_Description}}. Pretend it's the end of the project and it failed to meet {{Key_Objectives}}. Brainstorm the reasons for this failure \u2013 especially consider if our assumptions ({{Key_Assumptions}}) turned out to be false \u2013 examining aspects such as:\nStrategy (e.g., misaligned goals or shifting market conditions)\nExecution (e.g., technical hurdles, resource constraints, process breakdowns)\nUser Impact (e.g., poor user adoption or negative feedback)\nExternal Factors (e.g., regulatory changes or new competitors)\nFor each identified reason, suggest proactive steps we can take now to prevent or mitigate it. Structure the output as:\nPotential Failure Reason: [Description of issue]\nMitigation: [How to address or prevent this issue]\nProvide multiple distinct reasons and mitigations, ensuring they cover different dimensions of the project.",
                    "variables": [
                        "Initiative_Description",
                        "Key_Objectives",
                        "Key_Assumptions"
                    ],
                    "rating": 4.9,
                    "usageCount": 0
                },
                {
                    "id": "stakeholder-alignment-brief",
                    "title": "Stakeholder Alignment Brief",
                    "description": "Use in the strategy phase to align multiple stakeholders on a project's vision and plan",
                    "complexity": "medium",
                    "timeEstimate": "25-35 mins",
                    "roles": [
                        "Squad Lead",
                        "Product Manager"
                    ],
                    "purpose": ['Alignment & Strategy','Futures & Foresight'],
                    "prompt": "Help me prepare a brief to align all stakeholders for {{Project_Vision}}. The stakeholders include {{Key_Stakeholders}}, and our company's strategic objectives are {{Company_Objectives}}. Some known concerns or differing priorities among these stakeholders are: {{Stakeholder_Concerns}}. Please draft a clear and concise alignment document that includes:\nProject Overview: A summary of the project vision and how it supports our company objectives.\nStakeholder Interests: Acknowledge each stakeholder's goals or concerns and show how the project addresses them (or propose compromises where needed).\nValue Proposition: Explain the value and impact of this initiative for the business and customers, highlighting why it matters.\nNext Steps & Responsibilities: Outline the agreed next steps and who is responsible for each.\nThe tone should be inclusive and authoritative, anticipating possible objections and addressing them. Ensure the brief demonstrates how {{Project_Vision}} is a shared win for all stakeholders and aligns with {{Company_Objectives}}.",
                    "variables": [
                        "Project_Vision",
                        "Key_Stakeholders",
                        "Company_Objectives",
                        "Stakeholder_Concerns"
                    ],
                    "rating": 4.8,
                    "usageCount": 0
                },
                {
                    "id": "future-back-scenario-planner",
                    "title": "Future-Back Scenario Planner",
                    "description": "Create divergent future scenarios for a theme, then back-cast the moves we need to start today.",
                    "complexity": "high",
                    "timeEstimate": "30-45 mins",
                    "roles": ["Hub Lead","Squad Lead"],
                    "purpose": ['Futures & Foresight', 'Alignment & Strategy'],
                    "prompt": "Imagine three plausible futures in which {{Scenario_Theme}} plays out over the next {{Time_Horizon}}. Map the critical uncertainties, define a preferred future, and outline milestones that pull us toward it.",
                    "variables": ["Scenario_Theme","Time_Horizon"]
                },
                {
                    "id": "assumption-inversion-challenge",
                    "title": "Assumption-Inversion Challenge",
                    "description": "Flip core assumptions for your Initiative to expose blind spots and new options.",
                    "complexity": "medium",
                    "timeEstimate": "20-25 mins",
                    "roles": ["Business Analyst","Product Manager"],
                    "purpose": ['Assumption Testing','Experimentation', 'Metrics & Insights'],
                    "prompt": "List the three biggest assumptions behind {{Initiative_Name}}: {{Initiative_Description}}. Invert each one (assume the opposite is true) and brainstorm how the initiative would need to change. Summarise the risks and opportunities revealed.",
                    "variables": ["Initiative_Name","Initiative_Description"]
                },
                {
                    "id": "swot-landscape-scanner",
                    "title": "SWOT Landscape Scanner",
                    "description": "Identify strengths, weaknesses, opportunities and threats for your business idea against competitors",
                    "complexity": "low",
                    "timeEstimate": "10-15 mins",
                    "roles": [
                        "Squad Lead",
                        "Product Manager"
                    ],
                    "purpose": ['Alignment & Strategy', 'Metrics & Insights'],
                    "prompt": "Perform a SWOT analysis for {{Business_Idea}} comparing us to {{Competitor_Names}}. Highlight key leverage points and potential system-wide ripple effects.",
                    "variables": [
                        "Business_Idea",
                        "Competitor_Names"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "pestle-trend-radar",
                    "title": "PESTLE Trend Radar",
                    "description": "Scan political, economic, social, tech, legal and environmental forces for your idea into the future",
                    "complexity": "medium",
                    "timeEstimate": "20-30 mins",
                    "roles": [
                        "Squad Lead",
                        "Hub Lead"
                    ],
                    "purpose": ['Alignment & Strategy','Futures & Foresight', 'Opportunity Assessment'],
                    "prompt": "Using the PESTLE framework, list the top 3 macro trends likely to impact {{Context_Scope}} in the next {{Review_Horizon}}. Include second-order consequences and mitigation options.",
                    "variables": [
                        "Context_Scope",
                        "Review_Horizon"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "4ps-stress-test",
                    "title": "4 Ps Stress-Test",
                    "description": "Use in the strategy or shaping phase to audit Product, Price, Place, and Promotion against competitors and spot gaps in the marketing mix.",
                    "complexity": "medium",
                    "timeEstimate": "20-30 mins",
                    "roles": [
                      "Marketer",
                      "Product Manager",
                      "Squad Lead"
                    ],
                    "purpose": [],
                    "prompt": "We're reviewing the marketing mix for {{Product_Name}}.\n\n**Current Snapshot**\nProduct details: {{Current_Product_Details}}\nPricing info: {{Pricing_Info}}\nDistribution / Place: {{Distribution_Channels}}\nPromotion summary: {{Promotion_Summary}}\nKey competitors & their approaches: {{Benchmark_Competitors}}\n\n**Task**\n1. For each P (Product, Price, Place, Promotion), rate {{Product_Name}} as Strong, Adequate, or Weak versus the benchmark and give a one-sentence rationale.\n2. Identify the single biggest gap or risk in each P.\n3. Suggest one quick win and one longer-term initiative to close that gap, noting required effort and expected impact.\n4. Prioritise the four longer-term initiatives (one per P) using Impact vs. Effort and explain your order.\n\nReturn the analysis in a tidy table, followed by a short prioritised to-do list.",
                    "variables": [
                      "Product_Name",
                      "Current_Product_Details",
                      "Pricing_Info",
                      "Distribution_Channels",
                      "Promotion_Summary",
                      "Benchmark_Competitors"
                    ],
                    "rating": 0,
                    "usageCount": 0
                  }
            ]
        },
        {
            "id": "shaping",
            "name": "Shaping",
            "description": "Evaluate ideas for desirability, viability, and feasibility",
            "color": "#f6ad55",
            "icon": '<i data-feather="zap" style="color: #ff0000; stroke-width: 1.5px;"></i>',
            "prompts": [
                {
                    "id": "dvf-evaluator",
                    "title": "Desirability-Viability-Feasibility Evaluator",
                    "description": "Score your Initiative for your target audience across desirability, viability, and feasibility.",
                    "complexity": "medium",
                    "timeEstimate": "20-25 mins",
                    "roles": ["UX Designer","Product Manager"],
                    "purpose": ['Customer Understanding', 'Alignment & Strategy', 'Opportunity Assessment','Assumption Testing'],
                    "prompt": "Assess {{Initiative_Description}} for the {{Target_Audience}}.\n• **Desirability** \u2014 user value & evidence of demand\n• **Viability** \u2014 revenue, cost, strategic fit\n• **Feasibility** \u2014 tech, ops, regulatory\nReturn a 1\u20135 score for each dimension plus key insights.",
                    "variables": ["Initiative_Description","Target_Audience"]
                },
                {
                    "id": "risk-assessment",
                    "title": "Technical Risk Profiler",
                    "description": "Identify and assess technical and operational risks",
                    "complexity": "medium",
                    "timeEstimate": "20-30 mins",
                    "roles": [
                        "Engineering Lead",
                        "Squad Lead"
                    ],
                    "purpose": ['Opportunity Assessment', 'Risk Management'],
                    "prompt": "Analyse potential risks for {{Solution_Description}}. Identify: critical technical dependencies, required new capabilities, integration complexity with existing systems, timeline implications, and major risk factors. For each risk, suggest mitigation strategies and rate probability/impact. Provide overall risk score. Focus on the {{Time_Frame}} horizon and consider {{Key_Stakeholders}}.",
                    "variables": [
                        "Solution_Description",
                        "Time_Frame",
                        "Key_Stakeholders"
                    ],
                    "rating": 4.5,
                    "usageCount": 127
                },
                {
                    "id": "rapid-validation",
                    "title": "Lightning Validation Designer",
                    "description": "Design quick validation experiments for early concept testing",
                    "complexity": "medium",
                    "timeEstimate": "15-25 mins",
                    "roles": [
                        "Product Manager",
                        "UX Designer"
                    ],
                    "purpose": ['Experimentation','Assumption Testing', 'Creative Ideation'],
                    "prompt": "Design a 1-week validation experiment for {{Concept_Description}}. Include: hypothesis to test, success metrics, experiment design, required resources, and expected learnings. Focus on fastest way to gather meaningful customer feedback. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Concept_Description",
                        "Time_Frame"
                    ],
                    "rating": 4.4,
                    "usageCount": 98
                },
                {
                    "id": "feature-impact-mapping",
                    "title": "Feature Impact Mapping Assistant",
                    "description": "Use during the shaping phase when defining a new feature or initiative",
                    "complexity": "high",
                    "timeEstimate": "30-45 mins",
                    "roles": [
                        "Product Manager",
                        "Business Analyst"
                    ],
                    "purpose": ['Critique & Review','Metrics & Insights', 'Opportunity Assessment'],
                    "prompt": "I'm working on defining {{Feature_Description}}. The goal is {{Desired_Outcome}}. Let's perform an impact mapping exercise:\nGoal: Confirm the high-level outcome or business goal ({{Desired_Outcome}}) that this feature aims to achieve.\nActors: Identify who will be impacted or can influence the outcome (e.g., {{Primary_Actors}}, and any other user segments or stakeholders).\nImpacts: For each actor, list the desired changes in behaviour or outcomes that the feature should drive to reach the goal. Think critically about how their actions or experiences would change.\nDeliverables: Finally, list the specific deliverables or feature components we will build in {{Feature_Description}} that lead to those impacts.\nPresent the results in a structured format (Goal \u2192 Actors \u2192 Impacts \u2192 Deliverables). Highlight any assumptions linking these elements and note any potential side effects or unintended consequences. Ensure the mapping shows a clear logic from the feature to the outcome.",
                    "variables": [
                        "Feature_Description",
                        "Desired_Outcome",
                        "Primary_Actors"
                    ],
                    "rating": 4.7,
                    "usageCount": 0
                },
                {
                    "id": "technical-solution-evaluator",
                    "title": "Technical Solution Evaluator",
                    "description": "Use in the shaping or early design phase to evaluate multiple technical implementation options",
                    "complexity": "high",
                    "timeEstimate": "45-60 mins",
                    "roles": [
                        "Engineering Lead",
                        "Product Manager"
                    ],
                    "purpose": ['Opportunity Assessment','Critique & Review'],
                    "prompt": "We need to decide on an implementation approach for {{Problem_Statement}}. The options under consideration are: {{Solution_Options}}. Our decision criteria include {{Decision_Criteria}}. Please evaluate each option against these criteria:\nOption Overview: Briefly describe how the solution works or what it entails.\nPros: List the benefits and strengths (e.g., meets certain criteria well, simplicity, performance advantages, familiarity to the team).\nCons: List the drawbacks or risks (e.g., criteria where it falls short, complexity, potential high costs, new unknowns introduced).\nSystem Impact: Explain how this option would affect our existing systems or processes (for example, new dependencies, changes to user experience, impacts on other teams or infrastructure).\nLong-Term Considerations: Discuss future implications like scalability, maintainability, and alignment with our long-term strategy or tech stack.\nRecommendation: Based on the above, suggest which option is the best choice and why (or if further investigation is needed before deciding).\nEnsure the analysis remains objective and questions any assumptions. The output should clearly compare trade-offs and show how each option measures up against {{Decision_Criteria}}.",
                    "variables": [
                        "Problem_Statement",
                        "Solution_Options",
                        "Decision_Criteria"
                    ],
                    "rating": 4.8,
                    "usageCount": 0
                },
                {
                    "id": "systems-thinking-impact-loop",
                    "title": "Systems-Thinking Impact Loop",
                    "description": "Map reinforcing and balancing loops to reveal second-order effects before committing.",
                    "complexity": "high",
                    "timeEstimate": "45-60 mins",
                    "roles": [
                        "Product Manager",
                        "Business Analyst",
                        "Engineering Lead"
                    ],
                    "purpose": ['Risk Management','Assumption Testing', 'Systems Thinking'],
                    "prompt": "Draw a causal-loop diagram for {{Idea_Description}} covering users, tech, policy, and market factors. Identify at least two reinforcing and two balancing loops. For each loop, discuss potential unintended consequences and mitigation experiments. Focus on the {{Time_Frame}} horizon and consider {{Key_Stakeholders}}.",
                    "variables": [
                        "Idea_Description",
                        "Time_Frame",
                        "Key_Stakeholders"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "second-order-consequence-mapper",
                    "title": "Second-Order Consequence Mapper",
                    "description": "Stress-test proposed features by tracing ripple effects three steps out.",
                    "complexity": "medium",
                    "timeEstimate": "30-40 mins",
                    "roles": [
                        "Product Manager",
                        "UX Designer",
                        "Squad Lead"
                    ],
                    "purpose": ['Systems Thinking','Assumption Testing', 'Risk Management'],
                    "prompt": "For each key decision in {{Feature_Description}}, list first-order benefits and costs. Then map second and third-order consequences across customer, team, compliance, and sustainability dimensions. Highlight surprises and choose one insight to refine the feature. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Feature_Description",
                        "Time_Frame"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "kano-delight-discovery",
                    "title": "Kano Delight Discovery",
                    "description": "Categorise a list of features for a customer segment using the Kano model",
                    "complexity": "medium",
                    "timeEstimate": "20-25 mins",
                    "roles": [
                        "UX Designer",
                        "Product Manager"
                    ],
                    "purpose": ['Customer Understanding','Assumption Testing', 'Systems Thinking'],
                    "prompt": "For {{Customer_Segment}}, assign each item in {{Feature_List}} to Kano categories (Basic, Performance, Exciter). Recommend where to invest for maximum delight and systemic loyalty effects.",
                    "variables": [
                        "Feature_List",
                        "Customer_Segment"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "jtbd-storyboarder",
                    "title": "Jobs-to-be-Done Storyboarder",
                    "description": "Transforms a JTBD statement into a visual storyboard that captures functional and emotional jobs, forces of progress, and desired outcomes.",
                    "complexity": "medium",
                    "timeEstimate": "25-35 mins",
                    "roles": [
                      "Marketer",
                      "Product Manager",
                      "Business Analyst"
                    ],
                    "purpose": ['Alignment & Strategy', 'Opportunity Assessment', 'Risk Management'],
                    "prompt": "We want to visualise a core Job-to-be-Done.\n\n**Input**\nTarget persona: {{Target_Persona}}\nSituation trigger: {{Situation_Trigger}}\nDesired outcome: {{Desired_Outcome}}\nBarriers / anxieties: {{Barriers}}\nExisting solutions: {{Existing_Solutions}}\n\n**Task**\n1. Draft a job story in the format: *When {{Situation_Trigger}}, I want to {{Functional_Job}} so I can {{Desired_Outcome}}.*\n2. List the emotional and social jobs that accompany the functional job.\n3. Map the Forces of Progress (Push, Pull, Anxiety, Habit) influencing adoption.\n4. Create a 6-frame storyboard describing the persona's journey—from trigger to outcome—including the forces at play in each frame.\n5. Conclude with two opportunity areas where a new or improved solution could outperform existing alternatives.\n\nReturn the storyboard frames as numbered captions; include a short note under each frame describing what a sketch should depict.",
                    "variables": [
                      "Target_Persona",
                      "Situation_Trigger",
                      "Desired_Outcome",
                      "Barriers",
                      "Existing_Solutions"
                    ],
                    "rating": 0,
                    "usageCount": 0
                  },
                  {
                    "id": "tech-spike-planning-assistant",
                    "title": "Tech-Spike Planning Assistant",
                    "description": "Helps engineers frame and time-box a technical spike, define exit criteria, and surface risks and dependencies before development.",
                    "complexity": "medium",
                    "timeEstimate": "15-25 mins",
                    "roles": [
                      "Engineer",
                      "Squad Lead",
                      "Product Manager",
                      "Scrum Master"
                    ],
                    "purpose": ['Opportunity Assessment', 'Risk Management'],
                    "prompt": "We need to run a technical spike on {{User_Story_or_Problem}} to de-risk implementation.\n\n**Context**\nKnown uncertainties / questions to answer: {{Technical_Uncertainties}}\nTime-box (days or hours): {{Timebox_Duration}}\nDefinition of Done for the spike: {{Definition_of_Done}}\n\n**Task**\n1. Break the spike into discrete investigative tasks with owners and rough effort.\n2. Define measurable exit criteria that map to {{Definition_of_Done}}.\n3. List assumptions to validate and the experiments or proofs-of-concept needed for each.\n4. Surface dependencies (people, environments, data) and call out any blockers.\n5. Produce a simple Gantt-style timeline that fits within {{Timebox_Duration}}.\n6. Finish with a 'Go / No-Go' decision checklist we'll use when the spike wraps up.\n\nReturn the plan in a structured markdown format: Objectives → Tasks → Timeline → Exit Criteria → Dependencies → Decision Checklist.",
                    "variables": [
                      "User_Story_or_Problem",
                      "Technical_Uncertainties",
                      "Timebox_Duration",
                      "Definition_of_Done"
                    ],
                    "rating": 0,
                    "usageCount": 0
                  }
            ]
        },
        {
            "id": "discovery",
            "name": "Discovery",
            "description": "Deep dive into requirements and solution architecture",
            "color": "#68d391",
            "icon": '<i data-feather="search" style="color: #ff0000; stroke-width: 1.5px;"></i>',
            "prompts": [
                {
                    "id": "requirements-elicitation",
                    "title": "Requirements Synthesis Engine",
                    "description": "Transform user research into actionable technical requirements",
                    "complexity": "high",
                    "timeEstimate": "45-60 mins",
                    "roles": [
                        "Product Manager",
                        "Business Analyst",
                        "Engineering Lead"
                    ],
                    "purpose": ['Metrics & Insights','Assumption Testing', 'Critique & Review'],
                    "prompt": "Based on user research findings {{Research_Summary}}, generate comprehensive requirements for {{Feature_Description}}. Include: functional requirements organised by user journey, non-functional requirements (performance, security, scalability), integration requirements with existing systems, and acceptance criteria. Organise by MoSCoW priority.",
                    "variables": [
                        "Research_Summary",
                        "Feature_Description"
                    ],
                    "rating": 4.7,
                    "usageCount": 189
                },
                {
                    "id": "user-research-planner",
                    "title": "User Research Planner",
                    "description": "Use in the discovery phase to design a user research plan",
                    "complexity": "medium",
                    "timeEstimate": "25-35 mins",
                    "roles": [
                        "UX Designer",
                        "Product Manager"
                    ],
                    "purpose": ['Customer Understanding','Assumption Testing', 'Systems Thinking'],
                    "prompt": "I need to plan a user research study to achieve the goal: {{Research_Goal}}. The target users are {{Target_User_Group}}. Given {{Constraints}}, please outline a research plan that includes:\nResearch Objectives: 3-5 key questions we aim to answer or hypotheses to validate about {{Research_Goal}}.\nMethodology: Recommended research methods (e.g., interviews, surveys, usability tests, field observations) and why each is suitable for our goals and constraints.\nKey Questions/Tasks: A brief discussion guide or list of tasks for participants, designed to elicit insights related to our objectives.\nBias Mitigation: Potential biases or validity threats (e.g., leading questions, sampling bias) and how we'll address them to ensure reliable results.\nTimeline & Logistics: A rough timeline for recruiting {{Target_User_Group}}, conducting the study, and analysing results, considering {{Constraints}}.\nMake sure the plan is thorough but realistic, and explain how each part of the plan will help us learn about {{Research_Goal}}. The output should be structured for easy review by the team.",
                    "variables": [
                        "Research_Goal",
                        "Target_User_Group",
                        "Constraints"
                    ],
                    "rating": 4.6,
                    "usageCount": 0
                },
                {
                    "id": "lateral-thinking-ideation-jam",
                    "title": "Lateral-Thinking Ideation Jam",
                    "description": "Unlock unconventional solutions by provocation, random entry and analogy.",
                    "complexity": "medium",
                    "timeEstimate": "25-35 mins",
                    "roles": [
                        "UX Designer",
                        "Product Manager",
                        "Squad Lead"
                    ],
                    "purpose": ['Creative Ideation','Experimentation'],
                    "prompt": "State the problem {{Problem_Statement}}. Apply three techniques: a) Provocation\u2014write a deliberately outrageous statement and force-fit three ideas; b) Random Entry\u2014grab a random noun and generate three analogies; c) Reversal\u2014describe the opposite solution. Capture nine raw ideas and cluster them into themes. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Problem_Statement",
                        "Time_Frame"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "red-team-devils-advocate",
                    "title": "Red-Team Devil's Advocate",
                    "description": "Pressure-test discovery insights by simulating a hostile critic.",
                    "complexity": "high",
                    "timeEstimate": "40-50 mins",
                    "roles": [
                        "Business Analyst",
                        "Scrum Master",
                        "Engineering Lead"
                    ],
                    "purpose": ['Assumption Testing','Experimentation', 'Metrics & Insights'],
                    "prompt": "Split participants into Builders and Red Team for {{Solution_Concept}}. Builders present value prop, evidence, and key assumptions. Red Team has 15 minutes to craft three high-impact critiques (feasibility, viability, desirability). Builders then propose counter-actions or pivots. Rotate roles and repeat. Focus on the {{Time_Frame}} horizon and consider {{Key_Stakeholders}}.",
                    "variables": [
                        "Solution_Concept",
                        "Time_Frame",
                        "Key_Stakeholders"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "five-whys-root-cause",
                    "title": "5 Whys Root-Cause Explorer",
                    "description": "Uncover root causes of an issue triggered by an event",
                    "complexity": "low",
                    "timeEstimate": "10-15 mins",
                    "roles": [
                        "Squad Lead",   
                        "QA Lead"
                    ],
                    "purpose": ['Metrics & Insights','Assumption Testing', 'Critique & Review'],
                    "prompt": "Apply the 5 Whys technique to {{Issue_Description}} (observed after {{Trigger_Event}}). List each \u2018why\u2019 and suggest preventative counter-measures.",
                    "variables": [
                        "Issue_Description",
                        "Trigger_Event"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "causal-loop-mapper",
                    "title": "Causal-Loop Mapper",
                    "description": "Draft a causal loop diagram for a problem using key variables over a time period.",
                    "complexity": "high",
                    "timeEstimate": "30-45 mins",
                    "roles": [
                        "Business Analyst",
                        "Systems Thinker"
                    ],
                    "purpose": ['Systems Thinking','Assumption Testing', 'Risk Management'],
                    "prompt": "Construct a causal loop diagram showing how {{Key_Variables}} interact within {{Problem_Statement}} across {{Time_Boundary}}. Label reinforcing vs balancing loops and flag leverage points.",
                    "variables": [
                        "Problem_Statement",
                        "Key_Variables",
                        "Time_Boundary"
                    ],
                    "rating": 0,
                    "usageCount": 0
                }
            ]
        },
        {
            "id": "delivery",
            "name": "Design & Delivery",
            "description": "Execute solutions with quality and iterative delivery",
            "color": "#63b3ed",
            "icon": '<i data-feather="package" style="color: #ff0000; stroke-width: 1.5px;"></i>',
            "prompts": [
                {
                    "id": "sprint-planning",
                    "title": "Sprint Breakdown Assistant",
                    "description": "Break epics into deliverable user stories with clear acceptance criteria",
                    "complexity": "medium",
                    "timeEstimate": "30-45 mins",
                    "roles": [
                        "Product Manager",
                        "Squad Lead",
                        "Scrum Master"
                    ],
                    "purpose": ['Customer Understanding','Assumption Testing', 'Systems Thinking'],
                    "prompt": "Break down {{Epic_Description}} into sprint-sized user stories that: deliver incremental value, can be completed in 2-week sprints, include clear acceptance criteria, and consider technical dependencies. For each story, estimate story points, define done criteria, and suggest testing approach. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Epic_Description",
                        "Time_Frame"
                    ],
                    "rating": 4.8,
                    "usageCount": 267
                },
                {
                    "id": "quality-assurance",
                    "title": "QA Strategy Designer",
                    "description": "Comprehensive testing strategy across functional and non-functional requirements",
                    "complexity": "high",
                    "timeEstimate": "35-50 mins",
                    "roles": [
                        "QA Lead",
                        "Engineering Lead"
                    ],
                    "purpose": ['Experimentation', 'Assumption Testing', 'Creative Ideation', 'Futures & Foresight', 'Opportunity Assessment'],
                    "prompt": "Design testing strategy for {{Solution_Description}} covering: functional testing scenarios, performance/load testing, security testing, integration testing, user acceptance testing, and accessibility compliance. Organise by testing phase. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Solution_Description",
                        "Time_Frame"
                    ],
                    "rating": 4.7,
                    "usageCount": 178
                },
                {
                    "id": "deployment-planning",
                    "title": "Deployment Risk Analyzer",
                    "description": "Plan deployment strategy with risk mitigation and rollback procedures",
                    "complexity": "medium",
                    "timeEstimate": "20-30 mins",
                    "roles": [
                        "Engineering Lead",
                        "DevOps Engineer"
                    ],
                    "purpose": ['Risk Management'],
                    "prompt": "Plan deployment strategy for {{Feature_Name}} considering: rollout phases, monitoring requirements, rollback procedures, communication plan, and success criteria. Include specific checkpoints and escalation procedures. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Feature_Name",
                        "Time_Frame"
                    ],
                    "rating": 4.5,
                    "usageCount": 134
                },
                {
                    "id": "design-critique-preparation",
                    "title": "Design Critique Preparation",
                    "description": "Use during the design & delivery phase to prepare for a design critique session",
                    "complexity": "medium",
                    "timeEstimate": "20-30 mins",
                    "roles": [
                        "UX Designer",
                        "Product Manager"
                    ],
                    "purpose": ['Critique & Review'],
                    "prompt": "I'm preparing for a critique of our design for {{Design_Concept}}. We need to evaluate it against our goals and user needs. Key scenarios include {{Key_User_Scenarios}}, and our design aims to achieve {{Design_Goals}}. Help me outline a structured critique plan with guiding questions:\nUsability & Accessibility: How easily can users accomplish key tasks (e.g., {{Key_User_Scenarios}})? Are there any points of confusion or potential accessibility barriers?\nVisual Design & Content: Does the visual style and content align with our brand and clearly communicate to users? Are there areas that seem cluttered, inconsistent, or unclear?\nEdge Cases & Errors: What happens in uncommon scenarios or if something goes wrong? Identify a few edge cases or error conditions in {{Design_Concept}} and questions to ensure the design handles them gracefully.\nTechnical Feasibility: Could any part of the design be difficult or costly to implement? Flag components that might have performance or complexity concerns, so we can verify them with engineering.\nConsistency & Integration: Does {{Design_Concept}} fit well with our existing product experience? Are we reusing established UI patterns and components, or introducing new ones that need validation?\nPlease format the output as a list of these sections with bullet points or questions under each. The goal is to thoroughly critique {{Design_Concept}} from multiple angles and uncover any issues or improvements before development.",
                    "variables": [
                        "Design_Concept",
                        "Key_User_Scenarios",
                        "Design_Goals"
                    ],
                    "rating": 4.7,
                    "usageCount": 0
                },
                {
                    "id": "test-plan-strategizer",
                    "title": "Test Plan Strategizer",
                    "description": "Use during the design & delivery phase, before a major release or feature rollout",
                    "complexity": "high",
                    "timeEstimate": "30-45 mins",
                    "roles": [
                        "QA Lead",
                        "Engineering Lead"
                    ],
                    "purpose": ['Experimentation', 'Alignment & Strategy'],
                    "prompt": "I'm creating a test strategy for {{Feature_Description}}. We know some high-risk areas include {{Risk_Areas}}. Help outline a thorough test plan:\nScope of Testing: Identify the main functionalities and user flows in {{Feature_Description}} that need to be tested. Emphasise any areas critical to success or prone to failure, especially those related to {{Risk_Areas}}.\nTest Types & Coverage: For each area of scope, recommend the types of tests needed (unit, integration, end-to-end, performance, security, etc.) and ensure we cover both typical scenarios and edge cases.\nPrioritisation: Based on the risks, which tests or scenarios should be highest priority? Highlight what must pass before release (focus on areas involving {{Risk_Areas}} or crucial user journeys).\nTest Environment & Data: Note any requirements for the test environment or data setup (e.g., staging configurations, test data) to simulate real-world conditions and edge cases.\nResponsibilities: If multiple people are involved, outline who will conduct which tests (developers, QA, etc.) and any review or sign-off procedures for quality.\nExit Criteria: Define clear criteria for testing completion and release readiness (e.g., all critical tests passed, no Severity-1 bugs open, performance benchmarks met).\nEnsure the test plan is organised and considers both obvious and non-obvious scenarios. Include how {{Feature_Description}} interacts with existing systems so we catch any integration or regression issues before release.",
                    "variables": [
                        "Feature_Description",
                        "Risk_Areas"
                    ],
                    "rating": 4.8,
                    "usageCount": 0
                },
                {
                    "id": "chaos-day-experiment-designer",
                    "title": "Chaos-Day Experiment Designer",
                    "description": "Plan a safe-to-fail fault-injection day to reveal resilience gaps.",
                    "complexity": "high",
                    "timeEstimate": "45-60 mins",
                    "roles": [
                        "DevOps Engineer",
                        "QA Lead",
                        "Engineering Lead"
                    ],
                    "purpose": ['Experimentation', 'Risk Management','Assumption Testing', 'Creative Ideation', 'Systems Thinking'],
                    "prompt": "Outline a one-day schedule to inject three controlled failures into {{Service_Name}} (e.g., node termination, latency spike, dependency outage). For each experiment: a) hypothesis, b) blast radius & rollback plan, c) expected observable signals, d) success criteria, e) learning capture method. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Service_Name",
                        "Time_Frame"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
                {
                    "id": "triz-innovative-solution-evaluator",
                    "title": "TRIZ Innovative Solution Evaluator",
                    "description": "Apply TRIZ principles to resolve contradictions without compromise.",
                    "complexity": "high",
                    "timeEstimate": "45-60 mins",
                    "roles": [
                        "Engineering Lead",
                        "Product Manager"
                    ],
                    "purpose": ['Creative Ideation'],
                    "prompt": "Identify the main technical contradiction in {{Technical_Problem}}. Map it to TRIZ parameters and list at least three relevant inventive principles. Generate one concept per principle and rate each for feasibility, impact, and novelty. Select the top concept to prototype. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Technical_Problem",
                        "Time_Frame"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
            ]
        },
        {
            "id": "measure",
            "name": "Measure & Learn",
            "description": "Assess performance and extract insights for continuous improvement",
            "color": "#fc8181",
            "icon": '<i data-feather="trending-up" style="color: #ff0000; stroke-width: 1.5px;"></i>',
            "prompts": [
                {
                    "id": "customer-impact",
                    "title": "Customer Impact Assessor",
                    "description": "Measure customer value delivery and satisfaction outcomes",
                    "complexity": "medium",
                    "timeEstimate": "30-40 mins",
                    "roles": [
                        "Product Manager",
                        "UX Designer"
                    ],
                    "purpose": ['Customer Understanding','Assumption Testing', 'Systems Thinking'],
                    "prompt": "Assess customer impact of {{Delivered_Feature}} by analysing: usage patterns, satisfaction scores, support ticket trends, customer feedback themes, and health outcome indicators. Identify opportunities to enhance customer value in future iterations. Focus on the {{Time_Frame}} horizon and consider {{key_stakeholders}}.",
                    "variables": [
                        "Delivered_Feature",
                        "Time_Frame"
                    ],
                    "rating": 4.7,
                    "usageCount": 142
                },
                {
                    "id": "retrospective-insight-generator",
                    "title": "Retrospective Insight Generator",
                    "description": "Use in the measure & learn phase after a sprint or project to facilitate a retrospective",
                    "complexity": "medium",
                    "timeEstimate": "20-30 mins",
                    "roles": [
                        "Scrum Master",
                        "Squad Lead"
                    ],
                    "purpose": ['Customer Understanding', 'Metrics & Insights','Assumption Testing', 'Critique & Review'],
                    "prompt": "I'm preparing a retrospective for {{Team_Project_Name}} covering {{Time_Frame}}. I want to spark deep reflection and continuous improvement. Given our focus on {{Focus_Topics}}, please suggest a set of retrospective prompts organised by theme. For example:\nAchievements: Questions about what went well and why (e.g., \"What were our major wins in {{Time_Frame}} and what practices helped achieve them?\").\nChallenges: Questions to uncover issues and root causes (e.g., \"Which goals did we miss and what were the underlying reasons?\", \"What blockers or pain points kept coming up?\").\nTeam Process: Questions about how we worked together (e.g., \"How effective was our communication and planning?\", \"Where did our process shine, and where did it slow us down?\").\nExternal Factors: Questions about outside influences (e.g., \"How did external dependencies or changes impact us?\", \"Did we encounter any surprises from the market or customers?\").\nIdeas for Improvement: Questions to brainstorm actionable changes (e.g., \"What is one thing we should start, stop, or continue doing next?\", \"What experiment can we try to address a key challenge?\").\nProvide 2-3 questions under each theme. The questions should encourage honest dialogue and analysis of patterns, not just isolated incidents. The goal is to help the team examine {{Time_Frame}} holistically and leave the retrospective with clear action items for improvement.",
                    "variables": [
                        "Team_Project_Name",
                        "Time_Frame",
                        "Focus_Topics"
                    ],
                    "rating": 4.7,
                    "usageCount": 0
                },
                {
                    "id": "metrics-insights-review",
                    "title": "Metrics and Insights Review",
                    "description": "Use in the measure & learn phase to analyze product or feature performance data after release",
                    "complexity": "medium",
                    "timeEstimate": "25-35 mins",
                    "roles": [
                        "Product Manager",
                        "Business Analyst",
                        "Squad Lead"
                    ],
                    "purpose": ['Customer Understanding', 'Metrics & Insights'],
                    "prompt": "We recently gathered performance data for {{Initiative_Name}}. Key metrics and their values are: {{Metrics_Data}} (targets or benchmarks were {{Targets}}). Help me analyse these results critically:\nPerformance vs. Targets: For each metric, state whether we met, exceeded, or fell short of the target \u2013 and by how much.\nPotential Causes: Discuss possible reasons behind each metric's outcome. Consider factors like user behaviour, product changes, marketing efforts, or external events that could explain the results. Highlight any unexpected findings.\nValidate Assumptions: Identify any assumptions or hypotheses we had that these results confirm or challenge.\nInsights: Highlight key learnings or patterns from the data. What do these metrics tell us about user needs, product performance, or market fit? Note any trends or surprises that stand out.\nRecommendations: Propose actions or decisions based on these insights. For example, changes to the product, areas to investigate further, or new experiments to run in the next cycle.\nOrganise the analysis by metric or theme for clarity. Ensure the insights tie back to our goals for {{Initiative_Name}} and include clear rationale for each recommendation, so we turn data into actionable improvements.",
                    "variables": [
                        "Initiative_Name",
                        "Metrics_Data",
                        "Targets"
                    ],
                    "rating": 4.7,
                    "usageCount": 0
                },
                {
                    "id": "lessons-learned-lifecycle-mapper",
                    "title": "Lessons-Learned Lifecycle Mapper",
                    "description": "Transform outcome data from {{Project_Name}} into actionable lessons across the delivery lifecycle.",
                    "complexity": "medium",
                    "timeEstimate": "25-30 mins",
                    "roles": ["QA Lead","Scrum Master"],
                    "purpose": ['Metrics & Insights'],
                    "prompt": "For {{Project_Name}} (completed {{Project_Stage}} with outcome {{Project_Outcomes}}), list key lessons for each lifecycle phase (Strategy \u2192 Shaping \u2192 Discovery \u2192 Design & Delivery \u2192 Measure & Learn). Highlight systemic patterns and recommend how to embed these lessons in future work.",
                    "variables": ["Project_Name","Project_Stage","Project_Outcomes"]
                },
                {
                    "id": "counterfactual-postmortem-explorer",
                    "title": "Counterfactual Post-Mortem Explorer",
                    "description": "Re-run your intiative in alternate universes to see how we might have hit a missed KPI.",
                    "complexity": "high",
                    "timeEstimate": "30-40 mins",
                    "roles": ["Squad Lead","Systems Thinker"],
                    "purpose": ['Assumption Testing'],
                    "prompt": "Given {{Initiative_Description}}, imagine two alternate histories where we achieved {{Missed_KPI}}. Describe the changed decisions, their first- and second-order effects, and what early warning signals we'd expect in each universe.",
                    "variables": ["Initiative_Description","Missed_KPI"]
                },
                {
                    "id": "north-star-metric-builder",
                    "title": "North-Star Metric Builder",
                    "description": "Define a unifying metric for your product goal that captures a target user value.",
                    "complexity": "medium",
                    "timeEstimate": "20-25 mins",
                    "roles": [
                        "Product Manager",
                        "Data Analyst"
                    ],
                    "purpose": ['Alignment & Strategy', 'Metrics & Insights'],
                    "prompt": "Craft a North Star metric for {{Product_Goal}} that reflects the core value {{User_Value_Statement}}. Provide leading and lagging indicators plus guardrails.",
                    "variables": [
                        "Product_Goal",
                        "User_Value_Statement"
                    ],
                    "rating": 0,
                    "usageCount": 0
                },
            ]
        }
    ],
    "roles": [
        "Business Analyst",
        "Engineering Lead",
        "Enterprise Architect",
        "Hub Lead",
        "Marketer",
        "Product Manager",
        "QA Lead",
        "Scrum Master",
        "Squad Lead",
        "UX Designer"
    ],
    "complexityLevels": [
        "low",
        "medium",
        "high"
    ],
    "totalPrompts": 40,
    "totalUsers": 1247,
    "avgRating": 4.7
};