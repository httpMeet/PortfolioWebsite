import { Project } from "@/types/project";
import { ProjectSchema } from "@/schemas/project";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "AMRV — AI-Powered Medical Report Vault",
    slug: "amrv",
    category: "Medical Document Vault",
    featured: true,
    year: "2025",
    role: "Backend Developer",
    teamSize: "4 Team Members",
    duration: "4 months",
    status: "completed",

    tagline: "Medical report storage application with REST APIs, Azure Blob Storage, and Flask AI summarization.",
    shortDescription: "Medical document vault using Laravel 12 REST endpoints, PostgreSQL, Azure Blob Storage, and a Flask LLM service.",
    overview: "AMRV (Automated Medical & Resource Validation) is a web application for storing medical reports and generating automated summaries from uploaded diagnostic documents.",

    problem: "Processing diagnostic PDF uploads and running text extraction synchronously during web requests causes HTTP request timeouts.",
    solution: "Built a secure backend workflow where uploaded medical reports are stored in Azure Blob Storage, processed asynchronously, and summarized using a Flask AI service integrated with Laravel.",

    engineeringHighlights: [
      "Developed REST APIs for authentication, profiles, medical reports, chat, and notifications using Laravel 12.",
      "Integrated Azure Blob Storage for secure medical report uploads and retrieval.",
      "Connected Laravel with a Flask AI service to generate AI-powered summaries from uploaded medical reports.",
      "Implemented Laravel queue jobs to handle background processing without blocking user requests.",
    ],

    architectureHighlights: [
      "Separated API web controllers from background text processing using Redis queue workers.",
      "Structured PostgreSQL tables for users, medical records, and processing logs.",
      "Added file validation checking uploaded file MIME types.",
    ],
    keyFeatures: [
      "User authentication and medical document vault management.",
      "Background PDF report text extraction and summary generation.",
      "Role permissions separating patient access from clinician controls.",
      "Processing status logs.",
    ],

    challenges: [
      "Handling background job queues to prevent long-running tasks from timing out web requests.",
      "Restricting queries to ensure users can only access their own uploaded records.",
    ],
    lessonsLearned: [
      "Using background job queues keeps web responses fast during heavy processing operations.",
      "Validating file signatures prevents invalid uploads from entering storage.",
    ],
    futureImprovements: [
      "Add database backup retention policies.",
      "Support additional document file formats.",
    ],

    metrics: [
      { label: "Backend", value: "Laravel 12" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Queue", value: "Redis Jobs" },
      { label: "Storage", value: "Azure Blob" },
    ],

    techStack: [
      "Laravel 12",
      "PHP",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "Azure Blob Storage",
      "Flask",
      "Flutter",
    ],

    github: "https://github.com/Ankush-Simform/infinite_loopers_codefest2026_laravel",
    coverImage: "/images/projects/amrv.png",
  },
  {
    id: "proj-2",
    title: "Society Management System",
    slug: "society-management-system",
    category: "Residential Management",
    featured: true,
    year: "2024",
    role: "Full Stack Developer",
    teamSize: "Solo Project",
    duration: "3 months",
    status: "completed",

    tagline: "Gatekeeper access logging, visitor validation, and residential maintenance billing application.",
    shortDescription: "Residential management application built with Laravel 12, MySQL, and AJAX to handle gatekeeper visitor logs and maintenance tracking.",
    overview: "Society Management System is a web platform for recording gatekeeper visitor entries, resident visitor approvals, and society maintenance billing.",

    problem: "Recording visitor entries manually in paper registers leads to untracked visitor history and slow entry logging.",
    solution: "Built a web application in Laravel 12 featuring role-based access control, AJAX visitor entry logging, and resident pass validation.",

    engineeringHighlights: [
      "Added role-based access middleware in Laravel 12 for Super Admin, Admin, Resident, and Gatekeeper roles.",
      "Created AJAX endpoints for gatekeeper entry logging without full page reloads.",
      "Added HTML5 canvas camera capture to save visitor entry photos.",
    ],
    architectureHighlights: [
      "Organized MySQL tables for users, flats, visitor_logs, complaints, and bills.",
      "Used DataTables pagination to render visitor entry logs.",
      "Designed maintenance billing workflows and integrated them with resident management.",
    ],
    keyFeatures: [
      "Gatekeeper entry logging with visitor photo capture.",
      "Resident dashboard for visitor approvals.",
      "Complaint ticketing and status tracking.",
      "Maintenance fee calculation and billing status views.",
    ],

    challenges: [
      "Enforcing role-based route permissions across dynamic application pages.",
      "Managing visitor records efficiently while supporting search and filtering across large datasets.",
    ],
    lessonsLearned: [
      "Adding column indexes on date and foreign key fields improves search performance.",
      "Centralizing permission checks in middleware keeps route handlers clean.",
    ],
    futureImprovements: [
      "Add export options for monthly visitor entry logs.",
      "Add email alerts for pending resident complaints.",
    ],

    metrics: [
      { label: "Backend", value: "Laravel 12" },
      { label: "Database", value: "MySQL" },
      { label: "Authorization", value: "Custom RBAC" },
      { label: "Frontend", value: "AJAX & DataTables" },
    ],

    techStack: ["Laravel 12", "PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],

    github: "https://github.com/httpMeet/Society-Management-System-Gatekeeper-",
    coverImage: "/images/projects/society-management.png",
  },
  {
    id: "proj-3",
    title: "Locify - Secure Password Manager",
    slug: "locify",
    category: "Password Management",
    featured: true,
    year: "2024",
    role: "Software Developer",
    teamSize: "Solo Project",
    duration: "2 months",
    status: "completed",

    tagline: "Client-side encrypted password manager and credential vault.",
    shortDescription: "Single-page password vault built with React.js that encrypts credentials in the browser using AES-256 and PBKDF2.",
    overview: "Locify is a full-stack password manager that allows users to securely store website credentials and requires profile password verification before displaying saved passwords.",

    problem: "Managing credentials across multiple websites often leads users to reuse passwords or store them insecurely.",
    solution: "Built a React and PHP based password manager that securely stores website credentials and requires profile password verification before revealing sensitive information.",

    engineeringHighlights: [
      "Implemented user registration and authentication using PHP and MySQL.",
      "Encrypted website credentials before storing them in the database.",
      "Added profile password verification before displaying saved passwords.",
      "Developed CRUD operations for managing website credentials.",
      "Integrated the React frontend with PHP APIs using Axios.",
    ],
    architectureHighlights: [
      "React frontend communicates with a PHP backend through REST-style API endpoints.",
      "Credential information is encrypted before being stored in the MySQL database.",
      "Profile password verification adds an additional security layer before revealing sensitive information.",
    ],
    keyFeatures: [
      "User registration and login.",
      "Secure website credential storage.",
      "Profile password verification.",
      "Add, edit, delete, and search saved credentials.",
      "Responsive dashboard built with Tailwind CSS.",
    ],

    challenges: [
      "Designing an additional verification step without affecting user experience.",
      "Managing encrypted credential storage while keeping CRUD operations simple.",
    ],
    lessonsLearned: [
      "Authentication alone is not sufficient for sensitive data; additional verification improves security.",
      "Separating frontend and backend responsibilities simplifies maintenance.",
    ],
    futureImprovements: [
      "Add password strength analysis.",
      "Implement browser extension support.",
      "Allow secure password sharing between users.",
    ],

    metrics: [
      { label: "Frontend", value: "React.js" },
      { label: "Backend", value: "PHP" },
      { label: "Database", value: "MySQL" },
      { label: "Security", value: "AES Encryption" },
    ],

    techStack: [
      "React.js",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Axios",
    ],

    github: "https://github.com/httpMeet/Locify-A-Password-Manager",
    coverImage: "/images/projects/locify.png",
  },
  {
    id: "proj-4",
    title: "Online Crime Reporting System",
    slug: "online-crime-reporting-system",
    category: "Civic Reporting",
    featured: false,
    year: "2024",
    role: "Backend Developer",
    teamSize: "2 Team Members",
    duration: "2.5 months",
    status: "completed",

    tagline: "Anonymous crime reporting, incident routing, and police departmental investigation portal.",
    shortDescription: "Web application built with PHP and MySQL for citizen crime report submissions, evidence file validation, and police case tracking.",
    overview: "Online Crime Reporting System allows citizens to submit incident reports and check status updates while providing police precincts with a case dashboard.",

    problem: "Filing crime reports manually at physical police stations causes delays in incident record creation.",
    solution: "Built a web portal for citizen report submissions, evidence upload verification, and police officer case management.",

    engineeringHighlights: [
      "Created crime report forms supporting anonymous and registered submissions.",
      "Added file upload checks verifying allowed file types and file sizes.",
      "Built a 4-stage case status workflow (Submitted, Under Review, Assigned, Resolved).",
    ],
    architectureHighlights: [
      "Designed MySQL tables linking citizens, police stations, crime_reports, and evidence_files.",
      "Saved uploaded evidence files in server directories using generated unique filenames.",
    ],
    keyFeatures: [
      "Online crime report submission and status tracking.",
      "Evidence file attachment uploads (images and documents).",
      "Police precinct portal for officer assignment and case updates.",
      "Public report status check using a reference number.",
    ],

    challenges: [
      "Validating uploaded files on the server to reject invalid file extensions.",
    ],
    lessonsLearned: [
      "Verifying file content types server-side avoids reliance on client filenames.",
    ],
    futureImprovements: [
      "Add search filters for precinct case logs.",
    ],

    metrics: [
      { label: "Backend", value: "PHP" },
      { label: "Database", value: "MySQL" },
      { label: "Workflow", value: "4-Stage Status" },
    ],

    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],

    github: "https://github.com/httpMeet/Online-Crime-Reporting-System",
    coverImage: "/images/projects/crime-reporting.png",
  },
  {
    id: "proj-5",
    title: "Course Management System",
    slug: "course-management-system",
    category: "Education Management",
    featured: false,
    year: "2023",
    role: "Full Stack Developer",
    teamSize: "Solo Project",
    duration: "2 months",
    status: "completed",

    tagline: "Academic course enrollment, instructor portal, and student grading system.",
    shortDescription: "Academic web application built with PHP and MySQL to manage course listings, student enrollments, and instructor grades.",
    overview: "Course Management System is a web application for managing courses, student enrollments, and academic grades.",

    problem: "Tracking courses, student enrollments, and grades in spreadsheets leads to duplicated and inconsistent records.",
    solution: "Developed a web application with distinct access roles for Admins, Instructors, and Students to manage academic records.",

    engineeringHighlights: [
      "Created page navigation for Admin, Instructor, and Student access levels.",
      "Developed student enrollment workflows with separate access for administrators, instructors, and students.",
      "Used AJAX requests for dynamic dropdown updates during course selection.",
    ],
    architectureHighlights: [
      "Structured MySQL schema connecting courses, departments, students, instructors, and enrollments.",
      "Used prepared SQL statements to query and update database records securely.",
    ],
    keyFeatures: [
      "Course creation, department assignment, and prerequisite tracking.",
      "Student course enrollment and drop options.",
      "Instructor grading form.",
      "Student grade transcript view.",
    ],

    challenges: [
      "Managing relationships between students, instructors, courses, and enrollments while maintaining data consistency.",
    ],
    lessonsLearned: [
      "Designing normalized database tables simplifies academic record management.",
    ],
    futureImprovements: [
      "Add PDF transcript export options.",
    ],

    metrics: [
      { label: "Backend", value: "PHP" },
      { label: "Database", value: "MySQL" },
      { label: "Access", value: "Admin / Instructor / Student" },
    ],

    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],

    github: "https://github.com/meetgandhi-simform/student-course-enrollment-system",
    coverImage: "/images/projects/course-management.png",
  },
  {
    id: "proj-6",
    title: "Ahmedabad Live",
    slug: "ahmedabad-live",
    category: "City Information Portal",
    featured: false,
    year: "2023",
    role: "Full Stack Developer",
    teamSize: "Solo Project",
    duration: "1.5 months",
    status: "completed",

    tagline: "Local news updates, community event listings, and directory web portal.",
    shortDescription: "PHP and MySQL web portal aggregating local news articles, city event listings, and business directory entries.",
    overview: "Ahmedabad Live is a city information website presenting local news updates, event listings, and directory entries.",

    problem: "Local news updates and city event notices are distributed across multiple unorganized platforms.",
    solution: "Created a web application with category filtering for local news, events, and business directory listings.",

    engineeringHighlights: [
      "Built news article creation and category filtering views in PHP.",
      "Added keyword search filtering for news articles and directory entries.",
      "Created an admin page for publishing articles and managing event listings.",
    ],
    architectureHighlights: [
      "Designed MySQL tables for articles, categories, events, and directory listings.",
      "Implemented category-based filtering and keyword search for content discovery.",
    ],
    keyFeatures: [
      "Categorized news article feed.",
      "City event calendar listings.",
      "Business directory search index.",
      "Contact inquiry form.",
    ],

    challenges: [
      "Writing clear SQL queries for filtering articles by category and search keyword.",
    ],
    lessonsLearned: [
      "Organizing content into categories improves navigation and search experience.",
    ],
    futureImprovements: [
      "Add page pagination for news article listings.",
    ],

    metrics: [
      { label: "Backend", value: "PHP" },
      { label: "Database", value: "MySQL" },
    ],

    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],

    github: "https://github.com/httpMeet/Ahmedabad-Live",
    coverImage: "/images/projects/ahmedabad-live.png",
  },
  {
    id: "proj-7",
    title: "Recyclo Cart",
    slug: "recyclo-cart",
    category: "E-Commerce Platform",
    featured: false,
    year: "2023",
    role: "Full Stack Developer",
    teamSize: "Solo Project",
    duration: "1.5 months",
    status: "completed",

    tagline: "Recyclable product marketplace and eco-friendly shopping cart application.",
    shortDescription: "E-commerce web application built with PHP and MySQL featuring product catalog views, session cart management, and order entry.",
    overview: "Recyclo Cart is a web store application for browsing and ordering eco-friendly products.",

    problem: "Handling product catalog filtering and cart persistence without external framework libraries.",
    solution: "Built a PHP e-commerce application handling product catalog displays, PHP session cart storage, and order database commits.",

    engineeringHighlights: [
      "Implemented PHP session-based shopping cart management (add, update, remove items).",
      "Added product filtering by category and price range.",
      "Created checkout processing inserting orders into MySQL.",
    ],
    architectureHighlights: [
      "Structured MySQL schema for products, categories, orders, and order_items.",
      "Designed relational database tables for products, categories, orders, and order items.",
    ],
    keyFeatures: [
      "Product catalog with category filter.",
      "PHP session-backed shopping cart.",
      "Checkout total calculation.",
      "Admin product management interface.",
    ],

    challenges: [
      "Managing shopping cart session data correctly across user page updates.",
    ],
    lessonsLearned: [
      "Storing cart items as clean session arrays simplifies cart updates.",
    ],
    futureImprovements: [
      "Add order status update tracking for customers.",
    ],

    metrics: [
      { label: "Backend", value: "PHP" },
      { label: "Database", value: "MySQL" },
      { label: "Cart Engine", value: "PHP Native Sessions" },
    ],

    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],

    github: "https://github.com/httpMeet/Recyclo-Cart",
    coverImage: "/images/projects/recyclo-cart.png",
  },
];

export function getAllProjects(): Project[] {
  return projects.map((p) => ProjectSchema.parse(p));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).map((p) => ProjectSchema.parse(p));
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  return project ? ProjectSchema.parse(project) : undefined;
}
