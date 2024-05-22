import React from "react";

const Logo = ({ w, h }) => {
  return (
    <svg width={w} height={h} viewBox="0 0 498 202" version="1.1">
      <path
        d="M 75.310 18.946 C 70.370 21.189, 62.452 28.226, 60.398 32.198 L 58.949 35 40.536 35 L 22.123 35 21.608 39.250 C 21.325 41.587, 20.390 65.325, 19.531 92 C 18.671 118.675, 17.693 144.866, 17.358 150.202 L 16.749 159.903 19.798 162.952 L 22.846 166 86.735 166 C 149.531 166, 150.660 165.965, 152.799 163.972 C 153.996 162.857, 155.222 160.945, 155.524 159.722 C 155.826 158.500, 155.156 133.081, 154.036 103.235 C 152.916 73.389, 152 45.826, 152 41.985 L 152 35 133.893 35 C 117.739 35, 115.852 35.172, 116.397 36.593 C 118.021 40.825, 117.840 42.914, 116.197 38.908 C 112.099 28.918, 105.776 22.287, 96.782 18.546 C 91.524 16.360, 80.557 16.564, 75.310 18.946 M 79.332 21.812 C 76.490 22.816, 72.505 24.903, 70.477 26.450 C 66.882 29.192, 60.965 37.337, 61.035 39.446 C 61.055 40.026, 61.693 39.375, 62.453 38 L 63.836 35.500 87.168 35 L 110.500 34.500 106.169 29.800 C 98.456 21.430, 88.665 18.516, 79.332 21.812 M 168.017 40.851 C 162.610 43.751, 160.500 47.301, 160.500 53.500 C 160.500 60.928, 162.790 63.666, 172.629 68 C 182.677 72.427, 183 72.656, 183 75.359 C 183 78.612, 181.123 80, 176.723 80 C 173.740 80, 172.147 79.301, 169.815 76.969 L 166.783 73.937 162.382 76.516 C 157.294 79.498, 157.465 80.765, 163.644 85.858 C 172.318 93.008, 186.864 91.811, 191.984 83.526 C 194.644 79.222, 194.670 71.611, 192.040 67.299 C 189.936 63.847, 187.283 62.200, 178.577 58.943 C 172.356 56.615, 170.314 54.150, 172 51 C 173.400 48.383, 178.296 48.362, 181.941 50.958 L 184.690 52.915 188.001 49.499 C 190.931 46.476, 191.151 45.886, 189.906 44.382 C 185.781 39.397, 174.209 37.530, 168.017 40.851 M 195.667 39.667 C 195.300 40.033, 195 51.508, 195 65.167 L 195 90 200.500 90 L 206 90 206 80 L 206 70 216.500 70 L 227 70 227 80 L 227 90 232.517 90 L 238.034 90 237.767 64.750 L 237.500 39.500 232.250 39.198 L 227 38.895 227 49.448 L 227 60 216.500 60 L 206 60 206 49.500 L 206 39 201.167 39 C 198.508 39, 196.033 39.300, 195.667 39.667 M 258.994 39.883 C 246.077 44.078, 238.365 56.806, 241.012 69.558 C 245.184 89.653, 268.565 97.325, 283.770 83.589 C 296.959 71.673, 293.574 49.286, 277.403 41.492 C 273.180 39.457, 263.035 38.570, 258.994 39.883 M 294.750 39.564 C 294.337 39.987, 294 51.508, 294 65.167 L 294 90 300 90 L 306 90 306 80 L 306 70 310.750 69.976 C 318.707 69.936, 323.220 68.411, 326.750 64.568 L 330 61.029 330 75.515 L 330 90 335.500 90 L 341 90 341 78.500 C 341 71.942, 341.406 67, 341.946 67 C 342.466 67, 347.078 72.151, 352.196 78.447 L 361.500 89.894 370.670 89.947 L 379.839 90 381.512 84.964 L 383.185 79.927 392.316 80.214 L 401.448 80.500 403.106 85 L 404.764 89.500 415.382 89.784 L 426 90.068 426 79.964 C 426 70.212, 426.074 69.872, 428.137 70.180 C 429.600 70.399, 432.201 73.560, 436.387 80.205 L 442.500 89.911 448.800 89.955 C 453.677 89.990, 454.919 89.711, 454.300 88.720 C 453.860 88.015, 450.738 83.382, 447.362 78.424 L 441.223 69.409 444.091 67.763 C 448.487 65.239, 450.992 60.338, 450.996 54.250 L 451 49 456 49 L 461 49 461 69.500 L 461 90 466.500 90 L 472 90 472 69.500 L 472 49 478.555 49 L 485.110 49 484.805 44.250 L 484.500 39.500 466.500 39.500 L 448.500 39.500 448.174 42.353 L 447.847 45.205 445.477 42.978 C 442.455 40.140, 436.974 39.098, 424.769 39.044 L 415.038 39 414.769 61.250 L 414.500 83.500 406.500 61.500 L 398.500 39.500 393.107 39.193 C 390.087 39.021, 387.229 39.371, 386.612 39.988 C 386.005 40.595, 382.114 50.514, 377.966 62.031 L 370.423 82.971 362.078 73.350 C 357.488 68.059, 353.680 63.139, 353.616 62.417 C 353.552 61.694, 357.887 56.389, 363.250 50.627 C 368.613 44.864, 373 39.891, 373 39.575 C 373 39.259, 370.113 39, 366.585 39 L 360.171 39 351.945 48 C 347.421 52.950, 343.108 57, 342.360 57 C 341.314 57, 341 54.913, 341 47.948 L 341 38.895 335.750 39.198 L 330.500 39.500 330.190 43.808 L 329.879 48.116 327.851 45.538 C 324.125 40.800, 320.452 39.658, 307.500 39.210 C 300.900 38.982, 295.163 39.141, 294.750 39.564 M 54 46.878 C 54 47.910, 53.325 49.315, 52.500 50 C 50.183 51.923, 50.620 56.705, 53.272 58.443 C 56.234 60.383, 59.463 59.474, 60.913 56.292 C 61.864 54.204, 61.753 53.289, 60.285 51.127 L 58.500 48.500 58.182 51.810 C 57.947 54.255, 57.433 55.037, 56.216 54.803 C 54.910 54.552, 54.628 53.502, 54.859 49.743 C 55.020 47.134, 54.892 45, 54.576 45 C 54.259 45, 54 45.845, 54 46.878 M 112.856 50.679 C 109.482 58.520, 118.044 63.392, 122.048 55.910 C 122.907 54.305, 122.757 53.289, 121.353 51.183 L 119.564 48.500 119.022 51.500 C 118.225 55.911, 115.615 55.378, 115 50.679 L 114.500 46.858 112.856 50.679 M 306 54.500 L 306 60 311.066 60 C 317.680 60, 320 58.707, 320 55.022 C 320 51.102, 316.781 49, 310.777 49 L 306 49 306 54.500 M 426 54.876 L 426 61 431.878 61 C 438.364 61, 440.250 59.740, 440.250 55.408 C 440.250 51.507, 437.751 49.727, 431.551 49.213 L 426 48.752 426 54.876 M 259.034 51.752 C 254.393 54.093, 251.615 59.119, 251.615 65.176 C 251.615 73.558, 257.798 79.532, 266.390 79.451 C 272.443 79.394, 277.066 76.707, 279.625 71.758 C 281.956 67.251, 281.070 58.773, 277.917 55.397 C 272.728 49.842, 265.561 48.459, 259.034 51.752 M 389.181 60.939 C 387.444 66.118, 386.190 70.524, 386.395 70.729 C 386.600 70.934, 389.448 70.966, 392.722 70.801 L 398.677 70.500 395.508 61.011 L 392.339 51.522 389.181 60.939 M 194.994 110.934 C 182.255 114.809, 174.365 127.807, 177.012 140.558 C 181.374 161.569, 207.150 168.752, 221.436 152.939 C 223.396 150.769, 225 148.635, 225 148.196 C 225 147.758, 222.941 146.398, 220.424 145.175 L 215.847 142.952 213.171 145.817 C 207.521 151.865, 198.700 152.310, 192.493 146.859 C 184.619 139.946, 186.357 126.256, 195.599 122.394 C 202.179 119.645, 207.811 120.737, 213.258 125.817 L 216.017 128.390 220.508 126.208 C 222.979 125.008, 225 123.606, 225 123.092 C 225 120.879, 215.764 113.108, 211.345 111.602 C 206.431 109.927, 199.265 109.635, 194.994 110.934 M 241.679 111.543 C 231.641 115.225, 224.993 124.759, 225.010 135.446 C 225.038 153.042, 241.042 165.300, 257.713 160.496 C 262.301 159.173, 264.573 157.726, 268.676 153.511 C 274.420 147.612, 275.986 143.622, 275.994 134.864 C 276.011 117.782, 258.013 105.550, 241.679 111.543 M 279 135.500 L 279 161 284.500 161 L 290 161 290.026 146.250 L 290.053 131.500 296.764 146.296 L 303.476 161.092 306.768 160.796 C 309.962 160.509, 310.250 160.088, 316.384 146.730 C 319.861 139.156, 322.998 132.669, 323.353 132.313 C 323.709 131.958, 324 138.267, 324 146.333 L 324 161 329.517 161 L 335.034 161 334.767 135.750 L 334.500 110.500 328.625 110.500 L 322.750 110.500 315.016 127.276 C 310.762 136.503, 307.091 144.242, 306.859 144.474 C 306.627 144.707, 303.349 138.057, 299.575 129.698 C 290.174 108.876, 291.035 110, 284.477 110 L 279 110 279 135.500 M 244.966 121.820 C 239.121 124.411, 236.013 129.330, 236.010 136 C 236.007 141.130, 238.535 145.994, 242.581 148.645 C 246.507 151.217, 255.063 151.084, 258.674 148.395 C 270.796 139.368, 265.139 120.800, 250.349 121.070 C 248.232 121.109, 245.810 121.446, 244.966 121.820 M 165.214 150.318 C 160.818 152.279, 161.118 158.822, 165.699 160.909 C 170.889 163.273, 176.306 156.206, 172.516 152.017 C 170.355 149.630, 167.990 149.079, 165.214 150.318"
        stroke="none"
        fill="#fc3636"
        fill-rule="evenodd"
      />
      <path
        d="M 0 101.002 L 0 202.004 249.250 201.752 L 498.500 201.500 498.755 100.750 L 499.010 0 249.505 0 L 0 0 0 101.002 M 0.481 101.500 C 0.481 157.050, 0.602 179.922, 0.750 152.326 C 0.898 124.731, 0.898 79.281, 0.750 51.326 C 0.602 23.372, 0.481 45.950, 0.481 101.500 M 75.310 18.946 C 70.370 21.189, 62.452 28.226, 60.398 32.198 L 58.949 35 40.536 35 L 22.123 35 21.608 39.250 C 21.325 41.587, 20.390 65.325, 19.531 92 C 18.671 118.675, 17.693 144.866, 17.358 150.202 L 16.749 159.903 19.798 162.952 L 22.846 166 86.735 166 C 149.531 166, 150.660 165.965, 152.799 163.972 C 153.996 162.857, 155.222 160.945, 155.524 159.722 C 155.826 158.500, 155.156 133.081, 154.036 103.235 C 152.916 73.389, 152 45.826, 152 41.985 L 152 35 133.893 35 C 117.739 35, 115.852 35.172, 116.397 36.593 C 118.021 40.825, 117.840 42.914, 116.197 38.908 C 112.099 28.918, 105.776 22.287, 96.782 18.546 C 91.524 16.360, 80.557 16.564, 75.310 18.946 M 79.332 21.812 C 76.490 22.816, 72.505 24.903, 70.477 26.450 C 66.882 29.192, 60.965 37.337, 61.035 39.446 C 61.055 40.026, 61.693 39.375, 62.453 38 L 63.836 35.500 87.168 35 L 110.500 34.500 106.169 29.800 C 98.456 21.430, 88.665 18.516, 79.332 21.812 M 168.017 40.851 C 162.610 43.751, 160.500 47.301, 160.500 53.500 C 160.500 60.928, 162.790 63.666, 172.629 68 C 182.677 72.427, 183 72.656, 183 75.359 C 183 78.612, 181.123 80, 176.723 80 C 173.740 80, 172.147 79.301, 169.815 76.969 L 166.783 73.937 162.382 76.516 C 157.294 79.498, 157.465 80.765, 163.644 85.858 C 172.318 93.008, 186.864 91.811, 191.984 83.526 C 194.644 79.222, 194.670 71.611, 192.040 67.299 C 189.936 63.847, 187.283 62.200, 178.577 58.943 C 172.356 56.615, 170.314 54.150, 172 51 C 173.400 48.383, 178.296 48.362, 181.941 50.958 L 184.690 52.915 188.001 49.499 C 190.931 46.476, 191.151 45.886, 189.906 44.382 C 185.781 39.397, 174.209 37.530, 168.017 40.851 M 195.667 39.667 C 195.300 40.033, 195 51.508, 195 65.167 L 195 90 200.500 90 L 206 90 206 80 L 206 70 216.500 70 L 227 70 227 80 L 227 90 232.517 90 L 238.034 90 237.767 64.750 L 237.500 39.500 232.250 39.198 L 227 38.895 227 49.448 L 227 60 216.500 60 L 206 60 206 49.500 L 206 39 201.167 39 C 198.508 39, 196.033 39.300, 195.667 39.667 M 258.994 39.883 C 246.077 44.078, 238.365 56.806, 241.012 69.558 C 245.184 89.653, 268.565 97.325, 283.770 83.589 C 296.959 71.673, 293.574 49.286, 277.403 41.492 C 273.180 39.457, 263.035 38.570, 258.994 39.883 M 294.750 39.564 C 294.337 39.987, 294 51.508, 294 65.167 L 294 90 300 90 L 306 90 306 80 L 306 70 310.750 69.976 C 318.707 69.936, 323.220 68.411, 326.750 64.568 L 330 61.029 330 75.515 L 330 90 335.500 90 L 341 90 341 78.500 C 341 71.942, 341.406 67, 341.946 67 C 342.466 67, 347.078 72.151, 352.196 78.447 L 361.500 89.894 370.670 89.947 L 379.839 90 381.512 84.964 L 383.185 79.927 392.316 80.214 L 401.448 80.500 403.106 85 L 404.764 89.500 415.382 89.784 L 426 90.068 426 79.964 C 426 70.212, 426.074 69.872, 428.137 70.180 C 429.600 70.399, 432.201 73.560, 436.387 80.205 L 442.500 89.911 448.800 89.955 C 453.677 89.990, 454.919 89.711, 454.300 88.720 C 453.860 88.015, 450.738 83.382, 447.362 78.424 L 441.223 69.409 444.091 67.763 C 448.487 65.239, 450.992 60.338, 450.996 54.250 L 451 49 456 49 L 461 49 461 69.500 L 461 90 466.500 90 L 472 90 472 69.500 L 472 49 478.555 49 L 485.110 49 484.805 44.250 L 484.500 39.500 466.500 39.500 L 448.500 39.500 448.174 42.353 L 447.847 45.205 445.477 42.978 C 442.455 40.140, 436.974 39.098, 424.769 39.044 L 415.038 39 414.769 61.250 L 414.500 83.500 406.500 61.500 L 398.500 39.500 393.107 39.193 C 390.087 39.021, 387.229 39.371, 386.612 39.988 C 386.005 40.595, 382.114 50.514, 377.966 62.031 L 370.423 82.971 362.078 73.350 C 357.488 68.059, 353.680 63.139, 353.616 62.417 C 353.552 61.694, 357.887 56.389, 363.250 50.627 C 368.613 44.864, 373 39.891, 373 39.575 C 373 39.259, 370.113 39, 366.585 39 L 360.171 39 351.945 48 C 347.421 52.950, 343.108 57, 342.360 57 C 341.314 57, 341 54.913, 341 47.948 L 341 38.895 335.750 39.198 L 330.500 39.500 330.190 43.808 L 329.879 48.116 327.851 45.538 C 324.125 40.800, 320.452 39.658, 307.500 39.210 C 300.900 38.982, 295.163 39.141, 294.750 39.564 M 54 46.878 C 54 47.910, 53.325 49.315, 52.500 50 C 50.183 51.923, 50.620 56.705, 53.272 58.443 C 56.234 60.383, 59.463 59.474, 60.913 56.292 C 61.864 54.204, 61.753 53.289, 60.285 51.127 L 58.500 48.500 58.182 51.810 C 57.947 54.255, 57.433 55.037, 56.216 54.803 C 54.910 54.552, 54.628 53.502, 54.859 49.743 C 55.020 47.134, 54.892 45, 54.576 45 C 54.259 45, 54 45.845, 54 46.878 M 112.856 50.679 C 109.482 58.520, 118.044 63.392, 122.048 55.910 C 122.907 54.305, 122.757 53.289, 121.353 51.183 L 119.564 48.500 119.022 51.500 C 118.225 55.911, 115.615 55.378, 115 50.679 L 114.500 46.858 112.856 50.679 M 306 54.500 L 306 60 311.066 60 C 317.680 60, 320 58.707, 320 55.022 C 320 51.102, 316.781 49, 310.777 49 L 306 49 306 54.500 M 426 54.876 L 426 61 431.878 61 C 438.364 61, 440.250 59.740, 440.250 55.408 C 440.250 51.507, 437.751 49.727, 431.551 49.213 L 426 48.752 426 54.876 M 259.034 51.752 C 254.393 54.093, 251.615 59.119, 251.615 65.176 C 251.615 73.558, 257.798 79.532, 266.390 79.451 C 272.443 79.394, 277.066 76.707, 279.625 71.758 C 281.956 67.251, 281.070 58.773, 277.917 55.397 C 272.728 49.842, 265.561 48.459, 259.034 51.752 M 389.181 60.939 C 387.444 66.118, 386.190 70.524, 386.395 70.729 C 386.600 70.934, 389.448 70.966, 392.722 70.801 L 398.677 70.500 395.508 61.011 L 392.339 51.522 389.181 60.939 M 194.994 110.934 C 182.255 114.809, 174.365 127.807, 177.012 140.558 C 181.374 161.569, 207.150 168.752, 221.436 152.939 C 223.396 150.769, 225 148.635, 225 148.196 C 225 147.758, 222.941 146.398, 220.424 145.175 L 215.847 142.952 213.171 145.817 C 207.521 151.865, 198.700 152.310, 192.493 146.859 C 184.619 139.946, 186.357 126.256, 195.599 122.394 C 202.179 119.645, 207.811 120.737, 213.258 125.817 L 216.017 128.390 220.508 126.208 C 222.979 125.008, 225 123.606, 225 123.092 C 225 120.879, 215.764 113.108, 211.345 111.602 C 206.431 109.927, 199.265 109.635, 194.994 110.934 M 241.679 111.543 C 231.641 115.225, 224.993 124.759, 225.010 135.446 C 225.038 153.042, 241.042 165.300, 257.713 160.496 C 262.301 159.173, 264.573 157.726, 268.676 153.511 C 274.420 147.612, 275.986 143.622, 275.994 134.864 C 276.011 117.782, 258.013 105.550, 241.679 111.543 M 279 135.500 L 279 161 284.500 161 L 290 161 290.026 146.250 L 290.053 131.500 296.764 146.296 L 303.476 161.092 306.768 160.796 C 309.962 160.509, 310.250 160.088, 316.384 146.730 C 319.861 139.156, 322.998 132.669, 323.353 132.313 C 323.709 131.958, 324 138.267, 324 146.333 L 324 161 329.517 161 L 335.034 161 334.767 135.750 L 334.500 110.500 328.625 110.500 L 322.750 110.500 315.016 127.276 C 310.762 136.503, 307.091 144.242, 306.859 144.474 C 306.627 144.707, 303.349 138.057, 299.575 129.698 C 290.174 108.876, 291.035 110, 284.477 110 L 279 110 279 135.500 M 244.966 121.820 C 239.121 124.411, 236.013 129.330, 236.010 136 C 236.007 141.130, 238.535 145.994, 242.581 148.645 C 246.507 151.217, 255.063 151.084, 258.674 148.395 C 270.796 139.368, 265.139 120.800, 250.349 121.070 C 248.232 121.109, 245.810 121.446, 244.966 121.820 M 165.214 150.318 C 160.818 152.279, 161.118 158.822, 165.699 160.909 C 170.889 163.273, 176.306 156.206, 172.516 152.017 C 170.355 149.630, 167.990 149.079, 165.214 150.318"
        stroke="none"
        fill="#fcfafa"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default Logo;