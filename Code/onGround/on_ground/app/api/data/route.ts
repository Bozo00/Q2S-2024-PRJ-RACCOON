
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

    // resoond with an json example from a bank statment api
    return NextResponse.json({
        
            "flightData": [
              {
                "timestamp": "00:00:00",
                "acceleration": { "x": 0.05, "y": 0.01, "z": 0.02 },
                "rotation": { "roll": 0.1, "pitch": 0.05, "yaw": -0.03 }
              },
              {
                "timestamp": "00:00:02",
                "acceleration": { "x": 0.06, "y": 0.015, "z": 0.025 },
                "rotation": { "roll": 0.11, "pitch": 0.055, "yaw": -0.032 }
              },
              {
                "timestamp": "00:00:04",
                "acceleration": { "x": 0.04, "y": 0.009, "z": 0.018 },
                "rotation": { "roll": 0.09, "pitch": 0.045, "yaw": -0.028 }
              },
              {
                "timestamp": "00:00:06",
                "acceleration": { "x": 0.05, "y": 0.012, "z": 0.021 },
                "rotation": { "roll": 0.1, "pitch": 0.05, "yaw": -0.03 }
              },
              {
                "timestamp": "00:00:08",
                "acceleration": { "x": 0.07, "y": 0.02, "z": 0.03 },
                "rotation": { "roll": 0.12, "pitch": 0.06, "yaw": -0.035 }
              },
              {
                "timestamp": "00:00:10",
                "acceleration": { "x": 0.06, "y": 0.018, "z": 0.028 },
                "rotation": { "roll": 0.11, "pitch": 0.055, "yaw": -0.032 }
              },
              {
                "timestamp": "00:00:12",
                "acceleration": { "x": 0.08, "y": 0.02, "z": 0.032 },
                "rotation": { "roll": 0.13, "pitch": 0.06, "yaw": -0.037 }
              },
              {
                "timestamp": "00:00:14",
                "acceleration": { "x": 0.05, "y": 0.011, "z": 0.021 },
                "rotation": { "roll": 0.1, "pitch": 0.052, "yaw": -0.031 }
              },
              {
                "timestamp": "00:00:16",
                "acceleration": { "x": 0.06, "y": 0.014, "z": 0.023 },
                "rotation": { "roll": 0.11, "pitch": 0.053, "yaw": -0.033 }
              },
              {
                "timestamp": "00:00:18",
                "acceleration": { "x": 0.07, "y": 0.017, "z": 0.027 },
                "rotation": { "roll": 0.12, "pitch": 0.055, "yaw": -0.035 }
              },
              {
                "timestamp": "00:00:20",
                "acceleration": { "x": 0.05, "y": 0.012, "z": 0.02 },
                "rotation": { "roll": 0.1, "pitch": 0.05, "yaw": -0.03 }
              },
              {
                "timestamp": "00:00:22",
                "acceleration": { "x": 0.06, "y": 0.016, "z": 0.024 },
                "rotation": { "roll": 0.11, "pitch": 0.054, "yaw": -0.033 }
              },
              {
                "timestamp": "00:00:24",
                "acceleration": { "x": 0.07, "y": 0.018, "z": 0.029 },
                "rotation": { "roll": 0.12, "pitch": 0.056, "yaw": -0.034 }
              },
              {
                "timestamp": "00:00:26",
                "acceleration": { "x": 0.08, "y": 0.022, "z": 0.03 },
                "rotation": { "roll": 0.13, "pitch": 0.058, "yaw": -0.036 }
              },
              {
                "timestamp": "00:00:28",
                "acceleration": { "x": 0.09, "y": 0.025, "z": 0.033 },
                "rotation": { "roll": 0.14, "pitch": 0.06, "yaw": -0.038 }
              },
              {
                "timestamp": "00:00:30",
                "acceleration": { "x": 0.07, "y": 0.018, "z": 0.027 },
                "rotation": { "roll": 0.12, "pitch": 0.056, "yaw": -0.034 }
              },
              {
                "timestamp": "00:00:32",
                "acceleration": { "x": 0.05, "y": 0.013, "z": 0.021 },
                "rotation": { "roll": 0.1, "pitch": 0.052, "yaw": -0.031 }
              },
              {
                "timestamp": "00:00:34",
                "acceleration": { "x": 0.06, "y": 0.014, "z": 0.022 },
                "rotation": { "roll": 0.11, "pitch": 0.053, "yaw": -0.032 }
              },
              {
                "timestamp": "00:00:36",
                "acceleration": { "x": 0.07, "y": 0.017, "z": 0.026 },
                "rotation": { "roll": 0.12, "pitch": 0.055, "yaw": -0.034 }
              },
              {
                "timestamp": "00:00:38",
                "acceleration": { "x": 0.08, "y": 0.02, "z": 0.029 },
                "rotation": { "roll": 0.13, "pitch": 0.057, "yaw": -0.035 }
              },
              {
                "timestamp": "00:00:40",
                "acceleration": { "x": 0.09, "y": 0.022, "z": 0.031 },
                "rotation": { "roll": 0.14, "pitch": 0.059, "yaw": -0.037 }
              },
              {
                "timestamp": "00:00:42",
                "acceleration": { "x": 0.1, "y": 0.025, "z": 0.035 },
                "rotation": { "roll": 0.15, "pitch": 0.061, "yaw": -0.039 }
              },
              {
                "timestamp": "00:00:44",
                "acceleration": { "x": 0.11, "y": 0.027, "z": 0.038 },
                "rotation": { "roll": 0.16, "pitch": 0.063, "yaw": -0.04 }
              },
              {
                "timestamp": "00:00:46",
                "acceleration": { "x": 0.12, "y": 0.03, "z": 0.04 },
                "rotation": { "roll": 0.17, "pitch": 0.065, "yaw": -0.041 }
              },
              {
                "timestamp": "00:00:48",
                "acceleration": { "x": 0.13, "y": 0.033, "z": 0.043 },
                "rotation": { "roll": 0.18, "pitch": 0.067, "yaw": -0.043 }
              },
              {
                "timestamp": "00:00:50",
                "acceleration": { "x": 0.14, "y": 0.036, "z": 0.046 },
                "rotation": { "roll": 0.19, "pitch": 0.069, "yaw": -0.045 }
              },
              {
                "timestamp": "00:00:52",
                "acceleration": { "x": 0.15, "y": 0.038, "z": 0.049 },
                "rotation": { "roll": 0.2, "pitch": 0.071, "yaw": -0.046 }
              },
              {
                "timestamp": "00:00:54",
                "acceleration": { "x": 0.16, "y": 0.04, "z": 0.051 },
                "rotation": { "roll": 0.21, "pitch": 0.073, "yaw": -0.048 }
              },
              {
                "timestamp": "00:00:56",
                "acceleration": { "x": 0.17, "y": 0.043, "z": 0.054 },
                "rotation": { "roll": 0.22, "pitch": 0.075, "yaw": -0.05 }
              },
              {
                "timestamp": "00:00:58",
                "acceleration": { "x": 0.18, "y": 0.045, "z": 0.057 },
                "rotation": { "roll": 0.23, "pitch": 0.077, "yaw": -0.052 }
              },
              {
                "timestamp": "00:01:00",
                "acceleration": { "x": 0.19, "y": 0.048, "z": 0.06 },
                "rotation": { "roll": 0.24, "pitch": 0.079, "yaw": -0.054 }
              },
              {
                "timestamp": "00:01:02",
                "acceleration": { "x": 0.2, "y": 0.05, "z": 0.062 },
                "rotation": { "roll": 0.25, "pitch": 0.081, "yaw": -0.056 }
              },
              {
                "timestamp": "00:01:04",
                "acceleration": { "x": 0.21, "y": 0.053, "z": 0.065 },
                "rotation": { "roll": 0.26, "pitch": 0.083, "yaw": -0.057 }
              },
              {
                "timestamp": "00:01:06",
                "acceleration": { "x": 0.22, "y": 0.055, "z": 0.068 },
                "rotation": { "roll": 0.27, "pitch": 0.085, "yaw": -0.059 }
              },
              {
                "timestamp": "00:01:08",
                "acceleration": { "x": 0.23, "y": 0.058, "z": 0.071 },
                "rotation": { "roll": 0.28, "pitch": 0.087, "yaw": -0.061 }
              },
              {
                "timestamp": "00:01:10",
                "acceleration": { "x": 0.24, "y": 0.06, "z": 0.073 },
                "rotation": { "roll": 0.29, "pitch": 0.089, "yaw": -0.062 }
              },
              {
                "timestamp": "00:01:12",
                "acceleration": { "x": 0.25, "y": 0.063, "z": 0.076 },
                "rotation": { "roll": 0.3, "pitch": 0.091, "yaw": -0.064 }
              },
              {
                "timestamp": "00:01:14",
                "acceleration": { "x": 0.26, "y": 0.065, "z": 0.079 },
                "rotation": { "roll": 0.31, "pitch": 0.093, "yaw": -0.066 }
              },
              {
                "timestamp": "00:01:16",
                "acceleration": { "x": 0.27, "y": 0.068, "z": 0.082 },
                "rotation": { "roll": 0.32, "pitch": 0.095, "yaw": -0.067 }
              },
              {
                "timestamp": "00:01:18",
                "acceleration": { "x": 0.28, "y": 0.07, "z": 0.085 },
                "rotation": { "roll": 0.33, "pitch": 0.097, "yaw": -0.069 }
              },
              {
                "timestamp": "00:01:20",
                "acceleration": { "x": 0.29, "y": 0.073, "z": 0.087 },
                "rotation": { "roll": 0.34, "pitch": 0.099, "yaw": -0.071 }
              },
              {
                "timestamp": "00:01:22",
                "acceleration": { "x": 0.3, "y": 0.075, "z": 0.09 },
                "rotation": { "roll": 0.35, "pitch": 0.1, "yaw": -0.072 }
              },
              {
                "timestamp": "00:01:24",
                "acceleration": { "x": 0.31, "y": 0.078, "z": 0.093 },
                "rotation": { "roll": 0.36, "pitch": 0.102, "yaw": -0.074 }
              },
              {
                "timestamp": "00:01:26",
                "acceleration": { "x": 0.32, "y": 0.08, "z": 0.095 },
                "rotation": { "roll": 0.37, "pitch": 0.104, "yaw": -0.075 }
              },
              {
                "timestamp": "00:01:28",
                "acceleration": { "x": 0.33, "y": 0.083, "z": 0.098 },
                "rotation": { "roll": 0.38, "pitch": 0.106, "yaw": -0.077 }
              },
              {
                "timestamp": "00:01:30",
                "acceleration": { "x": 0.34, "y": 0.085, "z": 0.1 },
                "rotation": { "roll": 0.39, "pitch": 0.108, "yaw": -0.078 }
              }
            ]
          
          
    });
}
