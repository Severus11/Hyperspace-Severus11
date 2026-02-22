const sections = {

  about: `
Parthsarthi Gupta

Systems Engineer — Device to Cloud Architect

I design and build production systems that start on hardware and end in distributed cloud infrastructure.

My work sits at the intersection of:
- Linux & Android system development
- Secure device provisioning
- Custom hardware-backed authentication
- AWS IoT, STS, SigV4
- S3 → Lambda → OpenSearch analytics pipelines
- Cognito-secured dashboards
- ROS2 service architectures

I enjoy picking up unsolved infrastructure problems and turning them into reliable systems other engineers can build on.
`,

  projects: `
[01] Custom AWS IoT Authentication Server
Hardware identity → STS → Secure S3 uploads
Designed for constrained Linux/Android devices.

[02] End-to-End Device Analytics Platform
Device metrics → S3 → Lambda processing → OpenSearch dashboards
User access secured via Cognito + OIDC.

[03] ROS2 Lifecycle Service Manager
Production-grade lifecycle orchestration and service control
Integrated artifact upload to AWS S3.

[04] Secure OTA & Provisioning Workflows
Custom registration flows for hardware-authenticated devices.
`,

  systems: `
Typical Architecture:

[ Linux / Android Device ]
        ↓
[ Custom Auth Server ]
        ↓
[ AWS IoT ]
        ↓
[ S3 Storage ]
        ↓
[ Lambda Processing ]
        ↓
[ OpenSearch Analytics ]

Focus areas:
- Security-first design
- Scalable ingestion
- Low-resource device constraints
- Production reliability
`,

  contact: `
Email: your.email@example.com
GitHub: https://github.com/yourusername
LinkedIn: https://linkedin.com/in/yourprofile

Open to:
- Systems engineering roles
- Device + cloud architecture
- Infrastructure-heavy backend roles
`,

//   resume: `
// Download resume:

// resume.pdf
// `
};

function loadSection(name) {
  document.getElementById("content").textContent = sections[name];
}

loadSection("about");