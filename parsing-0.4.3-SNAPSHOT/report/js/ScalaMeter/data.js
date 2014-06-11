var ScalaMeter = (function(parent) {
  var my = { name: "data" };
  my.index = [{"scope" : ["Uri-Parsing", "path-length"], "name" : "Test-0", "file" : "..\/Uri-Parsing.path-length.Test-0.dsv"}, {"scope" : ["Uri-Parsing", "domain-length"], "name" : "Test-1", "file" : "..\/Uri-Parsing.domain-length.Test-1.dsv"}, {"scope" : ["Uri-Parsing", "query-string-key-length"], "name" : "Test-2", "file" : "..\/Uri-Parsing.query-string-key-length.Test-2.dsv"}, {"scope" : ["Uri-Parsing", "query-string-value-length"], "name" : "Test-3", "file" : "..\/Uri-Parsing.query-string-value-length.Test-3.dsv"}, {"scope" : ["Uri-Parsing", "number-of-query-string-pairs"], "name" : "Test-4", "file" : "..\/Uri-Parsing.number-of-query-string-pairs.Test-4.dsv"}];
  my.tsvData = ['date	param-String Length	value	success	cilo	cihi	units	complete\n2014-06-11T16:27:42Z	1	0.17672222222222222	true	0.148	0.206	ms	"0.17 0.178 0.173 0.176 0.173 0.173 0.174 0.171 0.175 0.169 0.176 0.167 0.168 0.167 0.17 0.167 0.168 0.172 0.169 0.173 0.176 0.17 0.172 0.177 0.177 0.173 0.176 0.164 0.166 0.171 0.167 0.184 0.196 0.166 0.168 0.33"\n2014-06-11T16:27:42Z	201	0.15291666666666667	true	0.120	0.186	ms	"0.104 0.104 0.103 0.104 0.104 0.136 0.128 0.111 0.111 0.112 0.136 0.158 0.168 0.159 0.161 0.162 0.16 0.172 0.164 0.2 0.163 0.166 0.173 0.161 0.166 0.16 0.167 0.167 0.166 0.167 0.167 0.167 0.17 0.171 0.172 0.245"\n2014-06-11T16:27:42Z	401	0.10997222222222226	true	0.095	0.125	ms	"0.103 0.103 0.103 0.104 0.148 0.176 0.106 0.107 0.106 0.107 0.107 0.106 0.106 0.107 0.107 0.106 0.106 0.106 0.107 0.107 0.106 0.107 0.107 0.106 0.107 0.106 0.107 0.106 0.129 0.106 0.107 0.107 0.106 0.107 0.107 0.11"\n2014-06-11T16:27:42Z	601	0.1151388888888889	true	0.093	0.138	ms	"0.144 0.144 0.143 0.154 0.145 0.124 0.099 0.098 0.098 0.098 0.122 0.119 0.099 0.106 0.094 0.093 0.093 0.102 0.098 0.1 0.119 0.098 0.098 0.132 0.164 0.166 0.105 0.105 0.105 0.105 0.107 0.106 0.129 0.106 0.117 0.11"\n2014-06-11T16:27:42Z	801	0.10569444444444442	true	0.068	0.143	ms	"0.065 0.064 0.065 0.065 0.064 0.065 0.071 0.064 0.065 0.066 0.065 0.072 0.066 0.103 0.106 0.102 0.101 0.101 0.104 0.103 0.104 0.104 0.141 0.141 0.141 0.146 0.143 0.147 0.141 0.145 0.143 0.143 0.139 0.153 0.147 0.15"\n2014-06-11T16:27:42Z	1001	0.06966666666666668	true	0.063	0.076	ms	"0.067 0.068 0.067 0.068 0.068 0.067 0.067 0.067 0.067 0.067 0.068 0.068 0.067 0.067 0.068 0.085 0.067 0.067 0.067 0.068 0.067 0.077 0.072 0.075 0.096 0.067 0.067 0.067 0.067 0.068 0.067 0.068 0.068 0.067 0.069 0.081"\n2014-06-11T16:27:42Z	1201	0.07361111111111113	true	0.066	0.081	ms	"0.07 0.071 0.104 0.075 0.075 0.074 0.092 0.07 0.071 0.071 0.07 0.07 0.074 0.073 0.071 0.071 0.069 0.07 0.07 0.07 0.07 0.07 0.07 0.07 0.07 0.07 0.07 0.07 0.069 0.082 0.075 0.076 0.089 0.071 0.072 0.075"\n2014-06-11T16:27:42Z	1401	0.07252777777777779	true	0.072	0.074	ms	"0.073 0.072 0.072 0.072 0.073 0.073 0.073 0.072 0.072 0.072 0.073 0.072 0.072 0.072 0.073 0.072 0.072 0.072 0.072 0.072 0.073 0.072 0.072 0.072 0.072 0.072 0.073 0.073 0.073 0.073 0.073 0.072 0.072 0.073 0.073 0.077"\n2014-06-11T16:27:42Z	1601	0.07666666666666669	true	0.073	0.080	ms	"0.086 0.087 0.08 0.08 0.08 0.087 0.075 0.076 0.075 0.075 0.075 0.075 0.075 0.075 0.075 0.075 0.076 0.075 0.075 0.075 0.075 0.075 0.075 0.075 0.075 0.074 0.075 0.076 0.076 0.075 0.075 0.075 0.076 0.075 0.077 0.079"\n2014-06-11T16:27:42Z	1801	0.07872222222222221	true	0.076	0.081	ms	"0.078 0.077 0.078 0.078 0.078 0.09 0.078 0.082 0.078 0.078 0.078 0.078 0.078 0.078 0.078 0.079 0.078 0.077 0.078 0.078 0.078 0.077 0.078 0.078 0.079 0.081 0.078 0.078 0.078 0.079 0.078 0.078 0.078 0.078 0.08 0.083"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2014-06-11T16:27:42Z	1	0.055750000000000015	true	0.039	0.073	ms	"0.072 0.082 0.046 0.047 0.051 0.066 0.078 0.06 0.047 0.048 0.047 0.047 0.047 0.047 0.048 0.061 0.065 0.065 0.074 0.067 0.048 0.048 0.047 0.047 0.047 0.048 0.048 0.048 0.048 0.047 0.048 0.048 0.048 0.048 0.05 0.124"\n2014-06-11T16:27:42Z	201	0.05238888888888891	true	0.042	0.063	ms	"0.048 0.048 0.048 0.048 0.048 0.048 0.048 0.048 0.048 0.048 0.048 0.048 0.047 0.048 0.048 0.048 0.047 0.048 0.048 0.048 0.048 0.048 0.048 0.051 0.052 0.052 0.052 0.052 0.052 0.052 0.052 0.056 0.074 0.077 0.078 0.084"\n2014-06-11T16:27:42Z	401	0.06894444444444447	true	0.052	0.086	ms	"0.078 0.082 0.079 0.087 0.075 0.075 0.078 0.076 0.074 0.075 0.076 0.074 0.116 0.077 0.077 0.088 0.081 0.08 0.079 0.086 0.076 0.068 0.055 0.052 0.051 0.051 0.051 0.051 0.051 0.051 0.051 0.051 0.051 0.052 0.052 0.055"\n2014-06-11T16:27:42Z	601	0.06275000000000003	true	0.049	0.076	ms	"0.054 0.054 0.056 0.073 0.055 0.054 0.055 0.054 0.054 0.054 0.055 0.054 0.055 0.055 0.054 0.054 0.055 0.054 0.054 0.054 0.054 0.054 0.055 0.055 0.056 0.058 0.078 0.094 0.079 0.08 0.08 0.08 0.081 0.081 0.082 0.085"\n2014-06-11T16:27:42Z	801	0.06408333333333333	true	0.051	0.077	ms	"0.068 0.061 0.061 0.061 0.063 0.092 0.09 0.096 0.096 0.07 0.094 0.062 0.058 0.057 0.058 0.058 0.058 0.058 0.058 0.057 0.057 0.058 0.057 0.058 0.058 0.058 0.058 0.058 0.058 0.057 0.058 0.058 0.057 0.058 0.06 0.063"\n2014-06-11T16:27:42Z	1001	0.07633333333333335	true	0.075	0.078	ms	"0.076 0.076 0.076 0.076 0.076 0.075 0.076 0.076 0.076 0.076 0.076 0.077 0.076 0.076 0.076 0.076 0.076 0.076 0.076 0.076 0.076 0.075 0.076 0.077 0.076 0.075 0.075 0.076 0.077 0.076 0.076 0.076 0.077 0.077 0.079 0.084"\n2014-06-11T16:27:42Z	1201	0.07269444444444446	true	0.066	0.080	ms	"0.07 0.07 0.071 0.071 0.069 0.07 0.071 0.071 0.071 0.07 0.07 0.071 0.071 0.076 0.071 0.07 0.071 0.07 0.07 0.07 0.07 0.071 0.1 0.07 0.071 0.071 0.07 0.071 0.071 0.07 0.07 0.071 0.071 0.085 0.083 0.088"\n2014-06-11T16:27:42Z	1401	0.06819444444444445	true	0.067	0.070	ms	"0.067 0.068 0.067 0.068 0.068 0.068 0.067 0.068 0.068 0.067 0.068 0.067 0.068 0.068 0.067 0.068 0.068 0.068 0.067 0.068 0.067 0.068 0.068 0.068 0.067 0.068 0.068 0.068 0.068 0.068 0.073 0.069 0.069 0.069 0.07 0.074"\n2014-06-11T16:27:42Z	1601	0.07169444444444445	true	0.070	0.073	ms	"0.071 0.071 0.072 0.071 0.071 0.072 0.072 0.072 0.071 0.071 0.071 0.072 0.071 0.072 0.072 0.072 0.072 0.072 0.07 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.072 0.072 0.073 0.075 0.079"\n2014-06-11T16:27:42Z	1801	0.07816666666666666	true	0.068	0.089	ms	"0.074 0.075 0.074 0.074 0.075 0.075 0.075 0.074 0.075 0.079 0.075 0.074 0.075 0.074 0.075 0.087 0.121 0.075 0.075 0.074 0.074 0.075 0.074 0.075 0.074 0.075 0.075 0.075 0.074 0.075 0.074 0.086 0.08 0.081 0.084 0.108"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2014-06-11T16:27:42Z	1	0.05475000000000001	true	0.038	0.071	ms	"0.05 0.049 0.049 0.049 0.05 0.049 0.049 0.049 0.049 0.05 0.05 0.053 0.051 0.05 0.051 0.071 0.071 0.11 0.064 0.074 0.048 0.048 0.047 0.048 0.048 0.048 0.048 0.047 0.047 0.047 0.047 0.048 0.054 0.048 0.05 0.11"\n2014-06-11T16:27:42Z	201	0.07291666666666666	true	0.055	0.091	ms	"0.07 0.071 0.07 0.069 0.071 0.071 0.081 0.071 0.074 0.074 0.075 0.071 0.072 0.075 0.073 0.072 0.072 0.073 0.077 0.074 0.074 0.073 0.074 0.155 0.075 0.075 0.075 0.077 0.078 0.089 0.053 0.052 0.057 0.053 0.054 0.055"\n2014-06-11T16:27:42Z	401	0.058194444444444465	true	0.046	0.071	ms	"0.05 0.05 0.05 0.049 0.05 0.05 0.05 0.051 0.05 0.05 0.05 0.05 0.049 0.05 0.05 0.049 0.055 0.049 0.049 0.05 0.05 0.053 0.059 0.05 0.052 0.076 0.075 0.078 0.075 0.076 0.075 0.075 0.075 0.074 0.075 0.076"\n2014-06-11T16:27:42Z	601	0.06080555555555557	true	0.044	0.078	ms	"0.051 0.051 0.05 0.05 0.05 0.05 0.051 0.062 0.05 0.051 0.05 0.051 0.051 0.051 0.051 0.051 0.051 0.05 0.05 0.05 0.051 0.051 0.05 0.051 0.051 0.062 0.079 0.083 0.084 0.085 0.085 0.086 0.085 0.085 0.084 0.095"\n2014-06-11T16:27:42Z	801	0.054722222222222214	true	0.049	0.061	ms	"0.057 0.057 0.085 0.053 0.053 0.054 0.053 0.053 0.054 0.054 0.054 0.053 0.054 0.053 0.053 0.054 0.061 0.053 0.053 0.053 0.054 0.054 0.054 0.053 0.053 0.053 0.053 0.054 0.053 0.053 0.053 0.053 0.053 0.053 0.054 0.056"\n2014-06-11T16:27:42Z	1001	0.05694444444444448	true	0.052	0.061	ms	"0.056 0.055 0.056 0.056 0.056 0.056 0.056 0.056 0.055 0.056 0.056 0.056 0.056 0.056 0.056 0.056 0.056 0.055 0.056 0.056 0.056 0.06 0.056 0.056 0.056 0.056 0.055 0.056 0.066 0.056 0.056 0.056 0.056 0.056 0.057 0.079"\n2014-06-11T16:27:42Z	1201	0.060861111111111095	true	0.059	0.063	ms	"0.062 0.062 0.062 0.062 0.062 0.061 0.062 0.062 0.062 0.062 0.062 0.062 0.062 0.063 0.063 0.063 0.066 0.067 0.059 0.059 0.059 0.059 0.059 0.059 0.059 0.059 0.059 0.059 0.059 0.059 0.058 0.058 0.059 0.059 0.06 0.062"\n2014-06-11T16:27:42Z	1401	0.06847222222222221	true	0.059	0.078	ms	"0.065 0.065 0.065 0.065 0.065 0.065 0.065 0.065 0.064 0.064 0.065 0.065 0.065 0.072 0.065 0.065 0.065 0.065 0.065 0.065 0.065 0.064 0.065 0.065 0.064 0.066 0.067 0.098 0.097 0.093 0.086 0.065 0.065 0.065 0.066 0.069"\n2014-06-11T16:27:42Z	1601	0.06863888888888892	true	0.066	0.071	ms	"0.068 0.068 0.068 0.067 0.068 0.068 0.068 0.068 0.068 0.068 0.068 0.068 0.069 0.075 0.068 0.068 0.068 0.068 0.068 0.068 0.068 0.067 0.068 0.069 0.08 0.068 0.068 0.068 0.067 0.068 0.068 0.068 0.068 0.068 0.069 0.072"\n2014-06-11T16:27:42Z	1801	0.07102777777777779	true	0.070	0.072	ms	"0.071 0.071 0.071 0.071 0.071 0.07 0.071 0.071 0.071 0.071 0.07 0.07 0.07 0.07 0.071 0.071 0.071 0.071 0.07 0.071 0.071 0.07 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.071 0.073 0.077"\n', 'date	param-String Length	value	success	cilo	cihi	units	complete\n2014-06-11T16:27:42Z	1	0.043861111111111115	true	0.034	0.054	ms	"0.043 0.042 0.042 0.042 0.042 0.042 0.042 0.042 0.043 0.042 0.042 0.042 0.042 0.042 0.042 0.043 0.042 0.042 0.042 0.042 0.042 0.042 0.042 0.043 0.042 0.042 0.042 0.043 0.042 0.042 0.043 0.043 0.042 0.043 0.045 0.098"\n2014-06-11T16:27:42Z	201	0.04513888888888889	true	0.045	0.046	ms	"0.045 0.046 0.045 0.045 0.045 0.045 0.044 0.045 0.046 0.044 0.045 0.045 0.045 0.045 0.045 0.046 0.046 0.045 0.045 0.045 0.045 0.045 0.045 0.045 0.045 0.045 0.044 0.045 0.046 0.046 0.045 0.045 0.045 0.046 0.045 0.046"\n2014-06-11T16:27:42Z	401	0.06966666666666668	true	0.056	0.083	ms	"0.07 0.071 0.07 0.069 0.102 0.071 0.07 0.069 0.069 0.071 0.071 0.071 0.071 0.086 0.076 0.074 0.077 0.078 0.077 0.077 0.078 0.082 0.072 0.071 0.073 0.072 0.07 0.07 0.092 0.047 0.047 0.048 0.048 0.048 0.049 0.051"\n2014-06-11T16:27:42Z	601	0.050500000000000024	true	0.047	0.054	ms	"0.049 0.05 0.05 0.05 0.05 0.05 0.05 0.051 0.05 0.05 0.049 0.049 0.05 0.049 0.05 0.05 0.05 0.05 0.049 0.049 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.05 0.051 0.052 0.07"\n2014-06-11T16:27:42Z	801	0.057555555555555554	true	0.048	0.067	ms	"0.054 0.053 0.053 0.056 0.056 0.056 0.055 0.056 0.056 0.056 0.056 0.056 0.056 0.056 0.056 0.056 0.057 0.078 0.081 0.078 0.088 0.053 0.053 0.053 0.053 0.053 0.053 0.054 0.052 0.053 0.053 0.053 0.053 0.053 0.058 0.056"\n2014-06-11T16:27:42Z	1001	0.07347222222222222	true	0.057	0.090	ms	"0.069 0.068 0.069 0.069 0.068 0.069 0.069 0.069 0.068 0.069 0.069 0.069 0.07 0.072 0.07 0.069 0.07 0.071 0.092 0.108 0.13 0.091 0.089 0.093 0.065 0.059 0.06 0.06 0.075 0.081 0.082 0.084 0.057 0.056 0.056 0.06"\n2014-06-11T16:27:42Z	1201	0.06947222222222223	true	0.065	0.074	ms	"0.063 0.063 0.063 0.063 0.063 0.064 0.064 0.063 0.064 0.063 0.063 0.063 0.076 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.072 0.073 0.074 0.074 0.077"\n2014-06-11T16:27:42Z	1401	0.07013888888888892	true	0.057	0.084	ms	"0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.069 0.061 0.06 0.061 0.061 0.071 0.066 0.067 0.065 0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.067 0.067 0.07 0.097 0.1 0.103 0.115 0.071"\n2014-06-11T16:27:42Z	1601	0.06722222222222222	true	0.063	0.071	ms	"0.064 0.063 0.064 0.063 0.064 0.064 0.063 0.063 0.064 0.064 0.063 0.069 0.064 0.064 0.064 0.064 0.064 0.064 0.074 0.069 0.069 0.069 0.069 0.07 0.069 0.07 0.069 0.069 0.069 0.07 0.07 0.069 0.07 0.07 0.079 0.074"\n2014-06-11T16:27:42Z	1801	0.0667777777777778	true	0.064	0.069	ms	"0.066 0.066 0.066 0.067 0.066 0.066 0.067 0.078 0.066 0.066 0.066 0.066 0.066 0.067 0.066 0.066 0.066 0.066 0.066 0.066 0.066 0.067 0.066 0.067 0.066 0.066 0.067 0.066 0.066 0.067 0.066 0.066 0.066 0.067 0.069 0.071"\n', 'date	param-Num of Query String Pairs	value	success	cilo	cihi	units	complete\n2014-06-11T16:27:42Z	1	0.04016666666666666	true	0.030	0.050	ms	"0.038 0.038 0.038 0.038 0.039 0.039 0.039 0.039 0.039 0.038 0.038 0.039 0.038 0.038 0.039 0.039 0.039 0.038 0.038 0.038 0.038 0.039 0.038 0.038 0.038 0.038 0.039 0.039 0.039 0.039 0.039 0.039 0.039 0.04 0.041 0.094"\n2014-06-11T16:27:42Z	201	0.30977777777777776	true	0.263	0.357	ms	"0.299 0.292 0.291 0.293 0.313 0.294 0.291 0.293 0.292 0.294 0.294 0.292 0.292 0.294 0.293 0.299 0.408 0.356 0.294 0.293 0.296 0.294 0.293 0.294 0.332 0.495 0.423 0.292 0.293 0.292 0.293 0.297 0.294 0.293 0.294 0.31"\n2014-06-11T16:27:42Z	401	0.5548888888888891	true	0.527	0.582	ms	"0.541 0.545 0.552 0.566 0.548 0.625 0.554 0.63 0.542 0.543 0.541 0.562 0.545 0.547 0.541 0.543 0.568 0.543 0.542 0.541 0.544 0.541 0.541 0.544 0.541 0.545 0.595 0.54 0.543 0.545 0.633 0.574 0.545 0.543 0.541 0.542"\n2014-06-11T16:27:42Z	601	0.9608055555555557	true	0.647	1.275	ms	"0.794 0.79 1.109 1.246 0.79 0.804 1.653 1.701 1.565 1.183 0.789 0.794 0.795 0.82 1.037 0.79 0.793 0.789 0.794 0.796 0.808 0.88 0.836 0.827 0.789 0.793 0.799 0.796 0.824 0.906 0.794 0.793 0.806 0.942 1.497 1.667"\n2014-06-11T16:27:42Z	801	1.9690000000000003	true	1.314	2.624	ms	"2.324 2.351 2.377 2.389 2.429 2.39 2.309 2.321 2.328 2.41 2.313 2.318 2.386 2.307 2.388 2.484 2.419 2.339 2.344 2.41 2.648 2.356 2.47 2.476 1.267 1.04 1.044 1.073 1.289 1.04 1.045 1.058 1.495 1.047 1.153 1.047"\n2014-06-11T16:27:42Z	1001	3.1034444444444444	true	1.524	4.683	ms	"1.574 1.521 2.18 2.283 2.078 2.847 2.816 2.797 2.8 3.938 2.877 2.927 2.977 3.035 11.218 3.469 3.362 3.348 3.218 2.903 2.92 2.948 2.939 2.994 2.948 2.891 2.98 2.884 2.911 2.879 2.9 3.149 2.964 3.252 2.993 3.004"\n2014-06-11T16:27:42Z	1201	2.2726388888888884	true	1.558	2.987	ms	"1.771 1.822 1.764 1.771 1.826 1.834 1.839 1.795 1.773 1.79 1.778 1.782 1.76 1.798 1.816 1.882 1.777 1.8 3.147 3.252 3.25 3.282 3.227 3.23 3.35 3.38 3.486 2.484 1.985 1.814 1.858 2.326 3.321 1.824 1.918 2.303"\n2014-06-11T16:27:42Z	1401	2.0955833333333334	true	1.877	2.314	ms	"2.448 2.993 1.749 1.759 1.848 2.521 1.991 2.062 2.048 2.066 2.03 2.067 2.052 2.064 2.106 2.084 2.093 2.056 2.076 2.058 2.103 2.056 2.083 2.119 2.076 2.105 2.055 2.065 2.109 2.088 2.079 2.055 2.058 2.076 2.072 2.071"\n2014-06-11T16:27:42Z	1601	2.313222222222222	true	1.769	2.858	ms	"2.166 2.174 2.217 2.02 1.992 1.996 1.995 2.023 1.998 2.002 2.103 2.176 2.313 2.477 2.505 2.328 3.264 1.994 2.002 2.025 2.032 2.07 2.089 2.186 2.39 2.483 2.563 3.255 2.292 2.095 1.996 2.013 2.463 2.01 3.067 4.502"\n2014-06-11T16:27:42Z	1801	2.498388888888889	true	1.995	3.002	ms	"2.231 2.239 2.246 2.229 2.239 2.264 2.315 2.234 2.228 2.253 2.26 2.229 2.251 2.227 2.229 2.238 2.235 2.346 2.441 2.697 2.767 3.195 2.232 2.278 2.253 2.248 2.318 3.316 4.348 3.638 2.452 2.495 2.583 2.834 2.845 2.509"\n'];
  parent[my.name] = my;
  return parent;
})(ScalaMeter || {});
