#include <bits/stdc++.h>
using namespace std;

int main() {

   

    int test_case;
    cin >> test_case;

    for(int i=0; i<test_case; i++){
        
        int arraySize, find;
        cin >> arraySize >> find;


        // array input
        int arr[100];
        for(int j=0; j<arraySize; j++){
            cin >> arr[j];
        }

        // sorting the array in assending order
        sort(arr, arr+arraySize); 

        bool found = false;

        // three pointer 1-> arr[j] 2&3 is arr[k] and arr[m];
        for(int j=0; j<arraySize-1; j++){
            int k = j+1;
            int m = arraySize-1;
            while(k<m){
                if(arr[j]+arr[k]+arr[m] == find){
                    cout << "YES" << endl;
                    // cout << j << k << m << endl;
                    found = true;
                    break;
                    
                }
                else if(arr[j]+arr[k]+arr[m] > find){
                    m--;
                }
                else if(arr[j]+arr[k]+arr[m] < find){
                    k++;
                }
            }
            if(found == true){
                break;
            }
        }

        // if not found the value
        if(found ==  false){
            cout << "NO" << endl;
        }
        
    }


   return 0; 
}