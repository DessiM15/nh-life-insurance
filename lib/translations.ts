export type Language = "en" | "es";

const translations = {
  en: {
    // Navbar
    "nav.coverage": "Coverage",
    "nav.howItWorks": "How It Works",
    "nav.reviews": "Reviews",
    "nav.cta": "Get a Free Quote",

    // Hero
    "hero.headline": "Your Family Deserves Protection. Let\u2019s Find the Right Plan.",
    "hero.subheadline":
      "New Horizons Benefits Group helps individuals, families, and business owners find affordable life insurance \u2014 with options that fit every budget and stage of life.",
    "hero.cta": "Get My Free Quote \u2192",
    "hero.trust1": "Multi-Carrier Access",
    "hero.trust2": "No Medical Exam Options",
    "hero.trust3": "Free Consultation",

    // Living Benefits
    "living.label": "LIVING BENEFITS",
    "living.headline": "Protection That Works While You\u2019re Still Here",
    "living.subheadline":
      "Don\u2019t raid your retirement. Don\u2019t sell your home. Modern life insurance gives you access to funds when you need them most \u2014 while you\u2019re still alive.",
    "living.cancer": "Cancer",
    "living.heartAttack": "Heart Attack",
    "living.stroke": "Stroke",
    "living.home": "Home",
    "living.car": "Car",
    "living.retirement": "Retirement",
    "living.family": "Family",
    "living.savings": "Savings",
    "living.cta": "See What You Qualify For \u2192",

    // Stats Bar
    "stats.value1": "47%",
    "stats.label1": "Of Americans Have No Life Insurance",
    "stats.value2": "$0",
    "stats.label2": "Cost for Your Free Life Insurance Consultation",
    "stats.value3": "Days",
    "stats.label3": "How Fast Coverage Can Be Active \u2014 Not Weeks, Days",

    // Old vs New
    "oldvsnew.label": "THE DIFFERENCE",
    "oldvsnew.headline": "Not All Life Insurance Is Created Equal",
    "oldvsnew.subheadline":
      "See how modern life insurance with living benefits compares to the old way of doing things.",
    "oldvsnew.oldTitle": "Traditional Life Insurance",
    "oldvsnew.oldSubtitle": "The old way \u2014 limited and outdated",
    "oldvsnew.old1": "Only pays when you pass away",
    "oldvsnew.old2": "No living benefits included",
    "oldvsnew.old3": "No critical illness coverage",
    "oldvsnew.old4": "Family must wait for death benefit",
    "oldvsnew.old5": "No access to funds during your life",
    "oldvsnew.old6": "Doesn\u2019t protect retirement savings",
    "oldvsnew.newTitle": "Modern Life Insurance",
    "oldvsnew.newSubtitle": "With living benefits \u2014 protection while you\u2019re alive",
    "oldvsnew.recommended": "Recommended",
    "oldvsnew.new1": "Living benefits for cancer, heart attack & stroke",
    "oldvsnew.new2": "Access funds while you\u2019re still alive",
    "oldvsnew.new3": "Critical illness coverage built in",
    "oldvsnew.new4": "Protects your retirement & savings",
    "oldvsnew.new5": "Keeps your home & assets safe",
    "oldvsnew.new6": "Peace of mind for you AND your family",

    // Why Life Insurance
    "why.label": "Why Life Insurance Matters",
    "why.headline": "Your Family\u2019s Financial Future Shouldn\u2019t Be Left to Chance.",
    "why.body1":
      "If something happened to you tomorrow, could your family keep up with the mortgage, bills, and daily expenses? Life insurance ensures your loved ones are protected \u2014 no matter what.",
    "why.body2":
      "Yet nearly half of Americans have no life insurance at all, and many who do are severely underinsured. Whether you\u2019re relying on employer coverage or have no policy in place, the gap between what you have and what your family needs could be devastating.",
    "why.cta": "See how affordable real coverage can be",
    "why.card1Title": "Most People Are Underinsured",
    "why.card1Text":
      "Nearly half of Americans don\u2019t have enough life insurance to cover their family\u2019s needs if something unexpected happens.",
    "why.card2Title": "Employer Coverage Falls Short",
    "why.card2Text":
      "Group life insurance through your job typically covers just 1\u20132x your salary \u2014 far less than most families need.",
    "why.card3Title": "Rates Go Up Every Year",
    "why.card3Text":
      "The younger and healthier you are, the less you\u2019ll pay. Locking in coverage now can save you thousands over your lifetime.",

    // Coverage Options
    "coverage.label": "Coverage Options",
    "coverage.headline": "Life Insurance Plans Built for You",
    "coverage.subheadline":
      "We shop multiple carriers to find the best coverage at the best rate for your situation. Here are the types of plans available to you.",
    "coverage.termTitle": "Term Life Insurance",
    "coverage.termDesc":
      "Affordable coverage for a set period \u2014 10, 20, or 30 years. Lock in low rates while you\u2019re young. Ideal for covering mortgages, kids\u2019 education, and income replacement.",
    "coverage.wholeTitle": "Whole Life Insurance",
    "coverage.wholeDesc":
      "Permanent coverage that never expires. Builds cash value over time that you can borrow against. Guaranteed death benefit for your beneficiaries.",
    "coverage.universalTitle": "Universal Life Insurance",
    "coverage.universalDesc":
      "Flexible permanent coverage with adjustable premiums and death benefits. Accumulates cash value with potential for higher returns.",
    "coverage.finalTitle": "Final Expense Insurance",
    "coverage.finalDesc":
      "Smaller, affordable policies designed to cover funeral costs, medical bills, and end-of-life expenses. No medical exam required in most cases.",
    "coverage.groupTitle": "Group Life Supplement",
    "coverage.groupDesc":
      "Your employer\u2019s group policy may not be enough. A supplemental policy fills the gap and stays with you if you change jobs.",
    "coverage.guaranteedTitle": "Guaranteed Issue Life",
    "coverage.guaranteedDesc":
      "No health questions, no medical exams. Guaranteed acceptance regardless of pre-existing conditions. Coverage starts immediately.",

    // Who Is It For
    "who.label": "Who This Is For",
    "who.headline": "Life Insurance for Every Stage",
    "who.subheadline":
      "Whether you\u2019re just starting out or planning your legacy \u2014 there\u2019s a right plan for where you are right now.",
    "who.card1Title": "Young Professionals & New Families",
    "who.card1Body":
      "Just starting out? Lock in low rates now while you\u2019re young and healthy. Protect your growing family from day one.",
    "who.card1Hook": "What would happen to your family if your income disappeared tomorrow?",
    "who.card2Title": "Mid-Career & Homeowners",
    "who.card2Body":
      "Mortgage, kids\u2019 education, retirement savings \u2014 there\u2019s a lot riding on your income. Make sure your family is covered if something happens.",
    "who.card2Hook": "Is your coverage keeping up with your life?",
    "who.card3Title": "Approaching or In Retirement",
    "who.card3Body":
      "Need final expense coverage, estate planning support, or a policy to leave a legacy? We\u2019ll find the right fit for your situation.",
    "who.card3Hook": "Does your coverage survive your career?",

    // How It Works
    "how.label": "How It Works",
    "how.headline": "Three Simple Steps to Peace of Mind",
    "how.subheadline":
      "We make getting life insurance as easy as possible \u2014 so you can focus on what matters most.",
    "how.step1Title": "Free Consultation",
    "how.step1Desc":
      "Tell us about your family, your goals, and your budget. We\u2019ll ask the right questions so we can find the right fit \u2014 no pressure, no obligation.",
    "how.step2Title": "Compare Plans",
    "how.step2Desc":
      "We shop multiple A-rated carriers to find you the best coverage at the best rate. You\u2019ll see clear options side by side \u2014 no confusing jargon.",
    "how.step3Title": "Get Covered",
    "how.step3Desc":
      "Easy application, fast approval. Many plans require no medical exam. Coverage can be active in days \u2014 not weeks. Your family is protected.",

    // Testimonials
    "testimonials.label": "What Our Clients Say",
    "testimonials.headline": "Real Clients. Real Peace of Mind.",
    "testimonials.quote1":
      "I\u2019d been putting off life insurance for years. Rigo made it so easy \u2014 I got approved with no medical exam and my family is finally protected.",
    "testimonials.name1": "Maria G.",
    "testimonials.role1": "Mother of Three, Houston TX",
    "testimonials.quote2":
      "I needed a policy that covered my family and my business. Rigo found me a plan that did both at a price I could actually afford.",
    "testimonials.name2": "James T.",
    "testimonials.role2": "Small Business Owner, San Antonio TX",
    "testimonials.quote3":
      "I wanted to make sure my grandchildren were taken care of. Rigo set me up with a whole life policy that gives me complete peace of mind.",
    "testimonials.name3": "Linda R.",
    "testimonials.role3": "Retired Professional, Fort Worth TX",

    // Lead Form
    "form.label": "Free Coverage Review",
    "form.headline": "Let\u2019s Find the Right Plan for You",
    "form.subheadline":
      "Answer a few questions and we\u2019ll match you with the best coverage options for your budget.",
    "form.firstName": "First Name",
    "form.firstNamePlaceholder": "First name",
    "form.lastName": "Last Name",
    "form.lastNamePlaceholder": "Last name",
    "form.email": "Email",
    "form.emailPlaceholder": "jane.doe@email.com",
    "form.phone": "Phone",
    "form.phonePlaceholder": "(555) 123-4567",
    "form.coverageSituation": "Coverage Situation",
    "form.selectSituation": "Select your situation...",
    "form.noCoverage": "I don\u2019t have life insurance yet",
    "form.employerOnly": "I have employer/group life insurance only",
    "form.review": "I have an existing policy I want to review",
    "form.business": "I need coverage for my business (key person/buy-sell)",
    "form.finalExpense": "I\u2019m looking for final expense coverage",
    "form.exploring": "Just exploring my options",
    "form.zipCode": "Zip Code",
    "form.zipPlaceholder": "75078",
    "form.submit": "Get My Free Coverage Review \u2192",
    "form.submitting": "Checking your options...",
    "form.finePrint": "Free review. No obligation. No spam.",
    "form.successTitle": "You\u2019re All Set!",
    "form.successBody":
      "We\u2019ll reach out within 1 business day with your personalized life insurance options.",

    // Footer
    "footer.agentName": "Rigo Cuellar | Independent Agent",
    "footer.connect": "Connect",
    "footer.licensed": "Licensed in TX \u00B7 LA \u00B7 OK \u00B7 CA",
    "footer.multiCarrier": "Multi-Carrier Independent Agency",
    "footer.servingTexans": "Serving Texans Since Day One",
    "footer.copyright": "\u00A9 2026 New Horizons Benefits Group. All rights reserved.",
    "footer.disclaimer":
      "New Horizons Benefits Group is an independent insurance agency. Coverage and pricing vary by carrier. All quotes are estimates pending underwriting approval.",
  },

  es: {
    // Navbar
    "nav.coverage": "Cobertura",
    "nav.howItWorks": "C\u00F3mo Funciona",
    "nav.reviews": "Rese\u00F1as",
    "nav.cta": "Cotizaci\u00F3n Gratis",

    // Hero
    "hero.headline": "Tu Familia Merece Protecci\u00F3n. Encontremos el Plan Ideal.",
    "hero.subheadline":
      "New Horizons Benefits Group ayuda a individuos, familias y due\u00F1os de negocios a encontrar un seguro de vida accesible \u2014 con opciones para cada presupuesto y etapa de la vida.",
    "hero.cta": "Obt\u00E9n Tu Cotizaci\u00F3n Gratis \u2192",
    "hero.trust1": "Acceso a M\u00FAltiples Aseguradoras",
    "hero.trust2": "Opciones Sin Examen M\u00E9dico",
    "hero.trust3": "Consulta Gratuita",

    // Living Benefits
    "living.label": "BENEFICIOS EN VIDA",
    "living.headline": "Protecci\u00F3n Que Funciona Mientras Est\u00E1s Vivo",
    "living.subheadline":
      "No toques tu jubilaci\u00F3n. No vendas tu casa. El seguro de vida moderno te da acceso a fondos cuando m\u00E1s los necesitas \u2014 mientras a\u00FAn est\u00E1s con vida.",
    "living.cancer": "C\u00E1ncer",
    "living.heartAttack": "Infarto",
    "living.stroke": "Derrame",
    "living.home": "Hogar",
    "living.car": "Auto",
    "living.retirement": "Jubilaci\u00F3n",
    "living.family": "Familia",
    "living.savings": "Ahorros",
    "living.cta": "Descubre Para Qu\u00E9 Calificas \u2192",

    // Stats Bar
    "stats.value1": "47%",
    "stats.label1": "De Estadounidenses No Tienen Seguro de Vida",
    "stats.value2": "$0",
    "stats.label2": "Costo de Tu Consulta Gratuita de Seguro de Vida",
    "stats.value3": "D\u00EDas",
    "stats.label3": "Rapidez de Activaci\u00F3n \u2014 No Semanas, D\u00EDas",

    // Old vs New
    "oldvsnew.label": "LA DIFERENCIA",
    "oldvsnew.headline": "No Todos los Seguros de Vida Son Iguales",
    "oldvsnew.subheadline":
      "Descubre c\u00F3mo el seguro de vida moderno con beneficios en vida se compara con la forma antigua.",
    "oldvsnew.oldTitle": "Seguro de Vida Tradicional",
    "oldvsnew.oldSubtitle": "La forma antigua \u2014 limitada y obsoleta",
    "oldvsnew.old1": "Solo paga cuando falleces",
    "oldvsnew.old2": "Sin beneficios en vida",
    "oldvsnew.old3": "Sin cobertura de enfermedades cr\u00EDticas",
    "oldvsnew.old4": "Tu familia debe esperar el beneficio por fallecimiento",
    "oldvsnew.old5": "Sin acceso a fondos durante tu vida",
    "oldvsnew.old6": "No protege tus ahorros de jubilaci\u00F3n",
    "oldvsnew.newTitle": "Seguro de Vida Moderno",
    "oldvsnew.newSubtitle": "Con beneficios en vida \u2014 protecci\u00F3n mientras vives",
    "oldvsnew.recommended": "Recomendado",
    "oldvsnew.new1": "Beneficios en vida para c\u00E1ncer, infarto y derrame",
    "oldvsnew.new2": "Accede a fondos mientras a\u00FAn est\u00E1s vivo",
    "oldvsnew.new3": "Cobertura de enfermedades cr\u00EDticas incluida",
    "oldvsnew.new4": "Protege tu jubilaci\u00F3n y ahorros",
    "oldvsnew.new5": "Mantiene tu hogar y bienes seguros",
    "oldvsnew.new6": "Tranquilidad para ti Y tu familia",

    // Why Life Insurance
    "why.label": "Por Qu\u00E9 Importa el Seguro de Vida",
    "why.headline": "El Futuro Financiero de Tu Familia No Deber\u00EDa Dejarse al Azar.",
    "why.body1":
      "Si algo te pasara ma\u00F1ana, \u00BFpodr\u00EDa tu familia seguir pagando la hipoteca, las cuentas y los gastos diarios? El seguro de vida asegura que tus seres queridos est\u00E9n protegidos \u2014 pase lo que pase.",
    "why.body2":
      "Sin embargo, casi la mitad de los estadounidenses no tienen seguro de vida, y muchos que s\u00ED tienen est\u00E1n gravemente sub-asegurados. Ya sea que dependas de la cobertura de tu empleador o no tengas p\u00F3liza, la brecha entre lo que tienes y lo que tu familia necesita puede ser devastadora.",
    "why.cta": "Descubre lo accesible que puede ser una cobertura real",
    "why.card1Title": "La Mayor\u00EDa Est\u00E1 Sub-Asegurada",
    "why.card1Text":
      "Casi la mitad de los estadounidenses no tienen suficiente seguro de vida para cubrir las necesidades de su familia si algo inesperado ocurre.",
    "why.card2Title": "La Cobertura del Empleador No Es Suficiente",
    "why.card2Text":
      "El seguro de vida grupal de tu trabajo generalmente cubre solo 1\u20132 veces tu salario \u2014 mucho menos de lo que la mayor\u00EDa de las familias necesitan.",
    "why.card3Title": "Las Tarifas Suben Cada A\u00F1o",
    "why.card3Text":
      "Cuanto m\u00E1s joven y saludable seas, menos pagar\u00E1s. Asegurar tu cobertura ahora puede ahorrarte miles durante tu vida.",

    // Coverage Options
    "coverage.label": "Opciones de Cobertura",
    "coverage.headline": "Planes de Seguro de Vida Dise\u00F1ados Para Ti",
    "coverage.subheadline":
      "Comparamos m\u00FAltiples aseguradoras para encontrar la mejor cobertura al mejor precio para tu situaci\u00F3n. Estos son los tipos de planes disponibles.",
    "coverage.termTitle": "Seguro de Vida a T\u00E9rmino",
    "coverage.termDesc":
      "Cobertura accesible por un per\u00EDodo fijo \u2014 10, 20 o 30 a\u00F1os. Asegura tarifas bajas mientras eres joven. Ideal para cubrir hipotecas, educaci\u00F3n de hijos y reemplazo de ingresos.",
    "coverage.wholeTitle": "Seguro de Vida Entera",
    "coverage.wholeDesc":
      "Cobertura permanente que nunca expira. Acumula valor en efectivo con el tiempo. Beneficio por fallecimiento garantizado para tus beneficiarios.",
    "coverage.universalTitle": "Seguro de Vida Universal",
    "coverage.universalDesc":
      "Cobertura permanente flexible con primas y beneficios ajustables. Acumula valor en efectivo con potencial de mayores rendimientos.",
    "coverage.finalTitle": "Seguro de Gastos Finales",
    "coverage.finalDesc":
      "P\u00F3lizas m\u00E1s peque\u00F1as y accesibles dise\u00F1adas para cubrir costos funerarios, facturas m\u00E9dicas y gastos de fin de vida. Sin examen m\u00E9dico en la mayor\u00EDa de los casos.",
    "coverage.groupTitle": "Suplemento de Seguro Grupal",
    "coverage.groupDesc":
      "La p\u00F3liza grupal de tu empleador puede no ser suficiente. Una p\u00F3liza suplementaria llena el vac\u00EDo y se queda contigo si cambias de trabajo.",
    "coverage.guaranteedTitle": "Seguro de Emisi\u00F3n Garantizada",
    "coverage.guaranteedDesc":
      "Sin preguntas de salud, sin ex\u00E1menes m\u00E9dicos. Aceptaci\u00F3n garantizada sin importar condiciones preexistentes. La cobertura comienza de inmediato.",

    // Who Is It For
    "who.label": "Para Qui\u00E9n Es",
    "who.headline": "Seguro de Vida Para Cada Etapa",
    "who.subheadline":
      "Ya sea que est\u00E9s comenzando o planificando tu legado \u2014 hay un plan ideal para donde est\u00E1s ahora mismo.",
    "who.card1Title": "J\u00F3venes Profesionales y Nuevas Familias",
    "who.card1Body":
      "\u00BFReci\u00E9n empezando? Asegura tarifas bajas ahora mientras eres joven y saludable. Protege a tu familia en crecimiento desde el primer d\u00EDa.",
    "who.card1Hook": "\u00BFQu\u00E9 pasar\u00EDa con tu familia si tus ingresos desaparecieran ma\u00F1ana?",
    "who.card2Title": "Carrera Media y Propietarios",
    "who.card2Body":
      "Hipoteca, educaci\u00F3n de los hijos, ahorros para la jubilaci\u00F3n \u2014 mucho depende de tus ingresos. Aseg\u00FArate de que tu familia est\u00E9 cubierta si algo pasa.",
    "who.card2Hook": "\u00BFTu cobertura est\u00E1 al d\u00EDa con tu vida?",
    "who.card3Title": "Cerca o En Jubilaci\u00F3n",
    "who.card3Body":
      "\u00BFNecesitas cobertura de gastos finales, apoyo en planificaci\u00F3n patrimonial o una p\u00F3liza para dejar un legado? Encontraremos la opci\u00F3n ideal para tu situaci\u00F3n.",
    "who.card3Hook": "\u00BFTu cobertura sobrevive a tu carrera?",

    // How It Works
    "how.label": "C\u00F3mo Funciona",
    "how.headline": "Tres Simples Pasos Hacia la Tranquilidad",
    "how.subheadline":
      "Hacemos que obtener un seguro de vida sea lo m\u00E1s f\u00E1cil posible \u2014 para que puedas enfocarte en lo que m\u00E1s importa.",
    "how.step1Title": "Consulta Gratuita",
    "how.step1Desc":
      "Cu\u00E9ntanos sobre tu familia, tus metas y tu presupuesto. Haremos las preguntas correctas para encontrar la opci\u00F3n ideal \u2014 sin presi\u00F3n, sin obligaci\u00F3n.",
    "how.step2Title": "Compara Planes",
    "how.step2Desc":
      "Comparamos m\u00FAltiples aseguradoras de primera categor\u00EDa para encontrarte la mejor cobertura al mejor precio. Ver\u00E1s opciones claras lado a lado \u2014 sin jerga confusa.",
    "how.step3Title": "Obt\u00E9n Cobertura",
    "how.step3Desc":
      "Solicitud f\u00E1cil, aprobaci\u00F3n r\u00E1pida. Muchos planes no requieren examen m\u00E9dico. La cobertura puede estar activa en d\u00EDas \u2014 no semanas. Tu familia est\u00E1 protegida.",

    // Testimonials
    "testimonials.label": "Lo Que Dicen Nuestros Clientes",
    "testimonials.headline": "Clientes Reales. Tranquilidad Real.",
    "testimonials.quote1":
      "Hab\u00EDa pospuesto el seguro de vida por a\u00F1os. Rigo lo hizo tan f\u00E1cil \u2014 fui aprobada sin examen m\u00E9dico y mi familia finalmente est\u00E1 protegida.",
    "testimonials.name1": "Maria G.",
    "testimonials.role1": "Madre de Tres, Houston TX",
    "testimonials.quote2":
      "Necesitaba una p\u00F3liza que cubriera a mi familia y mi negocio. Rigo encontr\u00F3 un plan que hac\u00EDa ambas cosas a un precio que realmente pod\u00EDa pagar.",
    "testimonials.name2": "James T.",
    "testimonials.role2": "Due\u00F1o de Peque\u00F1o Negocio, San Antonio TX",
    "testimonials.quote3":
      "Quer\u00EDa asegurarme de que mis nietos estuvieran protegidos. Rigo me configur\u00F3 una p\u00F3liza de vida entera que me da completa tranquilidad.",
    "testimonials.name3": "Linda R.",
    "testimonials.role3": "Profesional Jubilada, Fort Worth TX",

    // Lead Form
    "form.label": "Revisi\u00F3n de Cobertura Gratis",
    "form.headline": "Encontremos el Plan Ideal Para Ti",
    "form.subheadline":
      "Responde algunas preguntas y te conectaremos con las mejores opciones de cobertura para tu presupuesto.",
    "form.firstName": "Nombre",
    "form.firstNamePlaceholder": "Nombre",
    "form.lastName": "Apellido",
    "form.lastNamePlaceholder": "Apellido",
    "form.email": "Correo Electr\u00F3nico",
    "form.emailPlaceholder": "juan@correo.com",
    "form.phone": "Tel\u00E9fono",
    "form.phonePlaceholder": "(555) 123-4567",
    "form.coverageSituation": "Situaci\u00F3n de Cobertura",
    "form.selectSituation": "Selecciona tu situaci\u00F3n...",
    "form.noCoverage": "A\u00FAn no tengo seguro de vida",
    "form.employerOnly": "Solo tengo seguro de vida de mi empleador/grupo",
    "form.review": "Tengo una p\u00F3liza existente que quiero revisar",
    "form.business": "Necesito cobertura para mi negocio (persona clave/compra-venta)",
    "form.finalExpense": "Busco cobertura de gastos finales",
    "form.exploring": "Solo estoy explorando mis opciones",
    "form.zipCode": "C\u00F3digo Postal",
    "form.zipPlaceholder": "75078",
    "form.submit": "Obt\u00E9n Tu Revisi\u00F3n Gratis \u2192",
    "form.submitting": "Revisando tus opciones...",
    "form.finePrint": "Revisi\u00F3n gratuita. Sin obligaci\u00F3n. Sin spam.",
    "form.successTitle": "\u00A1Listo!",
    "form.successBody":
      "Nos comunicaremos contigo en 1 d\u00EDa h\u00E1bil con tus opciones personalizadas de seguro de vida.",

    // Footer
    "footer.agentName": "Rigo Cuellar | Agente Independiente",
    "footer.connect": "Conectar",
    "footer.licensed": "Licenciado en TX \u00B7 LA \u00B7 OK \u00B7 CA",
    "footer.multiCarrier": "Agencia Independiente Multi-Aseguradora",
    "footer.servingTexans": "Sirviendo a Tejanos Desde el Primer D\u00EDa",
    "footer.copyright": "\u00A9 2026 New Horizons Benefits Group. Todos los derechos reservados.",
    "footer.disclaimer":
      "New Horizons Benefits Group es una agencia de seguros independiente. La cobertura y los precios var\u00EDan seg\u00FAn la aseguradora. Todas las cotizaciones son estimados sujetos a aprobaci\u00F3n de suscripci\u00F3n.",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export default translations;
