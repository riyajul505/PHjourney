#include <bits/stdc++.h>
using namespace std;

int main() {

   

    int n;
    cin >> n;

    long long arr[100000];

    // Taking input 
    for(int i=0; i < n ; i++){

        cin >> arr[i];

    }

    sort(arr, arr+n);

    // printing in ascending order
    for(int i=0; i < n ; i++){

        cout << arr[i] << " ";

    }

    cout << endl;

    sort(arr, arr+n, greater<long long>());

    // printing in descending order
    for(int i=0; i < n ; i++){

        cout << arr[i] << " ";

    }

   return 0; 
}