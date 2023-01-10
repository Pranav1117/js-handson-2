1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
/*
    Level 1 : 
    Input : 5
    Output : * * * * * 

    level 2 : 
    Input : 5 
    Output : 

    * * * * * // row #1
    * * * * * // row #2
    * * * * * // row #3
    * * * * * // row #4
    * * * * * // row #5
    
    level 3 : 
    
    Input : 5
    Output :

    J : 1 => *
    J : 2 => * * 
    J : 3 => * * *
    J : 4 => * * * * 
    J : 5 => * * * * *

 // Y : All clear    
 // N : Not clear 

    level 4 : 
    Input : 5
    Output : 

    *
    * * *
    * * * * *
    * * * * * * *
    * * * * * * * * * 

    Level 5 : 
    Input : 5 
    Output : 

    _ _ _ _ *               : 4 spaces and 1 star
    _ _ _ * * *             : 3 spaces and 3 stars 
    _ _ * * * * *           : 2 spaces and 5 stars   
    _ * * * * * * *         : 1 space  and 7 stars  
    * * * * * * * * *       : 0 space  and 9 stars 

    J = 1 , K loops runs (5-j) => (5-1) : 4 times
    J = 2 , K loops runs (5-j) => (5-2) : 3 times
    J = 3 , K loops runs (5-j) => (5-3) : 2 times
    J = 4 , K loops runs (5-j) => (5-4) : 1 times
    J = 5 , K loops runs (5-j) => (5-5) : 0 times
    
    level 6 :
    Input : 5
    Output : 
                    * 
                  *   *
                *       *
              *           *
            * * * * * * * * *

    

 \n : Takes you to the next line 

 */

var N = 5 ; // input 
var pattern = "";// Empty String 

for(let j=1;j<=N;j++) // How many Rows  
{    
    for(let k=1;k<=N-j;k++) // run N times 
    {
        pattern = pattern + "  "
    }
    // J represents the row number
    // Nth odd number = 2*N - 1
    for(let i=1;i<=(2*j-1);i++) // Prints a row of N stars   
    {
        pattern = pattern + '* ';
    }
    pattern = pattern + '\n';
}


console.log(pattern);