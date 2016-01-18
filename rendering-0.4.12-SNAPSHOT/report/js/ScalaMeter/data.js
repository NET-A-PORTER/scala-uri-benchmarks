var ScalaMeter = (function(parent) {
  var my = { name: "data" };
  my.index = [{"scope" : ["Uri-Rendering", "path-length"], "name" : "Test-0", "file" : "..\/Uri-Rendering.path-length.Test-0.dsv"}, {"scope" : ["Uri-Rendering", "domain-length"], "name" : "Test-1", "file" : "..\/Uri-Rendering.domain-length.Test-1.dsv"}, {"scope" : ["Uri-Rendering", "query-string-key-length"], "name" : "Test-2", "file" : "..\/Uri-Rendering.query-string-key-length.Test-2.dsv"}, {"scope" : ["Uri-Rendering", "query-string-value-length"], "name" : "Test-3", "file" : "..\/Uri-Rendering.query-string-value-length.Test-3.dsv"}, {"scope" : ["Uri-Rendering", "number-of-query-string-pairs"], "name" : "Test-4", "file" : "..\/Uri-Rendering.number-of-query-string-pairs.Test-4.dsv"}];
  my.tsvData = ['date	param-String Length	value	success	cilo	cihi	units	complete\n2016-01-18T20:31:33Z	1	0.021861111111111123	true	0.009	0.035	ms	"0.013 0.014 0.017 0.023 0.014 0.017 0.017 0.02 0.029 0.033 0.048 0.067 0.016 0.026 0.029 0.042 0.014 0.015 0.016 0.016 0.018 0.024 0.029 0.035 0.015 0.015 0.025 0.032 0.01 0.011 0.016 0.022 0.01 0.01 0.012 0.017"\n2016-01-18T20:31:33Z	2001	0.01850000000000001	true	0.014	0.023	ms	"0.018 0.02 0.022 0.026 0.018 0.02 0.023 0.026 0.017 0.017 0.019 0.022 0.012 0.012 0.013 0.017 0.017 0.018 0.021 0.026 0.015 0.016 0.018 0.018 0.014 0.019 0.02 0.025 0.014 0.014 0.015 0.015 0.019 0.019 0.02 0.021"\n2016-01-18T20:31:33Z	4001	0.015416666666666674	true	0.010	0.021	ms	"0.011 0.011 0.012 0.014 0.013 0.015 0.025 0.03 0.017 0.017 0.017 0.02 0.011 0.011 0.011 0.017 0.012 0.016 0.018 0.019 0.011 0.011 0.012 0.014 0.019 0.023 0.025 0.029 0.011 0.011 0.011 0.013 0.01 0.011 0.011 0.016"\n2016-01-18T20:31:33Z	6001	0.01841666666666668	true	0.011	0.026	ms	"0.011 0.011 0.011 0.018 0.012 0.012 0.012 0.017 0.013 0.015 0.021 0.033 0.016 0.016 0.02 0.023 0.013 0.013 0.018 0.022 0.011 0.012 0.012 0.019 0.021 0.027 0.028 0.031 0.015 0.016 0.025 0.034 0.015 0.016 0.025 0.029"\n2016-01-18T20:31:33Z	8001	0.023388888888888903	true	0.013	0.034	ms	"0.013 0.014 0.021 0.022 0.015 0.015 0.015 0.021 0.022 0.025 0.026 0.032 0.018 0.02 0.028 0.029 0.016 0.02 0.021 0.026 0.029 0.032 0.036 0.037 0.029 0.033 0.044 0.059 0.012 0.014 0.019 0.02 0.013 0.013 0.013 0.02"\n2016-01-18T20:31:33Z	10001	0.029916666666666678	true	0.011	0.049	ms	"0.022 0.026 0.028 0.029 0.017 0.018 0.021 0.027 0.015 0.016 0.016 0.022 0.044 0.055 0.075 0.078 0.018 0.02 0.021 0.023 0.019 0.02 0.02 0.051 0.021 0.045 0.045 0.077 0.015 0.019 0.02 0.021 0.019 0.022 0.024 0.048"\n2016-01-18T20:31:33Z	12001	0.058	true	0.026	0.090	ms	"0.024 0.052 0.094 0.147 0.055 0.059 0.073 0.075 0.06 0.07 0.072 0.079 0.019 0.02 0.03 0.037 0.034 0.037 0.053 0.057 0.057 0.07 0.081 0.098 0.027 0.03 0.038 0.042 0.02 0.021 0.034 0.044 0.079 0.087 0.102 0.111"\n2016-01-18T20:31:33Z	14001	0.061305555555555565	true	0.015	0.108	ms	"0.018 0.018 0.018 0.026 0.066 0.066 0.077 0.084 0.057 0.059 0.089 0.159 0.016 0.017 0.017 0.032 0.043 0.077 0.12 0.227 0.052 0.058 0.076 0.101 0.02 0.024 0.029 0.041 0.045 0.057 0.089 0.094 0.056 0.059 0.06 0.06"\n2016-01-18T20:31:33Z	16001	0.08827777777777776	true	0.010	0.166	ms	"0.063 0.068 0.076 0.083 0.066 0.067 0.068 0.068 0.199 0.205 0.302 0.358 0.077 0.082 0.09 0.095 0.075 0.099 0.11 0.132 0.061 0.064 0.078 0.104 0.033 0.034 0.035 0.037 0.02 0.02 0.022 0.03 0.057 0.063 0.065 0.072"\n2016-01-18T20:31:33Z	18001	0.09780555555555555	true	0.054	0.142	ms	"0.077 0.094 0.123 0.124 0.062 0.063 0.071 0.077 0.072 0.082 0.11 0.113 0.107 0.159 0.168 0.211 0.085 0.085 0.089 0.092 0.101 0.108 0.11 0.112 0.03 0.032 0.045 0.064 0.117 0.145 0.161 0.172 0.064 0.064 0.065 0.067"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2016-01-18T20:31:33Z	1	0.03225000000000001	true	0.016	0.049	ms	"0.023 0.033 0.039 0.048 0.024 0.042 0.065 0.076 0.015 0.017 0.02 0.027 0.019 0.027 0.029 0.035 0.019 0.046 0.048 0.053 0.012 0.016 0.027 0.051 0.019 0.032 0.043 0.043 0.02 0.03 0.042 0.043 0.014 0.017 0.021 0.026"\n2016-01-18T20:31:33Z	2001	0.023138888888888903	true	0.018	0.029	ms	"0.019 0.02 0.021 0.021 0.022 0.024 0.031 0.033 0.019 0.022 0.029 0.031 0.02 0.021 0.026 0.033 0.019 0.019 0.024 0.033 0.016 0.016 0.017 0.02 0.023 0.024 0.025 0.027 0.019 0.02 0.028 0.032 0.017 0.019 0.02 0.023"\n2016-01-18T20:31:33Z	4001	0.023444444444444455	true	0.017	0.030	ms	"0.017 0.022 0.025 0.029 0.027 0.029 0.031 0.036 0.018 0.018 0.019 0.023 0.019 0.02 0.021 0.023 0.02 0.022 0.033 0.039 0.016 0.016 0.02 0.02 0.017 0.02 0.024 0.034 0.023 0.023 0.024 0.025 0.015 0.016 0.027 0.033"\n2016-01-18T20:31:33Z	6001	0.02522222222222223	true	0.007	0.044	ms	"0.034 0.036 0.037 0.042 0.016 0.016 0.016 0.019 0.014 0.015 0.016 0.021 0.015 0.016 0.017 0.021 0.019 0.02 0.02 0.022 0.015 0.016 0.019 0.025 0.015 0.016 0.017 0.019 0.016 0.017 0.017 0.018 0.043 0.06 0.072 0.091"\n2016-01-18T20:31:33Z	8001	0.024972222222222236	true	0.013	0.037	ms	"0.016 0.016 0.017 0.025 0.016 0.022 0.023 0.037 0.017 0.019 0.022 0.026 0.022 0.022 0.025 0.025 0.021 0.029 0.062 0.067 0.027 0.029 0.032 0.033 0.018 0.018 0.022 0.028 0.016 0.022 0.023 0.028 0.017 0.017 0.017 0.023"\n2016-01-18T20:31:33Z	10001	0.04041666666666668	true	0.011	0.070	ms	"0.026 0.037 0.039 0.041 0.077 0.091 0.113 0.121 0.02 0.022 0.022 0.026 0.022 0.022 0.022 0.04 0.029 0.03 0.042 0.053 0.018 0.021 0.021 0.029 0.022 0.023 0.03 0.036 0.045 0.058 0.08 0.081 0.02 0.021 0.021 0.034"\n2016-01-18T20:31:33Z	12001	0.06441666666666666	true	-0.012	0.141	ms	"0.018 0.019 0.022 0.029 0.026 0.03 0.032 0.041 0.047 0.049 0.05 0.056 0.072 0.088 0.089 0.108 0.019 0.02 0.024 0.034 0.05 0.05 0.052 0.066 0.024 0.027 0.033 0.041 0.032 0.04 0.041 0.053 0.127 0.217 0.219 0.374"\n2016-01-18T20:31:33Z	14001	0.05641666666666667	true	0.027	0.086	ms	"0.051 0.053 0.065 0.07 0.02 0.02 0.021 0.033 0.05 0.051 0.064 0.085 0.051 0.054 0.064 0.072 0.073 0.074 0.078 0.083 0.071 0.073 0.074 0.083 0.03 0.03 0.031 0.032 0.026 0.026 0.028 0.031 0.057 0.059 0.092 0.156"\n2016-01-18T20:31:33Z	16001	0.10602777777777779	true	0.042	0.171	ms	"0.075 0.083 0.096 0.096 0.231 0.239 0.239 0.28 0.076 0.08 0.106 0.107 0.06 0.062 0.063 0.07 0.078 0.094 0.094 0.12 0.054 0.056 0.065 0.075 0.04 0.059 0.083 0.087 0.098 0.101 0.167 0.216 0.081 0.09 0.097 0.099"\n2016-01-18T20:31:33Z	18001	0.11938888888888889	true	0.054	0.184	ms	"0.081 0.081 0.093 0.096 0.094 0.106 0.107 0.117 0.091 0.094 0.099 0.103 0.068 0.072 0.081 0.083 0.079 0.097 0.108 0.112 0.079 0.082 0.083 0.083 0.208 0.218 0.219 0.261 0.14 0.163 0.242 0.306 0.074 0.084 0.092 0.102"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2016-01-18T20:31:33Z	1	0.09266666666666665	true	0.058	0.127	ms	"0.116 0.117 0.176 0.218 0.074 0.085 0.085 0.09 0.081 0.081 0.084 0.097 0.055 0.057 0.065 0.068 0.078 0.087 0.094 0.118 0.055 0.057 0.082 0.113 0.07 0.09 0.101 0.113 0.077 0.083 0.085 0.092 0.073 0.086 0.116 0.117"\n2016-01-18T20:31:33Z	2001	0.49841666666666673	true	0.343	0.654	ms	"0.575 0.714 0.738 0.838 0.374 0.473 0.536 0.607 0.365 0.501 0.558 0.598 0.297 0.299 0.342 0.35 0.442 0.475 0.527 0.542 0.582 0.609 0.647 0.701 0.488 0.499 0.597 0.628 0.238 0.493 0.51 0.528 0.297 0.308 0.318 0.349"\n2016-01-18T20:31:33Z	4001	0.7826944444444445	true	0.454	1.112	ms	"0.962 0.987 1.122 1.218 0.645 0.912 1.09 1.111 0.474 0.518 0.81 1.184 0.392 0.493 0.674 0.746 0.403 0.554 0.676 0.698 0.949 0.964 1.371 1.675 0.562 0.568 0.639 0.667 0.689 0.712 0.871 0.961 0.348 0.363 0.476 0.693"\n2016-01-18T20:31:33Z	6001	0.8553611111111111	true	0.431	1.280	ms	"0.647 0.709 0.72 0.74 0.463 0.493 0.506 0.517 0.88 0.941 1.182 1.256 0.792 0.846 0.858 0.874 0.495 0.547 0.568 0.574 0.705 0.877 0.957 0.964 0.564 0.663 0.743 0.922 0.986 1.061 1.191 1.336 0.468 0.508 1.911 2.329"\n2016-01-18T20:31:33Z	8001	1.2089722222222217	true	0.057	2.361	ms	"0.556 0.629 0.713 0.715 0.623 0.632 0.643 0.647 1.102 1.573 1.613 1.78 0.793 1.251 4.51 6.076 0.894 1.014 1.143 1.148 0.655 0.704 0.947 1.251 1.091 1.355 1.358 1.364 0.676 0.724 0.739 0.758 0.931 0.954 0.964 0.997"\n2016-01-18T20:31:33Z	10001	0.9707222222222222	true	0.745	1.197	ms	"1.196 1.209 1.246 1.36 0.733 0.772 0.78 0.819 0.725 0.761 0.827 0.828 0.828 0.832 1.087 1.19 1.092 1.131 1.199 1.251 0.702 0.705 0.707 0.733 0.848 0.946 1.035 1.16 1.119 1.17 1.186 1.308 0.76 0.77 0.945 0.986"\n2016-01-18T20:31:33Z	12001	1.3050555555555554	true	0.740	1.870	ms	"0.809 0.82 0.853 0.895 1.148 1.677 2.393 3.327 0.888 1.007 1.176 1.476 1.423 1.59 2.021 2.255 0.86 0.967 1.238 1.364 1.314 1.359 1.385 1.505 0.948 0.989 1.423 1.653 0.988 1.084 1.216 1.266 0.869 0.904 0.937 0.955"\n2016-01-18T20:31:33Z	14001	1.4333055555555552	true	0.913	1.953	ms	"1.731 1.763 2.159 2.25 1.574 2.098 2.163 2.655 0.952 1.02 1.05 1.135 1.001 1.023 1.039 1.492 1.158 1.83 2.066 2.316 1.367 1.515 1.544 1.57 0.977 1.018 1.056 1.063 1.037 1.06 1.167 1.244 0.972 0.986 1.019 1.529"\n2016-01-18T20:31:33Z	16001	2.352888888888889	true	0.726	3.979	ms	"1.1 1.153 1.391 1.746 1.813 2.001 2.249 2.69 1.341 1.433 1.535 1.745 2.228 2.557 3.132 3.343 1.718 1.743 2.003 2.036 1.638 2.071 2.513 4.01 1.314 1.929 2.252 2.663 1.224 1.556 1.823 1.895 2.495 3.366 5.478 9.52"\n2016-01-18T20:31:33Z	18001	2.416583333333333	true	1.863	2.970	ms	"2.67 2.684 3.329 3.41 1.855 2.242 2.538 2.543 1.963 2.422 2.622 2.811 1.847 1.891 1.919 1.925 1.747 2.206 2.384 2.439 1.806 2.155 2.215 2.374 2.05 2.465 2.541 3.14 2.914 3.085 3.141 3.739 1.878 1.947 1.994 2.106"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2016-01-18T20:31:33Z	1	0.08702777777777776	true	0.059	0.115	ms	"0.06 0.084 0.088 0.104 0.06 0.081 0.097 0.111 0.076 0.1 0.112 0.12 0.062 0.065 0.102 0.116 0.052 0.053 0.059 0.069 0.073 0.085 0.12 0.13 0.051 0.062 0.069 0.1 0.054 0.065 0.117 0.156 0.078 0.092 0.093 0.117"\n2016-01-18T20:31:33Z	2001	0.7371944444444446	true	0.185	1.289	ms	"0.445 0.738 2.41 2.864 0.591 0.713 0.718 0.718 0.466 0.632 0.661 0.757 0.335 0.503 0.551 0.605 0.3 0.302 0.348 0.348 0.545 0.582 0.612 0.641 0.414 0.539 0.572 0.617 0.752 0.753 1.163 1.237 0.737 0.757 0.798 0.815"\n2016-01-18T20:31:33Z	4001	0.6926944444444443	true	0.445	0.940	ms	"0.587 0.642 0.654 0.68 0.571 0.698 0.829 1.024 0.604 0.645 0.646 0.661 0.558 0.632 0.767 0.808 0.481 0.636 0.76 0.787 0.358 0.447 0.668 0.867 0.328 0.374 0.384 0.435 0.753 1.15 1.221 1.378 0.648 0.728 0.753 0.775"\n2016-01-18T20:31:33Z	6001	0.827888888888889	true	0.554	1.102	ms	"0.718 0.819 0.992 1.245 0.476 0.509 0.521 0.536 0.488 0.509 0.526 0.541 0.623 0.708 1.041 1.048 0.983 1.008 1.015 1.125 0.546 0.666 0.875 0.92 0.545 0.612 0.678 0.885 1.09 1.099 1.103 1.116 0.855 0.891 1.241 1.251"\n2016-01-18T20:31:33Z	8001	0.7833611111111111	true	0.503	1.064	ms	"0.611 0.614 0.614 0.623 0.622 0.628 0.724 0.881 0.683 0.76 1.108 1.751 0.613 0.625 0.628 0.633 0.564 0.601 0.603 0.612 0.805 0.868 1.185 1.239 0.781 0.802 1.142 1.151 0.631 0.653 0.92 1.064 0.558 0.57 0.638 0.696"\n2016-01-18T20:31:33Z	10001	1.187916666666667	true	0.525	1.851	ms	"1.6 1.888 1.905 2.056 0.771 0.773 0.824 0.875 1.164 1.173 1.186 1.232 0.701 0.705 0.829 0.922 1.277 1.28 1.292 1.302 0.702 0.806 0.828 0.872 0.709 0.719 0.76 0.771 0.825 1.191 2.489 3.702 0.773 0.88 1.417 1.566"\n2016-01-18T20:31:33Z	12001	1.2338611111111109	true	0.951	1.516	ms	"1.393 1.398 1.416 1.457 1.281 1.37 1.443 1.477 0.893 0.939 1.018 1.103 1.319 1.423 1.571 1.598 0.866 0.896 0.913 1.088 0.915 0.926 1.251 1.733 0.849 0.99 1.431 1.437 0.855 0.873 1.264 1.522 1.263 1.332 1.378 1.538"\n2016-01-18T20:31:33Z	14001	1.6424444444444446	true	0.847	2.438	ms	"2.236 2.463 3.335 4.324 0.964 0.975 1.02 1.03 0.972 1.015 1.503 1.832 0.98 0.987 1.035 1.052 1.422 1.625 2.272 2.867 1.349 1.532 1.679 1.941 1.746 1.917 2.009 2.233 1.048 1.096 1.383 1.484 1.163 1.337 1.475 1.827"\n2016-01-18T20:31:33Z	16001	1.888027777777778	true	1.158	2.618	ms	"1.559 1.676 1.819 1.889 1.151 2.516 3.017 3.706 1.121 1.165 1.197 1.7 2.332 2.506 2.859 3.608 1.61 1.651 2.006 2.554 1.147 1.293 1.326 1.673 1.655 1.655 1.743 1.764 1.135 1.945 2.254 2.667 1.209 1.255 1.594 2.012"\n2016-01-18T20:31:33Z	18001	2.58	true	1.718	3.442	ms	"2.463 2.687 2.827 2.928 1.346 1.393 1.485 1.923 1.906 2.179 2.318 2.688 1.96 2.884 3.364 3.629 1.951 2.254 2.319 2.61 3.039 3.54 4.386 4.479 2.49 2.497 2.653 2.694 2.01 2.938 3.579 3.973 1.429 1.548 2.002 2.509"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2016-01-18T20:31:33Z	1	0.12025000000000002	true	0.053	0.188	ms	"0.124 0.219 0.223 0.252 0.064 0.083 0.085 0.104 0.095 0.101 0.21 0.347 0.108 0.128 0.156 0.183 0.07 0.077 0.096 0.104 0.051 0.054 0.064 0.092 0.084 0.084 0.098 0.114 0.077 0.094 0.115 0.156 0.077 0.086 0.126 0.128"\n2016-01-18T20:31:33Z	2001	0.5579166666666666	true	0.318	0.798	ms	"0.3 0.303 0.358 0.367 0.391 0.525 0.58 0.764 0.356 0.403 0.503 0.575 0.374 0.534 0.691 1.178 0.704 0.825 0.983 0.993 0.637 0.64 0.661 0.706 0.265 0.521 0.739 0.776 0.49 0.529 0.59 0.612 0.226 0.3 0.339 0.347"\n2016-01-18T20:31:33Z	4001	0.6356944444444445	true	0.434	0.838	ms	"0.58 0.603 0.608 0.631 0.566 0.608 0.618 0.644 0.524 0.539 0.592 0.686 0.576 0.599 0.604 0.612 0.411 0.446 0.594 0.884 0.691 0.752 0.815 0.887 0.766 1.03 1.038 1.098 0.316 0.329 0.373 0.401 0.434 0.627 0.646 0.757"\n2016-01-18T20:31:33Z	6001	0.8762500000000001	true	0.526	1.227	ms	"0.852 0.853 0.87 0.899 0.516 0.691 0.746 0.911 0.573 0.588 0.665 0.796 0.678 0.703 0.721 0.782 0.82 0.853 0.859 1.029 1.103 1.353 1.44 1.513 0.815 0.854 0.901 0.909 0.442 0.459 0.466 0.475 0.863 1.238 1.411 1.898"\n2016-01-18T20:31:33Z	8001	0.9305555555555556	true	0.511	1.350	ms	"0.576 0.589 0.603 0.624 1.155 1.222 1.265 1.419 0.651 0.963 1.015 1.056 0.572 0.572 0.579 0.63 1.032 1.201 1.765 2.335 0.565 0.569 0.784 0.844 0.907 1.141 1.155 1.253 0.999 1.029 1.056 1.083 0.566 0.567 0.57 0.588"\n2016-01-18T20:31:33Z	10001	0.9415833333333333	true	0.673	1.210	ms	"0.679 0.694 0.724 0.731 0.695 0.732 0.749 0.785 0.807 0.831 0.862 0.885 1.075 1.375 1.505 1.523 0.772 0.839 1.226 1.34 0.836 0.949 1.097 1.223 0.75 0.767 0.77 0.782 1.084 1.102 1.273 1.28 0.758 0.762 0.795 0.84"\n2016-01-18T20:31:33Z	12001	1.3334444444444447	true	0.851	1.815	ms	"1.406 1.438 2.201 2.257 0.894 1.345 1.614 1.7 0.857 0.906 1.398 1.567 1.464 1.546 1.778 2.006 1.015 1.355 1.861 2.57 0.826 0.887 0.887 0.905 0.881 0.959 1.068 1.089 0.884 0.907 1.386 1.487 0.985 1.22 1.22 1.235"\n2016-01-18T20:31:33Z	14001	1.5762777777777777	true	0.910	2.243	ms	"1.027 1.161 1.583 1.699 1.111 1.177 1.672 2.237 0.969 0.97 1.012 1.045 1.424 1.438 1.449 1.451 2.191 2.342 3.287 3.349 0.983 0.99 1.021 1.101 0.96 0.983 1.395 1.675 1.597 1.639 1.674 1.693 1.539 2.186 2.332 2.384"\n2016-01-18T20:31:33Z	16001	1.9099722222222217	true	1.142	2.678	ms	"1.635 1.809 2.732 3.148 1.121 1.147 1.282 1.398 1.477 1.715 1.798 2.087 1.772 3.013 3.028 3.293 1.112 1.12 1.131 1.163 2.061 2.601 2.699 2.88 1.124 1.173 1.189 1.396 1.953 2.394 2.622 3.126 1.595 1.63 1.64 1.695"\n2016-01-18T20:31:33Z	18001	2.8520555555555553	true	1.603	4.101	ms	"2.058 2.154 2.345 2.706 2.036 3.234 4.693 6.337 1.808 1.938 2.6 2.84 1.753 1.819 1.823 1.909 2.94 3.056 3.224 4.393 1.835 1.835 1.844 1.853 1.737 2.82 3.04 3.074 3.589 4.58 5.101 5.162 1.908 2.466 2.993 3.171"\n'];
  parent[my.name] = my;
  return parent;
})(ScalaMeter || {});
