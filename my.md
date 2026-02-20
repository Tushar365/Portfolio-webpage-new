TUSHAR THOKDAR
Earth Observation ML Engineer | Foundation Models | Disaster Monitoring
Kolkata, India
📧 tusharthokdarp@gmail.com | 📱 +91-9382906984
🔗 LinkedIn | GitHub | HuggingFace
🌐 Portfolio: myjournalbook.watch

🎯 PROFESSIONAL SUMMARY
Earth Observation ML Engineer with proven expertise in fine-tuning vision foundation models for disaster monitoring. Published 2 production-ready models on HuggingFace achieving SOTA-level performance (0.72 IoU flood detection, +50.58% F1 wildfire). Specialized in multi-sensor satellite imagery fusion (Sentinel-1 SAR + Sentinel-2 optical), semantic segmentation, and end-to-end geospatial pipelines. Strong background in PyTorch, Vision Transformers, and Google Earth Engine.
Core Competencies:
Foundation Model Fine-Tuning (Prithvi EO-2.0,Changeformer, AnySat)
Multi-Sensor Fusion (SAR + Optical imagery)
Semantic Segmentation (UPerNet, Vision Transformers)
Geospatial Data Engineering (GEE, GDAL, Rasterio)
Production ML Deployment (HuggingFace Hub, Docker, GCP)

🛠️ TECHNICAL SKILLS
Earth Observation & Foundation Models
Fine-Tuned Models: Prithvi EO-2.0 (2 production deployments), AnySat inference
Architectures: Vision Transformers (ViT-Base), UPerNet segmentation, JEPA
Satellite Sensors: Sentinel-1 (SAR), Sentinel-2 (optical), MODIS, Landsat, NAIP
Geospatial Tools: Google Earth Engine, GDAL, Rasterio, GeoPandas
Multi-Sensor Fusion: SAR-optical fusion, multi-temporal analysis, change detection
Machine Learning & Deep Learning
Frameworks: PyTorch (expert), PyTorch Lightning, TensorFlow, Hugging Face
CV Tasks: Semantic segmentation, change detection, multi-modal learning
Loss Functions: Dice + Focal, Weighted Cross-Entropy, custom hybrid losses
Optimization: Two-stage fine-tuning (freeze-then-unfreeze), hyperparameter tuning
Evaluation: Benchmark datasets (Sen1Floods11), confusion matrices, F1/IoU metrics
MLOps & Deployment
Containerization: Docker (GCP training environments)
Model Publishing: HuggingFace Hub, model versioning, documentation
Cloud Platforms: GCP (Compute Engine, Cloud Storage), AWS basics
Version Control: Git, GitHub, reproducible pipelines
Backend & Data Engineering
Languages: Python , SQL
APIs: FastAPI, Flask
Data Processing: NumPy, Pandas, OpenCV, scikit-learn
Databases: PostgreSQL, Convex

🚀 PUBLISHED MODELS & MAJOR PROJECTS

1. Prithvi-2.0 Flood Detection Model ⭐ PRODUCTION DEPLOYMENT
   HuggingFace: https://huggingface.co/Tushar365/prithvi-2.0-flood-detection-sen1floods11
   Status: 11 downloads | Apache 2.0 License | Published Jan 2026
   Achievement: Fine-tuned Prithvi-2.0 300M foundation model achieving 0.72 IoU and 83.7% F1 on Sen1Floods11 benchmark dataset - a +437% improvement in Flood IoU over baseline.
   Technical Implementation:
   Fine-tuned NASA-IBM Prithvi EO-2.0 vision transformer (ViT-Base) with UPerNet segmentation head
   Trained for 80 epochs on 224x224 Sentinel-2 imagery (6 bands: RGB, NIR, SWIR1/2)
   Implemented hybrid loss function (Dice 0.5 + Focal 0.5) optimized for imbalanced flood/non-flood classes
   Achieved 89% precision and 79% recall on flood class with 96.3% overall accuracy
   Published complete model with documentation, inference code, and reproducible training pipeline
   Inference throughput: 20.66 samples/sec on NVIDIA T4 (48ms per sample)
   Key Metrics:
   Flood IoU: 0.72 (baseline: 0.14) = +437% improvement
   Flood F1: 0.837 (baseline: 0.236) = +254% improvement
   Flood Precision: 0.890 (baseline: 0.164) = +443% improvement
   Mean IoU: 0.840 | Overall Accuracy: 96.3%
   Tech Stack: Prithvi-2.0, UPerNet, PyTorch, Sen1Floods11 benchmark, HuggingFace Hub

2. End-to-End Wildfire Burn Scar Detection Pipeline
   GitHub: https://github.com/Tushar365/GEE-Prithvi_EO_2.0-Finetune-BurnScar-End2End
   Achievement: Built comprehensive geospatial ML pipeline achieving +50.58% Macro F1 improvement over foundation model baseline through novel algorithmic contributions.
   Algorithmic Innovations (Author: Tushar Thokdar):
   Delta Channel Algorithm: Invented temporal stacking strategy calculating explicit spectral difference between pre/post-fire states: Delta = Clip(Post - Pre, -1.0, 1.0)
   Multi-Temporal 13-Band Architecture: Designed 3D temporal stack (Pre, Post, Delta) with 6 spectral bands per frame
   Two-Stage Fine-Tuning Strategy: Implemented freeze-then-unfreeze approach (5 epochs frozen backbone → full joint optimization)
   Hybrid Loss Function: Engineered Weighted Cross-Entropy + Dice Loss (0.8 weight) for precise burn scar geometry
   Technical Pipeline (End-to-End):
   Data Acquisition (GEE): Automated Sentinel-2 L2A harvesting with spectral band selection (B2,B3,B4,B8A,B11,B12)
   Data Engineering: Reflectance normalization → Delta channel computation → 224x224 chip tiling
   Model Specialization: Fine-tuned Prithvi EO-2.0 with UPerNet decoder on burn scar severity classification
   Evaluation Framework: Built comprehensive benchmarking suite with confusion matrices and per-class metrics
   Performance Gains (vs Foundation Model Baseline):
   Accuracy: 69.93% (baseline: 35.86%) = +34.07% absolute gain
   Macro F1: 0.6218 (baseline: 0.1160) = +50.58% improvement
   Weighted F1: 0.7015 (baseline: 0.2035) = +49.80% improvement
   Burned F1: 0.5553 (baseline: 0.0133) = +54.20% improvement
   Tech Stack: Google Earth Engine Python API, Prithvi EO-2.0, PyTorch Lightning, UPerNet, Sentinel-2, DNBR indices
   Repository Structure:
   Complete GEE export scripts with automated data harvesting
   Data generation pipeline with quality control (Prithvi_data_generation.ipynb)
   Fine-tuning notebook with Delta channel implementation
   Model comparison framework with visual validation (Prithvi_model_comparison.ipynb)
   Professional documentation with architecture diagrams and performance charts

3. AnySat Multi-Sensor Inference for Flood Detection 🛰️ CUTTING-EDGE RESEARCH
   Dataset: Sen1Floods11 | Status: Production-ready inference pipeline
   Achievement: Implemented inference using AnySat multimodal foundation model (CVPR 2025 Highlight) for flood segmentation, demonstrating expertise with state-of-the-art multi-sensor fusion architectures.
   Technical Implementation:
   Multi-Modal Fusion: Processed heterogeneous satellite data combining Sentinel-1 SAR (3 channels: VV, VH, ratio) and Sentinel-2 optical (10 channels) imagery
   Scale-Adaptive Architecture: Implemented AnySat's JEPA-based architecture (125M parameters) handling varying spatial resolutions (10m-60m)
   Multi-Resolution Processing: Built preprocessing pipeline managing patch sizes in meters (not pixels) for scale-adaptive spatial encoding
   Three Output Modes:
   tile mode: [B, 768] embeddings for scene classification
   patch mode: [B, P, P, 768] grid for patch-level tasks
   dense mode: [B, H, W, 1536] per-pixel features for segmentation
   Benchmark Comparison: Evaluated AnySat performance against fine-tuned Prithvi model for flood detection task
   Professional Documentation: Created comprehensive Jupyter notebook with model overview, input format requirements, and inference examples
   Technical Complexity Highlights:
   Handled 11 different sensor types (Sentinel-1/2, NAIP, ALOS-2, aerial imagery)
   Implemented temporal dimension processing for multi-date analysis
   Managed varying channel counts across sensors (2-13 channels)
   Built preprocessing for SAR-optical fusion with proper normalization
   Model Architecture:
   Vision Transformer: 768-dim embeddings, 6+1 blocks, 12 attention heads
   Modality projectors for 11+ sensor types
   Scale-adaptive JEPA (Joint-Embedding Predictive Architecture)
   Tech Stack: AnySat (CVPR 2025), PyTorch, Sentinel-1 SAR, Sentinel-2 optical, timm, Sen1Floods11

💼 PROFESSIONAL EXPERIENCE
AI Engineer (Freelance) | Godel Space — Remote
Dec 2024 – Feb 2026
Earth Observation & Computer Vision Development:
Developed production computer vision models using state-of-the-art object detection frameworks
Implemented AnySat foundation model inference for multi-sensor satellite imagery analysis
Built data preprocessing pipelines handling SAR and optical imagery fusion
Created PyTorch training scripts for model development with proper experiment tracking
Collaborated with distributed team using Git, documented experiments and code for knowledge sharing
Explored FastAPI for model serving and API development
Web development and AI agents (dicord bot, TTss voice models)
Key Achievement: Successfully implemented AnySat multi-modal inference pipeline processing Sentinel-1/2 data for disaster monitoring applications.

AI Engineer (Freelance) | Unify — Remote
Aug 2024 – Dec 2024
LLM Integration & API Development:
Integrated multiple LLM APIs (OpenAI GPT-4, Meta Llama, Claude) into prototype applications
Implemented content filtering and guardrails using rule-based approaches to reduce harmful outputs
Built modular API architecture for testing different LLM providers, comparing response quality and costs
Conducted prompt engineering experiments and explored RAG (Retrieval-Augmented Generation) patterns
Key Achievement: Built production-ready LLM integration framework enabling rapid provider switching and A/B testing.

🎓 EDUCATION
Bachelor of Technology (B.Tech) – Information Technology
Haldia Institute of Technology, Kolkata
2020 – 2024 | GPA: 8.6 / 10
Relevant Coursework:
Machine Learning & Deep Learning
Computer Vision
Data Structures & Algorithms
Database Management Systems
Cloud Computing

🏆 ACHIEVEMENTS & RECOGNITION
1st Place – Build Your AI Startup #2 Hackathon (Edge Runners)
Achievement: Won first place by deploying optimized edge AI model achieving 85% of full-model performance at 4x inference speed.
Technical Implementation:
Fine-tuned phi -3 on synthetic data using big models for edge deployment using quantization and pruning techniques
Implemented safety guardrails reducing harmful outputs by 90% while maintaining <100ms latency on CPU
Deployed containerized model using Docker + ONNX Runtime for cross-platform compatibility
Demonstrated expertise in model optimization for resource-constrained environment

📚 CERTIFICATIONS
Python Programming Essentials – Rice University
A Crash Course in Data Science – Johns Hopkins University
Complete SQL Bootcamp – Udemy

🔬 CURRENT DEVELOPMENT & RESEARCH
Active Projects:
Building real-time disaster monitoring web application using deployed Prithvi models
Exploring production deployment patterns (TorchServe, model serving APIs, FastAPI integration)
Contributing to Earth Observation projects
Researching foundation model compression techniques for edge deployment
Future Goals:
Publish research paper on Delta channel algorithm for burn scar detection
Expand model deployment to include real-time satellite data streaming
Develop multi-hazard disaster monitoring system (floods, wildfires, landslides)

📊 PORTFOLIO HIGHLIGHTS
Published Work:
2 Production Models on HuggingFace with 11+ downloads
1 Comprehensive End-to-End Pipeline on GitHub (GEE → Training → Deployment)
3 Major Foundation Model Projects (Prithvi flood, Prithvi wildfire, AnySat)
Professional Documentation with metrics, visualizations, and reproducible code
Technical Metrics:
Flood Detection: 0.72 IoU, 83.7% F1 (+437% vs baseline)
Wildfire Detection: +50.58% Macro F1 improvement
Multi-Sensor Processing: SAR + optical fusion for 3+ sensor types

🌐 OPEN FOR OPPORTUNITIES
Seeking: Remote ML Engineer / Earth Observation Specialist roles
Availability: Immediate
Preferred Domains: Disaster monitoring, climate tech, geospatial AI, foundation models
Location: Remote (global) | Kolkata, India
Ideal Companies: Planet Labs, ICEYE, Descartes Labs, Orbital Insight, Pano AI, Upstream Tech, Pachama, HuggingFace, IBM Research, NASA IMPACT

References and code samples available upon request.
