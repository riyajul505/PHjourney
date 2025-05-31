#include <bits/stdc++.h>
using namespace std;

long long * sort_it(int n){

    long long *p = new long long[100000];

    // taking input
    for(int i=0; i < n; i++){
        cin >> p[i];
    }

    // sort descending
    sort(p,p+n, greater<long long>());

    return p;
};


int main() {

   

    int n;

    cin >> n;

    long long *p = sort_it(n);

    // pringint the array
    for(int i = 0; i < n; i++){
        cout << p[i] << " ";
    }

    delete[] p;
   return 0; 
}