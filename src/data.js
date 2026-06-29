export const PHASES = [
  {
    id: "phase1",
    label: "Phase 1",
    title: "Bases communes",
    color: "#6366f1",
    accent: "#818cf8",
    months: "Mois 1-3",
    weeks: [
      {
        id: "w1", week: 1, month: 1, title: "Linux bases",
        tasks: [
          { label: "Navigation, fichiers, permissions (ls, cd, chmod)", url: "https://overthewire.org/wargames/bandit/" },
          { label: "Utilisateurs, groupes, processus (ps, kill, top)", url: "https://linuxjourney.com/" },
          { label: "Éditeurs vim/nano, variables d'environnement", url: "https://www.openvim.com/" },
          { label: "Scripting bash basique (boucles, conditions)", url: "https://www.shellscript.sh/" },
          { label: "Révision + OverTheWire Bandit niv. 0→5", url: "https://overthewire.org/wargames/bandit/bandit0.html" },
          { label: "[Weekend] OverTheWire Bandit niv. 5→10", url: "https://overthewire.org/wargames/bandit/bandit5.html" },
          { label: "[Weekend] Mini projet : script bash automatisation", url: "https://www.shellscript.sh/examples/" }
        ]
      },
      {
        id: "w2", week: 2, month: 1, title: "Linux avancé",
        tasks: [
          { label: "Gestion des paquets (apt), services (systemctl)", url: "https://ubuntu.com/tutorials/command-line-for-beginners" },
          { label: "SSH, clés publiques/privées", url: "https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys" },
          { label: "Cron jobs, logs système (/var/log)", url: "https://crontab.guru/" },
          { label: "Réseau de base (ifconfig, netstat, curl, wget)", url: "https://tryhackme.com/room/linuxfundamentalspart3" },
          { label: "Révision + OverTheWire Bandit niv. 10→15", url: "https://overthewire.org/wargames/bandit/bandit10.html" },
          { label: "[Weekend] TryHackMe : module Linux Fundamentals", url: "https://tryhackme.com/module/linux-fundamentals" },
          { label: "[Weekend] Projet : configurer un serveur Linux (VirtualBox)", url: "https://www.virtualbox.org/wiki/Downloads" }
        ]
      },
      {
        id: "w3", week: 3, month: 1, title: "Réseaux",
        tasks: [
          { label: "Modèle OSI, TCP/IP, adresses IP, sous-réseaux", url: "https://www.professormesser.com/network-plus/n10-008/n10-008-video/network-models-n10-008/" },
          { label: "DNS, DHCP, HTTP/HTTPS, ports importants", url: "https://howdns.works/" },
          { label: "Wireshark : capturer et analyser des paquets", url: "https://www.wireshark.org/docs/wsug_html_chunked/" },
          { label: "Firewalls, VPN, proxies — concepts de base", url: "https://tryhackme.com/room/extendingyournetwork" },
          { label: "Révision + quiz réseau en ligne", url: "https://www.examcompass.com/comptia/network-plus-certification/free-network-plus-practice-tests" },
          { label: "[Weekend] TryHackMe : module Pre-Security réseau", url: "https://tryhackme.com/path/outline/presecurity" },
          { label: "[Weekend] Pratique Wireshark : analyser trafic HTTP/DNS", url: "https://unit42.paloaltonetworks.com/wireshark-tutorial-identifying-hosts-and-users/" }
        ]
      },
      {
        id: "w4", week: 4, month: 1, title: "Git avancé",
        tasks: [
          { label: "Git : branches, merge, rebase, conflits", url: "https://learngitbranching.js.org/" },
          { label: "GitHub Actions : introduction", url: "https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions" },
          { label: "Git workflows pro (GitFlow, PR, code review)", url: "https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" },
          { label: "Révision générale Linux + Réseaux", url: "https://linuxjourney.com/" },
          { label: "Quiz + évaluation personnelle des acquis", url: "https://tryhackme.com/path/outline/presecurity" },
          { label: "[Weekend] Projet : repo GitHub avec workflow automatisé", url: "https://docs.github.com/en/actions/quickstart" },
          { label: "[Weekend] Bilan du mois 1", url: "https://roadmap.sh/devops" }
        ]
      },
      {
        id: "w5", week: 5, month: 2, title: "Python scripting",
        tasks: [
          { label: "Variables, boucles, conditions, fonctions", url: "https://automatetheboringstuff.com/2e/chapter1/" },
          { label: "Fichiers, modules, gestion des erreurs", url: "https://automatetheboringstuff.com/2e/chapter8/" },
          { label: "Requêtes HTTP avec requests, parsing JSON", url: "https://realpython.com/python-requests/" },
          { label: "Script d'automatisation (ex: renommer fichiers)", url: "https://automatetheboringstuff.com/2e/chapter9/" },
          { label: "Révision + exercices Codewars", url: "https://www.codewars.com/?language=python" },
          { label: "[Weekend] Projet : script Python qui interroge une API", url: "https://realpython.com/python-api/" },
          { label: "[Weekend] Script Python : scanner de ports basique", url: "https://realpython.com/python-sockets/" }
        ]
      },
      {
        id: "w6", week: 6, month: 2, title: "Docker bases",
        tasks: [
          { label: "Docker : concepts (image, container, registry)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
          { label: "Commandes essentielles (run, build, ps, stop)", url: "https://docs.docker.com/get-started/" },
          { label: "Dockerfile : créer sa propre image", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" },
          { label: "Docker volumes et networks", url: "https://docs.docker.com/storage/volumes/" },
          { label: "Révision + Docker cheat sheet", url: "https://dockerlabs.collabnix.com/docker/cheatsheet/" },
          { label: "[Weekend] TechWorld avec Nana : série Docker (YouTube)", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
          { label: "[Weekend] Projet : dockeriser une de tes apps web", url: "https://docs.docker.com/language/nodejs/" }
        ]
      },
      {
        id: "w7", week: 7, month: 2, title: "Docker Compose",
        tasks: [
          { label: "Docker Compose : fichier docker-compose.yml", url: "https://docs.docker.com/compose/gettingstarted/" },
          { label: "Compose multi-services (app web + BDD)", url: "https://docs.docker.com/samples/wordpress/" },
          { label: "Variables d'environnement, secrets Docker", url: "https://docs.docker.com/compose/environment-variables/" },
          { label: "Docker en production : bonnes pratiques sécurité", url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" },
          { label: "Révision", url: "https://docs.docker.com/compose/reference/" },
          { label: "[Weekend] Projet : stack complète React+Node+PostgreSQL", url: "https://docs.docker.com/samples/react/" },
          { label: "[Weekend] Publier image sur Docker Hub", url: "https://docs.docker.com/docker-hub/repos/" }
        ]
      },
      {
        id: "w8", week: 8, month: 2, title: "Consolidation",
        tasks: [
          { label: "Revoir Linux + Docker : déployer app sur VPS", url: "https://www.digitalocean.com/community/tutorials/how-to-use-docker-compose-to-run-nginx-and-let-s-encrypt" },
          { label: "Python : automatiser des tâches Docker", url: "https://docker-py.readthedocs.io/en/stable/" },
          { label: "Résoudre des exercices pratiques mixtes", url: "https://kodekloud.com/courses/docker-for-the-absolute-beginner/" },
          { label: "Préparer ton premier mini portfolio GitHub", url: "https://docs.github.com/en/pages/getting-started-with-github-pages" },
          { label: "Bilan mois 2", url: "https://roadmap.sh/devops" },
          { label: "[Weekend] Projet libre au choix", url: "https://github.com/practical-tutorials/project-based-learning" },
          { label: "[Weekend] Repos / révision douce", url: "https://linuxjourney.com/" }
        ]
      },
      {
        id: "w9", week: 9, month: 3, title: "Linux avancé + Bash pro",
        tasks: [
          { label: "Automatisation complète de tâches système", url: "https://www.shellscript.sh/tips/getopts/" },
          { label: "Monitoring avec des scripts bash", url: "https://www.baeldung.com/linux/monitor-system-resources-bash" },
          { label: "Projet : script de backup automatique", url: "https://www.tecmint.com/rsync-local-remote-file-synchronization-commands/" },
          { label: "Approfondissement scripting avancé", url: "https://exercism.org/tracks/bash" },
          { label: "Révision et consolidation", url: "https://www.shellscript.sh/" },
          { label: "[Weekend] Mise en pratique", url: "https://overthewire.org/wargames/bandit/" },
          { label: "[Weekend] Documentation et GitHub", url: "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github" }
        ]
      },
      {
        id: "w10", week: 10, month: 3, title: "Bash scripting pro (suite)",
        tasks: [
          { label: "Scripts de monitoring système", url: "https://www.baeldung.com/linux/monitor-system-resources-bash" },
          { label: "Gestion des erreurs et logs dans bash", url: "https://www.shellscript.sh/trap.html" },
          { label: "Intégration bash + Python", url: "https://realpython.com/run-python-scripts/" },
          { label: "Projet combiné bash + Python", url: "https://automatetheboringstuff.com/" },
          { label: "Révision semaine", url: "https://www.shellscript.sh/" },
          { label: "[Weekend] Projet libre", url: "https://github.com/practical-tutorials/project-based-learning#shell" },
          { label: "[Weekend] Bilan mi-phase 1", url: "https://roadmap.sh/devops" }
        ]
      },
      {
        id: "w11", week: 11, month: 3, title: "Intro AWS + OWASP",
        tasks: [
          { label: "AWS : créer compte Free Tier, console", url: "https://aws.amazon.com/free/" },
          { label: "AWS : EC2 premiers pas", url: "https://aws.amazon.com/ec2/getting-started/" },
          { label: "OWASP Top 10 : lecture et compréhension", url: "https://owasp.org/www-project-top-ten/" },
          { label: "OWASP : SQLi et XSS (théorie)", url: "https://portswigger.net/web-security/sql-injection" },
          { label: "Révision + quiz", url: "https://tryhackme.com/room/owasptop10" },
          { label: "[Weekend] Exploration AWS Free Tier", url: "https://aws.amazon.com/getting-started/hands-on/" },
          { label: "[Weekend] PortSwigger Academy : premiers labs", url: "https://portswigger.net/web-security/learning-path" }
        ]
      },
      {
        id: "w12", week: 12, month: 3, title: "Bilan Phase 1 + Orientation",
        tasks: [
          { label: "Révision complète Linux, réseaux, Docker, Python", url: "https://linuxjourney.com/" },
          { label: "Tester ses acquis avec des exercices pratiques", url: "https://tryhackme.com/path/outline/presecurity" },
          { label: "Finaliser le portfolio GitHub Phase 1", url: "https://docs.github.com/en/pages" },
          { label: "Décider de la priorité : DevOps ou Sécu en premier", url: "https://roadmap.sh/" },
          { label: "Bilan général Phase 1", url: "https://roadmap.sh/devops" },
          { label: "[Weekend] Projet récapitulatif", url: "https://github.com/practical-tutorials/project-based-learning" },
          { label: "[Weekend] Préparation Phase 2", url: "https://roadmap.sh/devops" }
        ]
      }
    ]
  },
  {
    id: "phase2a",
    label: "Phase 2A",
    title: "DevOps",
    color: "#0ea5e9",
    accent: "#38bdf8",
    months: "Mois 4-7",
    weeks: [
      {
        id: "w13", week: 13, month: 4, title: "AWS bases (EC2, S3)",
        tasks: [
          { label: "EC2 : lancer et configurer des serveurs", url: "https://aws.amazon.com/ec2/getting-started/" },
          { label: "S3 : stockage, buckets, permissions", url: "https://aws.amazon.com/s3/getting-started/" },
          { label: "IAM : utilisateurs, rôles, politiques", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html" },
          { label: "VPC : réseaux privés dans le cloud", url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html" },
          { label: "Révision AWS bases", url: "https://www.youtube.com/watch?v=ulprqHHWlng" },
          { label: "[Weekend] Projet : héberger app web sur EC2", url: "https://aws.amazon.com/getting-started/hands-on/deploy-wordpress-with-amazon-rds/" },
          { label: "[Weekend] Configurer Route 53 + domaine", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started.html" }
        ]
      },
      {
        id: "w14", week: 14, month: 4, title: "AWS avancé",
        tasks: [
          { label: "RDS : base de données managée", url: "https://aws.amazon.com/rds/getting-started/" },
          { label: "Load Balancer + Auto Scaling", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/get-started-with-ec2-auto-scaling.html" },
          { label: "CloudWatch : monitoring et alertes", url: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GettingStarted.html" },
          { label: "Révision AWS avancé", url: "https://www.youtube.com/watch?v=ulprqHHWlng" },
          { label: "Examens blancs AWS Cloud Practitioner", url: "https://www.examtopics.com/exams/amazon/aws-certified-cloud-practitioner/" },
          { label: "[Weekend] Connecter app à RDS", url: "https://aws.amazon.com/getting-started/hands-on/create-connect-postgresql-db/" },
          { label: "[Weekend] Tester la montée en charge", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html" }
        ]
      },
      {
        id: "w15", week: 15, month: 4, title: "Certif AWS Prep",
        tasks: [
          { label: "Révision intensive AWS Cloud Practitioner", url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials" },
          { label: "Examens blancs (objectif >80%)", url: "https://www.whizlabs.com/aws-certified-cloud-practitioner/free-test/" },
          { label: "Approfondissement VPC et Security Groups", url: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html" },
          { label: "IAM avancé : rôles et politiques", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html" },
          { label: "Révision finale", url: "https://www.youtube.com/watch?v=SOTamWNgDKc" },
          { label: "[Weekend] Passage certification AWS", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
          { label: "[Weekend] Bilan mois 4", url: "https://roadmap.sh/devops" }
        ]
      },
      {
        id: "w16", week: 16, month: 4, title: "CI/CD Introduction",
        tasks: [
          { label: "GitHub Actions : workflows avancés", url: "https://docs.github.com/en/actions/learn-github-actions" },
          { label: "Pipeline : test → build Docker → push", url: "https://docs.github.com/en/actions/publishing-packages/publishing-docker-images" },
          { label: "Déploiement automatique sur AWS", url: "https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-amazon-elastic-container-service" },
          { label: "Variables secrets dans GitHub Actions", url: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions" },
          { label: "Révision CI/CD", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
          { label: "[Weekend] Projet pipeline bout en bout", url: "https://docs.github.com/en/actions/quickstart" },
          { label: "[Weekend] Documentation du pipeline", url: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions" }
        ]
      },
      {
        id: "w17", week: 17, month: 5, title: "CI/CD avancé",
        tasks: [
          { label: "Tests automatisés dans le pipeline", url: "https://docs.github.com/en/actions/automating-builds-and-tests" },
          { label: "Notifications Slack en cas d'échec", url: "https://github.com/marketplace/actions/slack-send" },
          { label: "Rollback automatique", url: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs" },
          { label: "AWS CodeDeploy intégration", url: "https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-codedeploy.html" },
          { label: "Révision semaine", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
          { label: "[Weekend] Projet portfolio CI/CD complet", url: "https://docs.github.com/en/actions" },
          { label: "[Weekend] Documentation GitHub", url: "https://docs.github.com/en/get-started/writing-on-github" }
        ]
      },
      {
        id: "w18", week: 18, month: 5, title: "Kubernetes bases",
        tasks: [
          { label: "Concepts K8s (pods, services, deployments)", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
          { label: "Installation Minikube en local", url: "https://minikube.sigs.k8s.io/docs/start/" },
          { label: "kubectl : commandes essentielles", url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/" },
          { label: "Namespaces et labels", url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/" },
          { label: "Révision K8s bases", url: "https://www.youtube.com/watch?v=X48VuDVv0do" },
          { label: "[Weekend] Déployer une app avec Minikube", url: "https://kubernetes.io/docs/tutorials/hello-minikube/" },
          { label: "[Weekend] Exercices pratiques K8s", url: "https://killercoda.com/playgrounds/scenario/kubernetes" }
        ]
      },
      {
        id: "w19", week: 19, month: 5, title: "Kubernetes avancé",
        tasks: [
          { label: "Helm charts : gestionnaire de packages K8s", url: "https://helm.sh/docs/intro/quickstart/" },
          { label: "ConfigMaps et Secrets", url: "https://kubernetes.io/docs/concepts/configuration/configmap/" },
          { label: "Ingress controllers", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/" },
          { label: "Scaling horizontal", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/" },
          { label: "Révision K8s avancé", url: "https://www.youtube.com/watch?v=X48VuDVv0do" },
          { label: "[Weekend] EKS sur AWS", url: "https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html" },
          { label: "[Weekend] Projet app déployée avec K8s", url: "https://kubernetes.io/docs/tutorials/" }
        ]
      },
      {
        id: "w20", week: 20, month: 5, title: "Terraform bases",
        tasks: [
          { label: "Infrastructure as Code : concepts", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
          { label: "Terraform : providers, resources, state", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build" },
          { label: "Provisionner EC2 avec Terraform", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build" },
          { label: "Variables et outputs Terraform", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-variables" },
          { label: "Révision Terraform", url: "https://developer.hashicorp.com/terraform/tutorials" },
          { label: "[Weekend] Provisionner VPC+EC2+RDS", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
          { label: "[Weekend] Versionner l'infra sur GitHub", url: "https://developer.hashicorp.com/terraform/tutorials/automation/github-actions" }
        ]
      },
      {
        id: "w21", week: 21, month: 6, title: "Terraform avancé",
        tasks: [
          { label: "Modules Terraform", url: "https://developer.hashicorp.com/terraform/tutorials/modules/module" },
          { label: "Remote state (S3 backend)", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-remote" },
          { label: "Terraform Cloud introduction", url: "https://developer.hashicorp.com/terraform/tutorials/cloud-get-started" },
          { label: "Best practices IaC", url: "https://developer.hashicorp.com/terraform/language/style" },
          { label: "Révision semaine", url: "https://developer.hashicorp.com/terraform/tutorials" },
          { label: "[Weekend] Projet infra complète Terraform", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
          { label: "[Weekend] Documentation infra", url: "https://developer.hashicorp.com/terraform/tutorials" }
        ]
      },
      {
        id: "w22", week: 22, month: 6, title: "Monitoring + Logging",
        tasks: [
          { label: "CloudWatch Dashboards avancés", url: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html" },
          { label: "ELK Stack introduction (Elasticsearch, Kibana)", url: "https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-elastic-stack.html" },
          { label: "Grafana + Prometheus bases", url: "https://grafana.com/tutorials/grafana-fundamentals/" },
          { label: "Alerting et on-call", url: "https://grafana.com/docs/grafana/latest/alerting/" },
          { label: "Révision monitoring", url: "https://www.youtube.com/watch?v=h4Sl21AKiDg" },
          { label: "[Weekend] Dashboard complet", url: "https://grafana.com/tutorials/" },
          { label: "[Weekend] Alertes automatiques", url: "https://grafana.com/docs/grafana/latest/alerting/set-up/" }
        ]
      },
      {
        id: "w23", week: 23, month: 6, title: "Projet final DevOps (1)",
        tasks: [
          { label: "Architecture du projet final", url: "https://aws.amazon.com/architecture/" },
          { label: "Setup infra Terraform", url: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
          { label: "Pipeline CI/CD complet", url: "https://docs.github.com/en/actions" },
          { label: "Déploiement Kubernetes", url: "https://kubernetes.io/docs/tutorials/" },
          { label: "Tests et validation", url: "https://docs.github.com/en/actions/automating-builds-and-tests" },
          { label: "[Weekend] Travail projet", url: "https://roadmap.sh/devops" },
          { label: "[Weekend] Documentation", url: "https://docs.github.com/en/get-started/writing-on-github" }
        ]
      },
      {
        id: "w24", week: 24, month: 6, title: "Projet final DevOps (2)",
        tasks: [
          { label: "Monitoring et alertes du projet", url: "https://grafana.com/tutorials/grafana-fundamentals/" },
          { label: "Optimisation et sécurité", url: "https://aws.amazon.com/architecture/security-identity-compliance/" },
          { label: "Documentation complète", url: "https://docs.github.com/en/get-started/writing-on-github" },
          { label: "README professionnel GitHub", url: "https://github.com/othneildrew/Best-README-Template" },
          { label: "Bilan Phase 2A DevOps", url: "https://roadmap.sh/devops" },
          { label: "[Weekend] Finalisation projet", url: "https://roadmap.sh/devops" },
          { label: "[Weekend] Publication portfolio", url: "https://docs.github.com/en/pages" }
        ]
      }
    ]
  },
  {
    id: "phase2b",
    label: "Phase 2B",
    title: "Cybersécurité",
    color: "#10b981",
    accent: "#34d399",
    months: "Mois 4-7",
    weeks: [
      {
        id: "w25", week: 1, month: 4, title: "OWASP : SQLi + XSS",
        tasks: [
          { label: "SQLi : comprendre et exploiter", url: "https://portswigger.net/web-security/sql-injection" },
          { label: "PortSwigger : labs SQL Injection", url: "https://portswigger.net/web-security/sql-injection#lab-retrieve-hidden-data" },
          { label: "XSS : stored, reflected, DOM", url: "https://portswigger.net/web-security/cross-site-scripting" },
          { label: "PortSwigger : labs XSS", url: "https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded" },
          { label: "Révision OWASP semaine 1", url: "https://owasp.org/www-project-top-ten/" },
          { label: "[Weekend] Labs PortSwigger (SQLi+XSS)", url: "https://portswigger.net/web-security/learning-path" },
          { label: "[Weekend] Rapport de vulnérabilités", url: "https://owasp.org/www-community/vulnerabilities/" }
        ]
      },
      {
        id: "w26", week: 2, month: 4, title: "OWASP : CSRF + IDOR",
        tasks: [
          { label: "CSRF : compréhension et exploitation", url: "https://portswigger.net/web-security/csrf" },
          { label: "IDOR : Insecure Direct Object Reference", url: "https://portswigger.net/web-security/access-control/idor" },
          { label: "SSRF : Server-Side Request Forgery", url: "https://portswigger.net/web-security/ssrf" },
          { label: "Broken Access Control", url: "https://portswigger.net/web-security/access-control" },
          { label: "PortSwigger labs CSRF+IDOR", url: "https://portswigger.net/web-security/csrf#lab-no-defenses" },
          { label: "[Weekend] Labs PortSwigger weekend", url: "https://portswigger.net/web-security/learning-path" },
          { label: "[Weekend] Résumé OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }
        ]
      },
      {
        id: "w27", week: 3, month: 4, title: "Burp Suite",
        tasks: [
          { label: "Installation et configuration Burp Suite", url: "https://portswigger.net/burp/documentation/desktop/getting-started" },
          { label: "Intercepter et modifier des requêtes HTTP", url: "https://portswigger.net/burp/documentation/desktop/tools/proxy" },
          { label: "Intruder : attaques par force brute", url: "https://portswigger.net/burp/documentation/desktop/tools/intruder" },
          { label: "Repeater : rejouer et modifier requêtes", url: "https://portswigger.net/burp/documentation/desktop/tools/repeater" },
          { label: "Scanner de vulnérabilités Burp", url: "https://portswigger.net/burp/documentation/scanner" },
          { label: "[Weekend] CTF TryHackMe avec Burp Suite", url: "https://tryhackme.com/room/burpsuitebasics" },
          { label: "[Weekend] Labs PortSwigger avec Burp", url: "https://portswigger.net/web-security/learning-path" }
        ]
      },
      {
        id: "w28", week: 4, month: 4, title: "Outils pentest web",
        tasks: [
          { label: "Nmap : scanner réseaux et services", url: "https://nmap.org/book/man.html" },
          { label: "Gobuster/FFUF : fuzzing de répertoires", url: "https://github.com/ffuf/ffuf" },
          { label: "Nikto : scanner de vulnérabilités web", url: "https://cirt.net/Nikto2" },
          { label: "Hydra : brute force d'authentification", url: "https://tryhackme.com/room/hydra" },
          { label: "Révision outils semaine", url: "https://tryhackme.com/room/toolsrus" },
          { label: "[Weekend] Audit DVWA (Damn Vulnerable Web App)", url: "https://dvwa.co.uk/" },
          { label: "[Weekend] Audit OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/" }
        ]
      },
      {
        id: "w29", week: 1, month: 5, title: "Méthodologie pentest",
        tasks: [
          { label: "Phase 1 : Reconnaissance passive (OSINT)", url: "https://tryhackme.com/room/passiverecon" },
          { label: "Phase 2 : Reconnaissance active (Nmap)", url: "https://tryhackme.com/room/activerecon" },
          { label: "Phase 3 : Énumération et cartographie", url: "https://tryhackme.com/room/enumerationpe" },
          { label: "Phase 4 : Exploitation des vulnérabilités", url: "https://tryhackme.com/room/rpmetasploit" },
          { label: "Phase 5 : Post-exploitation", url: "https://tryhackme.com/room/postexploit" },
          { label: "[Weekend] Appliquer méthodologie sur DVWA", url: "https://dvwa.co.uk/" },
          { label: "[Weekend] Rédiger un rapport de pentest pro", url: "https://github.com/juliocesarfort/public-pentesting-reports" }
        ]
      },
      {
        id: "w30", week: 2, month: 5, title: "Prépa certif eJPT",
        tasks: [
          { label: "Révision réseaux pour pentest", url: "https://tryhackme.com/room/introtonetworking" },
          { label: "Linux pour pentest (privilege escalation)", url: "https://tryhackme.com/room/linuxprivesc" },
          { label: "Labs eJPT sur INE Security", url: "https://my.ine.com/CyberSecurity/learning-paths/a223968e-3a74-45ed-884d-2d16760b8bbd/penetration-testing-student" },
          { label: "Examens blancs eJPT", url: "https://my.ine.com/CyberSecurity/learning-paths/a223968e-3a74-45ed-884d-2d16760b8bbd/penetration-testing-student" },
          { label: "Révision intensive", url: "https://tryhackme.com/path/outline/jrpenetrationtester" },
          { label: "[Weekend] Passage certification eJPT", url: "https://ine.com/certifications/ejpt-certification" },
          { label: "[Weekend] Bilan mois 5 sécu", url: "https://roadmap.sh/cyber-security" }
        ]
      },
      {
        id: "w31", week: 3, month: 5, title: "HackTheBox débutant",
        tasks: [
          { label: "Créer compte HackTheBox", url: "https://www.hackthebox.com/hacker/hacking-labs" },
          { label: "Machine débutant #1 : résolution complète", url: "https://app.hackthebox.com/starting-point" },
          { label: "Machine débutant #2 : résolution complète", url: "https://app.hackthebox.com/starting-point" },
          { label: "Rédiger write-up machine #1", url: "https://help.hackthebox.com/en/articles/5185158-introduction-to-writeups" },
          { label: "Rédiger write-up machine #2", url: "https://help.hackthebox.com/en/articles/5185158-introduction-to-writeups" },
          { label: "[Weekend] Machines débutant #3+4", url: "https://app.hackthebox.com/starting-point" },
          { label: "[Weekend] Publier write-ups sur GitHub", url: "https://docs.github.com/en/get-started/writing-on-github" }
        ]
      },
      {
        id: "w32", week: 4, month: 5, title: "HackTheBox intermédiaire",
        tasks: [
          { label: "Machine intermédiaire #1", url: "https://app.hackthebox.com/machines" },
          { label: "Techniques privilege escalation Linux", url: "https://tryhackme.com/room/linuxprivesc" },
          { label: "Techniques privilege escalation Windows", url: "https://tryhackme.com/room/windows10privesc" },
          { label: "Machine intermédiaire #2", url: "https://app.hackthebox.com/machines" },
          { label: "Write-ups et révision", url: "https://0xdf.gitlab.io/" },
          { label: "[Weekend] Machines #3+4", url: "https://app.hackthebox.com/machines" },
          { label: "[Weekend] CTF en ligne (CTFtime.org)", url: "https://ctftime.org/" }
        ]
      },
      {
        id: "w33", week: 1, month: 6, title: "Bug Bounty : setup",
        tasks: [
          { label: "Inscription HackerOne + Bugcrowd", url: "https://www.hackerone.com/hackers" },
          { label: "Comprendre les règles d'engagement (scope)", url: "https://docs.hackerone.com/hackers/programs.html" },
          { label: "Choisir programmes 'débutant friendly'", url: "https://www.hackerone.com/bug-bounty-programs" },
          { label: "Méthodologie de reconnaissance (recon)", url: "https://www.youtube.com/watch?v=uKWu6yhnhbQ" },
          { label: "Outils recon : subfinder, amass, httpx", url: "https://github.com/projectdiscovery/subfinder" },
          { label: "[Weekend] Recon sur programme réel", url: "https://www.hackerone.com/bug-bounty-programs" },
          { label: "[Weekend] Cartographie de la surface d'attaque", url: "https://github.com/projectdiscovery/nuclei" }
        ]
      },
      {
        id: "w34", week: 2, month: 6, title: "Bug Bounty : hunting",
        tasks: [
          { label: "Tester les endpoints découverts", url: "https://portswigger.net/web-security/learning-path" },
          { label: "Chercher des IDOR et access control issues", url: "https://portswigger.net/web-security/access-control/idor" },
          { label: "Tester les formulaires (XSS, SQLi)", url: "https://portswigger.net/web-security/learning-path" },
          { label: "Rédiger premier rapport de bug", url: "https://docs.hackerone.com/hackers/submitting-reports.html" },
          { label: "Soumettre rapport #1", url: "https://www.hackerone.com/bug-bounty-programs" },
          { label: "[Weekend] Hunting weekend", url: "https://www.hackerone.com/bug-bounty-programs" },
          { label: "[Weekend] Rapport #2", url: "https://docs.hackerone.com/hackers/submitting-reports.html" }
        ]
      },
      {
        id: "w35", week: 3, month: 6, title: "Bug Bounty : avancé",
        tasks: [
          { label: "Business logic flaws", url: "https://portswigger.net/web-security/logic-flaws" },
          { label: "API security testing", url: "https://portswigger.net/web-security/api-testing" },
          { label: "JWT token vulnerabilities", url: "https://portswigger.net/web-security/jwt" },
          { label: "OAuth misconfigurations", url: "https://portswigger.net/web-security/oauth" },
          { label: "Rapport #3 soumission", url: "https://www.hackerone.com/bug-bounty-programs" },
          { label: "[Weekend] Hunting weekend", url: "https://www.hackerone.com/bug-bounty-programs" },
          { label: "[Weekend] Révision et amélioration rapports", url: "https://docs.hackerone.com/hackers/submitting-reports.html" }
        ]
      },
      {
        id: "w36", week: 4, month: 6, title: "Bilan Phase 2B + Portfolio",
        tasks: [
          { label: "Révision complète Phase 2B", url: "https://roadmap.sh/cyber-security" },
          { label: "Compiler tous les write-ups", url: "https://docs.github.com/en/get-started/writing-on-github" },
          { label: "Créer page portfolio sécurité", url: "https://docs.github.com/en/pages" },
          { label: "LinkedIn : mettre à jour profil", url: "https://www.linkedin.com/" },
          { label: "Bilan général Phase 2B", url: "https://roadmap.sh/cyber-security" },
          { label: "[Weekend] Finalisation portfolio", url: "https://docs.github.com/en/pages" },
          { label: "[Weekend] Préparation Phase 3 DevSecOps", url: "https://roadmap.sh/devops" }
        ]
      }
    ]
  },
  {
    id: "phase3",
    label: "Phase 3",
    title: "DevSecOps",
    color: "#f59e0b",
    accent: "#fbbf24",
    months: "Mois 8+",
    weeks: [
      {
        id: "w37", week: 1, month: 8, title: "SAST/DAST dans CI/CD",
        tasks: [
          { label: "Intégrer SonarQube dans pipeline", url: "https://docs.sonarqube.org/latest/analyzing-source-code/ci-integration/github-integration/" },
          { label: "OWASP ZAP automatisé", url: "https://www.zaproxy.org/docs/docker/github-actions/" },
          { label: "Dependency scanning (Snyk)", url: "https://docs.snyk.io/integrations/ci-cd-integrations/github-actions-integration" },
          { label: "Container scanning (Trivy)", url: "https://aquasecurity.github.io/trivy/latest/docs/target/container_image/" },
          { label: "Révision DevSecOps semaine 1", url: "https://owasp.org/www-project-devsecops-guideline/" },
          { label: "[Weekend] Projet pipeline sécurisé", url: "https://docs.github.com/en/actions" },
          { label: "[Weekend] Documentation", url: "https://owasp.org/www-project-devsecops-guideline/" }
        ]
      },
      {
        id: "w38", week: 2, month: 8, title: "Gestion des secrets",
        tasks: [
          { label: "HashiCorp Vault installation", url: "https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-install" },
          { label: "Vault : stocker et récupérer secrets", url: "https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-first-secret" },
          { label: "Intégration Vault dans apps", url: "https://developer.hashicorp.com/vault/tutorials/app-integration" },
          { label: "AWS Secrets Manager", url: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html" },
          { label: "Révision secrets management", url: "https://developer.hashicorp.com/vault/tutorials" },
          { label: "[Weekend] Projet infra avec Vault", url: "https://developer.hashicorp.com/vault/tutorials" },
          { label: "[Weekend] Best practices secrets", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" }
        ]
      },
      {
        id: "w39", week: 3, month: 8, title: "Kubernetes Security",
        tasks: [
          { label: "RBAC dans Kubernetes", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
          { label: "Network Policies K8s", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" },
          { label: "Pod Security Standards", url: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
          { label: "Falco : détection d'intrusion K8s", url: "https://falco.org/docs/getting-started/" },
          { label: "Révision K8s security", url: "https://kubernetes.io/docs/concepts/security/" },
          { label: "[Weekend] Audit sécurité cluster K8s", url: "https://www.cisecurity.org/benchmark/kubernetes" },
          { label: "[Weekend] Rapport d'audit", url: "https://github.com/juliocesarfort/public-pentesting-reports" }
        ]
      },
      {
        id: "w40", week: 4, month: 8, title: "Projet final DevSecOps",
        tasks: [
          { label: "Architecture projet final DevSecOps", url: "https://owasp.org/www-project-devsecops-guideline/" },
          { label: "Pipeline CI/CD avec sécurité intégrée", url: "https://docs.github.com/en/actions" },
          { label: "Infrastructure sécurisée Terraform", url: "https://developer.hashicorp.com/terraform/tutorials" },
          { label: "Kubernetes sécurisé", url: "https://kubernetes.io/docs/concepts/security/" },
          { label: "Monitoring sécurité", url: "https://grafana.com/tutorials/" },
          { label: "[Weekend] Finalisation projet", url: "https://roadmap.sh/devops" },
          { label: "[Weekend] Publication et portfolio", url: "https://docs.github.com/en/pages" }
        ]
      }
    ]
  }
];
