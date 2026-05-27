// questions.js
// Banco privado NCA 6.10 con solo las imagenes/exhibits reales seleccionadas.
// Mantener privado/local.

window.PRIVATE_QUESTION_BANK = [
  {
    "id": "Q001",
    "topic": "NCA 6.10",
    "question": "Which Nutanix Support case priority level indicates that the system is available but experiencing issues that directly impact productivity?",
    "options": [
      "P1",
      "P2",
      "P3",
      "P4"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q002",
    "topic": "NCA 6.10",
    "question": "An administrator is conducting updates in a Nutanix cluster and is being prompted for handling non-migratable VMs. Which VM type is non-migratable?",
    "options": [
      "VMs without NGT",
      "Memory Overcommitted VMs",
      "VMs with attached Volume Groups",
      "VMs marked as an Agent"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q003",
    "topic": "NCA 6.10",
    "question": "An administrator wants to collect log files that have been requested by Nutanix Support. From which Prism Element dashboard can this be accomplished?",
    "options": [
      "Health",
      "Alerts",
      "Settings",
      "Analysis"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q004",
    "topic": "NCA 6.10",
    "question": "Which storage container option reduces the available storage to other containers?",
    "options": [
      "Reserved Capacity",
      "Capacity Deduplication",
      "Advertised Capacity",
      "Erasure Coding"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q005",
    "topic": "NCA 6.10",
    "question": "An administrator has spent time correcting specific issues that have been identified by NCC Health Checks in Prism Element. How can just the checks that previously did not pass be executed again to confirm they are all resolved?",
    "options": [
      "Select Only Failed And Warning Checks.",
      "Run LCM Pre-Upgrade to trigger NCC Checks.",
      "Select Run Check for each check worked.",
      "Run nee health checks run all."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q006",
    "topic": "NCA 6.10",
    "question": "Shared storage for Windows Server Failover Clustering (WSFC) is a use case for which Nutanix Unified Storage solution?",
    "options": [
      "FT1",
      "Files",
      "RF2",
      "Volumes"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q007",
    "topic": "NCA 6.10",
    "question": "When using the LCM Dark Site procedure in Prism Element or Prism Central, which Nutanix software component should be checked and upgraded first?",
    "options": [
      "Foundation",
      "LCM Framework",
      "NCC",
      "MSP"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q008",
    "topic": "NCA 6.10",
    "question": "When configuring a physical network switch in Prism Element, what information is required?",
    "options": [
      "SMTP Configuration",
      "SNMP Configuration",
      "NTP Configuration",
      "DNS Configuration"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q009",
    "topic": "NCA 6.10",
    "question": "Which storage protocol is used by Nutanix Distributed Storage Fabric (DSF) to provide access to an ESXi hypervisor?",
    "options": [
      "NFS",
      "SMB",
      "iSCSI",
      "LVM"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q010",
    "topic": "NCA 6.10",
    "question": "Which bridge does the Controller VM use by default to communicate with the AHV host it runs on?",
    "options": [
      "Vs0",
      "Br0",
      "Bridge0",
      "Virbr0"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q011",
    "topic": "NCA 6.10",
    "question": "Within Prism Central, which Compute and Storage section will allow an administrator to upload a Windows ISO file?",
    "options": [
      "Catalog Items",
      "Templates",
      "Images",
      "OVAs"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q012",
    "topic": "NCA 6.10",
    "question": "What priority case can be opened to guarantee a 8-hour response for a customer with Production Support?",
    "options": [
      "P1",
      "P2",
      "P3",
      "P4"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q013",
    "topic": "NCA 6.10",
    "question": "An administrator wants to enable Windows Defender Credential Guard. What must be enabled when creating the VM?",
    "options": [
      "Live Migration",
      "Legacy BIOS",
      "UEFI",
      "HA"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q014",
    "topic": "NCA 6.10",
    "question": "Which feature should be enabled to prevent password access to the CVM for both the nutanix and admin user accounts?",
    "options": [
      "Cluster lockdown",
      "Data-at-Rest Encryption",
      "RBAC Policy on PC",
      "STIG"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q015",
    "topic": "NCA 6.10",
    "question": "An administrator needs to remove several old VM snapshots. From which Prism Element dashboard should the administrator complete this task?",
    "options": [
      "Tasks",
      "Settings",
      "Storage",
      "VM"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q016",
    "topic": "NCA 6.10",
    "question": "An administrator needs to automate the migration of a VM from ESXi to AHV. Which utility should the administrator use?",
    "options": [
      "acli",
      "ncli",
      "Flow",
      "Move"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q017",
    "topic": "NCA 6.10",
    "question": "When multiple Alert policies are applied to an entity, which will take precedence?",
    "options": [
      "Policy are applied to an entity type in a cluster.",
      "Policy are applied to all entities of an entity type.",
      "Policy are applied to an entity type in a category.",
      "Policy are applied to a specific entity."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q018",
    "topic": "NCA 6.10",
    "question": "An administrator needs to implement a disaster recovery plan. The company has two sites, each with its own Nutanix AHV cluster. Latency between the sites is 30ms. Which built-in functionality in Prism Element could the administrator use to enable disaster recovery between the two clusters?",
    "options": [
      "Data Protection",
      "Recovery Plan",
      "Protection Policies",
      "Metro Cluster"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q019",
    "topic": "NCA 6.10",
    "question": "An administrator is configuring Erasure Coding on a Redundancy Factor 2 cluster. How many nodes, at a minimum, are necessary?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q020",
    "topic": "NCA 6.10",
    "question": "For dark site clusters, what should be downloaded prior to running an LCM inventory or updates?",
    "options": [
      "Nutanix Prism Central",
      "Nutanix Foundation Platform",
      "Nutanix Foundation",
      "Nutanix Compatibility Bundle"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q021",
    "topic": "NCA 6.10",
    "question": "On a newly-deployed AHV cluster, what is the default virtual switch (vsO) uplink bond type?",
    "options": [
      "Balance-SLB",
      "No Uplink Bond",
      "Balance-TCP",
      "Active-Backup"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q022",
    "topic": "NCA 6.10",
    "question": "At what time does LCM auto-inventory run by default?",
    "options": [
      "1:00am",
      "2:00am",
      "3:00am",
      "4:00am"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q023",
    "topic": "NCA 6.10",
    "question": "An administrator receives the alert: NODE MAINTENANCE MODE FAILURE. What is the most likely cause?",
    "options": [
      "Another node in this cluster is already in maintenance mode.",
      "This node in the cluster may not have enough resources available.",
      "This node in the cluster is already in maintenance mode.",
      "Other nodes in the cluster may not have enough resources available."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q024",
    "topic": "NCA 6.10",
    "question": "Which Nutanix Disaster Recovery component or feature provides the best Recovery Time Objective (RTO)?",
    "options": [
      "Async",
      "Availability Zone",
      "Metro Availability",
      "NearSync"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q025",
    "topic": "NCA 6.10",
    "question": "What is the default admin session log out time?",
    "options": [
      "5minutes",
      "1minutes",
      "15 minutes",
      "2minutes"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q026",
    "topic": "NCA 6.10",
    "question": "An administrator is performing AHV upgrades on an 8-node cluster configured with Redundancy Factor 3. How many nodes would be placed into maintenance mode simultaneously?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q027",
    "topic": "NCA 6.10",
    "question": "An administrator needs to ensure that the three VMs of an application cluster are never placed onto the same hypervisor by creating a VM­ VM Anti-Affinity Policy. What should the administrator use to complete this task?",
    "options": [
      "acli",
      "Prism Element",
      "ncli",
      "Prism Central"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q028",
    "topic": "NCA 6.10",
    "question": "An administrator needs to create a VM Template from an existing VM. What is required for this action to be successful?",
    "options": [
      "Windows OS is installed.",
      "The VM is powered on.",
      "The VM is powered off.",
      "Sysprep or Cloud-init script."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q029",
    "topic": "NCA 6.10",
    "question": "After starting LCM updates, an administrator would like to see a detailed view of each update as it progresses. Which Prism Element dashboard should the administrator use to monitor the LCM updates?",
    "options": [
      "Tasks",
      "Alerts",
      "Analysis",
      "Hardware"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q030",
    "topic": "NCA 6.10",
    "question": "An administrator has been directed to ensure that all Prism Element and Prism Central clusters allow Nutanix Support to gather logs without needing engagement. What should the administrator enable to meet this requirement?",
    "options": [
      "NKP",
      "Proxy Server",
      "Self-Service",
      "Pulse"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q031",
    "topic": "NCA 6.10",
    "question": "Nutanix Support has asked an administrator to provide an NCC output, but there is no access to the command line. What should the administrator do to provide the requested NCC output?",
    "options": [
      "Configure email in Alert Settings and Run Health Checks in the Alert Dashboard.",
      "Run Health Checks in the Event Dashboard.",
      "Configure email in Alert Settings and Run Health Checks in the Health Dashboard.",
      "Run Health Checks in the Alert Dashboard and enter an email to send it to."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q032",
    "topic": "NCA 6.10",
    "question": "An administrator wants to apply tags to licenses to simplify future renewals. What interface would be used to complete this operation?",
    "options": [
      "Prism Central Licensing",
      "Clusters in the Support Portal",
      "License Inventory in the Support Portal",
      "Prism Element Licensing"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q033",
    "topic": "NCA 6.10",
    "question": "An administrator is looking to upgrade their licensing on a Nutanix cluster. Which licensing levels are available for a Nutanix cluster?",
    "options": [
      "Starter, Pro, Dedicated",
      "Community Edition, Pro, Enterprise",
      "Starter, Pro, Ultimate",
      "Mixed, Advanced, Enterprise"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q034",
    "topic": "NCA 6.10",
    "question": "Which Nutanix offering allows for extending an on-prem datacenter into the public cloud?",
    "options": [
      "Nutanix Kubernetes Engine",
      "Nutanix Cloud Clusters",
      "Nutanix Cloud Security",
      "Nutanix Data Services"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q035",
    "topic": "NCA 6.10",
    "question": "Which storage protocol is supported for a datastore when using ESXi as the hypervisor within a Nutanix cluster?",
    "options": [
      "LVM",
      "SMB",
      "iSCSI",
      "NFS"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q036",
    "topic": "NCA 6.10",
    "question": "An administrator needs to license a new AOS-based cluster with no add-on packages via Nutanix Cloud Platform Package Licensing. What license type would fulfill this requirement?",
    "options": [
      "Nutanix Database Service (NOB)",
      "Nutanix Cloud Manager (NCM)",
      "Nutanix Unified Storage (NUS)",
      "Nutanix Cloud Infrastructure (NCI)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q037",
    "topic": "NCA 6.10",
    "question": "When configuring dual encryption, which key management method is supported?",
    "options": [
      "External Key Manager",
      "Native Key Manager",
      "Lockdown Mode Enabled",
      "Trusted Platform Module"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q038",
    "topic": "NCA 6.10",
    "question": "An administrator wants to change from Redundancy Factor 2 to 3, but it is not allowed. What must the administrator check?",
    "options": [
      "Check that the cluster has been properly licensed.",
      "Check AOS version and upgrade, if needed.",
      "Check that the cluster has five or more nodes.",
      "Check hardware availability of the nodes."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q039",
    "topic": "NCA 6.10",
    "question": "Refer to the exhibit. What should be first selected to run a full health check?",
    "options": [
      "Actions",
      "Checks",
      "Failed",
      "Scheduled"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A.",
    "image": "./images/q039_exhibit.png"
  },
  {
    "id": "Q040",
    "topic": "NCA 6.10",
    "question": "A Veeam Backup appliance, which uses iSCSI, must be deployed into an AHV-based cluster. What must be configured to allow Veeam to connect to the Nutanix cluster?",
    "options": [
      "Network Segmentation",
      "Prism Central",
      "Data Services IP",
      "Nutanix Objects"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q041",
    "topic": "NCA 6.10",
    "question": "An administrator needs to configure a solution that ensures VMs automatically power on in a specific order at the DR site in the event of a disaster. Which feature will achieve this?",
    "options": [
      "Protection Policy",
      "Recovery Plan",
      "Resource Scheduling",
      "Category"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q042",
    "topic": "NCA 6.10",
    "question": "What is the purpose of the Oplog?",
    "options": [
      "Persistent data storage",
      "Persistent write buffer",
      "Global metadata",
      "Dynamic read cache"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q043",
    "topic": "NCA 6.10",
    "question": "What role does a Replication Factor of 2 or 3 play in ensuring data integrity and recovery?",
    "options": [
      "It limits the scope of hardware failures during recovery operations.",
      "It reduces the need for offsite backup solutions.",
      "It ensures that multiple copies of data are available for recovery.",
      "It accelerates data transfer to remote backup sites."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q044",
    "topic": "NCA 6.10",
    "question": "What is the purpose of the Recycle Bin?",
    "options": [
      "Stores the Oplog's most recent deleted data in case of a CVM failure.",
      "Allow administrators to undo the last five actions.",
      "Centralizes the deleted data from the different VMs in the cluster.",
      "Keeps deleted VMs for 24 hours for recovery."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q045",
    "topic": "NCA 6.10",
    "question": "When is deduplication recommended?",
    "options": [
      "Linked Clone VMs",
      "Cold data",
      "Server workloads",
      "Full clone VMs"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q046",
    "topic": "NCA 6.10",
    "question": "Refer to the exhibit. What action can be taken to prevent this alert policy from creating multiple alerts within a 48- hour period if the 90% threshold is crossed multiple times?",
    "options": [
      "Set Ignore all anomalies between to 90% and 100%.",
      "Select the Auto resolve alerts checkbox and click Save.",
      "Select highest value in Trigger alert if conditions persist for.",
      "After alert occurs, uncheck Enable Policy box for 48 hours."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A.",
    "image": "./images/q046_exhibit.png"
  },
  {
    "id": "Q047",
    "topic": "NCA 6.10",
    "question": "Refer to the exhibit. After logging into Prism Element, an administrator sees a red heart as shown in the exhibit. Which dashboard will help the administrator isolate the cause of the issue?",
    "options": [
      "Tasks",
      "Health",
      "Analysis",
      "Alerts"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B.",
    "image": "./images/q047_exhibit.png"
  },
  {
    "id": "Q048",
    "topic": "NCA 6.10",
    "question": "Which statement best describes the Storage pool?",
    "options": [
      "Group of boot drives",
      "Group of physical disks",
      "Group of vDisks",
      "Group of Storage Containers"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q049",
    "topic": "NCA 6.10",
    "question": "How can an administrator work with Nutanix Support to recover a deleted VM, in its most up-to- date status, within a 24-hour period of the VM being deleted?",
    "options": [
      "Use Nutanix Recovery Plan.",
      "Use the Recycle Bin.",
      "Use NC2 on AWS.",
      "Use third party tools."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q050",
    "topic": "NCA 6.10",
    "question": "An administrator is creating a Linux VM and must decide which is the correct timezone to choose. Which timezone should the administrator select for this VM?",
    "options": [
      "UTC",
      "Eastern",
      "Local",
      "Central"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q051",
    "topic": "NCA 6.10",
    "question": "An administrator needs to license a new cluster using Nutanix Cloud Platform Package Licensing. How can the administrator satisfy this task?",
    "options": [
      "From the My Nutanix Licensing Summary page, click Manage Licenses and follow the specified process.",
      "From Prism Central Licensing, follow the specified process.",
      "From the Nutanix Portal Licensing Summary page, click Manage Licenses and follow the specified process.",
      "From Prism Element Licensing, follow the specified process."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q052",
    "topic": "NCA 6.10",
    "question": "What is the purpose of Life Cycle Management (LCM)?",
    "options": [
      "To optimize server performance",
      "To manage network configurations",
      "To automate application deployment",
      "To simplify Software and firmware upgrades"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q053",
    "topic": "NCA 6.10",
    "question": "Which option is supported by Nutanix for Data-at-Rest encryption?",
    "options": [
      "Storage Pool-only Encryption",
      "Data-only Encryption",
      "Cluster-only Encryption",
      "Software-only Encryption"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q054",
    "topic": "NCA 6.10",
    "question": "An administrator is building a new Windows VM on a Nutanix AHV cluster. However, when the administrator tries to install the OS, no disks are listed as available. What does the administrator need to do to resolve the issue?",
    "options": [
      "Enable Turbo Mode on the VM.",
      "Add a second disk to the VM.",
      "Mount and Install the Nutanix Guest Tools.",
      "Mount and install the VirtlO drivers."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q055",
    "topic": "NCA 6.10",
    "question": "How many copies of the metadata are maintained within a Redundancy Factor 3 cluster?",
    "options": [
      "2",
      "3",
      "5",
      "7"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q056",
    "topic": "NCA 6.10",
    "question": "An administrator needs to verify whether the cluster is protected currently from potential data loss due to a component failure. From the Prism Element Home dashboard, how should the administrator accomplish this task?",
    "options": [
      "Select the gear icon and then select Pulse.",
      "Look at the Data Resiliency Status widget.",
      "Click on Home and then Alerts.",
      "Navigate to the Health dashboard."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q057",
    "topic": "NCA 6.10",
    "question": "An administrator is considering a data protection strategy between two sites. There is a 10ms round trip latency between the two clusters. Which data protection solution can the administrator implement that minimizes data loss in the event of a disaster?",
    "options": [
      "NearSync Replication",
      "Metro Availability",
      "Async DR",
      "Synchronous Replication"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q058",
    "topic": "NCA 6.10",
    "question": "An administrator wants to create a storage container for an application that has built- in redundancy. What should the administrator do?",
    "options": [
      "Enable RF1 and create an RF1 storage container.",
      "Create an RF1 storage container.",
      "Create an RF1 storage container and enable RF1.",
      "RF1 is enabled by default in a storage container."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q059",
    "topic": "NCA 6.10",
    "question": "What minimum number of clusters must be registered to Prism Central to open a support case from the UI?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Respuesta marcada en el material corregido: B."
  },
  {
    "id": "Q060",
    "topic": "NCA 6.10",
    "question": "What is the benefit of configuring user-defined Alert Policies in Prism Central?",
    "options": [
      "It customizes alert thresholds.",
      "It restricts network access for administrators.",
      "It automates VM migrations.",
      "It reduces the frequency of system updates"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  },
  {
    "id": "Q061",
    "topic": "NCA 6.10",
    "question": "An administrator would like to configure a cluster to perform an LCM inventory automatically. At what frequency will the inventory run by default?",
    "options": [
      "Every 4 hours",
      "Every 8 hours",
      "Every 12 hours",
      "Every 24 hours"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Respuesta marcada en el material corregido: D."
  },
  {
    "id": "Q062",
    "topic": "NCA 6.10",
    "question": "Which hypervisor supports integrated IP address management (IPAM)?",
    "options": [
      "ESXi",
      "Hyper-V",
      "AHV",
      "XenServer"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Respuesta marcada en el material corregido: C."
  },
  {
    "id": "Q063",
    "topic": "NCA 6.10",
    "question": "In Prism Element, to which object are policies such as replication factor and storage efficiency settings applied?",
    "options": [
      "Container",
      "Virtual Machine",
      "Storage Pool",
      "vBlock"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Respuesta marcada en el material corregido: A."
  }
];
