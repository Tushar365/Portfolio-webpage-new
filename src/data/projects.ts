export interface Project {
  slug: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  improvement?: string;
  tags: string[];
  github?: string;
  huggingface?: string;
  status: 'Production' | 'Research';
  content: string;
}

export const projects: Project[] = [
  {
    slug: 'flood-detection',
    title: 'Prithvi-2.0 Flood Detection',
    description:
      'Fine-tuned NASA-IBM Prithvi EO-2.0 vision transformer with UPerNet segmentation head on Sen1Floods11 benchmark, achieving SOTA-level flood mapping from Sentinel-2 imagery.',
    metric: '0.72 IoU',
    metricLabel: 'Flood Detection IoU',
    improvement: '+437% vs Baseline',
    tags: ['Prithvi-2.0', 'UPerNet', 'PyTorch', 'Sentinel-2', 'HuggingFace'],
    huggingface: 'https://huggingface.co/Tushar365/prithvi-2.0-flood-detection-sen1floods11',
    status: 'Production',
    content: `
## Overview

Fine-tuned the NASA-IBM **Prithvi EO-2.0 300M** foundation model for binary flood segmentation, achieving **0.72 IoU** and **83.7% F1** on the Sen1Floods11 benchmark dataset — a **+437% improvement** in Flood IoU over the foundation model baseline.

## Technical Implementation

- Fine-tuned Prithvi EO-2.0 vision transformer (**ViT-Base**) with **UPerNet** segmentation head
- Trained for **80 epochs** on 224x224 Sentinel-2 imagery (6 bands: RGB, NIR, SWIR1/2)
- Implemented hybrid loss function (**Dice 0.5 + Focal 0.5**) optimized for imbalanced flood/non-flood classes
- Inference throughput: **20.66 samples/sec** on NVIDIA T4 (48ms per sample)

## Key Metrics

| Metric | Score | vs Baseline |
|--------|-------|-------------|
| Flood IoU | 0.72 | +437% |
| Flood F1 | 0.837 | +254% |
| Flood Precision | 0.890 | +443% |
| Mean IoU | 0.840 | — |
| Overall Accuracy | 96.3% | — |

## What Makes This Special

The baseline Prithvi-2.0 model achieves only **0.14 IoU** on flood detection out of the box. Through careful fine-tuning with a custom hybrid loss function and optimized training schedule, this model achieves near-production quality flood mapping — a critical capability for disaster response.

Published with complete documentation, inference code, and reproducible training pipeline on HuggingFace Hub.
    `,
  },
  {
    slug: 'wildfire-burn-scar',
    title: 'Wildfire Burn Scar Detection Pipeline',
    description:
      'End-to-end geospatial ML pipeline from Google Earth Engine data acquisition to Prithvi EO-2.0 fine-tuning, with novel Delta Channel Algorithm for temporal change detection.',
    metric: '+50.58%',
    metricLabel: 'Macro F1 Improvement',
    improvement: 'Novel Algorithm',
    tags: ['GEE', 'Prithvi-2.0', 'PyTorch Lightning', 'Sentinel-2', 'Delta Channel'],
    github: 'https://github.com/Tushar365/GEE-Prithvi_EO_2.0-Finetune-BurnScar-End2End',
    status: 'Research',
    content: `
## Overview

Built a comprehensive end-to-end geospatial ML pipeline achieving **+50.58% Macro F1 improvement** over foundation model baseline through **novel algorithmic contributions**.

## Algorithmic Innovations

### Delta Channel Algorithm (Original Research)

Invented a temporal stacking strategy calculating explicit spectral difference between pre/post-fire states: \`Delta = Clip(Post - Pre, -1.0, 1.0)\`

### Multi-Temporal 13-Band Architecture

Designed 3D temporal stack (Pre, Post, Delta) with 6 spectral bands per frame, enabling the model to learn both absolute spectral signatures and temporal changes.

### Two-Stage Fine-Tuning

Implemented freeze-then-unfreeze approach: 5 epochs frozen backbone then full joint optimization.

## End-to-End Pipeline

1. **Data Acquisition (GEE)** — Automated Sentinel-2 L2A harvesting with spectral band selection
2. **Data Engineering** — Reflectance normalization, Delta channel computation, 224x224 chip tiling
3. **Model Fine-Tuning** — Prithvi EO-2.0 with UPerNet decoder for burn scar classification
4. **Evaluation** — Comprehensive benchmarking suite with confusion matrices

## Performance

| Metric | Score | vs Baseline |
|--------|-------|-------------|
| Accuracy | 69.93% | +34.07% |
| Macro F1 | 0.6218 | +50.58% |
| Weighted F1 | 0.7015 | +49.80% |
| Burned F1 | 0.5553 | +54.20% |
    `,
  },
  {
    slug: 'anysat-inference',
    title: 'AnySat Multi-Sensor Flood Inference',
    description:
      'Implemented inference using AnySat multimodal foundation model (CVPR 2025 Highlight) for flood segmentation with SAR-optical fusion from Sentinel-1 and Sentinel-2.',
    metric: '125M',
    metricLabel: 'Parameters (Multi-Modal)',
    improvement: 'CVPR 2025',
    tags: ['AnySat', 'JEPA', 'SAR Fusion', 'Sentinel-1/2', 'Multi-Modal', 'PyTorch'],
    status: 'Research',
    content: `
## Overview

Implemented inference using the **AnySat** multimodal foundation model (CVPR 2025 Highlight) for flood segmentation, demonstrating expertise with **state-of-the-art multi-sensor fusion** architectures.

## Technical Implementation

### Multi-Modal Fusion

Processed heterogeneous satellite data combining:
- **Sentinel-1 SAR**: 3 channels (VV, VH, ratio)
- **Sentinel-2 Optical**: 10 channels

### Scale-Adaptive Architecture

Implemented AnySat's **JEPA-based architecture** (125M parameters) handling varying spatial resolutions from 10m to 60m.

### Three Output Modes

- **Tile mode**: [B, 768] embeddings for scene classification
- **Patch mode**: [B, P, P, 768] grid for patch-level tasks
- **Dense mode**: [B, H, W, 1536] per-pixel features for segmentation

## Technical Complexity

- Handled **11 different sensor types** (Sentinel-1/2, NAIP, ALOS-2, aerial imagery)
- Implemented temporal dimension processing for multi-date analysis
- Managed varying channel counts across sensors (2-13 channels)
- Built preprocessing for SAR-optical fusion with proper normalization

## Model Architecture

- Vision Transformer: 768-dim embeddings, 6+1 blocks, 12 attention heads
- Modality projectors for 11+ sensor types
- Scale-adaptive JEPA (Joint-Embedding Predictive Architecture)
    `,
  },
];
