export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Fullstack" },
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend / Tools" }
];

export const projectsData = [
  {
    id: "mems-education-management",
    number: "01",
    title: "MEMS – Education Management System",
    category: "fullstack",
    categoryLabel: "Fullstack Project",
    tagline: "Hệ thống quản lý giáo dục toàn diện tích hợp phân quyền đa cấp, theo dõi tiến độ đào tạo và quản lý học viên.",
    description: "Nền tảng quản lý trường học & trung tâm đào tạo giúp số hóa quy trình quản lý điểm số, phân công giảng viên, điểm danh học viên và báo cáo kết quả học tập.",
    image: "/images/projects/mems.svg",
    technologies: ["React", "Spring Boot", "Spring Security", "MySQL", "Tailwind CSS", "REST API", "JWT"],
    githubUrl: "https://github.com/sangho-dev/mems-education-management",
    liveDemoUrl: "https://mems-demo.vercel.app",
    featured: true,
    details: {
      overview: "MEMS (Modern Education Management System) được phát triển nhằm giải quyết bài toán quản trị thông tin học viên, lớp học và tiến độ đào tạo. Dự án kết hợp giao diện người dùng trực quan trên nền React với backend bảo mật, hiệu năng cao bằng Java Spring Boot.",
      problemAndSolution: {
        problem: "Quy trình quản lý học viên thủ công bằng bảng tính gây phân mảnh dữ liệu, khó kiểm soát quyền truy cập giữa ban quản lý, giảng viên và sinh viên, đồng thời tốn nhiều thời gian tổng hợp báo cáo.",
        solution: "Xây dựng hệ thống tập trung với cơ chế Role-Based Access Control (RBAC), API chuẩn RESTful cho phép đồng bộ dữ liệu thời gian thực, bảng điều khiển thống kê trực quan và xuất báo cáo tự động."
      },
      mainFeatures: [
        "Xác thực và phân quyền đa người dùng (Admin, Trainer, Student) bằng JWT Stateless.",
        "Quản lý danh sách lớp học, phân công giảng viên và tự động tính toán lịch trình học tập.",
        "Module điểm danh và theo dõi tỷ lệ chuyên cần theo thời gian thực.",
        "Hệ thống quản lý bảng điểm, đánh giá năng lực học viên với biểu đồ trực quan.",
        "Bộ lọc tìm kiếm nâng cao kết hợp phân trang (pagination) tối ưu hóa tốc độ tải dữ liệu."
      ],
      architecture: "Kiến trúc Layered Architecture (Controller - Service - Repository Pattern) trên Spring Boot kết hợp với Single Page Application (SPA) trên React. Cơ sở dữ liệu MySQL chuẩn hóa 3NF giúp đảm bảo tính toàn vẹn dữ liệu.",
      techStackDetails: {
        frontend: "React 19, Tailwind CSS, Lucide Icons, Axios, React Router.",
        backend: "Java 17, Spring Boot 3, Spring Data JPA, Hibernate, Spring Security 6.",
        database: "MySQL 8.0, HikariCP Connection Pool.",
        devops: "Docker, Maven, Git, Postman API Testing."
      },
      responsibilities: [
        "Phân tích yêu cầu nghiệp vụ và thiết kế cơ sở dữ liệu quan hệ (ERD).",
        "Thiết kế và triển khai toàn bộ hệ thống RESTful APIs cho module User, Course, Attendance và Grade.",
        "Cấu hình Spring Security với JWT Filter và xử lý phân quyền theo Role/Authority.",
        "Phát triển giao diện Dashboard Admin và Giảng viên bằng React & Tailwind CSS.",
        "Tối ưu các truy vấn JPA/Hibernate tránh lỗi N+1 Query và kiểm thử API bằng Postman."
      ],
      challengesAndSolutions: [
        {
          challenge: "Xử lý phân quyền chi tiết (RBAC) để sinh viên chỉ xem được thông tin cá nhân trong khi giảng viên có quyền chấm điểm lớp phụ trách.",
          solution: "Tích hợp Spring Security PreAuthorize (`@PreAuthorize`) kết hợp Custom UserDetailsService và trích xuất claims từ JWT để kiểm tra quyền hạn ngay tại tầng Service."
        },
        {
          challenge: "Hiệu năng truy vấn chậm khi lấy danh sách học viên kèm theo lịch sử điểm danh và kết quả thi.",
          solution: "Áp dụng JPQL JOIN FETCH, tối ưu hóa Index trên các khóa ngoại (Foreign Keys) và cấu hình phân trang Pageable ở cấp độ cơ sở dữ liệu."
        }
      ]
    }
  },
  {
    id: "ecommerce-microservices-backend",
    number: "02",
    title: "E-commerce Microservices Backend",
    category: "backend",
    categoryLabel: "Backend Project",
    tagline: "Hệ thống backend thương mại điện tử kiến trúc Microservices với Service Discovery, API Gateway và xử lý đơn hàng phân tán.",
    description: "Hệ thống backend mô phỏng sàn thương mại điện tử hiện đại, tách biệt độc lập các nghiệp vụ Sản phẩm, Giỏ hàng, Đơn hàng và Xác thực người dùng.",
    image: "/images/projects/microservices.svg",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Eureka", "API Gateway", "JWT", "MySQL", "Docker"],
    githubUrl: "https://github.com/sangho-dev/ecommerce-microservices-backend",
    liveDemoUrl: "",
    featured: true,
    details: {
      overview: "Dự án nghiên cứu và triển khai mô hình kiến trúc phân tán Microservices cho nền tảng thương mại điện tử, tập trung vào khả năng mở rộng độc lập, định tuyến tập trung và bảo mật luồng dữ liệu giữa các dịch vụ.",
      problemAndSolution: {
        problem: "Mô hình Monolith truyền thống gặp khó khăn khi lưu lượng truy cập dịch vụ Sản phẩm và Đơn hàng tăng đột biến, rủi ro sập toàn bộ hệ thống khi một module gặp sự cố.",
        solution: "Tách ứng dụng thành các service độc lập (Auth Service, Product Service, Order Service, Inventory Service) giao tiếp qua HTTP/REST và quản lý tập trung thông qua Spring Cloud Gateway & Eureka Server."
      },
      mainFeatures: [
        "Service Discovery & Registration với Netflix Eureka cho phép tự động phát hiện dịch vụ.",
        "Centralized API Gateway xử lý routing, rate limiting và chứng thực token trước khi chuyển tiếp yêu cầu.",
        "Auth Service phát hành và xác thực JWT token mã hóa an toàn.",
        "Product & Catalog Service quản lý danh mục, biến thể sản phẩm và tìm kiếm.",
        "Order Service xử lý quy trình tạo đơn hàng và kiểm tra tồn kho phân tán.",
        "Đóng gói từng dịch vụ thành Docker Image sẵn sàng deploy độc lập."
      ],
      architecture: "Microservices Architecture: Khách hàng truy cập qua Spring Cloud API Gateway (Single Entry Point), Eureka Service Discovery định danh các instances, các microservices sở hữu database riêng biệt (Database-per-service pattern).",
      techStackDetails: {
        backend: "Java 17, Spring Boot 3, Spring Cloud 2023, Spring Cloud Gateway, Eureka Server.",
        security: "JWT, Spring Security OAuth2 Resource Server.",
        database: "MySQL cho từng service riêng biệt, Liquibase migration.",
        tools: "Docker, Docker Compose, Postman, Maven Multi-module."
      },
      responsibilities: [
        "Thiết kế cấu trúc dự án Maven Multi-module và thiết lập Eureka Server + API Gateway.",
        "Xây dựng Auth Service xử lý đăng ký, đăng nhập và sinh JWT Token.",
        "Phát triển Product Service và Order Service theo chuẩn REST API.",
        "Cấu hình Gateway Filter để xác thực JWT tập trung trước khi route request tới downstream services.",
        "Viết Dockerfile và cấu hình file `docker-compose.yml` để khởi chạy đồng thời toàn bộ cụm dịch vụ."
      ],
      challengesAndSolutions: [
        {
          challenge: "Chia sẻ phiên xác thực giữa nhiều microservices mà không gây thắt cổ chai (bottleneck) ở Auth Service.",
          solution: "Áp dụng cơ chế Stateless JWT. API Gateway chịu trách nhiệm giải mã và xác thực chữ ký token, sau đó đính kèm Header `X-User-Id` và `X-User-Roles` vào request chuyển tiếp tới các service nội bộ."
        },
        {
          challenge: "Quản lý và đồng bộ cấu hình giữa nhiều service khi chạy môi trường local development.",
          solution: "Tổ chức cấu trúc Maven Multi-module kế thừa chung `pom.xml` cha và sử dụng Docker Compose với network nội bộ để liên kết các container liền mạch."
        }
      ]
    }
  },
  {
    id: "study-tools-website",
    number: "03",
    title: "Study Tools Website",
    category: "frontend",
    categoryLabel: "Fullstack / Frontend Project",
    tagline: "Bộ công cụ học tập thông minh hỗ trợ sinh viên quản lý mục tiêu học tập, Pomodoro timer và ghi chú tương tác.",
    description: "Ứng dụng web trực quan giúp sinh viên tối ưu hóa thời gian tự học, theo dõi tiến độ hoàn thành bài tập và ghi chép nhanh với trải nghiệm mượt mà.",
    image: "/images/projects/studytools.svg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage", "Web Audio API", "Lucide React"],
    githubUrl: "https://github.com/sangho-dev/study-tools-platform",
    liveDemoUrl: "https://studytools-sangho.vercel.app",
    featured: true,
    details: {
      overview: "Study Tools Website được thiết kế từ nhu cầu thực tế của bản thân và bạn học tại PNV nhằm tạo ra một không gian tập trung cho việc học lập trình và ghi nhớ kiến thức.",
      problemAndSolution: {
        problem: "Sinh viên dễ bị phân tâm bởi nhiều ứng dụng rời rạc khi vừa phải bấm giờ Pomodoro, vừa mở tài liệu ghi chú và danh sách to-do list.",
        solution: "Tích hợp tất cả các tiện ích cần thiết (Pomodoro Timer tùy chỉnh, Kanban Board to-do, Markdown Quick Notes, Flashcard ôn tập) vào một giao diện Dark Mode tối giản, trực quan và không có quảng cáo."
      },
      mainFeatures: [
        "Đồng hồ Pomodoro tùy chỉnh phiên làm việc/nghỉ ngơi kèm thông báo âm thanh (Web Audio API).",
        "Bảng quản lý công việc (Task Tracker) theo phong cách Kanban với tính năng kéo thả.",
        "Trình soạn thảo ghi chú nhanh hỗ trợ định dạng Markdown và syntax highlighting.",
        "Lưu trữ dữ liệu an toàn trên Client qua LocalStorage/IndexedDB kết hợp khả năng export/import JSON.",
        "Giao diện Dark Mode chuẩn công thái học giúp giảm mỏi mắt khi học tập ban đêm."
      ],
      architecture: "Single Page Application (SPA) xây dựng trên React với tư duy Component-Driven Development. Quản lý trạng thái bằng Custom Hooks và Context API, tối ưu hóa render với useMemo và useCallback.",
      techStackDetails: {
        frontend: "React 19, JavaScript (ES6+), Tailwind CSS, Framer Motion, Lucide React.",
        storage: "Browser LocalStorage API & IndexedDB.",
        deployment: "Vercel CI/CD Pipeline."
      },
      responsibilities: [
        "Phác thảo wireframe và UI/UX trên Figma theo phong cách Dark Minimalist.",
        "Xây dựng toàn bộ components từ đầu với Tailwind CSS không phụ thuộc UI framework cồng kềnh.",
        "Hiện thực hóa logic Pomodoro timer chính xác từng giây bằng Web Workers / requestAnimationFrame.",
        "Thiết kế cơ chế lưu trữ và phục hồi trạng thái người dùng không bị mất dữ liệu khi reload trang.",
        "Deploy ứng dụng lên Vercel và tối ưu chỉ số Google Lighthouse đạt 98+ điểm."
      ],
      challengesAndSolutions: [
        {
          challenge: "Timer bị chạy sai lệch thời gian khi người dùng chuyển sang tab trình duyệt khác do cơ chế tiết kiệm tài nguyên của browser.",
          solution: "Thay vì dùng `setInterval` đơn thuần, sử dụng so sánh `Date.now()` với mốc thời gian bắt đầu thực tế để đảm bảo độ chính xác tuyệt đối ngay cả khi tab bị background."
        },
        {
          challenge: "Trải nghiệm kéo thả công việc trên thiết bị di động bị giật và khó thao tác.",
          solution: "Tối ưu hóa touch events và CSS touch-action kết hợp transition mượt mà qua Tailwind CSS."
        }
      ]
    }
  }
];

