#include <bits/stdc++.h>
using namespace std;

int main() {

   

    int arr[1000];

    int max_value = 0;

    int num;

    cin >> num;

    // array input and max finding
    for(int i=0; i<num; i++){

        cin >> arr[i];
        max_value = max(arr[i], max_value);
    }

    cout << max_value;

   return 0; 
}