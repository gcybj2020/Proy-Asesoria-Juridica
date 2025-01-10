// Función para traducir entre inglés y español
let isSpanish = false; // Variable que controla el idioma actual

document.getElementById("translateButton").addEventListener("click", function() {
    // Cambiar título y contenido según el idioma
    if (isSpanish) {
        // Volver a inglés
        document.getElementById("title").innerText = "Top Lawyers";
        document.getElementById("translateButton").innerText = "Traducir a Español";
        
        translateText("name1", "Dr. Mauricio Caballero");
        translateText("specialty1", "Specialty: External Legal Advisor");
        translateText("experience1", "Experience:Experience:Experience: Zhejiang Electric Power Construction Group Holdings Co. Ltd, Comteco R.L., China Camc Engineering Corporation Limited Co., Ltd, Astrix Company S.A., Home Center Facility Company, Urrutibehety Company Ltd., Kunming Engineering Corporation Limited. China, Unm Business School Company S.R.L., Dosage Company S.R.L., American Company, Exthe Construction Company, Tec Company S.R.L., Omie Company S.R.L., Boliglobos Latino Company, Java Lighting Systems Company 15 years");

        translateText("name2", "Ernesto Rossell Arteaga");
        translateText("specialty2", "Specialty: Criminal Law");
        translateText("experience2", "Experience:As an international lawyer with a focus on international negotiation and litigation, I have built a solid track record over several years working in the legal defense of the State in public institutions dedicated to international relations and the protection of its interests. My experience in this area has provided me with a diverse set of knowledge and skills that allow me to establish effective connections between companies and the State, both national and foreign.");

        translateText("name3", "Fabian Daza Cainzo");
        translateText("specialty3", "Specialty: Corporate Strategies");
        translateText("experience3", "Experience: Founding Partner at Global Corporate Strategies La Paz, Bolivia Contact Over 20 years of legal experience with a solid reputation for ethics and professionalism. My mission is to provide innovative and strategic legal solutions  companies seeking to resolve their conflicts efficiently and fairly. Over 50 arbitration processes: As an arbitrator, secretary and advisor to litigating parties, I have deployed my knowledge in a wide range of cases, and alternative dispute resolution methods (ADR)");

        translateText("name4", "Dana Moreno Arispe");
        translateText("specialty4", "Specialty: Lawyer External");
        translateText("experience4", "Experience: Lawyer, she obtained a bachelor's degree from the Universidad Mayor de San Andrés. She is currently specializing in the area of ​​civil and commercial law. She also has refresher courses and seminars in different areas of law such as civil law, constitutional law and criminal law. In 2022 she obtained a B2 degree in English from Cambridge University. Currently, she is a practicing lawyer with experience in the family, civil and criminal areas.");

        translateText("name5", "Valeria Montaño Villavicencio");
        translateText("specialty5", "Specialty: Family Low");
        translateText("experience5", "Experience: Lawyer by profession, with specialties in family law, children and adolescents, with more than 6 years in professional practice, she worked in important law firms providing specialized legal advice and the prosecution of cases in different fields of law, took several courses in criminal and family procedural law, in addition to having the experience and professional career of having worked in the legal area within the Office of the Defender of Children and Adolescents and Slim, dependent o");

        translateText("name6", "Meryluz daniela mamani vila");
        translateText("specialty6", "Specialty: Employment Law");
        translateText("experience6", "Experience: He has a diploma in criminal law and pre-criminal law, Law 1173, from the National University of the 20th Century and a course in argumentation and legal foundation. His main areas of work are criminal law, criminal procedure, family law. He performs functions as a legal assistant in the departmental prosecutor's office of La Paz. Currently practicing law, where he has remained to this day, with a deep activity and in an important framework of institutional life");

    } else {
        // Traducir a español
        document.getElementById("title").innerText = "Lista de Abogados";
        document.getElementById("translateButton").innerText = "Translate to English";
        
        translateText("name1", "Dr. Mauricio Caballero");
        translateText("specialty1", "Especialidad: Asesor Legal Externo ");
        translateText("experience1", "Experiencia: zhejiang electric power construction group holdings co. Ltd, comteco r.l., china camc engineering corporation limited co., ltd, enpresa astrix s.a., empresa home center facil, empresa urrutibehety ltda., empresa china kunming engineering corporation limited., empresa unm escuela de negocios s.r.l. , empresa dosis s.r.l., empresa americana, empresa constructora exthe, empresa tec s.r.l., empresa omie s.r.l., empresa boliglobos latino, empresa java sistemas de iluminación15 años");

        translateText("name2", "Ernesto Rossell Arteaga");
        translateText("specialty2", "Especialidad: Derecho Penal");
        translateText("experience2", "Experiencia: Como abogado internacional con un enfoque en negociación y litigio internacional, he forjado una sólida trayectoria a lo largo de varios años trabajando en la defensa legal del Estado en instituciones públicas dedicadas a las relaciones internacionales y la protección de sus intereses. Mi experiencia en esta área me ha dotado de un conjunto diverso de conocimientos y habilidades que me permiten establecer conexiones efectivas entre empresas y el Estado, tanto nacionales como extranjeras.");

        translateText("name3", "Fabian Daza Cainzo");
        translateText("specialty3", "Especialidad: Estrategias corporativas");
        translateText("experience3", "Experiencia: Socio fundador en Estrategias Corporativas Globales La Paz, Bolivia  Información de contacto Más de 20 años de trayectoria jurídica con una sólida reputación en ética y profesionalismo. Mi misión es brindar soluciones jurídicas innovadoras y estratégicas a empresas internacionales que buscan resolver sus conflictos de manera eficiente y justa. Más de 50 procesos de arbitraje: Como árbitro, secretario y asesor de partes litigantes, he desplegado mi conocimiento en una amplia gama de casos, métodos alternativos de resolución de disputas (MASC).");


        translateText("name4", "Dana Moreno Arispe");
        translateText("specialty4", "Especialidad: abogada Externa");
        translateText("experience4", "Experiencia: abogada, obtuvo el grado de licenciatura en la universidad mayor de san andrés. Actualmente se encuentra especializándose en el área del derecho civil y comercial. Asimismo, cuenta con cursos de actualización y seminarios en diferentes áreas del derecho como ser derecho civil, derecho constitucional y derecho penal. El año 2022 obtuvo el grado b2 en el idioma inglés por la universidad cambridge. Actualmente, ejerce la profesión de abogada con experiencia en el área familiar, civil y penal.");

        translateText("name5", "Valeria Montaño Villavicencio");
        translateText("specialty5", "Especialidad: Derecho Familiar");
        translateText("experience5", "Experiencia: Abogada de profesión, con especialidades en derecho de familiar niñez y adolescencia, con más de 6 años en la práctica profesional, trabajó en importantes firmas legales brindando asesoría legal especializada y la prosecución de casos en los diferentes campos del derecho, realizó varios cursos en cuanto a derecho procesal penal y familiar, además de contar con la experiencia y la trayectoria profesional de haber trabajado en el área legal dentro la defensoría de la niñez y adolescencia y slim");

        translateText("name6", "Meryluz daniela mamani vila");
        translateText("specialty6", "Especialidad: Derecho Laboral");
        translateText("experience6", "Experiencia: cuenta con un diplomado en derecho penal y preocesal penal mencion, ley 1173, de la universidad nacional siglo xx y un curso en argumentación y fundamentación jurídica, tiene principales áreas de trabajo, derecho penal, procesal penal, derecho de familias desempeño funciones como auxiliar legal en la físcalia departamental de la paz. Actualmente en el ejercicio de la profesión de abogado en la que a permanecido hasta el día de la fecha, con una profunda actividad y en un importante marco de vida institucional.");
    }

    // Alternar el idioma
    isSpanish = !isSpanish;
});

// Función para traducir el texto de los abogados
function translateText(elementId, translatedText) {
    document.getElementById(elementId).innerText = translatedText;
}
