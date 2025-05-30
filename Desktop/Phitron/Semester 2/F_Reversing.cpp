#include <bits/stdc++.h>
using namespace std;

int main() {

   
    int arr[1000];

    int num;

    cin >> num;

    // array input
    for(int i=0; i<num; i++){

        cin >> arr[i];

    }

    int start = 0;
    int end = num - 1;

    // reverse the array
    while (start < end)
    {
        swap(arr[start] , arr[end]);
        
        start++; end--;
    }

    // output
    for(int i=0; i<num; i++){

        cout << arr[i] << " ";

    }
    

   return 0; 
}